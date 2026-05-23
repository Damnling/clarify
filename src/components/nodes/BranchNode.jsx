import { Handle, Position } from '@xyflow/react'

export default function BranchNode({ data }) {
  return (
    <div className="bg-neural-surface border border-neural-cyan/40 rounded-xl px-4 py-3 min-w-[180px] shadow-[0_0_20px_rgba(94,234,212,0.15)]">

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />

      <div className="text-neural-cyan text-xs uppercase tracking-wider mb-1">
        Theme
      </div>

      <div className="text-sm font-semibold text-slate-100">
        {data.label}
      </div>
    </div>
  )
}