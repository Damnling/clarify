export default function DetailNode({ data }) {
    return (
      <div className="bg-violet-500 text-white px-4 py-3 rounded-xl shadow-lg w-[220px] text-sm border border-violet-300">
        {data.label}
      </div>
    )
  }