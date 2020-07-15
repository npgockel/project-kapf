module.exports = function(sequelize, DataTypes) {
    const Note = sequelize.define(
      "Note",
      {
          note: {
              type: DataTypes.STRING,
              allowNull: true
       }
    }
    );
  
    Note.associate = function(models) {
      Note.belongsTo(models.Child, {
          onDelete: "cascade",
      });
      
    };
  
    return Note;
}