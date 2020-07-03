module.exports = function(sequelize, DataTypes) {
    const Food = sequelize.define(
      "Food",
      {
          foodName: {
              type: DataTypes.STRING,
              allowNull: false
       },
          foodData:{
              type: DataTypes.STRING,
              allowNull: false,
        },
            foodAmount:{
                type: DataTypes.STRING,
                allowNull: false
            }

  
      }
    );
  
    Food.associate = function(models) {
      Food.belongsTo(models.Child, {
          onDelete: "cascade",
      });
      
    };
  
    return Food;
}