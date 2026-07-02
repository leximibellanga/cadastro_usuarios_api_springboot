import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="flex items-center bg-slate-900 p-6 shadow-sm">
            <nav className="container m-auto flex items-center justify-between">
                {/* logo */}
                <a href="#" className="font-bold text-2xl text-slate-200">API SpringBoot</a>

                {/* botoes de acoes */}
                <div>
                    <Link to="/adduser" className="py-2 px-6 bg-blue-800 text-white font-medium rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-900">
                        Add User
                    </Link>
                </div>
            </nav>
        </header>
    )
}
