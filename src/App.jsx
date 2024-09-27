import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

// import PageNav from "./components/PageNav";
import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import CountryList from "./components/CountryList";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// dist/assets/index-7121208d.css   29.92 kB │ gzip:   5.09 kB
// dist/assets/index-111e5b20.js   510.32 kB │ gzip: 148.73 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />

              <Route path="pricing" element={<Pricing />} />
              <Route path="product" element={<Product />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;

// function App() {
//   return (
//     // <div>
//     //   <h1>Worldwise</h1>
//     //   <BrowserRouter>
//     //     <Routes>
//     //       <Route path="/" element={<Homepage />} />
//     //       <Route path="product" element={<Product />} />
//     //       <Route path="pricing" element={<Pricing />} />
//     //     </Routes>
//     //   </BrowserRouter>
//     // </div>

//     <BrowserRouter>
//       <div>
//         <PageNav />
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="product" element={<Product />} />
//           <Route path="pricing" element={<Pricing />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
// export default App;
