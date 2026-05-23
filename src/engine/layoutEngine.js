export function computeLayout(nodes) {
    const centerX = 700
    const centerY = 400
  
    const positioned = []
  
    const center = nodes.find(n => n.type === 'center')
  
    if (!center) return nodes
  
    positioned.push({
      ...center,
      position: {
        x: centerX,
        y: centerY,
      },
    })
  
    const concepts = nodes.filter(n => n.type === 'concept')
  
    concepts.forEach((node, index) => {
      const angle = (Math.PI * 2 * index) / concepts.length
  
      positioned.push({
        ...node,
        position: {
          x: centerX + Math.cos(angle) * 320,
          y: centerY + Math.sin(angle) * 240,
        },
      })
    })
  
    const whys = nodes.filter(n => n.type === 'why')
  
    whys.forEach(node => {
      const concept = positioned.find(p => p.id === node.parent)
  
      if (!concept) return
  
      positioned.push({
        ...node,
        position: {
          x: concept.position.x - 140,
          y: concept.position.y + 120,
        },
      })
    })
  
    const hows = nodes.filter(n => n.type === 'how')
  
    hows.forEach(node => {
      const concept = positioned.find(p => p.id === node.parent)
  
      if (!concept) return
  
      positioned.push({
        ...node,
        position: {
          x: concept.position.x + 140,
          y: concept.position.y + 120,
        },
      })
    })
  
    const details = nodes.filter(n => n.type === 'detail')
  
    details.forEach(node => {
      const parent = positioned.find(p => p.id === node.parent)
  
      if (!parent) return
  
      positioned.push({
        ...node,
        position: {
          x: parent.position.x,
          y: parent.position.y + 140,
        },
      })
    })
  
    return positioned
  }