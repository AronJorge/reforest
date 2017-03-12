//productos controller
/*
postLotesCrear
getLotesList
getLotesListId
putLotesId
deleteLotesId
*/
module.exports = {

        postLotesCrear: function(req, res, next) {
            var lote = {
                nombre: req.body.nombre,
                fecha: req.body.fecha,
                area: req.body.area,
                municipio_id: req.body.municipio_id
            };

            req.getConnection((err, connection) => {
                connection.query('insert into  lote SET ?', lote, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            lote: rows
                        });
                });
            });

        },

        //funciones del controlador
        getLotesList: function(req, res, next) {

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM lote', (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            lote: rows
                        });
                });
            });

        },

        getLotesListId: function(req, res, next) {
            var id = req.body.id_lote;

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM lote where id_lote = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            lote: rows
                        });
                });
            });
        },

        putLotesId: function(req, res, next) {
            var id = req.body.id_lote;
              var lote = {
                nombre: req.body.nombre,
                fecha: req.body.fecha,
                area: req.body.area,
                municipio_id: req.body.municipio_id
            };


            req.getConnection((err, connection) => {
                connection.query('update lote set ? where id_lote = ?', [lote, id], (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            lote: rows
                        });
                });
            });

        },

        deleteLotesId: function(req, res, next) {
            var id = req.body.id_lote;

            req.getConnection((err, connection) => {
                connection.query('delete from lote where id_lote = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            lote: rows
                        });
                });
            });

        }

    }
    