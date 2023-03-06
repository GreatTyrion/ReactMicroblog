export default function App() {
  const posts = [];

  return (
    <>
      <h1>Microblog</h1>
      {posts.length === 0 ?
        <p>There are no blog posts.</p>
      :
        posts.map(post => {
          return (
            <p key={post.id}>
              <b>{post.author.username}</b> &mdash; {post.timestamp}
              <br />
              {post.text}
            </p>
          );
        })
      }
    </>
  );
}