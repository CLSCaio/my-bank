# Projeto Next.js com TypeScript, Zustand e Troca de Tela Dinâmica

Este projeto é uma aplicação desenvolvida com **Next.js**, **TypeScript** e **Zustand**, com o objetivo de demonstrar como utilizar essas tecnologias para construir uma aplicação web com troca de tela dinâmica sem a necessidade de roteamento tradicional. A aplicação permite o login de um usuário admin ou a criação de um novo usuário com as credenciais desejadas.

## Tecnologias Usadas

- **Next.js**: Framework React para criação de aplicações web com funcionalidades de SSR (Server Side Rendering).
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código, proporcionando maior segurança e autocompletar.
- **Zustand**: Biblioteca para gerenciamento de estado simples e eficiente em aplicações React.
- **React**: Biblioteca para construção de interfaces de usuário.

## Requisitos

Antes de rodar a aplicação, você precisa garantir que as seguintes ferramentas estejam instaladas:

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

## Como Rodar a Aplicação

### 1. Clonar o Repositório

Primeiro, clone o repositório para sua máquina local:

### 2. Instalar as Dependências

Instale as dependências do projeto utilizando o npm:
npm install

### 3. Rodar a Aplicação

Após a instalação das dependências, inicie a aplicação com o comando:
npm run dev

A aplicação estará disponível em http://localhost:3000.

4. Login
   Ao acessar a aplicação, será possível realizar o login de duas formas:

Usuário Admin: Use o usuário admin e a senha admin12345.
Criar Novo Usuário: Caso queira, você pode criar um novo usuário na interface de login, inserindo um nome de usuário e senha personalizados. Após o cadastro, você poderá utilizar essas credenciais para logar.

## Porque Usar TypeScript, Zustand e Troca de Tela Dinâmica

### TypeScript

O TypeScript foi escolhido para este projeto por oferecer tipagem estática ao JavaScript. Isso ajuda a evitar erros comuns em tempo de execução e melhora a experiência de desenvolvimento, com melhores mensagens de erro e autocompletar nas IDEs.

### Zustand

Zustand é uma biblioteca de gerenciamento de estado simples para React. Diferente do Redux, o Zustand não exige a configuração de reducers ou actions, tornando o código mais direto e fácil de entender o que permite
mais performance já que Não há necessidade de recarregar a página ou fazer novas requisições.

Estrutura do Projeto
app/: Contém as páginas principais da aplicação.
components/: Componentes reutilizáveis utilizados na aplicação.
store/: Contém o gerenciamento de estado global utilizando Zustand.
layouts/: Contém os layouts da aplicação como header, banner, etc.
views/: Contém a criação das páginas.

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```
