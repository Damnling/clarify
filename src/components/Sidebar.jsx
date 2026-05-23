import { Save, FolderOpen } from 'lucide-react'

export default function Sidebar({
  input,
  setInput,
  onGenerate,
  onSave,
  savedMaps,
  onLoad,
}) {
  return (
    <div className="w-[360px] bg-[#0C1220] border-r border-[#1A2540] flex flex-col">
      <div className="p-6 border-b border-[#1A2540]">
        <h1 className="text-2xl font-bold text-white">Cognimap</h1>
        <p className="text-sm text-slate-400 mt-1">
          Externalize your thinking.
        </p>
      </div>

      <div className="p-5 flex flex-col gap-4">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          className="w-full h-[280px] bg-[#05070F] border border-[#1A2540] rounded-2xl p-4 text-sm text-white"
          placeholder="Paste ideas, notes, research, thoughts..."
        />

        <button
          onClick={onGenerate}
          className="bg-cyan-400 text-black rounded-2xl py-4 font-bold"
        >
          Generate Mindmap
        </button>

        <button
          onClick={onSave}
          className="bg-yellow-400 text-black rounded-2xl py-3 font-semibold flex items-center justify-center gap-2"
        >
          <Save className="w-4 h-4" />
          Save Map
        </button>
      </div>

      <div className="px-5 pb-5 overflow-auto">
        <p className="text-sm text-slate-400 mb-3">Saved Mindmaps</p>

        <div className="flex flex-col gap-2">
          {savedMaps.map(map => (
            <button
              key={map}
              onClick={() => onLoad(map)}
              className="bg-[#111827] border border-[#1A2540] rounded-xl px-4 py-3 text-left hover:border-cyan-400 transition"
            >
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4" />
                {map}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}