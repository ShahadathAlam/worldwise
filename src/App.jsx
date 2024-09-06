import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import CountryList from "./components/CountryList";
import { CitiesProvider } from "./contexts/CitiesContext";
// import PageNav from "./components/PageNav";

function App() {
  return (
    // <div>
    //   <h1>Worldwise</h1>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Homepage />} />
    //       <Route path="product" element={<Product />} />
    //       <Route path="pricing" element={<Pricing />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    // <BrowserRouter>
    //   <div>
    //     <PageNav />
    //     <Routes>
    //       <Route path="/" element={<Homepage />} />
    //       <Route path="product" element={<Product />} />
    //       <Route path="pricing" element={<Pricing />} />
    //       <Route path="*" element={<PageNotFound />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
