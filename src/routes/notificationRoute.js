const router = require('express').Router();
const controller = require('../controllers/notificationController');

router.post('/',controller.createNotification);
router.get('/',controller.getNotifications);
router.delete('/:id',controller.deleteNotification);

module.exports = router;