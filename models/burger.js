const orm = require("../config/orm");

const burger = {
    SelectAll: function() {
        return orm.selectAll("burgers");
      },
      // The variables cols and vals are arrays.
      insertOne: function(cols, vals) {
        return orm.insertOne("burgers", cols, vals);
      },
      updateOne: function(objColVals, condition) {
        return orm.updateOne("burgers", objColVals, condition);
      },
      deleteOne: function(condition) {
        return orm.deleteOne("burgers", condition);
      }
    };
    
    // Export the database functions for the controller
    module.exports = burger;