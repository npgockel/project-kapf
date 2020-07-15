module.exports = function(sequelize, DataTypes) {
    const Allergy = sequelize.define(
      "Allergy",
      {
          allergy: {
              type: DataTypes.STRING,
              allowNull: true
       }
    }
    );
  
    Allergy.associate = function(models) {
      Allergy.belongsTo(models.Child, {
          onDelete: "cascade",
      });
      
    };
  
    return Allergy;
}