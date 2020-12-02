const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        town:{
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('student', studentSchema);