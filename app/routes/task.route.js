const express = require('express');

const router = express.Router();

const TaskController = require('../controller/task.controller');


const UserAuthCheck = require('../middleware/AdminAuthCheck')
const RoleAuthCheck = require('../middleware/roleAuthCheck');


const TaskImage = require('../utils/cloudinary');



router.get('/', UserAuthCheck, RoleAuthCheck('admin', 'manager'), TaskController.alltask);
router.get('/owntask', UserAuthCheck, RoleAuthCheck('employee'), TaskController.ownTask); 
router.get('/:id', UserAuthCheck, RoleAuthCheck('employee','manager'), TaskController.taskById);

router.post('/', UserAuthCheck, RoleAuthCheck('manager'), TaskImage.single('attachments'), TaskController.taskCreate);

router.put('/:id', UserAuthCheck, RoleAuthCheck('admin', 'employee'), TaskImage.single('attachments'), TaskController.taskUpdate);

router.delete('/:id', UserAuthCheck, RoleAuthCheck('admin'), TaskController.deleteTask);

router.patch('/status/:id', UserAuthCheck, RoleAuthCheck('manager', 'employee'), TaskController.updateTaskStatus);
router.patch('/assign/:id', UserAuthCheck, RoleAuthCheck('manager'), TaskController.updateTaskAssign);

router.get('/search', TaskController.searchTask);




module.exports = router;