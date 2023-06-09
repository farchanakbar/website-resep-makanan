import { BrowserRouter, Routes, Route } from "react-router-dom"

import DetailPage from "./pages/DetailPage"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import CategoryPage from "./pages/CategoryPage"
import ErrorPage from "./pages/ErrorPage"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/meal/:id" element = {<DetailPage />} />
        <Route path = "/category/:id" element = {<CategoryPage />} />
        <Route path  = "*" element = {<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
