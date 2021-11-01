const express = require('express');
const avaController = require('../../../controllers/api/v1/tours/avaController')

const router = express.Router();

router.get('/', avaController.getAllAvailabilities);
router.get('/:id', avaController.getAvailability);
router.post('/', avaController.createAvailability);
router.patch('/:id', avaController.updateAvailability);
router.delete('/:id', avaController.deleteAvailability);

module.exports = router;