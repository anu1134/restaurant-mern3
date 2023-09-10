import { useState, useEffect } from "react";

const Profile = (props) => {
  const { name, color } = props;

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  console.log("render");

  useEffect(() => {
    console.log("use Effect called");
    fetchProducts();

    const timer = setInterval(() => {
      console.log("run interval functional");
    }, 1000);

    return () => {
      console.log("functional component unmounted");
      clearInterval(timer);
    };
  }, [count, count1]);

  function fetchProducts() {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  function handleCount() {
    setCount(1);
    setCount1(2);
  }
  return (
    <>
      <h1>Profile Functional Component</h1>
      <h2>{name}</h2>
      <h2>{color}</h2>
      <h2>Count: {count}</h2>
      <h2>Count1: {count1}</h2>
      <button onClick={handleCount}>Update Count</button>
    </>
  );
};

export default Profile;
