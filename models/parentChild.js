module.exports = function(sequelize, DataTypes) {
    const ParentChild = sequelize.define(
      "ParentChild",
    
    );

    return ParentChild;
}