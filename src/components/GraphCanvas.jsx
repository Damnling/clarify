import {
    ReactFlow,
    Background,
    Controls,
    MiniMap,
  } from '@xyflow/react'
  
  import '@xyflow/react/dist/style.css'
  
  import CenterNode from './nodes/CenterNode'
  import ConceptNode from './nodes/ConceptNode'
  import WhyNode from './nodes/WhyNode'
  import HowNode from './nodes/HowNode'
  import DetailNode from './nodes/DetailNode'
  
  const nodeTypes = {
    center: CenterNode,
    concept: ConceptNode,
    why: WhyNode,
    how: HowNode,
    detail: DetailNode,
  }
  
  export default function GraphCanvas({
    graph,
    onNodeClick,
  }) {
    return (
      <div
        className="w-full h-full"
        id="graph-view"
      >
        <ReactFlow
          nodes={graph.nodes}
          edges={graph.edges}
          nodeTypes={nodeTypes}
          fitView
          onNodeClick={(e, node) =>
            onNodeClick(node)
          }
        >
          <Background
            color="#1A2540"
            gap={24}
          />
  
          <Controls />
  
          <MiniMap />
        </ReactFlow>
      </div>
    )
  }