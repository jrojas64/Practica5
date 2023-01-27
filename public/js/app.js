setTimeout(()=>{
    document.getElementById('title').innerHTML='Javascript & Express.js';
},3000);

app.set('nombreApp','Aplicacion para manejo de gastos SRI');
console.log(app.get('nombreApp'));