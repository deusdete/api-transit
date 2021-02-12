## API TRANSIT

<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Rest API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
</p>

<br>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Push Notification](https://docs.expo.io/push-notifications/sending-notifications/)

Hospedagem

- [Heroku](https://www.heroku.com/home)

## 💻 Projeto

O servidor da aplicação foi construído com NodeJS, utilizando-se do framework Express, seguindo um padrão de APIs REST. A troca de informações dos usuários entre o frontend e o backend são encriptadas com o padrão de transmissão JWT.

## Rest API

### Login

#### Request

`POST /auth/login/`

    curl -i -H 'Accept: application/json' http://localhost:3333/login/
            -d 'email=admin@transit.com&password=123456'

#### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    {
      "user": {
        "type": [
          "motorista",
          "pedestre",
          "ciclista"
        ],
        "_id": "60227bdbf03b2f0260d376af",
        "name": "Transit",
        "location": "Rua Maria do Carmo 104, Sobreira, Afogados da Ingazeira",
        "age": "2020-02-09T00:00:00.000Z",
        "email": "admin@transit.com",
        "createAt": "2021-02-09T12:11:07.279Z",
        "__v": 0
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjI3YmRiZjAzYjJmMDI2MGQzNzZhZiIsImlhdCI6MTYxMzEzODQ0NiwiZXhwIjoxNjEzMjI0ODQ2fQ.QoBk1fcsc6-VW_MXJgR5gJ043KzrFbs4VvZUzWUNcJw"
    }

### Register

#### Request

`POST /auth/register/`

    curl -i -H 'Accept: application/json' http://localhost:3333//auth/register/
            -d "name": "Transit"&"type": ["motorista", "pedestre", "ciclista"]&"location": "Rua Maria do Carmo 104, Sobreira, Afogados da Ingazeira",&"age": "2020-02-09",&"email": "admin@transit.com",&"password": "123456"

#### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    {
      "user": {
        "type": [
          "motorista",
          "pedestre",
          "ciclista"
        ],
        "_id": "60227bdbf03b2f0260d376af",
        "name": "Transit",
        "location": "Rua Maria do Carmo 104, Sobreira, Afogados da Ingazeira",
        "age": "2020-02-09T00:00:00.000Z",
        "email": "admin@transit.com",
        "createAt": "2021-02-09T12:11:07.279Z",
        "__v": 0
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjI3YmRiZjAzYjJmMDI2MGQzNzZhZiIsImlhdCI6MTYxMjg3MjY2NywiZXhwIjoxNjEyOTU5MDY3fQ.QQ4ijHAK3hPyCOeCeyrsq2DLOgdgpROoiwri_wvRkg8"
    }

### Todas as todas

#### Request

###### /accidents
###### /accidents/:idAccident
###### /accidents
###### /accidents/:idAccident/confirmation
###### /accidents/:idAccident
###### /infringements
###### /infringements/:idInfringement
###### /infringements
###### /infringements/:idInfringement/confirmation
###### /infringements/:idInfringement
###### /notifications/tokens
###### /notifications/tokens/:pushToken
###### /notifications


## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Transit
