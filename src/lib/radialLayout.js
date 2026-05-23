export function radialLayout(nodes) {
    const center = { x: 500, y: 300 }
    const radius = 200
  
    const branches = nodes.filter(n => n.type !== 'center')
  
    return nodes.map((n) => {
      if (n.type === 'center') {
        return { ...n, position: center }
      }
  
      const index = branches.findIndex(b => b.id === n.id)
      const angle = (index / branches.length) * Math.PI * 2
  
      return {
        ...n,
        position: {
          x: center.x + radius * Math.cos(angle),
          y: center.y + radius * Math.sin(angle)
        }
      }
    })
  }