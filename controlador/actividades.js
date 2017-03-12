//productos controller
module.exports = {

    postActividadesCrear: function(req, res, next) {
        console.log(req.body);
        var actividades = {
            nombre: req.body.nombre
        };

        req.getConnection((err, connection) => {
            connection.query('insert into  actividades SET ?', actividades, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        actividades: rows
                    });
            });
        });

    },

    //funciones del controlador
    getActividadesList: function(req, res, next) {

        req.getConnection((err, connection) => {
            connection.query('SELECT * FROM actividades', (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        actividades: rows
                    });
            });
        });

    },

    getActividadesListId: function(req, res, next) {
        var id = req.body.id_actividades;

        req.getConnection((err, connection) => {
            connection.query('SELECT * FROM actividades where id_actividades = ?', id, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        actividades: rows
                    });
            });
        });
    },

    putActividadesId: function(req, res, next) {
        var id = req.body.id_actividades;
        var actividades = {
            nombre: req.body.nombre
        };

        req.getConnection((err, connection) => {
            connection.query('update actividades set ? where id_actividades = ?', [actividades, id], (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        actividades: rows
                    });
            });
        });

    },

    deleteActividadesId: function(req, res, next) {
        var id = req.body.id_actividades;

        req.getConnection((err, connection) => {
            connection.query('delete from actividades where id_actividades = ?', id, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        actividades: rows
                    });
            });
        });

    }

}