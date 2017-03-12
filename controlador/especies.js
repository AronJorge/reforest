//productos controller
module.exports = {

        postEspeciesCrear: function(req, res, next) {
            var especie = {
                especie: req.body.especie
            };

            req.getConnection((err, connection) => {
                connection.query('insert into  especie SET ?', especie, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            especie: rows
                        });
                });
            });

        },

        getEspeciesList: function(req, res, next) {

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM especie', (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            especie: rows
                        });
                });
            });

        },

        getEspeciesListId: function(req, res, next) {
            var id = req.body.id_especie;

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM especie where id_especie = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            especie: rows
                        });
                });
            });
        },

        putEspeciesId: function(req, res, next) {
            var id = req.body.id_especie;
            var especie = {
                especie: req.body.especie
            };

            req.getConnection((err, connection) => {
                connection.query('update especie set ? where id_especie = ?', [especie, id], (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            especie: rows
                        });
                });
            });

        },

        deleteEspeciesId: function(req, res, next) {
            var id = req.body.id_especie;

            req.getConnection((err, connection) => {
                connection.query('delete from especie where id_especie = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            especie: rows
                        });
                });
            });

        }

    }
    