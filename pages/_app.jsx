import '@/styles/globals.css'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={props => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  )
}
