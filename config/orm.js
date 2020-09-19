const connection = require("./connection");

class ORM {
    connection;
  
    constructor(connection) {
      this.connection = connection;
    }
  
    query = (queryString, vals) => {
      return new Promise((resolve, reject) => {
        this.connection.query(queryString, vals, function(err, result) {
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      })
    };
    // Helper function for SQL syntax.
    // Let's say we want to pass 3 values into the mySQL query.
    // In order to write the query, we need 3 question marks.
    // The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
    // ["?", "?", "?"].toString() => "?,?,?";
    printQuestionMarks(num) {
      const arr = [];
  
      for (let i = 0; i < num; i++) {
        arr.push("?");
      }
  
      return arr.toString();
    }
  
    // Helper function to convert object key/value pairs to SQL syntax
    objToSql(ob) {
      const arr = [];
  
      // loop through the keys and push the key/value as a string int arr
      for (let key in ob) {
        const value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
          // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
          }
          // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
          // e.g. {sleepy: true} => ["sleepy=true"]
          arr.push(key + "=" + value);
        }
      }
  
      // translate array of strings to a single comma-separated string
      return arr.toString();
    }
  
    // Object for all our SQL statement functions.
    selectAll() {
      return this.query("SELECT * FROM burgers;");
    }
  
    insertOne(vals) {
      let queryString = "INSERT INTO burgers";
  
      queryString += " (";
      queryString += "burger_name";
      queryString += ") ";
      queryString += "VALUES (";
      queryString += `"${vals}"`;
      queryString += ");";
  
      return this.query(queryString, vals);
    }
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne(objColVals, properties, condition) {
      let queryString = "UPDATE burgers";
  
      queryString += ' SET ';
      queryString += this.objToSql(properties);
      queryString += ' WHERE ';
      queryString += condition + ";";
  
      console.log(queryString);
      return this.query(queryString);
    }
  
    deleteOne(condition) {
      let queryString = 'DELETE FROM burgers';
      queryString += ' WHERE ';
      queryString += condition += ";";
      
      // console.log(condition)
      return this.query(queryString);
    }
  
  }
  
  // Export the orm object for the model
  module.exports = new ORM(connection);