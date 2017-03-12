//productos controller
module.exports = {

        postDepartamentoCrear: function(req, res, next) {
            var departamento = {
                nombre: req.body.nombre
            };

            req.getConnection((err, connection) => {
                connection.query('insert into  departamento SET ?', departamento, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            departamento: rows
                        });
                });
            });

        },

        //funciones del controlador
        getDepartamentoList: function(req, res, next) {

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM departamento', (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            departamento: rows
                        });
                });
            });

        },

        getDepartamentoListId: function(req, res, next) {
            var id = req.body.id_departamento;

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM departamento where id_departamento = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            departamento: rows
                        });
                });
            });
        },

        putDepartamentoId: function(req, res, next) {
            var id = req.body.id_departamento;
            var departamento = {
                nombre: req.body.nombre
            };

            req.getConnection((err, connection) => {
                connection.query('update departamento set ? where id_departamento = ?', [departamento, id], (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            departamento: rows
                        });
                });
            });

        },

        deleteDepartamentoId: function(req, res, next) {
            var id = req.body.id_departamento;

            req.getConnection((err, connection) => {
                connection.query('delete from departamento where id_departamento = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            departamento: rows
                        });
                });
            });

        }

    }
    