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
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/order-summary" element={<OrderSummary/>}/>
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<OrdersList />} />
        <Route path="/orders/:orderId" element={<OrderDetails />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
