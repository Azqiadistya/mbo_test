'use client';
const HomePage = ({ posts }) => (
  <div>
    <h1>Todos</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
);

export async function getStaticProps() {
  // Fetch data during build time
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const posts = await res.json();

  // Pass the fetched data to the page via props
  return { props: { posts } };
}

export default HomePage;
