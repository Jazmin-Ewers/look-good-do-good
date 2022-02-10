import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route, Navigate } from "react-router-dom";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import ClothingDetailPage from '../ClothingDetailPage/ClothingDetailPage';

function App() {
  const [user, setUser] = useState(getUser());
  const [clothingItems, setClothingItems] = useState([]);
  const [clothingItem, setClothingItem] = useState([]);

  return (
    <main className="App">
      {
        user ?
        <>
        <NavBar setUser={setUser} user={user}/>
          <Routes>
            <Route path="/" element={<HomePage clothingItems={clothingItems} setClothingItems={setClothingItems} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/clothings/:clothingsItemParam"element={<ClothingDetailPage clothingItem={clothingItem} setClothingItem={setClothingItem}/>} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
