export default function HowNode({ data }) {
    return (
      <div className="px-4 py-2 rounded-xl bg-green-400 text-black text-sm shadow-lg max-w-[180px] text-center">
        {data.label}
      </div>
    )
  }