const mongoose = require('mongoose');



const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ["active", "inactive"],
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

// instance Methods

todoSchema.methods = {
    findActive: function () {
        return mongoose.model("Todo").find({ status: "inactive" })
    },

    findActiveWithCallBack: function (cb) {
        return mongoose.model("Todo").find({ status: "inactive" }, cb)
    },

}
// statics Methods
todoSchema.statics = {
    findByTitle: function () {
        return this.find({ title: /js/i });
    }
}
// query Methods
todoSchema.query = {
    findFriend: function (friend) {
        return this.find({ title: new RegExp(friend, "i") })
    }
}
module.exports = todoSchema;

