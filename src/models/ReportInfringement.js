const mongoose = require("../database");

const ReportInfringementSchema = new mongoose.Schema(
  {
    reported_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    image: {
      type: String,
    },
    description : {
      type: String,
      require: true
    },
    location : {
      type: String,
      require: true
    },
    confirmations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

ReportInfringementSchema.virtual("image_url").get(function () {
  return `${process.env.BASE_URL_UPLOADS_API}/${this.image}`;
});

const ReportInfringement = mongoose.model("ReportInfringement", ReportInfringementSchema);

module.exports = ReportInfringement;
