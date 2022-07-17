import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Web3ReactProvider } from '@web3-react/core'
import Web3ContextProvider from '@contexts/Web3Provider'
import { Web3Provider } from '@ethersproject/providers'

const getLibrary = (provider: any) => {
  return new Web3Provider(
    provider,
    typeof provider.chainId === 'number'
      ? provider.chainId
      : typeof provider.chainId === 'string'
      ? parseInt(provider.chainId)
      : 'any',
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ContextProvider>
        <Component {...pageProps} />
      </Web3ContextProvider>
    </Web3ReactProvider>
  )
}

export default MyApp
