/* index component provides routing among pages
   and lifted up states to pass as props to children
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import HomePage from "./pages/HomePage";
import Cheeseburger from "./pages/Cheeseburger";
import OnionRings from "./pages/OnionRings";
import FrenchFries from "./pages/FrenchFries";
import ChickenBurger from "./pages/ChickenBurger";
import FizzyDrink from "./pages/FizzyDrink";
import Water from "./pages/Water";
import BeefBurger from "./pages/BeefBurger";
import ChickenLegs from "./pages/ChickenLegs";
import IceCream from "./pages/IceCream";
import Lemonade from "./pages/Lemonade";
import PizzaSlice from "./pages/PizzaSlice";
import Basket from "./pages/Basket";

function App() {
  // We put the useState hook here to keep track of total basket price
  // we will use a useState Hook to accumulate Items as an array in basket
  const [basketElements, setBasketElements] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);
  const [ItemName, setItemName] = useState("");
  const [ItemType, setItemType] = useState("");
  const [ItemQuantity, setItemQuantity] = useState(0);
  const [ItemPrice, setItemPrice] = useState(0);

  function setBasket(newItem) {
    setBasketElements(basketElements.concat(newItem));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              basketTotal={basketTotal}
              basketElements={basketElements}
            />
          }
        />
        <Route
          path="/Cheeseburger"
          element={
            <Cheeseburger
              basketTotal={basketTotal}
              ItemName={ItemName}
              setItemName={setItemName}
              ItemType={ItemType}
              setItemType={setItemType}
              ItemQuantity={ItemQuantity}
              setItemQuantity={setItemQuantity}
              ItemPrice={ItemPrice}
              setItemPrice={setItemPrice}
              setBasketTotal={setBasketTotal}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/Onion Rings"
          element={
            <OnionRings
              basketTotal={basketTotal}
              ItemName={ItemName}
              setItemName={setItemName}
              ItemType={ItemType}
              setItemType={setItemType}
              ItemQuantity={ItemQuantity}
              setItemQuantity={setItemQuantity}
              ItemPrice={ItemPrice}
              setItemPrice={setItemPrice}
              setBasketTotal={setBasketTotal}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/French Fries"
          element={
            <FrenchFries
              basketTotal={basketTotal}
              basketElements={basketElements}
              ItemName={ItemName}
              setItemName={setItemName}
              ItemType={ItemType}
              setItemType={setItemType}
              ItemQuantity={ItemQuantity}
              setItemQuantity={setItemQuantity}
              ItemPrice={ItemPrice}
              setItemPrice={setItemPrice}
              setBasketTotal={setBasketTotal}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/Chicken Burger"
          element={
            <ChickenBurger
              basketTotal={basketTotal}
              ItemName={ItemName}
              setItemName={setItemName}
              ItemType={ItemType}
              setItemType={setItemType}
              ItemQuantity={ItemQuantity}
              setItemQuantity={setItemQuantity}
              ItemPrice={ItemPrice}
              setItemPrice={setItemPrice}
              setBasketTotal={setBasketTotal}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/Fizzy Drink"
          element={
            <FizzyDrink
              basketTotal={basketTotal}
              ItemName={ItemName}
              setItemName={setItemName}
              ItemType={ItemType}
              setItemType={setItemType}
              ItemQuantity={ItemQuantity}
              setItemQuantity={setItemQuantity}
              ItemPrice={ItemPrice}
              setItemPrice={setItemPrice}
              setBasketTotal={setBasketTotal}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/Water"
          element={
            <Water
              basketTotal={basketTotal}
              ItemName={ItemName}
              setItemName={setItemName}
              ItemType={ItemType}
              setItemType={setItemType}
              ItemQuantity={ItemQuantity}
              setItemQuantity={setItemQuantity}
              ItemPrice={ItemPrice}
              setItemPrice={setItemPrice}
              setBasketTotal={setBasketTotal}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/Beef Burger"
          element={
            <BeefBurger
              basketTotal={basketTotal}
              ItemName={ItemName}
              setItemName={setItemName}
              ItemType={ItemType}
              setItemType={setItemType}
              ItemQuantity={ItemQuantity}
              setItemQuantity={setItemQuantity}
              ItemPrice={ItemPrice}
              setItemPrice={setItemPrice}
              setBasketTotal={setBasketTotal}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/Chicken Legs"
          element={
            <ChickenLegs
              basketTotal={basketTotal}
              ItemName={ItemName}
              setItemName={setItemName}
              ItemType={ItemType}
              setItemType={setItemType}
              ItemQuantity={ItemQuantity}
              setItemQuantity={setItemQuantity}
              ItemPrice={ItemPrice}
              setItemPrice={setItemPrice}
              setBasketTotal={setBasketTotal}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/Soft Serve Ice Cream"
          element={
            <IceCream
              basketTotal={basketTotal}
              ItemName={ItemName}
              setItemName={setItemName}
              ItemType={ItemType}
              setItemType={setItemType}
              ItemQuantity={ItemQuantity}
              setItemQuantity={setItemQuantity}
              ItemPrice={ItemPrice}
              setItemPrice={setItemPrice}
              setBasketTotal={setBasketTotal}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/Lemonade"
          element={
            <Lemonade
              basketTotal={basketTotal}
              ItemName={ItemName}
              setItemName={setItemName}
              ItemType={ItemType}
              setItemType={setItemType}
              ItemQuantity={ItemQuantity}
              setItemQuantity={setItemQuantity}
              ItemPrice={ItemPrice}
              setItemPrice={setItemPrice}
              setBasketTotal={setBasketTotal}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/Pizza Slice"
          element={
            <PizzaSlice
              basketTotal={basketTotal}
              ItemName={ItemName}
              setItemName={setItemName}
              ItemType={ItemType}
              setItemType={setItemType}
              ItemQuantity={ItemQuantity}
              setItemQuantity={setItemQuantity}
              ItemPrice={ItemPrice}
              setItemPrice={setItemPrice}
              setBasketTotal={setBasketTotal}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/Basket"
          element={
            <Basket
              basketTotal={basketTotal}
              ItemName={ItemName}
              ItemType={ItemType}
              ItemQuantity={ItemQuantity}
              ItemPrice={ItemPrice}
              basketElements={basketElements}
              setBasket={setBasket}
              setItemName={setItemName}
              setItemType={setItemType}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
