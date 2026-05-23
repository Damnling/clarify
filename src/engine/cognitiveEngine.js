import nlp from 'compromise'
import { computeLayout } from './layoutEngine'

function extractConcepts(text) {
  const doc = nlp(text)

  let nouns = doc.nouns().out('array')

  nouns = [...new Set(nouns)]

  nouns = nouns
    .filter(word => word.length > 3)
    .slice(0, 8)

  if (nouns.length === 0) {
    nouns = ['Thinking', 'Ideas', 'Systems']
  }

  return nouns
}

function generateWhy(concept, text) {
  return `${concept} influences the overall direction and structure of the topic.`
}

function generateHow(concept, text) {
  return `${concept} can be applied through experimentation, systems, or execution.`
}

export function generateCognitiveMap(text) {
  const concepts = extractConcepts(text)

  const nodes = []
  const edges = []

  nodes.push({
    id: 'center',
    type: 'center',
    data: {
      label: text.slice(0, 60),
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
        label: generateWhy(concept, text),
      },
    })

    nodes.push({
      id: howId,
      type: 'how',
      parent: conceptId,
      data: {
        label: generateHow(concept, text),
      },
    })

    edges.push({
      id: `e-center-${conceptId}`,
      source: 'center',
      target: conceptId,
      type: 'smoothstep',
    })

    edges.push({
      id: `e-${conceptId}-${whyId}`,
      source: conceptId,
      target: whyId,
      style: {
        stroke: '#F472B6',
      },
    })

    edges.push({
      id: `e-${conceptId}-${howId}`,
      source: conceptId,
      target: howId,
      style: {
        stroke: '#5EEAD4',
      },
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

  const newNode = {
    id: `detail-${Date.now()}`,
    type: 'detail',
    parent: nodeId,
    data: {
      label: `Deeper exploration of ${node.data.label}`,
    },
  }

  return {
    nodes: computeLayout([
      ...graph.nodes,
      newNode,
    ]),
    edges: [
      ...graph.edges,
      {
        id: `e-${nodeId}-${newNode.id}`,
        source: nodeId,
        target: newNode.id,
      },
    ],
  }
}