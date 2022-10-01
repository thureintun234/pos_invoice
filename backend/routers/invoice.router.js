const router = require("express").Router();
const Invoice = require("../models/invoice.model");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).send(invoice);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const invoices = await Invoice.find({});
    res.json(invoices);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/:id", auth, async (req, res) => {
  const id = req.params.id;

  try {
    const invoice = await Invoice.findById(id);

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.json(invoice);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", auth, async (req, res) => {
  const id = req.params.id;

  try {
    const deletedInvoice = await Invoice.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(401).send(error);
  }
});

module.exports = router;
