import { useState } from "react";
import styles from "./App.module.css";
import AddTask from "./components/AddTask/AddTask";
import List from "./components/List/List";
import Count from "./components/Count/Count";
import Posts from "./components/Posts/Posts";

function App() {
  const [count, setCount] = useState(1);
  // console.log(count, 'count');

  const arr = ['item 1', 'item 2', 'item 3', 'item 4'];
  const [a, b, ...c] = arr;
  // console.log(a, b, c, 'кортедж');

  const str = 'str';
  const number = 124;
  const name = 'Benazir';

  const handleCount = () => {
    setCount(2);
  }

  return (
    <>
    <Posts/>
      {/* <h1 className={styles.list}>TODO LIST</h1>
      <Count/>
      <button onClick={handleCount} >CLICK</button>
      <AddTask/>
      <List
        count={count}
        str={str}
        arr={arr}
        number={number}
        name={name}
      /> */}
    </>
  );
}

export default App;
