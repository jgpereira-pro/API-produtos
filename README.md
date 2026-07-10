# 📦 Microservices E-commerce API (Node.js & Docker)

## 💻 Sobre o Projeto
Esta é uma aplicação backend estruturada em **Microsserviços**, desenvolvida para simular a lógica de um e-commerce. O objetivo principal do projeto é garantir alta disponibilidade e escalabilidade dividindo as responsabilidades de negócio em serviços independentes. 

Através de um **API Gateway**, as requisições dos clientes são roteadas de forma segura e transparente para os serviços específicos de **Produtos** e **Pedidos**. Toda a infraestrutura é orquestrada utilizando **Docker**, garantindo que a aplicação possa ser executada em qualquer ambiente de maneira consistente.

## 🚀 Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

*   **Node.js** & **TypeScript** - Base da aplicação para garantir tipagem estática e escalabilidade.
*   **Docker & Docker Compose** - Para conteinerização dos microsserviços e orquestração do ambiente.
*   **Fastify** - Para criação das APIs REST.
*   **Local** - Para persistência dos dados.

## ⚙️ Arquitetura e Estrutura do Projeto
A aplicação segue o padrão de **Monorepo**, contendo múltiplos serviços sob o diretório `apps/`:

*   `apps/api-gateway`: Ponto de entrada único da aplicação. Responsável por receber as requisições externas e roteá-las para os serviços corretos.
*   `apps/product-service`: Serviço isolado responsável pela gestão do catálogo de produtos (CRUD).
*   `apps/order-service`: Serviço responsável pelo processamento e gestão dos pedidos dos usuários.

A comunicação externa é centralizada no Gateway, mantendo os microsserviços protegidos em uma rede interna do Docker.

## 🛠️ Funcionalidades
*   **Roteamento Centralizado:** O API Gateway gerencia o tráfego e resolve as requisições.
*   **Gestão de Produtos:** Cadastro, listagem, atualização e remoção de produtos de forma isolada.
*   **Gestão de Pedidos:** Criação e acompanhamento de pedidos de compra.
*   **[PREENCHER]**: Adicione outras funcionalidades como "Comunicação assíncrona entre serviços", "Autenticação via token JWT", etc.

## 🏁 Como Executar o Projeto

**Pré-requisitos:** É necessário ter o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/) instalados na sua máquina.

1. Clone o repositório:
```bash
git clone [https://github.com/SEU-USUARIO/](https://github.com/SEU-USUARIO/)[NOME-DO-REPOSITORIO].git
