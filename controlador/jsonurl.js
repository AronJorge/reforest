var path = "https://reforest-reforest.rhcloud.com";
var json =
    [{
        Ejemplos_De_Transferencia: [{
            posts: [{
                urlEjemplo: "/ejemplo/listId",
                funcion: "Consulta por id, trae todos los registro del id y solo se envia un id en un json simple",
                Formato_envio_Datos: "{'id_data':1}"
            }, {
                urlEjemplo: "/ejemplo/",
                funcion:"Guarda los datos que se envian en un json simple",
                Formato_envio_Datos: "{'nombrevalor':'valor1','nombrevalor':'valor2','nombrevalor':'valor3'}"
            }],
            get: [{
                urlEjemplo: "/ejemplo/",
                funcion: "Consulta todos los datos",
                Forma_envio_Datos: "No se envian datos o prametros"
            }],
            put: [{
                urlEjemplo: "/ejemplo/",
                funcion: "Actualiza todos los datos enviado en un json simple por medio del id ",
                Forma_envio_Datos: "{id_data:1,'nombrevalor':'valor1','nombrevalor':'valor2','nombrevalor':'valor3'}"
            }],
            delete: [{
                urlEjemplo: "/ejemplo/",
                funcion: "Elimina todos datos identificado con la key enviada en un json simple ",
                Forma_envio_Datos: "{id_data:1}"
            }]
        },
        {Nota:"puede comunicarce al celular حᇂﮌᇂ)", celular:3007330068}
        
        ],
        personas: [{
            getLeerTodo: path + "/persona",
            postLeerUnId: path + "/persona/listid",
            postCrearUno: path + "/persona",
            putActualizarUnoId: path + "/persona",
            deleteUnoId: path + "/persona"
        }],

        departamentos: [{
            getLeerTodo: path + "/departamentos",
            postLeerUnId: path + "/departamentos/listid",
            postCrearUno: path + "/departamentos",
            putActualizarUnoId: path + "/departamentos",
            deleteUnoId: path + "/departamentos"
        }],

        municipios: [{
            getLeerTodo: path + "/municipios",
            postLeerUnId: path + "/municipios/listid",
            postCrearUno: path + "/municipios",
            putActualizarUnoId: path + "/municipios",
            deleteUnoId: path + "/municipios"
        }],

        lotes: [{
            getLeerTodo: path + "/lotes",
            postLeerUnId: path + "/lotes/listid",
            postCrearUno: path + "/lotes",
            putActualizarUnoId: path + "/lotes",
            deleteUnoId: path + "/lotes"
        }],

        alturas: [{
            getLeerTodo: path + "/alturas",
            postLeerUnId: path + "/alturas/listid",
            postCrearUno: path + "/alturas",
            putActualizarUnoId: path + "/alturas",
            deleteUnoId: path + "/alturas"
        }],

        actividades: [{
            getLeerTodo: path + "/actividades",
            postLeerUnId: path + "/actividades/listid",
            postCrearUno: path + "/actividades",
            putActualizarUnoId: path + "/actividades",
            deleteUnoId: path + "/actividades"
        }],

        estados: [{
            getLeerTodo: path + "/estados",
            postLeerUnId: path + "/estados/listid",
            postCrearUno: path + "/estados",
            putActualizarUnoId: path + "/estados",
            deleteUnoId: path + "/estados"
        }],

        especies: [{
            getLeerTodo: path + "/especies",
            postLeerUnId: path + "/especies/listid",
            postCrearUno: path + "/especies",
            putActualizarUnoId: path + "/especies",
            deleteUnoId: path + "/especies"
        }],

        roles: [{
            getLeerTodo: path + "/roles",
            postLeerUnId: path + "/roles/listid",
            postCrearUno: path + "/roles",
            putActualizarUnoId: path + "/roles",
            deleteUnoId: path + "/roles"
        }],

        fechas: [{
            getLeerTodo: path + "/fechas",
            postLeerUnId: path + "/fechas/listid",
            postCrearUno: path + "/fechas",
            putActualizarUnoId: path + "/fechas",
            deleteUnoId: path + "/fechas"
        }],

        arbol: [{
            getLeerTodo: path + "/arbol",
            postLeerUnId: path + "/arbol/listid",
            postCrearUno: path + "/arbol",
            putActualizarUnoId: path + "/arbol",
            deleteUnoId: path + "/arbol"

        }],

        arbolestado: [{
            getLeerTodo: path + "/arbolestado",
            postLeerUnId: path + "/arbolestado/listid",
            postCrearUno: path + "/arbolestado",
            putActualizarUnoId: path + "/arbolestado",
            deleteUnoId: path + "/arbolestado"
        }],

        especiesarbol: [{
            getLeerTodo: path + "/especiesarbol",
            postLeerUnId: path + "/especiesarbol/listid",
            postCrearUno: path + "/especiesarbol",
            putActualizarUnoId: path + "/especiesarbol",
            deleteUnoId: path + "/especiesarbol"
        }],

        desarrolloactividades: [{
            getLeerTodo: path + "/desarrolloactividades",
            postLeerUnId: path + "/desarrolloactividades/listid",
            postCrearUno: path + "/desarrolloactividades",
            putActualizarUnoId: path + "/desarrolloactividades",
            deleteUnoId: path + "/desarrolloactividades"
        }]
    }];



module.exports = {

    getJsonUrlList: function(req, res, next) {
        res.jsonp(json);
    }
}
