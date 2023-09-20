**Api Rest Cal**

![img_api](https://github.com/RamonPloP/tablarestful/assets/94577562/1bb76f9e-c7fa-412c-a80d-e272730917b5)


**Description**
This project is a simple example about API RESTful, with the http methods: GET, POST, PUT, PATCH, DELETE. Works with Express and what the code do is to run a local server and show us a message 
depending the route that we give it.

**Users Guide**
To run this project we just need to have installed Postman to use the HTTP Methods on the API, after use postman we need to run the server, for this just execute the command "node index.js" on the 
route of the file and it will be working, then just open postman and put the server route "http://localhost:4000/results/(number 1)/(number 2)" and select the method to use, we need to 
give it two parameters separated by a "/" being number, and the response will be the addition, subtraction, multiplication, division or power depending the method we use:

    GET /results/:n1/:n2 -> Addition n1 + n2
    POST /results/:n1/:n2 -> Multiplication n1 * n2
    PUT /results/:n1/:n2 -> Division n1 / n2
    PATCH /results/:n1/:n2 -> Power n1 ^ n2
    DELETE /results/:n1/:n2 -> Substraccion n1 - n2


**Instalation Guide**
We need to install two things:
- Node JS.- Just write "apt install nodejs" in the terminal en it will be installed automatically

**Autor**
  Ramón Reyna García, Student from Universidad Autónoma de Chihuahua

**License**
This project is not licensed
