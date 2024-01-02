
---

# URLr - Link Tree based UI

## Descrição do Projeto

Este projeto é uma interface de usuário inspirada no conceito do Link Tree, desenvolvida utilizando tecnologias como Next.js, React Beautiful DND, Redux, Redux Persist, Tailwind CSS e Framer Motion.

A principal funcionalidade é permitir a organização e persistência de links, oferecendo a capacidade de reordená-los por meio de drag and drop. As alterações na ordem dos links são salvas utilizando Redux Persist para armazenamento local.

## Live demo

Você pode conferir uma demonstração do projeto [aqui](https://urlr-spider.vercel.app/).

## Tecnologias Utilizadas

- **Next.js:** Framework React utilizado para renderização do lado do servidor e criação de páginas estáticas e dinâmicas.

- **React Beautiful DND:** Biblioteca para drag and drop de elementos em React, utilizada para permitir a reordenação dos links na interface.

- **Redux e Redux Persist:** Utilizados para gerenciamento de estado global na aplicação, garantindo a persistência dos dados dos links mesmo após o recarregamento da página.

- **Tailwind CSS:** Framework de CSS utilizado para estilização dos componentes, oferecendo uma abordagem de desenvolvimento baseada em classes utilitárias.

- **Framer Motion:** Biblioteca para criação de animações em React, utilizada para adicionar transições e animações visuais à interface do projeto.

## Configuração do Projeto

### Arquivo .env

No arquivo `.env`, é possível configurar os detalhes do perfil para o projeto. Certifique-se de adicionar as informações necessárias para o perfil conforme necessário.

### Configuração dos Links

No arquivo `linksSlice`, o `initialState` é definido como um array contendo objetos de cada link, incluindo a URL e o título.

## Como Executar o Projeto

1. **Instalação de Dependências:**

   Execute o comando para instalar as dependências necessárias:
   ```
   npm install
   ```

2. **Execução do Projeto:**

   Para iniciar o servidor de desenvolvimento, utilize o comando:
   ```
   npm run dev
   ```

   Isso irá iniciar o servidor localmente em `http://localhost:3000`.
