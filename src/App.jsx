import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Page from "./pages/product-page/ProductPage";
import SingleProduct from "./pages/Single-product/SingleProduct";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./common/Layout/Layout";

function App() {
  function isLoggedIn() {
    const isAuthenticated = !!sessionStorage.getItem("token");
    return isAuthenticated;
  }
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route
          path="/home/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn()}>
              <Page />
            </ProtectedRoute>
          }
        />
        <Route
          path="product/:id"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn()}>
              <SingleProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path=":category"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn()}>
              <Page />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <div className="h-[100svh] flex items-center justify-center font-extrabold">
              404: Page not found
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
