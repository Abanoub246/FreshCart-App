import "./App.scss";
import Layout from "./Components/Layout/Layout";
// import Home from "./Components/Home/Home";
// import Products from "./Components/Products/Products";
// import ProductDetails from "./Components/ProductDetails/ProductDetails";
// import Categories from "./Components/Categories/Categories";
// import Brands from "./Components/Brands/Brands";
// import WishList from "./Components/WishList/WishList";
// import Cart from "./Components/Cart/Cart";
// import Login from "./Components/Login/Login";
// import Register from "./Components/Register/Register";
// import ForgetPassword from "./Components/forgetPassword/forgetPassword";
// import VerifyCode from "./Components/verifyCode/verifyCode";
// import NotFound from "./Components/NotFound/NotFound";
// import Error from "./Components/Error/Error";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader/Loader";
import CartProvider from "./context/CartContext";
// import { Offline } from "react-detect-offline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WishListProvider from "./context/WishListContext";
// import Checkout from "./Components/Checkout/Checkout";

const Home = lazy(() => import("./Components/Home/Home"));
const Products = lazy(() => import("./Components/Products/Products"));
const ProductDetails = lazy(() =>
  import("./Components/ProductDetails/ProductDetails")
);
const Categories = lazy(() => import("./Components/Categories/Categories"));
const Brands = lazy(() => import("./Components/Brands/Brands"));
const WishList = lazy(() => import("./Components/WishList/WishList"));
const Cart = lazy(() => import("./Components/Cart/Cart"));
const Login = lazy(() => import("./Components/Login/Login"));
const Register = lazy(() => import("./Components/Register/Register"));
const ForgetPassword = lazy(() =>
  import("./Components/forgetPassword/forgetPassword")
);
const VerifyCode = lazy(() => import("./Components/verifyCode/verifyCode"));
const NotFound = lazy(() => import("./Components/NotFound/NotFound"));
const Error = lazy(() => import("./Components/Error/Error"));
const Checkout = lazy(() => import("./Components/Checkout/Checkout"));
const Orders = lazy(() => import("./Components/Orders/Orders"));

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: (
        <Suspense fallback={<Loader />}>
          <Error />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <Products />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "productDetails/:id",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <ProductDetails />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <Categories />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <Brands />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <WishList />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <Cart />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "login",
          element: (
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense fallback={<Loader />}>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "forget-password",
          element: (
            <Suspense fallback={<Loader />}>
              <ForgetPassword />
            </Suspense>
          ),
        },
        {
          path: "verify-code",
          element: (
            <Suspense fallback={<Loader />}>
              <VerifyCode />
            </Suspense>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <Checkout />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <Orders />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  const query = new QueryClient();

  return (
    <AuthProvider>
      {/* <div className="position-fixed bottom-0 start-0 mb-2 ms-2">
        <Offline>
          <div className="alert alert-danger z-3">Oops, You are offline</div>
        </Offline>
      </div> */}

      <CartProvider>
        <WishListProvider>
          <QueryClientProvider client={query}>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer />
          </QueryClientProvider>
        </WishListProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
