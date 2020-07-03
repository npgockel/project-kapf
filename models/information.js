module.exports = function(sequelize, DataTypes) {
    const Information = sequelize.define(
      "Information",
      {
          infoName: {
              type: DataTypes.STRING,
              allowNull: false
       },
          infoData:{
              type: DataTypes.STRING,
              allowNull: false,
          }
  
      }
    );
  
    Information.associate = function(models) {
      Information.belongsTo(models.Child, {
          onDelete: "cascade",
      });
      
    };
  
    return Information;
}