import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import AddUser from "./components/users/AddUser"
import EditUser from "./components/users/EditUser"
import ViewUser from "./components/users/ViewUser"
// import Footer from "./components/layout/Footer"

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <main className="container m-auto">
          <Routes>
            {/* http://localhost:5173 */}
            <Route path="/" element={<Home />} />

            {/* http://localhost:5173/adduser */}
            <Route path="/adduser" element={<AddUser />} />

            {/* http://localhost:5173/edituser/{id} */}
            <Route path="/edituser/:id" element={<EditUser />} />
            
            {/* http://localhost:5173/detailsuser/id */}
            <Route path="/detailsuser/:id" element={<ViewUser />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
