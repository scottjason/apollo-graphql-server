import { User } from '../db/models/user';

export const userResolver = {
  Query: {
    getUserById: async (_: unknown, { id }: { id: string }) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    createUser: async (_: unknown, { email }: { email: string }) => {
      return await User.create({ email });
    },
  },
};
