# Blogs API

Neste projeto foi desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog. Foi feito um CRUD de postagens com uma camada de autenticação de pessoas usuárias.



## Habilidades

- Criação de um banco de dado;

- Desenvolvimento de endpoints devidamente conectados ao banco de dados seguindo os princípios do REST;

- Aderência do código à especificação;

- Organização do código.


## Instruções Gerais

- Clone o repositório

 `git clone git@github.com:tryber/sd-020-a-project-blogs-api.git`.
 
 - Entre na pasta do repositório que você acabou de clonar:
    
 `cd blogs-api-project`

## Utilizando o Docker

- Instale o Docker, caso ainda não o tenha instalado;

- Ainda no seu terminal, use o comando:

`docker-compose up -d`

- Dessa forma será inicializado um container chamado blogs_api e outro chamado blogs_api_db, sendo assim possível rodar o container blogs_api via CLI ou abri-lo no VS Code. Na sequência use o comando:

`docker exec -it blogs_api bash`

- Dessa forma terá acesso ao terminal interativo do container criado pelo compose que está rodando em segundo plano;

- Por fim, instale as dependências e inicie a aplicação que rodará na porta 3000:

``` bash
npm install
npm run debug
```

## Rodando localmente

- Configure as variáveis de ambiente editando o arquivo `.env.example` com suas respectivas variáveis e o renomeando em seguida para `.env`.
- Por fim, instale as dependências e inicie a aplicação que rodará na porta 3000:


``` bash
npm install
npm run debug
```



