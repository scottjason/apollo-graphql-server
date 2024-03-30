import { User } from '../db/models/user';

export const userResolver = {
  Query: {
    getUserById: async (_: any, { id }: { id: string }) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    createUser: async (_: any, { email }: { email: string }) => {
      const newUser = await User.create({ email });
      return {
        id: newUser._id.toString(),
        email: newUser.email,
      };
    },
  },
};
