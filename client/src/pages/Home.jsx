import { Eye, Pencil, Trash2 } from "lucide-react";
import Th from "../components/ui/Th";
import Td from "../components/ui/Td";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([])

    const getUsers = useCallback(async () => {
        const result = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
        setUsers(result.data);
    }, [])

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getUsers()
    }, [getUsers])

    async function deleteUsers(id) {
        await axios.delete(`${import.meta.env.VITE_API_URL}/users/${id}`)
        getUsers()
    }

    const ths = ["ID", "Nome", "Apelido", "Email", "Idade", "Ações"]

    return (
        <section>
            <div className="my-12">
                <h1 className="mb-4 text-xl font-bold text-slate-900">
                    Lista de Usuarios
                </h1>

                <table className="w-full border-collapse text-slate-900 rounded-2xl overflow-hidden">
                    <thead className="bg-slate-900 text-white">
                        <tr>
                            {ths.map((thName, index) =>
                                <Th key={index} text={thName} />
                            )}
                        </tr>
                    </thead>
                    <tbody className="bg-slate-200">
                        {users.length >= 1 ?
                            users.map((user, index) =>
                                <tr key={index} className={`${index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"} hover:bg-slate-300 duration-300 ease-in`}>
                                    <Td text={user.id} />
                                    <Td text={user.nome} />
                                    <Td text={user.apelido} />
                                    <Td text={user.email} />
                                    <Td text={`${(new Date().getFullYear()) - user.anoNascimento} anos`} />
                                    <td className=" p-2 w-60">
                                        <div className="w-full flex gap-2 justify-center items-center">
                                            <Link to={`/detailsuser/${user.id}`} className="bg-blue-600 text-white flex cursor-pointer items-center justify-center p-1.25 rounded-sm transition-all duration-300 hover:bg-blue-700">
                                                <Eye size={18} />
                                            </Link>
                                            <Link to={`/edituser/${user.id}`} className="bg-green-600 text-white flex items-center cursor-pointer justify-center p-1.25 rounded-sm transition-all duration-300 hover:bg-green-700">
                                                <Pencil size={18} />
                                            </Link>
                                            <button onClick={() => deleteUsers(user.id)} className="bg-red-600 text-white flex items-center cursor-pointer justify-center p-1.25 rounded-sm transition-all duration-300 hover:bg-red-700">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ) :
                            <tr className="bg-slate-200 hover:bg-slate-300 cursor-pointer transition-all duration-300 ease-in">
                                <Td colspan={6} text={"Nenhum dado encontrado"} />
                            </tr>
                        }
                    </tbody>
                    {users.length >= 1 &&
                        <tfoot>
                            <tr className="bg-slate-800 text-slate-100 text-sm">
                                <td colSpan={6} className="p-4">
                                    <strong>Total:</strong> {users.length} users
                                </td>
                            </tr>
                        </tfoot>
                    }
                </table>
            </div>
        </section>
    )
}

