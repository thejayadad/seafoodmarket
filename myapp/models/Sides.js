import mongoose from "mongoose";

const SidesSchema = new  mongoose.Schema({
    name: {
        type: "String",
        required: true 
    },
    price: {
        type: "Number",
        required: true
    }
})


export default mongoose?.models?.Sides || mongoose.model("Sides", SidesSchema)
