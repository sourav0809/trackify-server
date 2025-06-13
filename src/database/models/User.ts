import { Table, Model, Column, DataType, HasOne } from "sequelize-typescript";
import { UserPreferences } from "./UserPreferences";

@Table({
  tableName: "Users",
  timestamps: true,
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @HasOne(() => UserPreferences)
  preferences?: UserPreferences;
}

export default User;
