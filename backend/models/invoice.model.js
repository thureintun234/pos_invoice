const mongoose = require("mongoose");

const inoviceSchema = mongoose.Schema({
  date: { type: String, required: true, default: new Date() },
  customer_name: { type: String, required: true, trim: true },
  sale_person: { type: String, required: true, trim: true },
  note: { type: String, trim: true },
  products: [{}],
});

module.exports = mongoose.model("Invoice", inoviceSchema);
