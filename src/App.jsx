import { useState } from 'react'
import { BrainCircuit, Sparkles } from 'lucide-react'
import GraphCanvas from './components/GraphCanvas'

export default function App() {
  const [input, setInput] = useState('')
  const [trigger, setTrigger] = useState(0)
  const [loading, setLoading] = useState(false)

  const generate = () => {
    if (!input.trim()) return

    setLoading(true)

    setTimeout(() => {
      setTrigger(t => t + 1)
      setLoading(false)
    }, 500)
  }

  return (
    <div className="h-screen flex bg-[#05070F] text-slate-200 overflow-hidden">

      {/* LEFT */}
      <div className="w-[360px] bg-[#0B1220] border-r border-slate-800 flex flex-col">

        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="bg-yellow-400 p-2 rounded-xl">
            <BrainCircuit className="text-black" />
          </div>

          <div>
            <h1 className="text-xl font-bold">Cognimap</h1>
            <p className="text-xs text-slate-400">Thinking Canvas</p>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col gap-4">

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-[320px] bg-[#05070F] border border-slate-700 rounded-2xl p-4 text-sm outline-none focus:border-cyan-400"
            placeholder="Drop ideas, notes, chaos, research..."
          />

          <button
            onClick={generate}
            disabled={!input.trim() || loading}
            className="bg-cyan-400 disabled:bg-slate-700 text-black rounded-2xl py-4 font-semibold flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            {loading ? 'Building Mindmap...' : 'Generate Mindmap'}
          </button>

        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1">
        <GraphCanvas text={input} trigger={trigger} />
      </div>

    </div>
  )
}