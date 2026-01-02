export const GA_ID = import.meta.env.VITE_PUBLIC_GA_ID

export const initGA = () => {
  if (typeof window === 'undefined' || !GA_ID) return

  // Add the Google Tag script to the document
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  // Initialize the dataLayer and gtag function
  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_ID, {
    page_path: window.location.pathname,
  })
}

// Add TypeScript support for window.gtag
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
