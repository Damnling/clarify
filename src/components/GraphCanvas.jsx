import { useMemo } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from '@xyflow/react'

import CenterNode from './nodes/CenterNode'
import ConceptNode from './nodes/ConceptNode'
import WhyNode from './nodes/WhyNode'
import HowNode from './nodes/HowNode'

const DetailNode = ({ data }) => {
  return (
    <div className="px-3 py-2 rounded-xl bg-slate-700 text-white text-xs shadow-lg max-w-[160px] text-center">
      {data.label}
    </div>
  )
}

const nodeTypes = {
  center: CenterNode,
  concept: ConceptNode,
  why: WhyNode,
  how: HowNode,
  detail: DetailNode,
}

export default function GraphCanvas({ graph, onNodeClick }) {
  const memoizedTypes = useMemo(() => nodeTypes, [])

  return (
    <div className="w-full h-full bg-[#05070F]">
      <ReactFlow
        nodes={graph.nodes}
        edges={graph.edges}
        nodeTypes={memoizedTypes}
        fitView
        onNodeClick={(event, node) => onNodeClick(node)}
      >
        <Background color="#1A2540" gap={24} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}