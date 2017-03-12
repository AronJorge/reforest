//productos controller
module.exports = {

        postRolesCrear: function(req, res, next) {
            var roles = {
                roles: req.body.roles
            };

            req.getConnection((err, connection) => {
                connection.query('insert into  roles SET ?', roles, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            roles: rows
                        });
                });
            });

        },

        //funciones del controlador
        getRolesList: function(req, res, next) {

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM roles', (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            roles: rows
                        });
                });
            });

        },

        getRolesListId: function(req, res, next) {
            var id = req.body.id_roles;

            req.getConnection((err, connection) => {
                connection.query('SELECT * FROM roles where id_roles = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            roles: rows
                        });
                });
            });
        },

        putRolesId: function(req, res, next) {
            var id = req.body.id_roles;
            var roles = {
                roles: req.body.roles
            };

            req.getConnection((err, connection) => {
                connection.query('update roles set ? where id_roles = ?', [roles, id], (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            roles: rows
                        });
                });
            });

        },

        deleteRolesId: function(req, res, next) {
            var id = req.body.id_roles;

            req.getConnection((err, connection) => {
                connection.query('delete from roles where id_roles = ?', id, (err, rows, sta) => {

                    if (err) {
                        res.send(err);
                    } else
                        res.send({
                            roles: rows
                        });
                });
            });

        }

    }
    