import Link from "next/link"

const fetchSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
      next: {
        revalidate: 60
      }
    })
    .then(res => res.json())
  }

export default async function Post({ children, params }) {
    const {id} = params
    const post = await fetchSinglePost(id)

    return (
      <article className=" p-2">
        <h1 className=" text-xl font-bold">{post.title}</h1>
        <p className=" mb-2">{post.body}</p>
        <Link href={`/posts/${id}/comments`} > Ver comentarios</Link>
        {children}
      </article>
    );
  }