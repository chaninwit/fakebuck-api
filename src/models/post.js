module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      message: DataTypes.STRING,
      image: {
        type: DataTypes.STRING,
        validte: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: {
        name: "userID",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });

    Post.hasMany(models.Comment, {
      foreignKey: {
        name: "postID",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });

    Post.hasMany(models.Like, {
        foreignKey: {
          name: "postID",
          allowNull: false,
        },
        onDelete: "RESTRICT",
      });
  };


  return Post;
};
