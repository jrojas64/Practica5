const express=require('express');
const app=express();
const port = 3000;
const morgan=require('morgan');

app.use(express.json());
app.use(morgan('dev'));
app.set('nombreApp','Aplicacion para manejo de gastos SRI');
app.set('puerto',4000);
app.set('view engine','ejs');
app.get('/misitio', (req,res)=>{
res.send('Bienvenido a mi sitio web: Jean Rojas')
});
app.get('/misitio/about', (req,res)=>{
    res.send('<h1>Acerca de nosotros</h1>');
    });
app.get('/misitio/gastos', (req,res)=>{
    res.json(
        {
        gasto:'Salud',
        monto:14575.60,
        informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
        }
        );
    });
app.post('/misitio/calculo', (req,res)=>{
    console.log(req.body);
    res.send('Cálculo impuesto a la renta');
    });
app.post('/misitio/usuario/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
});
app.put('/misitio/usuario/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Datos del usuario 678 actualizados');
});
app.delete('/misitio/usuario/:id', (req,res)=>{
    res.send('Usuario '+ (req.params.id) +' borrado');
});

function logger(req,res,next){
console.log('Ruta Recibida '+ req.protocol+'://'+req.get('host')+ req.originalUrl);
next();
}

app.listen(app.get('puerto'), ()=>{
console.log('Nombre de la App',app.get('nombreApp'));
console.log('Puerto del servidor',app.get('puerto'));
});

app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.use(express.static('public'));
console.log(app.get('nombreApp'));
app.listen(port, ()=>{
console.log('Servidor escuchando en el puerto ' + port);
});