const list_controller = require('./controller/ListController');

const express = require('express');
const router = express.Router();

router.get('/api/lists', list_controller.get_lists); 
router.get('/api/list/:id', list_controller.get_list); 
router.post('/api/store', list_controller.store); 
router.delete('/api/delete/:id', list_controller.delete); 
router.put('/api/update/:id', list_controller.update); 

router.all('*', (req, res) => {
    res.status(404).send('Error 404');
});


module.exports = router;