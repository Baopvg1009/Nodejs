const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  user: {
    name: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
});
module.exports = mongoose.model("Orders", orderSchema);
