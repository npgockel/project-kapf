module.exports = function(sequelize, DataTypes) {
    const Dislike = sequelize.define(
      "Dislike",
      {
          dislike: {
              type: DataTypes.STRING,
              allowNull: true
       }
    }
    );
  
    Dislike.associate = function(models) {
      Dislike.belongsTo(models.Child, {
          onDelete: "cascade",
      });
      
    };
  
    return Dislike;
}