import { AppProps } from 'next/app'
import '../styles/global.css'

// 統一管理 global css
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
