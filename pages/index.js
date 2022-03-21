import Link from 'next/link'

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div>
      <h1>welcome to my blog</h1>
    </div>
  )
}

// ssr
// 이 페이지에 들어올 때마다, 서버에 데이터를 요청해서 받아온다.
// -> 서버에서 만든 html파일을 그때그때 받아오게 된다.

// server에 데이터가 변동이 되었을 때, 즉각적으로 바뀐 데이터가 반영이 된다.
// export const getServerSideProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//     },
//   }
// }

// static generation이 발생한다.
// 개발모드에서는 큰 차이 없다.

// server에 데이터가 변동이 되었을 때, 즉각적으로 바뀐 데이터가 반영이 되지 않는다.
// build하는 시점의 index.html에 데이터가 들어가게되고, 그 index.html이 보여지게 된다.

// => 예전 데이터만 보여주게 되면 ?
// => revalidate를 설정하여, 20초 후에 데이터를 새롭게 받아서 보여준다.
// => page가 즉각적으로 일어나지 않아도 된다면, 미리 데이터까지 들어가있는 html을 만들어놓고, html만 보여주면 빠른 rendering 속도를 보여줄 수 있다.
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  )
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    revalidate: 20,
  }
}
