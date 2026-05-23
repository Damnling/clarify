export default function DetailNode({ data }) {
  return (
    <div className="px-4 py-2 rounded-lg bg-gradient-to-br from-slate-300 to-slate-400 text-slate-900 font-medium shadow-sm border border-slate-300 min-w-[130px] text-center transform hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer node-enter text-xs">
      {data.label}
    </div>
  )
}
