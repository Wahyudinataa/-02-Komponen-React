import "./App.css";
import Counter from "./Counter";
import Example from "./Example";
import Greeting from "./Greeting";
import React from "react";
import TodoList from "./Todo";


function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya!</h2>
      <p>Ini adalah area konten utama.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Aplikasi React Saya</p>
    </footer>
  );
}


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="Dinata" />
      <Counter />
      <Example />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;