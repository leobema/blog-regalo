
const fetchComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { 
      next: {
        revalidate: 60
      }
    })
    .then(res => res.json())
  }

export default async function Post({ params }) {
    const {id} = params
    const comments = await fetchComments(id)

    return (
        <ul className=" bg-slate-200 mt-2">
            {comments.map(comment => (
            <li key={comment.id} className=" p-4">
                <h2 className=" font-bold">{comment.name}</h2>
                <p>{comment.body}</p>
            </li>
                ))}
        </ul>
    );
  }