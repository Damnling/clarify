export default function WhyNode({ data }) {
    return (
      <div className="px-4 py-2 rounded-xl bg-purple-500 text-white text-sm shadow-lg max-w-[180px] text-center">
        {data.label}
      </div>
    )
  }