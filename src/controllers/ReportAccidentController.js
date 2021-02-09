const ReportAccident = require("../models/ReportAccident");
require("dotenv").config();

module.exports = {
  async getReportedAccidents(req, res) {
    try {
      const reportedAccidents = await ReportAccident.find({});

      return res.status(200).json({ reportedAccidents });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Falha ao buscar acidentes repostados" });
    }
  },

  async getAccident(req, res) {
    try {
      const reportedAccidents = await ReportAccident.findById(
        req.params.idAccident
      );
      if (!reportedAccidents) {
        return res.status(404).json({ error: "Acidente não encontrado" });
      }
      return res.status(200).json({ reportedAccidents });
    } catch (error) {
      return res.status(400).json({ error: "Acidente não encontrado" });
    }
  },
  async reportNewAccident(req, res) {
    const { description, location } = req.body;
    const id_user = req.id_user;

    try {
      const accidentFields = {
        image: req.file.filename,
        description,
        location,
        reported_by: id_user,
      };

      const accident = await ReportAccident.create(accidentFields);

      return res.status(200).json({ accident });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Falha ao criar reportar acidante" });
    }
  },
  async confirmationAccident(req, res) {
    const 
    const { idAccident } = req.params;
    const id_user = req.id_user;

    try {
      const accidentFields = {
        image: req.file.filename,
        description,
        location,
        reported_by: id_user,
      };

      const accident = await ReportAccident.create(accidentFields);

      return res.status(200).json({ accident });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Falha ao criar reportar acidante" });
    }
  },
  async deleteAccident(req, res) {
    const { idAccident } = req.params

    try {
        
      if (!await ReportAccident.findById(idAccident)) {
        return res.status(404).json({ error: 'Acidente não existe' });
      }

      await ReportAccident.deleteOne({_id: idAccident});

      return res.status(200).json({mensagem: "Acidente apagada com sucesso"})
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: "Falha ao apagar Acidente" })
    }
  },
};
