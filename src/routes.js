const express = require("express");
const router = express.Router();

const multer = require('multer');
const multerConfig = require('./config/multer')

const updateImage = multer(multerConfig)

const Authorization = require('./shared/Authorization')

const AuthController = require('./controllers/AuthController');
const ReportAccidentController = require("./controllers/ReportAccidentController");
const ReportInfringementController = require("./controllers/ReportInfringementController");

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

router.get('/accidents', Authorization, ReportAccidentController.getReportedAccidents);
router.get('/accidents/:idAccident', Authorization, ReportAccidentController.getAccident);
router.post('/accidents', Authorization, updateImage.single('image'), ReportAccidentController.reportNewAccident);
router.post('/accidents/:idAccident/confirmation', Authorization, ReportAccidentController.confirmationAccident);
router.delete('/accidents/:idAccident', Authorization, ReportAccidentController.deleteAccident);

router.get('/infringements', Authorization, ReportInfringementController.getReportedInfringements);
router.get('/infringements/:idInfringement', Authorization, ReportInfringementController.getInfringement);
router.post('/infringements', Authorization, updateImage.single('image'), ReportInfringementController.reportNewInfringement);
router.post('/infringements/:idInfringement/confirmation', Authorization, ReportInfringementController.confirmationInfringement);
router.delete('/infringements/:idInfringement', Authorization, ReportInfringementController.deleteInfringement);

module.exports = router;