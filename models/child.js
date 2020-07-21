// Creating our Child model
module.exports = function (sequelize, DataTypes) {
  const Child = sequelize.define(
    "Child",
    {
      childGender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      childName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      childDOB: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
        }
      },
      childImg: {
        type: DataTypes.STRING,
        allowNull: true
      }

    }
  );

  Child.associate = function (models) {
    // Associating Child with Posts
    // When an Child is deleted, also delete any associated Posts
    Child.belongsToMany(models.Adult, {
      through: models.ParentChild
    });
    Child.hasMany(models.BabysitterRelation);
    
    Child.hasMany(models.Food);

    Child.hasMany(models.Sleep);

    Child.hasMany(models.Like);

    Child.hasMany(models.Dislike);

    Child.hasMany(models.Allergy);

    Child.hasMany(models.Note);

  };

  return Child;
};