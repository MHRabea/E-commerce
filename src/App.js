import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/Footer';
import MenBanner from './Components/Banners/MenBanner';
import WomenBanner from './Components/Banners/WomenBanner';
import KidsBanner from './Components/Banners/KidsBanner';


const Shop = lazy(() => import('./Pages/Shop'));
const Category = lazy(() => import('./Pages/Category'));
const Product = lazy(() => import('./Pages/Product'));
const Cart = lazy(() => import('./Pages/Cart'));
const Login = lazy(() => import('./Pages/Login'));
const SignUp = lazy(() => import('./Pages/SignUp'));

function App() {
  return (
    <div className="flex items-center justify-center flex-col">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/men" element={<Category banner={<MenBanner />} category="men" />} />
            <Route path="/women" element={<Category banner={<WomenBanner />} category="women" />} />
            <Route path="/kids" element={<Category banner={<KidsBanner />} category="kids" />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
