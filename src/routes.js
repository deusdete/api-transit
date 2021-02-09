const express = require("express");
const router = express.Router();

const multer = require('multer');
const multerConfig = require('./config/multer')

const updateImage = multer(multerConfig)

const Authorization = require('./shared/Authorization')

const AuthController = require('./controllers/AuthController');
const ReportAccidentController = require("./controllers/ReportAccidentController");

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

router.get('/accidents', Authorization, ReportAccidentController.getReportedAccidents);
router.get('/accidents/:idAccident', Authorization, ReportAccidentController.getAccident);
router.post('/accidents', Authorization, updateImage.single('image'), ReportAccidentController.reportNewAccident);

module.exports = router;