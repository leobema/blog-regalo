export default function Post({ params }) {
    const {id} = params
    return (
      <div className="flex min-h-screen flex-col items-center justify-between">
        <h1>Esto es un Post {id}</h1>
      </div>
    );
  }