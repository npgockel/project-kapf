module.exports = function (sequelize, DataTypes) {
    const Sleep = sequelize.define(
        "Sleep",
        {
            sleepStart: {
                type: DataTypes.STRING,
                allowNull: false
            },
            sleepEnd: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sleepTotal: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sleepDate: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );

    Sleep.associate = function (models) {
        Sleep.belongsTo(models.Child, {
            onDelete: "cascade",
        });

    };

    return Sleep;
}