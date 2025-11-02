import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const signUpSchema = z.object({
    name: z.string().min(3),
    email: z.email(),
    password: z.string().min(6),
    role: z.enum(["USER",
        "ADMIN",
        "MODERATOR"]),
})
export const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { name, email, password, role } = signUpSchema.parse(body);

        const user = await prisma.user.create({
            data: {
                email: email,
                name: name,
                role: role,
                password: await bcrypt.hash(password,2),
            }
        });

        return NextResponse.json(
            {
                message: 'Created successful',
                ...{
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                },
            },
            { status: 201 }
        );

    }catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation error', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Sign Up error:', error);
        return NextResponse.json(
            { error: `Internal server error ${error}` },
            { status: 500 }
        );
    }
}