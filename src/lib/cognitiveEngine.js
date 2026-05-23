export function generateCognitiveMap(text) {
    const words = text.split(' ').filter(w => w.length > 2)
  
    const center = text || 'Core Concept'
  
    // Level 1: key ideas
    const concepts = [
      words[0] || 'Concept',
      words[1] || 'Principle',
      words[2] || 'System',
      words[3] || 'Mechanism',
    ]
  
    // Level 2: meaning (WHY layer)
    const whyLayer = concepts.map((c, i) => ({
      id: `why-${i}`,
      parent: `c-${i}`,
      type: 'why',
      label: `Why it matters: ${c}`
    }))
  
    // Level 3: application (HOW layer)
    const howLayer = concepts.map((c, i) => ({
      id: `how-${i}`,
      parent: `c-${i}`,
      type: 'how',
      label: `How it's used in real life`
    }))
  
    const conceptNodes = concepts.map((c, i) => ({
      id: `c-${i}`,
      type: 'concept',
      label: c
    }))
  
    return {
      nodes: [
        { id: 'center', type: 'center', label: center },
        ...conceptNodes,
        ...whyLayer,
        ...howLayer
      ],
      edges: [
        ...concepts.map((_, i) => ({
          from: 'center',
          to: `c-${i}`
        })),
        ...concepts.map((_, i) => ({
          from: `c-${i}`,
          to: `why-${i}`
        })),
        ...concepts.map((_, i) => ({
          from: `c-${i}`,
          to: `how-${i}`
        }))
      ]
    }
  }