import Head from 'next/head'
import type { FC, ReactNode } from 'react'

interface LayoutProps {
  pageTitle: string
  pageDesc: string
  children?: ReactNode | ReactNode[]
}

const Layout: FC<LayoutProps> = ({ pageTitle, pageDesc, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDesc} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='max-w-prose'>{children}</div>
    </>
  )
}

export default Layout
