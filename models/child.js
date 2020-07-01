// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");

// Creating our Child model
module.exports = function(sequelize, DataTypes) {
  const Chld = sequelize.define(
    "Child",
    {
        childName: {
            type: DataTypes.STRING,
            allowNull: false
     },
        birthday:{
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true,
                message: "Enter a birthday in the format of (YYYY-MM-DD)"
            }
        }

    }
  );

  Child.associate = function(models) {
    // Associating Child with Posts
    // When an Child is deleted, also delete any associated Posts
    Child.hasMany(models.Adult, {
      onDelete: "cascade"
    });
    
  };

  return Child;
};