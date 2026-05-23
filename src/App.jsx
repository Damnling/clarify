import { useEffect, useState } from 'react'

import Sidebar from './components/Sidebar'
import GraphCanvas from './components/GraphCanvas'

import {
  generateCognitiveMap,
  expandNode,
} from './engine/cognitiveEngine'

import {
  saveMindmap,
  loadMindmap,
  getSavedMindmaps,
} from './engine/storage'

export default function App() {
  const [input, setInput] = useState('')

  const [graph, setGraph] = useState({
    nodes: [],
    edges: [],
  })

  const [savedMaps, setSavedMaps] = useState([])

  useEffect(() => {
    setSavedMaps(getSavedMindmaps())
  }, [])

  function handleGenerate() {
    if (!input.trim()) return

    const generated = generateCognitiveMap(input)

    setGraph(generated)
  }

  function handleSave() {
    const name = prompt('Enter mindmap name')

    if (!name) return

    saveMindmap(name, {
      input,
      graph,
    })

    setSavedMaps(getSavedMindmaps())
  }

  function handleLoad(name) {
    const data = loadMindmap(name)

    if (!data) return

    setInput(data.input)
    setGraph(data.graph)
  }

  function handleNodeClick(node) {
    if (node.type === 'concept') {
      const expanded = expandNode(graph, node.id)

      setGraph(expanded)
    }
  }

  return (
    <div className="h-screen flex overflow-hidden bg-[#05070F] text-white">
      <Sidebar
        input={input}
        setInput={setInput}
        onGenerate={handleGenerate}
        onSave={handleSave}
        savedMaps={savedMaps}
        onLoad={handleLoad}
      />

      <div className="flex-1">
        <GraphCanvas
          graph={graph}
          onNodeClick={handleNodeClick}
        />
      </div>
    </div>
  )
}