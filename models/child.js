// Creating our Child model
module.exports = function(sequelize, DataTypes) {
  const Child = sequelize.define(
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
    Child.belongsToMany(models.Adult, {
      through: "ParentChild"
    });
    Child.belongsToMany(models.Adult, {
      through: "NonParentChild"
    });
    Child.hasMany(models.Food, {

    });

    Child.hasMany(models.Sleep, {

    });

    Child.hasMany(models.Information, {

    });
    
  };

  return Child;
};