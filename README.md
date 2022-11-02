# Blogs API

Neste projeto foi desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog. Foi feito um CRUD de postagens com uma camada de autenticação de pessoas usuárias.



## Habilidades

- Criação de um banco de dado;

- Desenvolvimento de endpoints devidamente conectados ao banco de dados seguindo os princípios do REST;

- Aderência do código à especificação;

- Organização do código.


## Instruções Gerais

- Clone o repositório

 `git clone git@github.com:GeovanaAugusta/blogs-api-project.git`.
 
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

# Documentação da API

### Login

#### Fazer login
```bash
  POST /login
```

+ Formato do corpo da Requisição:
    + Body

```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

+ Response se o login for feito com sucesso, com um status http `200`:

```json
            {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjY0NDY2NDE2LCJleHAiOjE2NjUyNDQwMTZ9.6F-bmiupvvyGZUsyzZAx8Mw7FE16ayDlU9ev0J9TtVA"
            }
```
  
  + Response de validação ao tentar realizar um login com um usuário ou e-mail que não existe, com um status http `400`:

```json
    {
      "message": "Invalid fields"
    }
```
  
  + Response de validação ao tentar realizar um login sem todos os campos devidamente preenchidos, com um status http `400`:
  
 ```json
    {
      "message": "Some required fields are missing"
    }
 ```
 
 #### Cadastrar novo usuário
```bash
  POST /user
```

+ Formato do corpo da Requisição:
    + Body

```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
```

+ Response se o usuário for cadastrado com sucesso, com um status http `201`:

```json
            {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjY0NDY2NDE2LCJleHAiOjE2NjUyNDQwMTZ9.6F-bmiupvvyGZUsyzZAx8Mw7FE16ayDlU9ev0J9TtVA"
            }
```
  
  + Response de validação ao tentar cadastrar com um email já existente, com um status http `409`:

```json
    {
      "message": "User already registered"
    }
```

  + Response de validação ao tentar cadastrar com o campo `email` com formato inválido `<email@email.com>`, com um status http `400`:

```json
    {
      "message": "\"email\" must be a valid email"
    }
```

  + Response de validação ao tentar cadastrar com o campo `password` menor que 6 caracteres, com um status http `400`:

```json
    {
      "message": "\"password\" length must be at least 6 characters long"
    }
```

  + Response de validação ao tentar cadastrar com o campo `displayName` menor que 8 caracteres, com um status http `400`:

```json
    {
      "message": "\"displayName\" length must be at least 8 characters long"
    }
```

 #### Listar todos os usuários
```bash
  GET /user
```

+ Response se os usuários forem listados com sucesso, com um status http `200`:

```json
    [
      {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },

      /* ... */
    ]
```

  + Response de validação ao tentar listar todos os usuários se o token for inexistente, com um status http `401`:

```json
    {
      "message": "Token not found"
    }
```

  + Response de validação ao tentar listar todos os usuários se o token for inválido , com um status http `401`:

```json
    {
      "message": "Expired or invalid token"
    }
```

 #### Listar usuário por ID
```bash
  GET /user/:id
