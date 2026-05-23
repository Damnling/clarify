export default function CenterNode({ data }) {
  return (
    <div className="px-8 py-5 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold shadow-xl border-2 border-blue-300 min-w-[260px] text-center node-enter hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <div className="text-lg truncate">{data.label}</div>
    </div>
  )
}
