import { useEffect, useRef, useState } from 'react'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import './ResumePage.css'

GlobalWorkerOptions.workerSrc = pdfWorker

const RESUME_PDF_HREF = `${import.meta.env.BASE_URL}assets/About/Curtis-Archer-Resume.pdf`

export function ResumePage() {
  const pagesRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Resume — Curtis Archer'
    return () => {
      document.title = previousTitle
    }
  }, [])

  useEffect(() => {
    const container = pagesRef.current
    if (!container) return

    let cancelled = false
    const loadingTask = getDocument({
      url: RESUME_PDF_HREF,
      useWasm: false,
    })

    ;(async () => {
      const pdf = await loadingTask.promise
      if (cancelled) return

      const maxWidth = Math.min(900, container.clientWidth || 900)

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber)
        if (cancelled) return

        const unscaled = page.getViewport({ scale: 1 })
        const viewport = page.getViewport({
          scale: maxWidth / unscaled.width,
        })
        const outputScale = window.devicePixelRatio || 1

        const canvas = document.createElement('canvas')
        canvas.className = 'resume-viewer-canvas'
        const context = canvas.getContext('2d')
        if (!context) continue

        canvas.width = Math.floor(viewport.width * outputScale)
        canvas.height = Math.floor(viewport.height * outputScale)
        canvas.style.width = `${Math.floor(viewport.width)}px`
        canvas.style.height = `${Math.floor(viewport.height)}px`
        context.scale(outputScale, outputScale)

        container.appendChild(canvas)
        await page.render({ canvas, canvasContext: context, viewport }).promise
      }

      if (!cancelled) setStatus('ready')
    })().catch(() => {
      if (!cancelled) setStatus('error')
    })

    return () => {
      cancelled = true
      void loadingTask.destroy()
      container.replaceChildren()
    }
  }, [])

  return (
    <main className="resume-viewer">
      {status === 'loading' ? (
        <p className="resume-viewer-status">Loading resume…</p>
      ) : null}
      {status === 'error' ? (
        <p className="resume-viewer-status">Couldn&apos;t load the resume.</p>
      ) : null}
      <div
        ref={pagesRef}
        className="resume-viewer-pages"
        hidden={status !== 'ready'}
      />
    </main>
  )
}
