import { Handle, Position } from '@xyflow/react'

export default function ActionNode({ data }) {
  return (
    <div className="bg-neural-surface border border-green-400/40 rounded-xl px-4 py-3 min-w-[180px] shadow-[0_0_20px_rgba(74,222,128,0.15)]">

      <Handle type="target" position={Position.Top} />

      <div className="text-green-400 text-xs uppercase tracking-wider mb-1">
        Action
      </div>

      <div className="text-sm font-semibold text-slate-100">
        {data.label}
      </div>
    </div>
  )
}
