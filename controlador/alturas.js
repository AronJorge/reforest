//productos controller
//altura 
module.exports = {

        postAlturaCrear: function(req, res, next) {
            var altura = {
                medidas: req.body.medidas
            };

            req.getConnection((err, connection) => {
                connection.query('insert into  altura SET ?', altura, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            altura: rows
                        });
                });
            });

        },

        //funciones del controlador
        getAlturaList: function(req, res, next) {

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM altura', (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            altura: rows
                        });
                });
            });

        },

        getAlturaListId: function(req, res, next) {
            var id = req.body.id_altura;

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM altura where id_altura = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            altura: rows
                        });
                });
            });
        },

        putAlturaId: function(req, res, next) {
            var id = req.body.id_altura;
            var altura = {
                medidas: req.body.medidas
            };

            req.getConnection((err, connection) => {
                connection.query('update altura set ? where id_altura = ?', [altura, id], (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            altura: rows
                        });
                });
            });

        },

        deleteAlturaId: function(req, res, next) {
            var id = req.body.id_altura;

            req.getConnection((err, connection) => {
                connection.query('delete from altura where id_altura = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            altura: rows
                        });
                });
            });

        }

    }
    