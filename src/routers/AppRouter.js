import { Route, Routes } from "react-router-dom"
import { ProductDetails } from "../pages/ProductDetails"
import { ProductScreen } from "../pages/ProductScreen"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductScreen />} />
            <Route path="/producto/:productId" element={<ProductDetails />} />
        </Routes>
    )
}