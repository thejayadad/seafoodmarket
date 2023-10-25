import mongoose from "mongoose";

const DrinksSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true 
    },
    price: {
        type: "Number",
        required: true
    }
})

export default mongoose?.models?.Drink || mongoose.model("Drink", DrinksSchema)
