# cadastro_usuarios_api_springboot

Cadastro de Users API — Projeto Full Stack CRUD
Aplicação full stack desenvolvida com o objetivo de praticar operações CRUD, integração entre frontend e backend e construção de APIs REST.
Este projeto faz parte do meu processo de aprendizagem em desenvolvimento backend com Java e desenvolvimento frontend com React.

Visão Geral
-------------
A aplicação permite realizar o gerenciamento básico de usuários através das seguintes operações:
- Cadastrar usuários
- Visualizar usuários cadastrados
- Editar informações de usuários
- Remover usuários do sistema
O principal objetivo do projeto é compreender a comunicação entre uma aplicação frontend e uma API desenvolvida com Spring Boot.

Tecnologias Utilizadas
------------------------
1. Backend
    - Java
    - Spring Boot
    - Spring Data JPA
    - Lombok
    - MySQL Driver
2. Frontend
    - React.js
    - Tailwind CSS
    - Axios
    - React Router DOM
    - Lucide React
3. Banco de Dados
    - MySQL

Estrutura do Projeto
---------------------
cadastro_users_api_springboot/
│
├── client/                               
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   │
│   │   │   ├── layout/                  
│   │   │   │   └── Navbar.jsx
│   │   │   │
│   │   │   ├── ui/                      =
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Label.jsx
│   │   │   │   ├── Td.jsx
│   │   │   │   └── Th.jsx
│   │   │   │
│   │   │   └── users/                   
│   │   │       ├── AddUser.jsx
│   │   │       ├── EditUser.jsx
│   │   │       └── ViewUser.jsx
│   │   │
│   │   └── pages/
│   │       └── Home.jsx
│   │
│   ├── App.jsx
│   ├── index.jsx
│   └── main.jsx
│
├── server/                              
│   │
│   └── src/main/java/
│       │
│       └── lex/
│           └── canalCodeWitharjun/
│               └── server/
│                   │
│                   ├── config/          
│                   │   └── Config.java
│                   │
│                   ├── controller/     
│                   │   └── UserController.java
│                   │
│                   ├── exception/     
│                   │   ├── UserNotFoundAdvice.java
│                   │   └── UserNotFoundException.java
│                   │
│                   ├── model/           
│                   │   └── User.java
│                   │
│                   ├── repository/    
│                   │   └── UserRepository.java
│                   │
│                   └── CadastroUsersApplication.java
│
└── README.md

Funcionalidades
-----------------
- Desenvolvimento de API REST com Spring Boot
- Implementação completa de operações CRUD
- Integração frontend e backend com Axios
- Navegação entre páginas com React Router
- Persistência de dados com MySQL
- Componentização no React
- Separação entre arquitetura frontend e backend

Ambiente de Desenvolvimento
----------------------------
Ferramentas utilizadas durante o desenvolvimento:
- VS Code
- IntelliJ IDEA
- MySQL Workbench
- XAMPP
- Insomnia
- Google Chrome
- Git

Objetivos de Aprendizagem
-------------------------
- Durante o desenvolvimento deste projeto foram praticados conceitos como:
- Criação de APIs REST
- Requisições HTTP
- Integração com banco de dados utilizando JPA
- Arquitetura de componentes em React
- Comunicação entre frontend e backend
- Desenvolvimento de aplicações full stack

Melhorias Futuras
------------------
Algumas melhorias que podem ser adicionadas futuramente:
- Validação de formulários
- Sistema de autenticação
- Melhor tratamento de erros
- Pesquisa e filtragem de usuários
- Paginação de dados
- Melhorias visuais na interface


Autor:
- Leximibel Langa