```

+ Response se um usuário for listado com sucesso, com um status http `200`:

```json
      {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
```

  + Response de validação ao tentar listar um usuário inexistente, com um status http `404`:

```json
    {
      "message": "User does not exist"
    }
```

  + Response de validação ao tentar listar um usuário se o token for inexistente, com um status http `401`:

```json
    {
      "message": "Token not found"
    }
```

  + Response de validação ao tentar listar um usuário se o token for inválido , com um status http `401`:

```json
    {
      "message": "Expired or invalid token"
    }
```

 #### Cadastrar uma nova categoria
```bash
  POST /categories
```

+ Formato do corpo da Requisição:
    + Body

```json
  {
    "name": "Typescrypt"
  }
```

+ Response se a categoria for cadastrada com sucesso, com um status http `201`:

```json
    {
      "id": 3,
      "name": "Typescript"
    }
```

  + Response de validação ao tentar cadastrar uma nova categoria com nome inexistente, com um status http `400`:

```json
    {
      "message": "\"name\" is required"
    }
```

  + Response de validação ao tentar cadastrar uma nova categoria se o token for inexistente, com um status http `401`:

```json
    {
      "message": "Token not found"
    }
```

  + Response de validação ao tentar cadastrar uma nova categoria se o token for inválido , com um status http `401`:

```json
    {
      "message": "Expired or invalid token"
    }
```

 #### Listar todas as categorias
```bash
  GET /categories
```

+ Response se as categorias forem listadas com sucesso, com um status http `200`:

```json
 [
      {
          "id": 1,
          "name": "Inovação"
      },
      {
          "id": 2,
          "name": "Escola"
      },

      /* ... */
    ]
```

  + Response de validação ao tentar listar todas as categorias se o token for inexistente, com um status http `401`:

```json
    {
      "message": "Token not found"
    }
```

  + Response de validação ao tentar listar todas as categorias se o token for inválido , com um status http `401`:

```json
    {
      "message": "Expired or invalid token"
    }
```

 ####  Adicionar um novo blogpost e vinculá-lo às categorias
```bash
  POST /post
```

+ Formato do corpo da Requisição:
    + Body

```json
  {
     "title": "Latest updates, August 1st",
     "content": "The whole text for the blog post goes here in this key",
     "categoryIds": [1, 2]
  }
```

+ Se o post for deletado com sucesso, retorna-se apenas um status http `20`:

```json
    {
      "id": 3,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 1,
      "updated": "2022-05-18T18:00:01.196Z",
      "published": "2022-05-18T18:00:01.196Z"
    }
```

  + Response de validação ao tentar cadastrar um novo post sem todos os campos preenchidos, com um status http `400`:

```json
    {
      "message": "Some required fields are missing"
    }
```

  + Response de validação ao tentar cadastrar um novo post com uma `categoryIds` inexistente, com um status http `400`:

```json
    {
      "message": "\"categoryIds\" not found"
    }
```

  + Response de validação ao tentar listar todas as categorias se o token for inexistente, com um status http `401`:

```json
    {
      "message": "Token not found"
    }
```

  + Response de validação ao tentar listar todas as categorias se o token for inválido , com um status http `401`:

```json
    {
      "message": "Expired or invalid token"
    }
```

 #### Listar todos os blogpost
```bash
  GET /post
```

+ Response se os posts forem listados com sucesso, com um status http `200`:

```json
   [
      {
        "id": 1,
        "title": "Post do Ano",
        "content": "Melhor post do ano",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 1,
            "name": "Inovação"
          }
        ]
      },
      
      /* ... */
    ]
```

  + Response de validação ao tentar listar todos os posts se o token for inexistente, com um status http `401`:

```json
    {
      "message": "Token not found"
    }
```

  + Response de validação ao tentar listar todos os posts se o token for inválido , com um status http `401`:

```json
    {
      "message": "Expired or invalid token"
    }
```

 #### Listar blogpost por ID
```bash
  GET /post/:id
```

+ Response se o post for listado com sucesso, com um status http `200`:

```json
      {
        "id": 1,
        "title": "Post do Ano",
        "content": "Melhor post do ano",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 1,
            "name": "Inovação"
          }
        ]
      },
```

  + Response de validação ao tentar listar um post inexistente, com um status http `404`:

```json
    {
      "message": "Post does not exist"
    }
```

  + Response de validação ao tentar listar um post se o token for inexistente, com um status http `401`:

```json
    {
      "message": "Token not found"
    }
```

  + Response de validação ao tentar listar um post se o token for inválido , com um status http `401`:

```json
    {
      "message": "Expired or invalid token"
    }
```

 #### Alterar um blogpost por ID
```bash
  PUT /post/:id
