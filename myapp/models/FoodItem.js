import mongoose from "mongoose";

const FoodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    preperation: {
        type: String,
    },
    extraOptions: {
        type: [
          {
            text: { type: String, },
            price: { type: Number, },
          },
        ],
      },
    description: { type: String },
    specialInstructions: { type: String },
})


export default mongoose?.models?.FoodItem || mongoose.model("FoodItem", FoodItemSchema)

