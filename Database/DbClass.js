const mongoose = require('mongoose');

const mongo_params = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

module.exports = class DbClass {

    static INSTANCE;
    connection = null;
    constructor() {
    }

    static create_instance() {
        DbClass.INSTANCE = new DbClass();
    }

    static get_instance() {
        return !DbClass.INSTANCE ? DbClass.create_instance() : DbClass.INSTANCE;
    }


    connect({password}) {
        mongoose.connect(`mongodb+srv://mainUser:${password}@clusterr-ikbjl.gcp.mongodb.net/test?retryWrites=true&w=majority`,
            mongo_params).then(success => {
                this.connection = mongoose.connection;
                return success;
        }).catch(err => {
            return err;
        })
    }

    




};