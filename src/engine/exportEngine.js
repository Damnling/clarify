import { toPng } from 'html-to-image'

export async function exportMindmap() {
  const element =
    document.getElementById('graph-view')

  if (!element) return

  const dataUrl = await toPng(element)

  const link = document.createElement('a')

  link.download = 'cognimap.png'
  link.href = dataUrl
  link.click()
}