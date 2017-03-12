//productos controller
module.exports = {

    postArbolEstadoCrear: function(req, res, next) {
        var arbol_estado = {
            arbol_id: req.body.arbol_id,
            estado_id: req.body.estado_id,
            cambio_estado_fecha: req.body.cambio_estado_fecha
        };

        req.getConnection((err, connection) => {
            connection.query('insert into  arbol_estado SET ?', arbol_estado, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        arbol_estado: rows
                    });
            });
        });

    },

    //funciones del controlador
    getArbolEstadoList: function(req, res, next) {

        req.getConnection((err, connection) => {
            connection.query('SELECT * FROM arbol_estado', (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        arbol_estado: rows
                    });
            });
        });

    },

    getArbolEstadoListId: function(req, res, next) {
        var fecha = req.body.cambio_estado_fecha;
        var arbol_id = req.body.arbol_id;
        var estado_id = req.body.estado_id;

        req.getConnection((err, connection) => {
            connection.query('select * from reforest.arbol_estado where cambio_estado_fecha = ? or arbol_id = ? or estado_id = ?', [fecha, arbol_id, estado_id], (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        arbol_estado: rows
                    });
            });
        });
    },

    putArbolEstadoId: function(req, res, next) {
        var id = req.body.arbol_id;
        var arbol_estado = {
            arbol_id: req.body.arbol_id,
            estado_id: req.body.estado_id,
            cambio_estado_fecha: req.body.cambio_estado_fecha
        };
        req.getConnection((err, connection) => {
            connection.query('update arbol_estado set ? where arbol_id = ? ', [arbol_estado, id], (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        arbol_estado: rows
                    });
            });
        });

    },

    deleteArbolEstadoId: function(req, res, next) {
        var id = req.body.arbol_id;

        req.getConnection((err, connection) => {
            connection.query('delete from arbol_estado where arbol_id = ?', id, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        arbol_estado: rows
                    });
            });
        });

    }

}