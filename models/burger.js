const dbManager = require("../config/orm");

const burger = {
      selectAll: function() {
        return dbManager.selectAll("burgers");
      },
      // The variables cols and vals are arrays.
      insertOne: function(vals) {
        return dbManager.insertOne(vals);
      },
      updateOne: function(objColVals, condition) {
        return dbManager.updateOne("burgers", objColVals, condition);
      },
      deleteOne: function(condition) {
        return dbManager.deleteOne(condition);
      }
    };
    
    // Export the database functions for the controller
    module.exports = burger;