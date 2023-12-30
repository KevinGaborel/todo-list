const CoreModel = require("./coreModel");
const client = require("./client");

class UserModel extends CoreModel {
  static tableName = "user";
  static fields = [
    "id",
    "username"
  ];

  constructor(obj) {
    super(obj);
  }

  static async showData(data) {
    try {
      const result = await client.query(
        `SELECT "id", "username" FROM "${this.tableName}" 
            WHERE "username" = $1`,
        [data]
      );

      if (result.rows[0]) {
        return result.rows[0];
      } else {
        return "Erreur, username incorrect :/";
      }
    } catch (error) {
      console.trace(error);
    }
  }


}

module.exports = UserModel;