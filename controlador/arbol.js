//productos controller
module.exports = {

    postArbolCrear: function(req, res, next) {
        var arbol = {
            lote_id: req.body.lote_id,
            coordenadas: req.body.coordenadas,
            fecha_id: req.body.fecha_id,
            altura_id: req.body.altura_id
        };

        req.getConnection((err, connection) => {
            connection.query('insert into  arbol SET ?', arbol, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        arbol: rows
                    });
            });
        });

    },

    //funciones del controlador
    getArbolList: function(req, res, next) {

        req.getConnection((err, connection) => {
            connection.query('SELECT * FROM arbol', (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        arbol: rows
                    });
            });
        });

    },

    getArbolListId: function(req, res, next) {
        var id = req.body.id_arbol;

        req.getConnection((err, connection) => {
            connection.query('SELECT * FROM arbol where id_arbol = ?', id, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        arbol: rows
                    });
            });
        });
    },

    putArbolId: function(req, res, next) {
        var id = req.body.id_arbol;
        var arbol = {
            lote_id: req.body.lote_id,
            coordenadas: req.body.coordenadas,
            fecha_id: req.body.fecha_id,
            altura_id: req.body.altura_id
        };

        req.getConnection((err, connection) => {
            connection.query('update arbol set ? where id_arbol = ?', [arbol, id], (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        arbol: rows
                    });
            });
        });

    },

    deleteArbolId: function(req, res, next) {
        var id = req.body.id_arbol;

        req.getConnection((err, connection) => {
            connection.query('delete from arbol where id_arbol = ?', id, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        arbol: rows
                    });
            });
        });

    }

}