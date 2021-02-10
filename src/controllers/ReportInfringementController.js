const ReportInfringement = require("../models/ReportInfringement");
require("dotenv").config();

module.exports = {
  async getReportedInfringements(req, res) {
    try {
      const reportedInfringements = await ReportInfringement.find({});

      return res.status(200).json({ reportedInfringements });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Falha ao buscar infrações já postadas" });
    }
  },
  async getInfringement(req, res) {
    try {
      const reportedInfringement = await ReportInfringement.findById(
        req.params.idInfringement
      );
      if (!reportedInfringement) {
        return res.status(404).json({ error: "Infração não encontrada" });
      }
      return res.status(200).json({ reportedInfringement });
    } catch (error) {
      return res.status(400).json({ error: "Falha ao obter infração" });
    }
  },
  async reportNewInfringement(req, res) {
    const { description, location } = req.body;
    const id_user = req.id_user;

    try {
      const infringementFields = {
        image: req.file.filename,
        description,
        location,
        reported_by: id_user,
      };

      const infringement = await ReportInfringement.create(infringementFields);

      return res.status(200).json({ infringement });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Falha ao reportar infração" });
    }
  },
  async confirmationInfringement(req, res) {
    const { idInfringement } = req.params;
    const id_user = req.id_user;

    try {
      const infringement = await ReportInfringement.findById(idInfringement);
      if (!infringement) {
        return res.status(404).json({ error: "Infração não encontrada" });
      }

      const { confirmations } = infringement;

      const hasConfirmation = confirmations.find(item => item == id_user )

      if(hasConfirmation){
        return res.status(404).json({ error: "Você já confirmou essa infração" });
      }

      const infringementUpdated = await ReportInfringement.updateOne({_id: idInfringement}, {$push: {confirmations: id_user}})

      return res.status(200).json({ infringementUpdated });
    } catch (error) {
      return res.status(400).json({ error: "Falha ao confirmar infração" });
    }
  },
  async deleteInfringement(req, res) {
    const { idInfringement } = req.params

    try {
        
      if (!await ReportInfringement.findById(idInfringement)) {
        return res.status(404).json({ error: 'Infração não existe' });
      }

      await ReportInfringement.deleteOne({_id: idInfringement});

      return res.status(200).json({mensagem: "Infração apagada com sucesso"})
    } catch (error) {
      return res.status(400).json({ error: "Falha ao apagar infração" })
    }
  },
};
