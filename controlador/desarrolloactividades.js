//productos controller
module.exports = {

    postDesarrolloActividadesCrear: function(req, res, next) {
        var desarrollo_actividades = {
            actividades_id: req.body.actividades_id,
            arbol_id: req.body.arbol_id,
            personas_id: req.body.personas_id,
            fecha: req.body.fecha,
            comentario: req.body.comentario,
            foto: req.body.foto
        };

        req.getConnection((err, connection) => {
            connection.query('insert into  desarrollo_actividades SET ?', desarrollo_actividades, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        desarrollo_actividades: rows
                    });
            });
        });

    },

    //funciones del controlador
    getDesarrolloActividadesList: function(req, res, next) {

        req.getConnection((err, connection) => {
            connection.query('SELECT * FROM desarrollo_actividades', (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        desarrollo_actividades: rows
                    });
            });
        });

    },

    getDesarrolloActividadesListId: function(req, res, next) {
        var id = req.body.id_desarrollo_actividades;

        req.getConnection((err, connection) => {
            connection.query('SELECT * FROM desarrollo_actividades where id_desarrollo_actividades = ?', id, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        desarrollo_actividades: rows
                    });
            });
        });
    },

    putDesarrolloActividadesId: function(req, res, next) {
        var id = req.body.id_desarrollo_actividades;
         var desarrollo_actividades = {
            actividades_id: req.body.actividades_id,
            arbol_id: req.body.arbol_id,
            personas_id: req.body.personas_id,
            fecha: req.body.fecha,
            comentario: req.body.comentario,
            foto: req.body.foto
        };
        req.getConnection((err, connection) => {
            connection.query('update desarrollo_actividades set ? where id_desarrollo_actividades = ?', [desarrollo_actividades, id], (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        desarrollo_actividades: rows
                    });
            });
        });

    },

    deleteDesarrolloActividadesId: function(req, res, next) {
        var id = req.body.id_desarrollo_actividades;

        req.getConnection((err, connection) => {
            connection.query('delete from desarrollo_actividades where id_desarrollo_actividades = ?', id, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        desarrollo_actividades: rows
                    });
            });
        });

    }

}