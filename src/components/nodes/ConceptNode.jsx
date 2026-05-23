export default function ConceptNode({ data }) {
    return (
      <div className="px-5 py-3 rounded-2xl bg-cyan-400 text-black font-semibold shadow-xl min-w-[160px] text-center">
        {data.label}
      </div>
    )
  }