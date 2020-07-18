module.exports = function (sequelize, DataTypes) {
    const BabysitterRelation = sequelize.define(
        "BabysitterRelation",
        {}
    );

    BabysitterRelation.associate = function (models) {
        BabysitterRelation.belongsTo(models.Child, {
            onDelete: "cascade",
        });
        BabysitterRelation.belongsTo(models.Adult, {
            onDelete: "cascade",
        });

    };

    return BabysitterRelation;
}