import { Handle, Position } from '@xyflow/react'

export default function RootNode({ data }) {
  return (
    <div className="bg-yellow-400 text-black px-5 py-4 rounded-xl min-w-[180px] text-center">

      <Handle type="source" position={Position.Bottom} />

      <div className="text-xs uppercase mb-1">
        Core Concept
      </div>

      <div className="font-bold">
        {data.label}
      </div>
    </div>
  )
}