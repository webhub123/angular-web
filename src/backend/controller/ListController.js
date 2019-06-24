const connection = require('../../../db_connection');

//retrieve list
exports.get_lists = (req, res) => {

    let query = ' SELECT * FROM list';

    connection.query(query, null,  (err, rows)  => {
        if(!err) {
            res.status(200).send(rows)
        }else {
			res.status(500).send(err.sqlMessage);
        }
    });
}

//retrieve list
exports.get_list = (req, res) => {

    let query = ' SELECT * FROM list WHERE id = '+req.params.id+' ';

    connection.query(query, null,  (err, rows)  => {
        if(!err) {
            res.status(200).send(rows)
        }else {
			res.status(500).send(err.sqlMessage);
        }
    });
}


//save new list
exports.store = (req, res) => {
      
    const { name, age , address } = req.body;

    const query_string = 'INSERT INTO list(name,age,address)'+
                'VALUES("'+name+'",'+age+',"'+address+'") ';

    connection.query(query_string, (err, rows) => {
        if(!err) {
            res.status(200).send( { status : 'success' } );
        }else {
            res.status(500).send( {'status' : 'error', 'message' : err});
        }
    });
}; 

//delete list by id
exports.delete = (req, res) => {

    const id = req.params.id;
    const query_string = ' DELETE FROM list WHERE id = "'+id+'" ';

    connection.query(query_string, (err, rows) => {
        if(!err) {
            res.status(200).send(rows);
        }else {
            res.status(500).send(err);
        }
    });

};

//update list by id
exports.update = (req, res) => {

    const id = req.params.id;
    const { name, age, address } = req.body[0];

    const query_string = 'UPDATE list SET '+
                            'name = "'+name+'", '+
                            'age = "'+age+'", '+
                            'address = "'+address+'" '+
                        'WHERE id = "'+id+'" ';

    connection.query(query_string, (err, rows) => {
        if(!err) {
            res.status(200).send(rows);
        }else {
            res.status(500).send(err);
        }
    });

};
