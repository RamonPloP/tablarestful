**Api Rest Cal**

![img_api](https://github.com/RamonPloP/tablarestful/assets/94577562/1bb76f9e-c7fa-412c-a80d-e272730917b5)


**Description**
This project is a simple example about API RESTful, with the http methods: GET, POST, PUT, PATCH, DELETE. Works with Express and what the code do is to run a local server and show us a message 
depending the route that we give it.

**Users Guide**
To run this project we just need to have installed Postman to use the HTTP Methods on the API, after use postman we need to run the server, for this just execute the command "node index.js" on the 
route of the file and it will be working, then just open postman and put the server route "http://localhost:4000/results/" and select the method to use, we need to 
give it two parameters separated by a "/" being number if we go to use GET or DELETE methods, if we go to use POST, PUT or PATCH we need to give the parameters by body, for this just enter into section body on Postman and write them as a JSON file selecting Body-raw and type as JSON, write the arguments as "n1" and "n2", and the response will be the addition, subtraction, multiplication, division or power depending the method we use:

    GET /results/:n1/:n2 -> Addition n1 + n2
    POST /results/ -> Multiplication n1 * n2
    PUT /results/ -> Division n1 / n2
    PATCH /results/ -> Power n1 ^ n2
    DELETE /results/:n1/:n2 -> Substraccion n1 - n2


**Instalation Guide**
We need to install two things:
- Node JS.- Just write "apt install nodejs" in the terminal en it will be installed automatically

**Autor**
  Ramón Reyna García, Student from Universidad Autónoma de Chihuahua

**License**
This project is not licensed
