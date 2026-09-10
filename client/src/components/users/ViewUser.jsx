import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams();

  const [user, setUser] = useState({
    nome: "",
    apelido: "",
    email: "",
    anoNascimento: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const result = await axios.get(`http://localhost:8080/users/${id}`);
      setUser(result.data);
    };
    getUser();
  }, [id]);

  return (
    <section className="flex items-center justify-center mt-12 p-4">
      <div className="bg-slate-100 shadow rounded-lg w-162 p-6">
        <h1 className="mb-4 text-xl text-center font-bold m-auto text-slate-900">
          Ver Detalhes do User
        </h1>
        <ul className="bg-white rounded-lg p-4">
          <h3 className="text-sm text-center mb-6">
            <strong>Detalhes do user com id: {user.id}</strong>
          </h3>
          <li className="bg-slate-50 p-3 mb-1.5">
            <strong>Nome: </strong> {user.nome}
          </li>
          <li className="bg-slate-50 p-3 mb-1.5">
            <strong>Apelido: </strong> {user.apelido}
          </li>
          <li className="bg-slate-50 p-3 mb-1.5">
            <strong>Email: </strong> {user.email}
          </li>
          <li className="bg-slate-50 p-3 mb-1.5">
            <strong>Idade: </strong> {user.anoNascimento}
          </li>
        </ul>

        <div className="mt-8 text-center">
          <Link
            to={"/"}
            className="py-2 px-6 bg-blue-800 text-white font-medium rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-900"
          >
            Voltar
          </Link>
        </div>
      </div>
    </section>
  );
}
