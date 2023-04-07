import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home, { countryLoaderData } from "../pages/Home";
import Country from "../pages/Country";
import Common404 from "../pages/Common404";
import Country404 from "../pages/Country404";
import { useCountryDetailData } from "../components/UI/DetailCard";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}  >
            <Route index element={<Home />} loader={countryLoaderData} />
            <Route path="country/:alphaCode" element={<Country />} loader={useCountryDetailData} errorElement={< Country404 />} />
            <Route path="*" element={<Common404 />} />
        </Route>
    ))