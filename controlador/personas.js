//productos controller
module.exports = {

        postPersonaCrear: function(req, res, next) {
            var persona = {
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                fecha_nacimiento: req.body.fecha_nacimiento,
                genero: req.body.genero,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                municipio_id: req.body.municipio_id
            };

            req.getConnection((err, connection) => {
                connection.query('insert into  personas SET ?', persona, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            personas: rows
                        });
                });
            });

        },

        //funciones del controlador
        getPersonasList: function(req, res, next) {

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM personas', (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            personas: rows
                        });
                });
            });

        },

        getPersonasListId: function(req, res, next) {
            var id = req.body.id_personas;

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM personas where id_personas = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            personas: rows
                        });
                });
            });
        },

        putPersonasId: function(req, res, next) {
            var id = req.body.id_personas;
            var persona = {
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                fecha_nacimiento: req.body.fecha_nacimiento,
                genero: req.body.genero,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                municipio_id: req.body.municipio_id
            };

            req.getConnection((err, connection) => {
                connection.query('update personas set ? where id_personas = ?', [persona, id], (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            personas: rows
                        });
                });
            });

        },

        deletePersonasId: function(req, res, next) {
            var id = req.body.id_personas;

            req.getConnection((err, connection) => {
                connection.query('delete from personas where id_personas = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            personas: rows
                        });
                });
            });

        }

    }
    /*
    postPersonaCrear
    getPersonasList
    getPersonasListId
    putPersonasId
    deletePersonasId
    */