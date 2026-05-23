import { Handle, Position } from '@xyflow/react'

export default function InsightNode({ data }) {
  return (
    <div className="bg-neural-surface border border-neural-pink/40 rounded-xl px-4 py-3 min-w-[180px] shadow-[0_0_20px_rgba(244,114,182,0.15)]">

      <Handle type="target" position={Position.Top} />

      <div className="text-neural-pink text-xs uppercase tracking-wider mb-1">
        Insight
      </div>

      <div className="text-sm font-semibold text-slate-100">
        {data.label}
      </div>
    </div>
  )
}