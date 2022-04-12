import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList";
import Intro from "./components/Intro/Intro";

function App() { 
  return (
    <div>
      {/* <TodoList
        items={items}
        onListClick={(event) => console.log("List Clicked")}
        onItemClick={(item, event) => console.log(item, event)}
      /> */}
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
