'use client';
const HomePage = ({ users }) => (
  <div>
    <h1>Todos</h1>
    <ul>
      {users.map((users) => (
        <li key={users.id}>{users.title}</li>
      ))}
    </ul>
  </div>
);

HomePage.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const users = await res.json();
  return { users };
};

export default HomePage;
