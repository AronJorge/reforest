//productos controller
//INSERT INTO `reforest`.`especie_arbol` (`especie_id`, `arbol_id`, `cambio_especie_fecha`) VALUES ('2', '2', '2017-04-07 08:02:22');
module.exports = {

    postEspeciesArbolCrear: function(req, res, next) {
        var especie_arbol = {
            especie_id: req.body.especie_id,
            arbol_id: req.body.arbol_id,
            cambio_especie_fecha: req.body.cambio_especie_fecha
        };

        req.getConnection((err, connection) => {
            connection.query('insert into  especie_arbol SET ?', especie_arbol, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        especie_arbol: rows
                    });
            });
        });

    },

    //funciones del controlador
    getEspeciesArbolList: function(req, res, next) {

        req.getConnection((err, connection) => {
            connection.query('SELECT * FROM especie_arbol', (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        especie_arbol: rows
                    });
            });
        });

    },

    getEspeciesArbolListId: function(req, res, next) {
        var id = req.body.arbol_id;

        req.getConnection((err, connection) => {
            connection.query('SELECT * FROM especie_arbol where arbol_id = ?', id, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        especie_arbol: rows
                    });
            });
        });
    },

    putEspeciesArbolId: function(req, res, next) {
        var id = req.body.arbol_id;
        var especie_arbol = {
            especie_id: req.body.especie_id,
            arbol_id: req.body.arbol_id,
            cambio_especie_fecha: req.body.cambio_especie_fecha
        };

        req.getConnection((err, connection) => {
            connection.query('update especie_arbol set ? where arbol_id = ?', [especie_arbol, id], (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        especie_arbol: rows
                    });
            });
        });

    },

    deleteEspeciesArbolId: function(req, res, next) {
        var id = req.body.arbol_id;

        req.getConnection((err, connection) => {
            connection.query('delete from especie_arbol where arbol_id = ?', id, (err, rows, sta) => {

                if (err) {
                    res.send(err);
                } else
                    res.send({
                        especie_arbol: rows
                    });
            });
        });

    }

}