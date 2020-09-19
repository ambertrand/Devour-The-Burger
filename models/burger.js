const orm = require("../config/orm");

const burger = {
      selectAll: function() {
        return orm.selectAll("burgers");
      },
      // The variables cols and vals are arrays.
      insertOne: function(vals) {
        return orm.insertOne(vals);
      },
      updateOne: function(objColVals, condition) {
        return orm.updateOne(objColVals, condition);
      },
      deleteOne: function(condition) {
        return orm.deleteOne(condition);
      }
    };
    
    // Export the database functions for the controller
    module.exports = burger;