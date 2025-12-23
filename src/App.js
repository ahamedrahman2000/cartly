import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import OrderSummary from "./pages/OrderSummary";
import OrderSuccess from "./pages/OrderSuccess";
import Profile from "./pages/Profile";
import OrdersList from "./pages/OrdersList";
import OrderDetails from "./pages/OrderDetails";
import SearchPage from "./pages/SearchPage2";
import Login from "./authPages/Login";
import Register from "./authPages/Register";
import ForgetPassword from "./authPages/ForgetPassword";
import Wishlist from "./pages/Wishlist";
import Addresses from "./pages/Addresses";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";
import AccountLayout from "./pages/AccountLayout";
import Sell from "./pages/Sell";
import BuyAgain from "./pages/BuyAgain";
import TodaysDeals from "./pages/TodaysDeals";
import CustomerService from "./pages/CustomerService";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function App() { 
  const { addToCart } = useContext(CartContext);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing addToCart={addToCart}/>} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart}/>} />
        <Route path="/cart" element={<CartPage addToCart={addToCart}/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/orders" element={<OrdersList />} />
        <Route path="/orders/:orderId" element={<OrderDetails />} />
        <Route path="/search" element={<SearchPage addToCart={addToCart}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/buy-again" element={<BuyAgain />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/todays-deals" element={<TodaysDeals />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/account" element={<AccountLayout />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<OrdersList />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
