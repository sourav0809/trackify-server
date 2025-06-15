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

const updateOrCreateUserPreferences = async (
  UserId: number,
  userPreferencesData: CreationAttributes<UserPreferences>
) => {
  const existingPreferences = await UserPreferences.findOne({
    where: { UserId },
  });

  if (existingPreferences) {
    const updatedPreferences = await existingPreferences.update({
      ...userPreferencesData,
    });
    return updatedPreferences;
  }

  const newPreferences = await UserPreferences.create({
    UserId,
    ...userPreferencesData,
  });
  return newPreferences;
};

export {
  createUser,
  findUser,
  updateUser,
  getUserWithPreferences,
  updateOrCreateUserPreferences,
};
