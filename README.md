# FRONTEND-CP1-Vinheria-Agnello

Checkpoint 1 para a disciplina de Front-end Design FIAP

##### Para Acessar o site clique [aqui](https://davimunhoz1005.github.io/FRONTEND-CP1/).

## Sobre o Projeto

A Vinheria Agnello é uma empresa tradicional que utiliza um ERP para gestão financeira, compras, controle de estoques e vendas (PDV). No entanto, até ao momento, resistia à ideia de ter uma loja virtual, valorizando o atendimento especializado e personalizado. Este projeto visa apresentar uma proposta digital para a vinheria, alinhando tecnologia à tradição.

## Tecnologias Utilizadas

O site e-commerce da vinheria utilizou dessas tecnologias:

<div style="display: flex; gap: 10px;">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript">
</div>

## Estrutura do Projeto  

| Página         | Descrição                                                                 |
|----------------|---------------------------------------------------------------------------|
| `Homepage`   | Página inicial com índice navegável.                                      |
| `Nossa História`| Conta a história da marca e o legado da família Agnello.                  |
| `Produtos`| Explica as categorias de produtos oferecidos.                             |
| `Contato` | Apresenta a equipe e as formas de contato.                                |
| `Equipe`    | Mostra a equipe que trabalha na Vinheria e os desenvolvedores do site.                                 |

# Integrantes do Grupo  

| [<img loading="lazy" src="https://github.com/DaviMunhoz1005.png" width=115><br><sub>Davi Marques</sub>](https://github.com/DaviMunhoz1005) |  [<img loading="lazy" src="https://github.com/catvergueiro.png" width=115><br><sub>Catarina Luiza</sub>](https://github.com/catvergueiro) |  [<img loading="lazy" src="https://github.com/Gabsgc01.png" width=115><br><sub>Gabriel Ciriaco</sub>](https://github.com/Gabsgc01) | [<img loading="lazy" src="https://github.com/Mafraaa.png" width=115><br><sub>Vinicius Mafra</sub>](https://github.com/Mafraaa) | [<img loading="lazy" src="https://github.com/MariFranca.png" width=115><br><sub>Mariana Franca</sub>](https://github.com/MariFranca) | 
| :---: | :---: | :---: | :---: | :---: |

## Efeitos Visuais

Este projeto inclui diversos efeitos visuais implementados com CSS puro, utilizando pseudo-classes, pseudo-elementos e animações suaves para melhorar a experiência do usuário. Abaixo estão os principais destaques:

### ✅ Pseudo-elementos ::after animados
- Menus (Header e Footer): Links utilizam uma linha inferior animada com ::after, que cresce suavemente ao passar o mouse, melhorando a percepção de foco e interação.

- Cards da equipe (.team-card h2): Adicionam um sublinhado ao passar o mouse, reforçando visualmente o destaque do texto.

### ✅ Transições suaves
- Botões e campos de formulário: Alteram cor e sombra ao focar ou passar o mouse, com transições suaves usando transition: all 0.3s ease.

- Cartões interativos (.vinho-card, .dev-card, .team-card): Escalam levemente ao passar o mouse com transform: scale(1.05) e sombra realçada.

### ✅ Animações com @keyframes
- pulse-sutil: Animação suave aplicada na seção .guia da homepage para destacar o conteúdo com um leve efeito de pulsação.

- slideInFromRight: Utilizada no form da contact page para fazer com que o formulário surja da direita ao entrar na tela.

### ✅ Efeito hover com gradiente
- .team-img::before: Aplica uma sobreposição com gradiente dourado ao passar o mouse, adicionando profundidade visual.

## Licença

Este projeto está licenciado sob a MIT License.
