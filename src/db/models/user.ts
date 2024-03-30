import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
}

const userSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
});

export const User = mongoose.model<UserDocument>('User', userSchema);
