import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./components/MainPage/MainPage"
import OrderPage from "./components/OrderPage/OrderPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order/*" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
