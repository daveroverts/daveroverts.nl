import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from "next-seo";
import SEO from '../next-seo.config'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        storageKey="nightwind-mode"
        defaultTheme="system"
      >
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
