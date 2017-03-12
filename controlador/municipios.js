

module.exports = {

        postMunicipioCrear: function(req, res, next) {
            var municipio = {
                nombre: req.body.nombre,
                departamento_id: req.body.departamento_id
            };

            req.getConnection((err, connection) => {
                connection.query('insert into  municipio SET ?', municipio, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            municipio: rows
                        });
                });
            });

        },

        //funciones del controlador
        getMunicipioList: function(req, res, next) {

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM municipio', (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            municipio: rows
                        });
                });
            });

        },

        getMunicipioListId: function(req, res, next) {
            var id = req.body.id_municipio;

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM municipio where id_municipio = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            municipio: rows
                        });
                });
            });
        },

        putMunicipioId: function(req, res, next) {
            var id = req.body.id_municipio;
            console.log(id);
            var municipio = {
                nombre: req.body.nombre,
                departamento_id: req.body.departamento_id
            };
            console.log(municipio);

            req.getConnection((err, connection) => {
                connection.query('update municipio set ? where id_municipio = ?', [municipio, id], (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            municipio: rows
                        });
                });
            });

        },

        deleteMunicipioId: function(req, res, next) {
            var id = req.body.id_municipio;

            req.getConnection((err, connection) => {
                connection.query('delete from municipio where id_municipio = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            municipio: rows
                        });
                });
            });

        }

    }
