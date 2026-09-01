import { useEffect, useState } from "react";
import Input from "../ui/Input";
import Label from "../ui/Label";
import { Link, useNavigate, useParams } from "react-router-dom";
import { readOneUser, updateUser } from "../../service/users.service";

export default function EditUser() {
    const navigate = useNavigate()

    const { id } = useParams()

    const [user, setUser] = useState({
        nome: "",
        apelido: "",
        email: "",
        anoNascimento: "",
    });
    const { nome, apelido, email, anoNascimento } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // Funcao para editar os dados do USER
    const onsubmit = async (e) => {
        e.preventDefault();
        await updateUser(id, user).then((res) => {
            alert(`${res.data.nome} editado com sucesso!`)
        }).catch((error) => {
            console.log(error)
        })

        navigate("/")
    }

    // Funcao para pegar os dados do USER que vai ser Actualizado
    useEffect(() => {
        const getUser = async () => {
            await readOneUser(id).then((response) => {
                setUser(response.data)
            }).catch((e) => {
                console.log(e)
            })
        }
        getUser()
    }, [id])

    return (
        <section className="flex items-center justify-center mt-12 p-4">
            <form onSubmit={(e) => onsubmit(e)} className="flex flex-col gap-3 p-8 shadow-lg rounded-xl max-w-162 w-full">
                <h1 className="mb-4 text-xl font-bold m-auto text-slate-900">
                    Editar User
                </h1>
                <div className="flex justify-center flex-col gap-1">
                    <Label
                        htmlFor={"nome"}
                        text={"Nome"}
                    />
                    <Input
                        type={"text"}
                        name={"nome"}
                        placeholder={"Ex: Joao"}
                        value={nome}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="flex justify-center flex-col gap-1">
                    <Label
                        htmlFor={"apelido"}
                        text={"Apelido"}
                    />
                    <Input
                        type={"text"}
                        name={"apelido"}
                        placeholder={"Ex: Cossa"}
                        value={apelido}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="flex justify-center flex-col gap-1">
                    <Label
                        htmlFor={"email"}
                        text={"Email"}
                    />
                    <Input
                        type={"email"}
                        name={"email"}
                        placeholder={"seu.email@crud.com"}
                        value={email}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="flex justify-center flex-col gap-1">
                    <Label
                        htmlFor={"anoNascimento"}
                        text={"Ano de Nascimento"}
                    />
                    <Input
                        type={"number"}
                        name={"anoNascimento"}
                        placeholder={"Ex: 2002"}
                        value={anoNascimento}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button type="submit" className="grow-0 mt-2 py-2 px-6 bg-blue-800 text-white font-medium rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-900">
                        Atualizar
                    </button>
                    <Link to={"/"} className="grow-0 mt-2 py-2 px-6 bg-red-800 text-white font-medium rounded-lg cursor-pointer transition-all duration-300 hover:bg-red-900">
                        Cancelar
                    </Link>
                </div>
            </form>
        </section>
    )
}
