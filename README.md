
---

# URLr - Link Tree based UI

## Descrição do Projeto

Este projeto é uma interface de usuário inspirada no conceito do Link Tree, desenvolvida utilizando tecnologias como Next.js, React Beautiful DND, Redux, Redux Persist, Tailwind CSS e Framer Motion.

A principal funcionalidade é permitir a organização e persistência de links, oferecendo a capacidade de reordená-los por meio de drag and drop. As alterações na ordem dos links são salvas utilizando Redux Persist para armazenamento local.

## Live demo

Você pode conferir uma demonstração do projeto [aqui](https://urlrr.vercel.app/).

## Tecnologias Utilizadas

- **Next.js:** Framework React utilizado para renderização do lado do servidor e criação de páginas estáticas e dinâmicas.

- **React Beautiful DND:** Biblioteca para drag and drop de elementos em React, utilizada para permitir a reordenação dos links na interface.

- **Redux e Redux Persist:** Utilizados para gerenciamento de estado global na aplicação, garantindo a persistência dos dados dos links mesmo após o recarregamento da página.

- **Tailwind CSS:** Framework de CSS utilizado para estilização dos componentes, oferecendo uma abordagem de desenvolvimento baseada em classes utilitárias.

- **Framer Motion:** Biblioteca para criação de animações em React, utilizada para adicionar transições e animações visuais à interface do projeto.

## Configuração do Projeto

### Configuração dos Links

No arquivo `linksSlice`, o `initialState` é definido como um array contendo objetos de cada link, incluindo a URL e o título.

## Como Executar o Projeto

1. **Instalação de Dependências:**

   Execute o comando para instalar as dependências necessárias:
   ```
   npm install
   ```

2. **Arquivo dotenv:**

   Dentro da pasta do projeto, é necessário criar um arquivo chamado `.env`. Neste arquivo, as seguintes variáveis de ambiente devem ser definidas:
   ```
   IMG_URL='/spider.jpg'
   TITLE='@spiderman'
   BIO='🕷️ Bem-vindo à minha teia de links!'
   ```

   Essas variáveis configuram os dados do perfil exibidos na aplicação. É importante notar que:

   - A variável `IMG_URL` deve referenciar uma imagem, a qual pode ser adicionada na pasta `public` do projeto ou ser um link externo. É recomendável que a imagem seja no formato quadrado.

   - Os valores de `TITLE` e `BIO` podem ser ajustados conforme necessário para representar o título e a biografia desejados para o perfil.

   Certifique-se de que as informações fornecidas correspondam aos dados que você deseja exibir na interface da aplicação.


3. **Execução do Projeto:**

   Para iniciar o servidor de desenvolvimento, utilize o comando:
   ```
   npm run dev
   ```

   Isso irá iniciar o servidor localmente em `http://localhost:3000`.
