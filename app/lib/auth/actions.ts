import bcrypt from 'bcryptjs';

import { connectToDatabase } from "@/lib/mongodb";
import { SignupFormSchema } from "@/lib/signup-definitions";
import User from '@/model/User';


export default async function signup(state, formData) {
    const validatedFields = SignupFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    await connectToDatabase();
    const existentUser = await User.findOne({ email });
    if (existentUser) return { errors: 'Email is already in use.' };

    const { email, password, confirmPassword } = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
        email,
        password: hashedPassword
    }

    const createdUser = await User.create({ userData });
    if (!createdUser) return { errors: 'An error occurred while creating your account.' };

    

    return { createdUser };
}