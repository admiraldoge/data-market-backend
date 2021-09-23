import * as mongoose from 'mongoose';

export const privacitySchema = new mongoose.Schema({
  isPublic: {
    type: Boolean,
    required: false
  },
  allowedUsers: {
    type: Array,
    required: false
  }
});