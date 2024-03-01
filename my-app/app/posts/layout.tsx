export default function PostsLayout ({children}) {
    return (
        <div className=" px-20 mx-5">
            <small>Home &bull; Posts</small>
            {children}
        </div>
    )
}