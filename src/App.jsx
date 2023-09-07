import { useState } from "react";

export const App = () => {
  const [inputValue, setInputValue] = useState("helloo");

  const onChangeText = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value)
  };

  return (
    <>
      <h1> {inputValue}</h1>
      <input type="text" onChange={onChangeText} value={inputValue} />
    </>
  );
};
