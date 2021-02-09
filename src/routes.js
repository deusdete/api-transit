const express = require("express");
const router = express.Router();

const AuthController = require('./controllers/AuthController');
const ReportAccidentController = require("./controllers/ReportAccidentController");

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

router.get('/accidents', ReportAccidentController.getReportedAccidents);
router.get('/accidents/:idAccident', ReportAccidentController.getAccident);
router.post('/accidents', ReportAccidentController.reportNewAccident);

module.exports = router;