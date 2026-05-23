import nlp from 'compromise'
import { computeLayout } from './layoutEngine'

function extractConcepts(text) {
  const doc = nlp(text)

  let nouns = doc.nouns().out('array')

  nouns = [...new Set(nouns)]

  nouns = nouns
    .filter(word => word.length > 3)
    .slice(0, 6)

  if (nouns.length === 0) {
    nouns = ['Thinking', 'Ideas', 'Systems', 'Knowledge']
  }

  return nouns
}

export function generateCognitiveMap(text) {
  const concepts = extractConcepts(text)

  const nodes = []
  const edges = []

  nodes.push({
    id: 'center',
    type: 'center',
    data: {
      label: text.slice(0, 50) || 'Core Concept',
    },
  })

  concepts.forEach((concept, index) => {
    const conceptId = `concept-${index}`
    const whyId = `why-${index}`
    const howId = `how-${index}`

    nodes.push({
      id: conceptId,
      type: 'concept',
      data: {
        label: concept,
      },
    })

    nodes.push({
      id: whyId,
      type: 'why',
      parent: conceptId,
      data: {
        label: `Why ${concept} matters`,
      },
    })

    nodes.push({
      id: howId,
      type: 'how',
      parent: conceptId,
      data: {
        label: `How ${concept} is applied`,
      },
    })

    edges.push({
      id: `e-center-${conceptId}`,
      source: 'center',
      target: conceptId,
      animated: true,
    })

    edges.push({
      id: `e-${conceptId}-${whyId}`,
      source: conceptId,
      target: whyId,
    })

    edges.push({
      id: `e-${conceptId}-${howId}`,
      source: conceptId,
      target: howId,
    })
  })

  return {
    nodes: computeLayout(nodes),
    edges,
  }
}

export function expandNode(graph, nodeId) {
  const node = graph.nodes.find(n => n.id === nodeId)

  if (!node) return graph

  const newNodeId = `detail-${Date.now()}`

  const detailNode = {
    id: newNodeId,
    type: 'detail',
    parent: nodeId,
    data: {
      label: `${node.data.label} deeper exploration`,
    },
  }

  const newEdge = {
    id: `e-${nodeId}-${newNodeId}`,
    source: nodeId,
    target: newNodeId,
  }

  const updatedNodes = [...graph.nodes, detailNode]

  return {
    nodes: computeLayout(updatedNodes),
    edges: [...graph.edges, newEdge],
  }
}