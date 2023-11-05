## Descrição do Projeto

O projeto de perguntas e respostas é um projeto criando para ser uma pagina aberta onde as pessoas pode fazer perguntas e ou responder as perguntas tipo um de  “brainly” 

## Bibliotecas utilizadas

- Express: O Express.js é uma estrutura executada em cima do node.js que lida com solicitações [HTTP] feitas a um servidor web.
- Body-parser: O body-parser é um módulo capaz de converter o *body* da requisição para vários formatos. Um desses formatos é *json*, exatamente o que queremos.
- EJS: Embedded JavaScript templating (EJS) e é uma linguagem de modelagem simples que permite gerar marcação HTML com JavaScript simples.
- Sequelize: O Sequelize **é um ORM, ou seja, um mapeador objeto-relacional**. Isso significa que ele permite que você crie modelos (classes) em TypeScript ou JavaScript que representam as tabelas do seu banco de dados.
- Mysql2: Driver do banco de dados de mysql

## Explicação sobre projeto

- Pasta database: Tudo relacionado ao banco de dados;
- Pasta public: Tudo que é estático na aplicação fica nessa pasta;
- Pasta views: Fica todas as paginas ejs ;
- Index.js: É onde fica toda a logica de roteamento usando o espress.