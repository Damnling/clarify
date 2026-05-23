export function computeLayout(nodes) {
    const centerX = 900
    const centerY = 500
  
    const positioned = []
  
    const center = nodes.find(n => n.type === 'center')
  
    positioned.push({
      ...center,
      position: {
        x: centerX,
        y: centerY,
      },
    })
  
    const concepts = nodes.filter(n => n.type === 'concept')
  
    const radius = 250 + concepts.length * 45
  
    concepts.forEach((node, index) => {
      const angle = (Math.PI * 2 * index) / concepts.length
  
      positioned.push({
        ...node,
        position: {
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
        },
      })
    })
  
    const secondary = nodes.filter(
      n =>
        n.type === 'why' ||
        n.type === 'how'
    )
  
    secondary.forEach(node => {
      const parent = positioned.find(
        p => p.id === node.parent
      )
  
      if (!parent) return
  
      const offset =
        node.type === 'why'
          ? -180
          : 180
  
      positioned.push({
        ...node,
        position: {
          x: parent.position.x + offset,
          y: parent.position.y + 140,
        },
      })
    })
  
    const details = nodes.filter(
      n => n.type === 'detail'
    )
  
    details.forEach((node, index) => {
      const parent = positioned.find(
        p => p.id === node.parent
      )
  
      if (!parent) return
  
      positioned.push({
        ...node,
        position: {
          x: parent.position.x,
          y: parent.position.y + 220,
        },
      })
    })
  
    return positioned
  }