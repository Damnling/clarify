export default function CenterNode({ data }) {
    return (
      <div className="px-6 py-4 rounded-full bg-yellow-400 text-black font-bold shadow-2xl border-4 border-yellow-200 min-w-[220px] text-center">
        {data.label}
      </div>
    )
  }