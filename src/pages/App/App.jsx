import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import CartPage from "../CartPage/CartPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import DonatePage from "../DonatePage/DonatePage";
import ClothingDetailPage from '../ClothingDetailPage/ClothingDetailPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import * as ordersAPI from '../../utilities/orders-api';
import {DonationLocations} from "../../DonationLocations";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [clothingItems, setClothingItems] = useState([]);
  const [clothingItem, setClothingItem] = useState([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  async function handleAddToOrder(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId);
    setCart(cart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/checkout');
  }

  return (
    <main className="App">
      { user ?
      <>
      <NavBar setUser={setUser} user={user}/>
      <Routes>
            <Route path="/" element={<HomePage clothingItems={clothingItems} setClothingItems={setClothingItems} cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} handleCheckout={handleCheckout} />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} setUser={setUser} setCart={setCart} />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/donate" element={<DonatePage DonationLocations={DonationLocations} />} />
            <Route path="/authpage" element={<AuthPage setUser={setUser} />} />
            <Route path="/clothings/:clothingsItemParam"element={<ClothingDetailPage clothingItem={clothingItem} setClothingItem={setClothingItem} handleAddToOrder={handleAddToOrder}/>} />
            <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      </>
              :
              <AuthPage setUser={setUser} />
      }
    </main>
  );
}
