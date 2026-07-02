import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import AddUser from "./components/users/AddUser"
import EditUser from "./components/users/EditUser"
import ViewUser from "./components/users/ViewUser"

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <main className="container m-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/edituser/:id" element={<EditUser />} />
            <Route path="/detailsuser/:id" element={<ViewUser />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
