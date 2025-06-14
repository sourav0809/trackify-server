import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./User";

@Table({
  tableName: "UserPreferences",
  timestamps: true,
})
export class UserPreferences extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  UserId!: number;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  dashboardLayoutConfig!: JSON;

  @BelongsTo(() => User)
  user?: User;
}

export default UserPreferences;
