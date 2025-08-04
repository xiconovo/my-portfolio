import '../styles/globals.css';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Load TagCanvas before any React hydration happens */}
      <Script
        src="https://cdn.jsdelivr.net/npm/svg-3d-tag-cloud@latest/build/svg3dtagcloud.min.js"
        strategy="beforeInteractive"
      />

      <Component {...pageProps} />
    </>
  )
}