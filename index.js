const express = require('express');

const app = express();

app.get('/results/:n1/:n2', (req,res)=> {
    res.send('Suma = '+(parseInt(req.params.n1,10)+parseInt(req.params.n2,10)));
});

app.post('/results/:n1/:n2', (req,res)=>{
    res.send('Multiplicacion = '+(parseInt(req.params.n1,10)*parseInt(req.params.n2,10)));
});

app.put('/results/:n1/:n2', (req,res)=>{
    res.send('Division = '+(parseInt(req.params.n1,10)/parseInt(req.params.n2,10)));
});

app.patch('/results/:n1/:n2', (req,res)=>{
    res.send('Potencia = '+(Math.pow(parseInt(req.params.n1,10),parseInt(req.params.n2,10))));
});

app.delete('/results/:n1/:n2', (req,res)=>{
    res.send('Resta = '+(parseInt(req.params.n1,10)-parseInt(req.params.n2,10)));
});

app.listen(4000, ()=>{
    console.log('Server running on port 4000');
})