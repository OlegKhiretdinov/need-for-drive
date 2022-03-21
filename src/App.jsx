import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainPage from "./components/MainPage/MainPage"
import OrderPage from "./components/OrderPage/OrderPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route exact path="/order" element={<Navigate to="location" />} />
        <Route path="/order/:step" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
