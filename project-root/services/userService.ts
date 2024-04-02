import User from '../models/userModel';

export default class UserService {
  async createUser(username: string, password: string, role: string) {
    try {
      const user = new User({ username, password, role });
      await user.save();
      return user;
    } catch (error: any) {
      throw new Error(`Error creating user: ${(error as Error).message}`);
    }
  }

  async getUserByUsername(username: string) {
    try {
      const user = await User.findOne({ username });
      return user;
    } catch (error: any) {
      throw new Error(`Error fetching user: ${(error as Error).message}`);
    }
  }
}
