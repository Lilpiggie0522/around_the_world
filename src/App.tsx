import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Interest from "./Interest"
import Home from "./Home"
import Footer from "./components/Footer"
import Experience from "./Experience"

function App() {

  return (
    <div className='flex flex-col justify-center items-center bg-slate-200'>
      <Router basename={import.meta.env.BASE_URL}>
        <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
