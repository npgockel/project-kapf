module.exports = function(sequelize, DataTypes) {
    const Sleep = sequelize.define(
      "Sleep",
      {
          sleepStart: {
              type: DataTypes.STRING,
              allowNull: false
       },
          sleepEnd:{
              type: DataTypes.STRING,
              allowNull: false,
        },
            sleepDate:{
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    isDate: true,
                    message: "Enter date in form of (YYYY-MM-DD)"
                }
            }

  
      }
    );
  
    Sleep.associate = function(models) {
      Sleep.belongsTo(models.Child, {
          onDelete: "cascade",
      });
      
    };
  
    return Sleep;
}