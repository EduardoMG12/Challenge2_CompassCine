# 2º Desafio | AWS_FULLSTACK_FEV24 - Projeto Compacine ️️
 <img width="20%"  src="./public/imagesREADME/compassUolLogoSvg.svg"/>

Este é o repositório do projeto "2º Desafio | AWS_FULLSTACK_FEV24" desenvolvido como parte do estágio na Compass UOL. Abaixo estão as informações importantes para o desenvolvimento, entrega e funcionalidades do projeto.

<details>
  <summary style="position:relative;">Como rodar projeto <img width="30" alt="Descrição da imagem" style="position: absolute; top: 50%; left: 153px; transform: translate(-50%, -50%);" src="https://www.svgrepo.com/show/528592/settings.svg"></summary>

## Como instalar as dependências:

```sh
git clone https://github.com/EduardoMG12/Challenge2_CompassCine.git
git clone git@github.com:EduardoMG12/Challenge2_CompassCine.git # caso estiver usando token ssh use este comando
cd Challenge2_CompassCine
npm install

```

## environments

```ts
API_PORT=3000
DATABASE_URL="mongodb://root:123@localhost:27017/CompassCine?authSource=admin&retryWrites=true&w=majority"
USER_DB=root
PASSWORD_DB=123
```

## Como rodar o projeto
```sh
# rever comando para rodar projeto
docker compose up --build -d # roda todos os containers(banco de dados e back-end) 
docker compose up --build -d mongodb # roda apenas o container banco de dados 
docker compose up --build -d  application # roda apenas o container com o back-end
```

## Como derrubar todos os containers
```sh
docker kill $(docker ps -q)
```
</details>

<details>
  <summary style="position:relative;">Algumas imagens o projeto <img width="30" alt="Descrição da imagem" style="position: absolute; top: 50%; left: 205px; transform: translate(-50%, -50%);"  src="https://www.svgrepo.com/show/530248/picture.svg"></summary>
  <img width="40%"  src="./public/imagesREADME/folderStructure.png"/>
  <img width="40%"  src="./public/imagesREADME/expressConfigExample.png"/>
  <img width="40%"  src="./public/imagesREADME/dockerFileConfigExample.png"/><!--  remember add image configExpressProject when end project
   remember add image dockerConfigurations when end project
  <img width="40%"  src="./public/imagesREADME/"/>  remember add image first route when end project
  <img width="40%"  src="./public/imagesREADME/"/>  remember add image second route when end project
  and add other routes images if want
  squad image for some one daily
  --> 
</details>
<details>
  <summary style="position:relative;">Sobre o desenvolvimento <img width="20" alt="Descrição da imagem" style="position: absolute; top: 50%; left: 205px; transform: translate(-50%, -50%);"  src="https://www.svgrepo.com/show/295412/development-web-development.svg"></summary>
## Sobre o desenvolvimento

### Squad: 

- [**Claudio Renato**](https://github.com/claudiofariias)
- [**Charles Eduardo**](https://github.com/EduardoMG12)
- [**Edenilson Costa**](https://github.com/gameprime)
- [**Fabio Aparecido**](https://github.com/fabusilva)
- [**Patrick Sampaio**](https://github.com/PatrickSampa)

### Trello:
[Trello](https://trello.com/invite/b/Je4JEUey/ATTI918cd14197eb633febcad331e5dce02e59691D70/projeto-compacine)

### Descrição técninca

O projeto foi desenvolvido seguindo a arquitetura hexagonal, mesclando-a com MVC para padronização do código. Optamos pelo uso do ESLint, prettier e Conventional Commits, além de priorizar código e comentários em inglês, assim nos alinhando as padronizações/convenções adotas pela compass. Para facilitar a execução local, utilizamos o Docker Compose para criação do banco de dados (MongoDB) e inicialização da API.

### Superando Obstáculos

O desenvolvimento do projeto apresentou dois desafios principais:

- 1. Comunicação e Trabalho em Equipe:

	Inicialmente, a equipe enfrentou dificuldades na comunicação e no trabalho colaborativo. Com o tempo, dedicação e dailys diárias, superamos essa barreira e aprimoramos nossa capacidade de trabalhar em conjunto, alcançando um alinhamento eficaz.

- 2. Migração do Banco de Dados: 
	
	O projeto foi inicialmente concebido para utilizar o banco de dados PostgreSQL com o ORM Prisma. No entanto, após a descoberta da necessidade de migrar para o MongoDB, a equipe se deparou com desafios na adaptação do Prisma ao novo banco de dados. Para superar essa dificuldade, decidimos migrar para o ORM Mongoose, garantindo a compatibilidade com o MongoDB e o bom funcionamento do projeto.


### Aprendizado Individual e Coletivo

Vale ressaltar que nem todos os membros da equipe possuíam experiência prévia em trabalho em equipe ou desenvolvimento back-end. Essa diversidade de conhecimentos exigiu um esforço extra para que todos se adaptassem ao ritmo e às necessidades do projeto. Através da colaboração e do compartilhamento de conhecimentos, cada membro da equipe evoluiu significativamente em suas habilidades técnicas e interpessoais.
</details>

## Sobre o projeto.

### Descrição.

O projeto consiste em criar um CRUD completo de um sistema de cinema, Obrigatoriamente utilizando Express, ORM e Docker Compose. O Projeto deve seguir as especificações do [Notion](https://animated-beard-0ba.notion.site/2-Desafio-AWS_FULLSTACK_FEV24-8e410d1f653241cb8553c763d16d305c), com atenção especial ao prazo e os requisitos obrigatorios do projeto.

### *P.O*
- **Anthoni Bortolotto Martinelli:** [anthoni.martinelli@compasso.com.br](mailto:anthoni.martinelli@compasso.com.br)

### *Instrutores*
- **Rafaela Janeczko:** [rafaela.janeczko@compasso.com.br](mailto:rafaela.janeczko@compasso.com.br)
- **Maithe Saldanha Ferrao:** [maithe.ferrao@compasso.com.br](mailto:maithe.ferrao@compasso.com.br)
- **Cassio Silva Takarada:** [cassio.takarada@compasso.com.br](mailto:cassio.takarada@compasso.com.br)
- **Leonardo Buhring Muller:** [l.muller.dev@gmail.com](mailto:l.muller.dev@gmail.com)
- **Gabriel Bezerra Rodrigues:** [gabriel.bezerra@compasso.com.br](mailto:gabriel.bezerra@compasso.com.br)

### **Prazo**

Prazo para **envio** do e-mail com **link do repositório:** 09/04/2024  (terça-feira), **até às 17h30**.

Prazo máximo para **envio** do ultimo commit no repositório: Último commit até às 17h30 de 15/04/2024 (segunda-feira).

