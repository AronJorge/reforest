//productos controller
module.exports = {

        postEstadosCrear: function(req, res, next) {
            var estado = {
                estado: req.body.estado
            };

            req.getConnection((err, connection) => {
                connection.query('insert into  estado SET ?', estado, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            estado: rows
                        });
                });
            });

        },

        //funciones del controlador
        getEstadosList: function(req, res, next) {

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM estado', (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            estado: rows
                        });
                });
            });

        },
    
        getEstadosListId: function(req, res, next) {
            var id = req.body.id_estado;

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM estado where id_estado = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            estado: rows
                        });
                });
            });
        },

        putEstadosId: function(req, res, next) {
            var id = req.body.id_estado;
            var estado = {
                estado: req.body.estado
            };

            req.getConnection((err, connection) => {
                connection.query('update estado set ? where id_estado = ?', [estado, id], (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            estado: rows
                        });
                });
            });

        },

        deleteEstadosId: function(req, res, next) {
            var id = req.body.id_estado;

            req.getConnection((err, connection) => {
                connection.query('delete from estado where id_estado = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            estado: rows
                        });
                });
            });

        }

    }
    