module.exports = function(sequelize, DataTypes) {
    const Like = sequelize.define(
      "Like",
      {
          like: {
              type: DataTypes.STRING,
              allowNull: true
       }
    }
    );
  
    Like.associate = function(models) {
      Like.belongsTo(models.Child, {
          onDelete: "cascade",
      });
      
    };
  
    return Like;
}