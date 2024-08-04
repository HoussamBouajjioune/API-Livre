const LivreContr = require("../controllers/livre");
var router = require("express").Router();

router.get('/all', LivreContr.getall);
router.get('/:id', LivreContr.findOne);
router.post('/add', LivreContr.add);
router.put('/update/:id', LivreContr.update);
router.delete('/delete/:id', LivreContr.delete);
module.exports = router;