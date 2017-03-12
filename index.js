var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var connection  = require('express-myconnection');
var mysql = require("mysql");
var app = express();
 
 var rutas = require('./rutas/rutas');
 var db = require('./configuracion/conexion');


app.set('port', (process.env.OPENSHIFT_NODEJS_PORT || 8080));
app.set('server_ip', (process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(connection(mysql, db.conf_reforest, 'request'));


app.get('/', function(request, response) {
    response.send('Esta funcionando');
});

app.use('/persona',rutas.personas);
app.use('/departamentos',rutas.departamentos);
app.use('/municipios',rutas.municipios);
app.use('/lotes',rutas.lotes);
app.use('/alturas',rutas.alturas);
app.use('/actividades',rutas.actividades);
app.use('/estados',rutas.estados);
app.use('/especies',rutas.especies);
app.use('/roles',rutas.roles);
app.use('/fechas',rutas.fechas);
app.use('/arbol',rutas.arbol);
app.use('/arbolestado',rutas.arbolestado);
app.use('/especiesarbol',rutas.especiesarbol);
app.use('/desarrolloactividades',rutas.desarrolloactividades);
app.use('/rutas',rutas.jsonurl);


app.listen(app.get('port'), app.get('server_ip'), function() {
    console.log('Corre en', app.get('server_ip'), ':', app.get('port'));
});
