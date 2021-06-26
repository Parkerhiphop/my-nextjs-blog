import '../styles/global.css'
import { AppProps } from 'next/app'

// 統一管理 global css
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
