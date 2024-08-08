// 'use client';
// const HomePage = (Page) => (
//   <div>
//     <h1>Todos</h1>
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   </div>
// );

// export async function Page() {
//   // Fetch data during build time
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const posts = await res.json();

//   // Pass the fetched data to the page via props
//   return { props: { posts } };
// }

// export default HomePage;
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export default async function Page() {
  const data = await getData();

  return <main></main>;
}
