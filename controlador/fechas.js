//productos controller
module.exports = {

        postFechasCrear: function(req, res, next) {
            var fecha = {
                fecha: req.body.fecha
            };

            req.getConnection((err, connection) => {
                connection.query('insert into  fecha SET ?', fecha, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            fecha: rows
                        });
                });
            });

        },

        //funciones del controlador
        getFechasList: function(req, res, next) {

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM fecha', (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            fecha: rows
                        });
                });
            });

        },
/*
postFechasCrear
getFechasList
getFechasListId
putFechasId
deleteFechasId
*/
        getFechasListId: function(req, res, next) {
            var id = req.body.id_fecha;

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM fecha where id_fecha = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            fecha: rows
                        });
                });
            });
        },

        putFechasId: function(req, res, next) {
            var id = req.body.id_fecha;
            var fecha = {
                fecha: req.body.fecha
            };

            req.getConnection((err, connection) => {
                connection.query('update fecha set ? where id_fecha = ?', [fecha, id], (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            fecha: rows
                        });
                });
            });

        },

        deleteFechasId: function(req, res, next) {
            var id = req.body.id_fecha;

            req.getConnection((err, connection) => {
                connection.query('delete from fecha where id_fecha = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            fecha: rows
                        });
                });
            });

        }

    }
    