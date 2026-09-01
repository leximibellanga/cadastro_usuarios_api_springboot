import { Eye, Pencil, Search, Trash2 } from "lucide-react";
import Th from "../components/ui/Th";
import Td from "../components/ui/Td";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import { deleteUser, readAllUsers, readOneUser, buscarUserPorNome } from "../service/users.service";


export default function Home() {
    const [users, setUsers] = useState([])

    const [nome, setNome] = useState()

    const buscarUserPorNomes = async () => {
        await buscarUserPorNome(nome).then((res) => {
            setUsers(res.data)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        buscarUserPorNomes()
    }, [nome])


    const getUsers = useCallback(async () => {
        await readAllUsers().then((response) => {
            setUsers(response.data)
        }).catch(e => {
            console.error(e)
        })
    }, [])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    async function deleteUsers(id) {
        // Pegar o user para exibir uma msg
        await readOneUser(id).then((res) => {
            alert("\"" + res.data.nome + "\", Deletado com sucesso!");
        }).catch((e) => {
            console.log(e)
        })
        // Remover o USER da BD
        await deleteUser(id).then(() => {
            
        }).catch((e) => {
            console.log(e)
        })
        getUsers()
    }

    const ths = ["ID", "Nome", "Apelido", "Email", "Idade", "Ações"]

    return (
        <section>
            <div className="my-12">
                <h1 className="mb-4 text-xl font-bold text-slate-900">
                    Lista de Usuarios
                </h1>

                <div className="flex items-center justify-between mt-2 mb-4">
                    <div className="flex items-center gap-2">
                        <Input
                            placeholder={"Pesquise por nome..."}
                            type={"text"}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <button className="cursor-pointer py-2 px-3 bg-slate-800 hover:bg-slate-900 text-slate-100 rounded-lg transition-all duration-300">
                            <Search size={18} className="font-bold" />
                        </button>
                    </div>
                    {/* botoes de acoes */}
                    <div>
                        <Link to="/adduser" className="py-2 px-6 bg-blue-800 text-white font-medium rounded-xl cursor-pointer transition-all duration-300 hover:bg-blue-900">
                            Add User
                        </Link>
                    </div>
                </div>

                <table className="w-full border-collapse text-slate-900 rounded-xl overflow-hidden">
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
                                    <Td text={`#${user.id < 10 ? `0${user.id}` : `${user.id}` }`} />
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

