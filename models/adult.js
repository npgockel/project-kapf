// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");

// Creating our Adult model
module.exports = function(sequelize, DataTypes) {
  const Adult = sequelize.define(
    "Adult",
    {
      //firstName of adult that cannot be NULL
      firstName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      //lastName of adult that cannot be NULL
      lastName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      // The email cannot be null, and must be a proper email before creation
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      // The password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // Occupation of user.  Strictly for reference of other users.
      occupation:{
        type: DataTypes.STRING,
        allowNull: true
      },
      // Primary Phone Number of User
      primaryPhone:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          is: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
          message: "Please enter valid phone number. (Ex. (123)-456-7890)"
        }
      },
      // Primary Address Number of User
      primaryAddress:{
        type: DataTypes.STRING,
        allowNull: true
      },
      // Primary Phone Number of User
      secondaryPhone:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          is: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
          message: "Please enter valid phone number. (Ex. (123)-456-7890)"
        }
      },
      // Primary Address of User
      secondaryAddress:{
        type: DataTypes.STRING,
        allowNull: true
      },
      
    },
    {
      // This forces any default 'Adult' to exclude the password when we query them;
      // this way we don't expose even a hashed password
      defaultScope: {
        attributes: { exclude: ["password"] }
      },
      // If you want to show the password, for whatever reason, we expose with:
      // db.Adult.scope('withPassword').findAll() etc
      scopes: {
        withPassword: {
          attributes: {}
        }
      }
    }
  );
  // Creating a custom method for our Adult model. This will check if an unhashed password entered by the adult can be compared to the hashed password stored in our database
  Adult.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the Adult Model lifecycle
  // In this case, before a Adult is created, we will automatically hash their password
  Adult.addHook("beforeCreate", function(adult) {
    adult.password = bcrypt.hashSync(
      adult.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  Adult.associate = function(models) {
    // Associating Adult with Posts
    // When an Adult is deleted, also delete any associated Posts
    Adult.belongsToMany(models.Child, {
      through: "ParentChild",
      onDelete: "cascade"
    });

    Adult.hasMany(models.BabysitterRelation);
  };

  return Adult;
};
