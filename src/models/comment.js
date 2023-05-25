module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          noteEmpty: true,
        },
      },
    },
    {
      underscored: true,
    }
  );

  Comment.assosiate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });

    Comment.belongsTo(models.Post, {
      foreignKey: {
        name: "postID",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return Comment;
};
