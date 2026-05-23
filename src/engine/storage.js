export function saveMindmap(name, data) {
    localStorage.setItem(`cognimap_${name}`, JSON.stringify(data))
  }
  
  export function loadMindmap(name) {
    const data = localStorage.getItem(`cognimap_${name}`)
  
    if (!data) return null
  
    return JSON.parse(data)
  }
  
  export function getSavedMindmaps() {
    return Object.keys(localStorage)
      .filter(key => key.startsWith('cognimap_'))
      .map(key => key.replace('cognimap_', ''))
  }