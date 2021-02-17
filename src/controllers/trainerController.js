/**
 * Archivo controlador para las acciones de los usaurios.
 */
const controller = {};


/**
 * controller.list = (req,res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM trainer', (err, trainers) => {
            if(err){
                res.json(err);
            }
            console.log(trainers);
            
            res.render('trainers', {
                data: trainers
            },
            {
                tile: 'TRAINERS'
            });
        });
    });
};

 */

module.exports = controller;