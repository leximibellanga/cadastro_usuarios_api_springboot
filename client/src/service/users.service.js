import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_URL

// listar todos Users
export const readAllUsers = () => axios.get(`${BASE_URL}/users`)

// listar um user
export const readOneUser = (id) => axios.get(`${BASE_URL}/users/${id}`)

// criar um novo user
export const createUser = (user) => axios.post(`${BASE_URL}/users`, user)

// editar dados de um user
export const updateUser = (id, user) => axios.put(`${BASE_URL}/users/${id}`, user)

// deletar um user
export const deleteUser = (id) => axios.delete(`${BASE_URL}/users/${id}`)

// Buscar user por nome
export const buscarUserPorNome = (nome) => axios.get(`${BASE_URL}/users/buscar?nome=${nome}`)
