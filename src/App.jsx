import { BrowserRouter, Routes, Route } from "react-router-dom"

import DetailPage from "./pages/DetailPage"
import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"
import ErrorPage from "./pages/ErrorPage"

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
    </BrowserRouter>
    </>
  )
}

export default App
