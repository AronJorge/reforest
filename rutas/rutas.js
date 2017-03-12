var express = require('express');
var PersonaMetodos = require('../controlador/personas');
var DepartamentoMetodos = require('../controlador/departamento');
var MunicipioMetodos = require('../controlador/municipios');
var LotesMetodos = require('../controlador/lotes');
var AlturaMetodos = require('../controlador/alturas');
var ActividadesMetodos = require('../controlador/actividades');
var EstadosMetodos = require('../controlador/estados');
var EspeciesMetodos = require('../controlador/especies');
var RolesMetodos = require('../controlador/roles');
var FechasMetodos = require('../controlador/fechas');
var ArbolMetodos = require('../controlador/arbol');
var ArbolEstadoMetodos = require('../controlador/arbolestados');
var EspeciesArbolMetodos = require('../controlador/especiesarbol');
var DesarrolloActividadesMetodos = require('../controlador/desarrolloactividades');
var JsonUrlMetodos = require('../controlador/jsonurl');

var personas = express.Router();
personas.post("/", PersonaMetodos.postPersonaCrear);
personas.get("/", PersonaMetodos.getPersonasList);
personas.post("/listid", PersonaMetodos.getPersonasListId);
personas.put("/", PersonaMetodos.putPersonasId);
personas.delete("/", PersonaMetodos.deletePersonasId);
module.exports.personas = personas;



var departamento = express.Router();
departamento.post("/", DepartamentoMetodos.postDepartamentoCrear);
departamento.get("/", DepartamentoMetodos.getDepartamentoList);
departamento.post("/listid", DepartamentoMetodos.getDepartamentoListId);
departamento.put("/", DepartamentoMetodos.putDepartamentoId);
departamento.delete("/", DepartamentoMetodos.deleteDepartamentoId);
module.exports.departamentos = departamento;


var municipio = express.Router();
municipio.post("/", MunicipioMetodos.postMunicipioCrear);
municipio.get("/", MunicipioMetodos.getMunicipioList);
municipio.post("/listid", MunicipioMetodos.getMunicipioListId);
municipio.put("/", MunicipioMetodos.putMunicipioId);
municipio.delete("/", MunicipioMetodos.deleteMunicipioId);
module.exports.municipios = municipio;


var lotes = express.Router();
lotes.post("/", LotesMetodos.postLotesCrear);
lotes.get("/", LotesMetodos.getLotesList);
lotes.post("/listid", LotesMetodos.getLotesListId);
lotes.put("/", LotesMetodos.putLotesId);
lotes.delete("/", LotesMetodos.deleteLotesId);
module.exports.lotes = lotes;



var altura = express.Router();
altura.post("/", AlturaMetodos.postAlturaCrear);
altura.get("/", AlturaMetodos.getAlturaList);
altura.post("/listid", AlturaMetodos.getAlturaListId);
altura.put("/", AlturaMetodos.putAlturaId);
altura.delete("/", AlturaMetodos.deleteAlturaId);
module.exports.alturas = altura;


var actividades = express.Router();
actividades.post("/", ActividadesMetodos.postActividadesCrear);
actividades.get("/", ActividadesMetodos.getActividadesList);
actividades.post("/listid", ActividadesMetodos.getActividadesListId);
actividades.put("/", ActividadesMetodos.putActividadesId);
actividades.delete("/", ActividadesMetodos.deleteActividadesId);
module.exports.actividades = actividades;


var estados = express.Router();
estados.post("/", EstadosMetodos.postEstadosCrear);
estados.get("/", EstadosMetodos.getEstadosList);
estados.post("/listid", EstadosMetodos.getEstadosListId);
estados.put("/", EstadosMetodos.putEstadosId);
estados.delete("/", EstadosMetodos.deleteEstadosId);
module.exports.estados = estados;



var especies = express.Router();
especies.post("/", EspeciesMetodos.postEspeciesCrear);
especies.get("/", EspeciesMetodos.getEspeciesList);
especies.post("/listid", EspeciesMetodos.getEspeciesListId);
especies.put("/", EspeciesMetodos.putEspeciesId);
especies.delete("/", EspeciesMetodos.deleteEspeciesId);
module.exports.especies = especies;



var roles = express.Router();
roles.post("/", RolesMetodos.postRolesCrear);
roles.get("/", RolesMetodos.getRolesList);
roles.post("/listid", RolesMetodos.getRolesListId);
roles.put("/", RolesMetodos.putRolesId);
roles.delete("/", RolesMetodos.deleteRolesId);
module.exports.roles = roles;


var fechas = express.Router();
fechas.post("/", FechasMetodos.postFechasCrear);
fechas.get("/", FechasMetodos.getFechasList);
fechas.post("/listid", FechasMetodos.getFechasListId);
fechas.put("/", FechasMetodos.putFechasId);
fechas.delete("/", FechasMetodos.deleteFechasId);
module.exports.fechas = fechas;


var fechas = express.Router();
fechas.post("/", FechasMetodos.postFechasCrear);
fechas.get("/", FechasMetodos.getFechasList);
fechas.post("/listid", FechasMetodos.getFechasListId);
fechas.put("/", FechasMetodos.putFechasId);
fechas.delete("/", FechasMetodos.deleteFechasId);
module.exports.fechas = fechas;



var arbol = express.Router();
arbol.post("/", ArbolMetodos.postArbolCrear);
arbol.get("/", ArbolMetodos.getArbolList);
arbol.post("/listid", ArbolMetodos.getArbolListId);
arbol.put("/", ArbolMetodos.putArbolId);
arbol.delete("/", ArbolMetodos.deleteArbolId);
module.exports.arbol = arbol;



var arbolestado = express.Router();
arbolestado.post("/", ArbolEstadoMetodos.postArbolEstadoCrear);
arbolestado.get("/", ArbolEstadoMetodos.getArbolEstadoList);
arbolestado.post("/listid", ArbolEstadoMetodos.getArbolEstadoListId);
arbolestado.put("/", ArbolEstadoMetodos.putArbolEstadoId);
arbolestado.delete("/", ArbolEstadoMetodos.deleteArbolEstadoId);
module.exports.arbolestado = arbolestado;



var especiesarbol = express.Router();
especiesarbol.post("/", EspeciesArbolMetodos.postEspeciesArbolCrear);
especiesarbol.get("/", EspeciesArbolMetodos.getEspeciesArbolList);
especiesarbol.post("/listid", EspeciesArbolMetodos.getEspeciesArbolListId);
especiesarbol.put("/", EspeciesArbolMetodos.putEspeciesArbolId);
especiesarbol.delete("/", EspeciesArbolMetodos.deleteEspeciesArbolId);
module.exports.especiesarbol = especiesarbol;



var desarrolloactividades = express.Router();
desarrolloactividades.post("/", DesarrolloActividadesMetodos.postDesarrolloActividadesCrear);
desarrolloactividades.get("/", DesarrolloActividadesMetodos.getDesarrolloActividadesList);
desarrolloactividades.post("/listid", DesarrolloActividadesMetodos.getDesarrolloActividadesListId);
desarrolloactividades.put("/", DesarrolloActividadesMetodos.putDesarrolloActividadesId);
desarrolloactividades.delete("/", DesarrolloActividadesMetodos.deleteDesarrolloActividadesId);
module.exports.desarrolloactividades = desarrolloactividades;



var jsonurl = express.Router();
jsonurl.get("/", JsonUrlMetodos.getJsonUrlList);
module.exports.jsonurl = jsonurl;



