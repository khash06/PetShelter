const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String, 
        minlength: [3, "Minimum 3 characters for name required"],
        required: [true, "Name field required"],
        unique: true
    },

    type: {
        type: String, 
        minlength: [3, "Minimum 3 characters for type required"],
        required: [true, "Type field required"]
    },
    
    description: {
        type: String, 
        minlength: [3, "Minimum 3 characters for description required"],
        required: [true, "Description field required"]
    },

    skill1: {
        type: String,
        default: ""
    },

    skill2: {
        type: String,
        default: "",
    },

    skill3: {
        type: String,
        default: "",
    },

    likes: {
        type: Number,
        default: 0
    },
    
}, {timestamps: true})

mongoose.connect("mongodb://localhost:27017/pets", {useNewUrlParser: true}, (errs)=>console.log(errs));

PetSchema.plugin(unique, {message: "Name already exists"})
const Pets = mongoose.model('pet', PetSchema);


module.exports = Pets;