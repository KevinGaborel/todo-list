const client = require('./client');

class CoreModel {

    static tableName = null;
    static fields = null;
    dataValues = {};

    constructor(obj) {
        for (const prop in obj) {
            this.dataValues[prop] = obj[prop];
        }
    };

    /**
     * Setter pour les données de l'entité
     */
    set data(values) {
        for (const field of this.contructor.fields) {
            if (values[field]) {
                this.dataValues[field] = values[field];
            }
        }
    }

    static async find() {

        let preparedQuery = `SELECT * FROM "${this.tableName}"`;

        const articles = await client.query(preparedQuery);

        const result = articles.rows;

        console.log('ceci est le resultat: ', result, this.tableName);

        return result;
    };

}

module.exports = CoreModel;