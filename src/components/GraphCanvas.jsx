import { useEffect, useState } from 'react'
import { ReactFlow, Background, Controls } from '@xyflow/react'

import { generateCognitiveMap } from '../lib/cognitiveEngine'
import { radialLayout } from '../lib/radialLayout'

const nodeTypes = {
    center: ({ data }) => <div className="px-4 py-2 bg-yellow-400 text-black rounded-full">{data.label}</div>,
  
    concept: ({ data }) => <div className="px-3 py-2 bg-cyan-500 text-black rounded-lg">{data.label}</div>,
  
    why: ({ data }) => <div className="px-2 py-2 bg-purple-500 text-white text-xs rounded">{data.label}</div>,
  
    how: ({ data }) => <div className="px-2 py-2 bg-green-500 text-black text-xs rounded">{data.label}</div>,
  }

export default function GraphCanvas({ text, trigger }) {
  const [graph, setGraph] = useState({ nodes: [], edges: [] })

  useEffect(() => {
    const result = generateCognitiveMap(text)

    const positioned = radialLayout(result.nodes)

    const nodes = positioned.map(n => ({
      id: n.id,
      type: n.type,
      position: n.position,
      data: { label: n.label }
    }))

    const edges = result.edges.map((e, i) => ({
      id: `e-${i}`,
      source: e.from,
      target: e.to
    }))

    setGraph({ nodes, edges })
  }, [text, trigger])

  return (
    <div className="w-full h-full bg-[#05070F]">
      <ReactFlow
        nodes={graph.nodes}
        edges={graph.edges}
        nodeTypes={nodeTypes}
        fitView
        panOnScroll
        zoomOnScroll={false}
      >
        <Background color="#1A2540" gap={18} />
        <Controls />
      </ReactFlow>
    </div>
  )
}