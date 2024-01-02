/* eslint-disable react/no-unescaped-entities */

export const metadata = {
    title: 'URLR - Sobre',
    description: 'Sobre o projeto',
  }

export default function About() {
    return (
        <div className="container mx-auto max-w-3xl px-4 py-12 h-screen">
            <div className="rounded-lg shadow-lg p-6 border border-gray-500">
                <h1 className="text-3xl font-semibold mb-6 text-center">Sobre o Projeto</h1>
                <p className="text-lg leading-relaxed mb-6">
                    Trata-se de um exibidor de links, inspirado no conceito do Linktree, que oferece a capacidade de gerenciar e organizar links importantes.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    Este projeto foi desenvolvido com o objetivo de explorar as funcionalidades das bibliotecas Redux Persist junto com React Beautiful DND, permitindo arrastar e reordenar os links exibidos e persistir essa organização através do armazenamento local com "Redux Persist".
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    Além disso, foi projetado com foco na responsividade, experiência do usuário e incorporação de algumas animações simples com Framer Motion, tudo isso com o intuito de praticar e aprimorar habilidades com essa biblioteca.
                </p>
            </div>
        </div>
    )
}
