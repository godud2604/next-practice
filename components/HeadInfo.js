import Head from 'next/head'
import React from 'react'

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  )
}

HeadInfo.defaultProps = {
  title: 'My Blog',
  keyword: 'Blog powered by Next Js',
  contents: 'Practice Next Js',
}

export default HeadInfo