```

+ Formato do corpo da Requisição:
    + Body

```json
  {
     "title": "Latest updates, August 1st",
     "content": "The whole text for the blog post goes here in this key",
  }
```

+ Response se o post for editado com sucesso, com um status http `200`:

```json
 {
      "id": 3,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 1,
      "published": "2022-05-18T18:00:01.000Z",
      "updated": "2022-05-18T18:07:32.000Z",
      "user": {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
        {
          "id": 1,
          "name": "Inovação"
        },
        {
          "id": 2,
          "name": "Escola"
        }
      ]
    }
```

  + Response de validação ao tentar editar um blogpost sem ser o usuário que o criou, com um status http `401`:

```json
    {
      "message": "Unauthorized user"
    }
```

  + Response de validação ao tentar editar um post sem todos os campos preenchidos, com um status http `400`:

```json
    {
      "message": "Some required fields are missing"
    }
```

  + Response de validação ao tentar listar um post se o token for inexistente, com um status http `401`:

```json
    {
      "message": "Token not found"
    }
```

  + Response de validação ao tentar listar um post se o token for inválido , com um status http `401`:

```json
    {
      "message": "Expired or invalid token"
    }
```

 #### Deletar um blogpost por ID
```bash
  DELETE /post/:id
```

  + Se o post for deletado com sucesso, retorna-se apenas um status http `204`.

  + Response de validação ao tentar deletar um post sem ser o usuário que o criou, com um status http `401`:

```json
    {
      "message": "Unauthorized user"
    }
```
  + Response de validação ao tentar deletar um post inexistente, com um status http `404`:

```json
    {
      "message": "Post does not exist"
    }
```

  + Response de validação ao tentar deletar um post se o token for inexistente, com um status http `401`:

```json
    {
      "message": "Token not found"
    }
```

  + Response de validação ao tentar deletar um post se o token for inválido , com um status http `401`:

```json
    {
      "message": "Expired or invalid token"
    }
```

#### Deletar meu usuário
```bash
  DELETE /user/me
```

  + Se o meu usuário  for deletado com sucesso, retorna-se apenas um status http `204`.

  + Response de validação ao tentar deletar meu usuário se o token for inexistente, com um status http `401`:

```json
    {
      "message": "Token not found"
    }
```

  + Response de validação ao tentar deletar meu usuário se o token for inválido , com um status http `401`:

```json
    {
      "message": "Expired or invalid token"
    }
```

#### Buscar todos os blogposts baseados no termo de pesquisa
```bash
  GET /post/search?q=:searchTerm
```

  + Response se a busca pelo `title` for bem sucedida, com um status http `200`:
  
```json
    // GET /post/search?q=Vamos que vamos

    [
      {
        "id": 2,
        "title": "Vamos que vamos",
        "content": "Foguete não tem ré",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 2,
            "name": "Escola"
          }
        ]
      }
    ]
```

  + Response se a busca pelo `content` for bem sucedida, com um status http `200`:
  
```json
      // GET /post/search?q=Foguete não tem ré

      [
        {
          "id": 2,
          "title": "Vamos que vamos",
          "content": "Foguete não tem ré",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 2,
              "name": "Escola"
            }
          ]
        }
      ]
```

  + Response se a busca for um termo vazio e listar todos os posts com sucesso, com um status http `200`:
  
```json
      // GET /post/search?q=

      [
        {
          "id": 1,
          "title": "Post do Ano",
          "content": "Melhor post do ano",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 1,
              "name": "Inovação"
            }
          ]
        },
        
        /* ... */
      ]
```

  + Response se a busca for um post inexistente, com um status http `200`:
  
```json
      // GET /post/search?q=TERMOX

      []
```

  + Response de validação ao tentar realizar uma busca por um post se o token for inexistente, com um status http `401`:

```json
    {
      "message": "Token not found"
    }
```

  + Response de validação ao tentar realizar uma busca por um post se o token for inválido , com um status http `401`:

```json
    {
      "message": "Expired or invalid token"
    }
```
