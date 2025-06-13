import { CreationAttributes } from "sequelize";
import { User } from "../database/models/User";
import { UserPreferences } from "../database/models/UserPreferences";

const createUser = async (userData: CreationAttributes<User>) => {
  const user = await User.create(userData);
  return user;
};

const findUser = async (condition: any) => {
  const user = await User.findOne({ where: condition });
  return user;
};

const updateUser = async (
  condition: any,
  userData: CreationAttributes<User>
) => {
  const user = await User.update(userData, { where: condition });
  return user;
};

const getUserWithPreferences = async (condition: any) => {
  const user = await User.findOne({
    where: condition,
    include: [
      {
        model: UserPreferences,
        as: "preferences",
      },
    ],
  });
  return user;
};

export { createUser, findUser, updateUser, getUserWithPreferences };
