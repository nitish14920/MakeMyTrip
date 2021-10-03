const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://nitish:14920ish@cluster0.tpqlc.mongodb.net/make-my-trip?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}

module.exports = connect