const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    pirateName: {type: String, 
        required: [true, "Pirate name is Required!"]
    },
    imageUrl: {type: String, 
        required: [true, "Image Url is Required!"]
    },
    chests: {type: Number, 
        required: [true, "The Number of chests is Required!"]
    },
    catchPhrase: {type: String, 
        required: [true, "Pirate catch phrase is Required!"]
    },
    crewPosition: {type: String, 
        required: [true, "Crew position is Required!"]
    },
    pegLeg: {type: Boolean, default: true},
    eyePatch: {type: Boolean, default: true},
    hookHand: {type: Boolean, default: true}
}, {timestamps: true});

module.exports.Pirate = mongoose.model("Pirate", PirateSchema);