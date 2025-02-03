import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    email: {
        type: String,
        required: [true, 'Name is required.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
    },
    img: {
        type: String,
    },
    roles: {
        type: [String],
        default: ['USER_ROL'],
        enum: ['USER_ROL','ADMIN_ROLE']
    }
});

export const UserModel = mongoose.model('User', UserSchema);