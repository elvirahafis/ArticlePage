import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class about extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pendidikan: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    organisasi: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    pengalaman_kerja: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'about',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "about_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
