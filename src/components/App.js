import React, { useState } from "react";
import itemData from "../data/items";
import Header from "./Header"
import ShoppingList from "./ShoppingList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [iData, setIData] = useState(itemData)

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} itemData={iData} />
      <ShoppingList items={itemData}/>
    </div>

  );
}

export default App;
