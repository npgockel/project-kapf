module.exports = function (sequelize, DataTypes) {
    const Food = sequelize.define(
        "Food",
        {
            foodType: {
                type: DataTypes.STRING,
                allowNull: false
            },
            foodUnit: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            foodQuantity: {
                type: DataTypes.STRING,
                allowNull: false
            },
            foodDate: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }
    );

    Food.associate = function (models) {
        Food.belongsTo(models.Child, {
            onDelete: "cascade",
        });

    };

    return Food;
}