const ReportAccident = require('../models/ReportAccident');
require('dotenv').config();

module.exports = {
  async getReportedAccidents(req, res) {
    try {

      const reportedAccidents = await ReportAccident.find({})

      return res.status(200).json({ reportedAccidents })
    } catch (error) {
      return res.status(400).json({ error: "Falha ao buscar acidentes repostados" })
    }
  },

  async getAccident(req, res) {
    try {
      const reportedAccidents = await ReportAccident.findById(req.params.idAccident)
      if(!reportedAccidents){
        return res.status(404).json({ error: "Acidente não encontrado" })
      }
      return res.status(200).json({ reportedAccidents })
    } catch (error) {
      return res.status(400).json({ error: "Acidente não encontrado" })
    }
  },
  async reportNewAccident(req, res) {
    const id_user = req.id_user

    try {

      const accident = await ReportAccident.create({ ...req.body, id_user });

      return res.status(200).json({ accident })
    } catch (error) {
      return res.status(400).json({ error: "Falha ao criar reportar acidante" })
    }
  },
}