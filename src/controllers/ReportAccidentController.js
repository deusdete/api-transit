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
      return res.status(400).json({ error: "Falha ao obter acidente" });
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
    const { idAccident } = req.params;
    const id_user = req.id_user;

    try {
      const accident = await ReportAccident.findById(idAccident);
      if (!accident) {
        return res.status(404).json({ error: "Acidente não encontrado" });
      }

      const { confirmations } = accident;

      const hasConfirmation = confirmations.find(item => item == id_user )

      if(hasConfirmation){
        return res.status(404).json({ error: "Você já confirmou esse acidente" });
      }

      const accidentUpdated = await ReportAccident.updateOne({_id: idAccident}, {$push: {confirmations: id_user}})

      return res.status(200).json({ accidentUpdated });
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: "Falha ao confirma acidente" });
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
