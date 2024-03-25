import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

// Nouveau Utilisateur

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {email, username, password } = body
        console.log(body)

        if(!email || !username || !password) {
            return new NextResponse('Missing Fields', { status: 400 })
        }

         //check if email exist

         const existingEmail = await db.user.findMany({
            where: { email: email }
        });
        if (existingEmail.length === 0) {

            const hashedPassword = await hash(password, 10)
            const user = await db.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    username
                    
                }
            })

            return NextResponse.json({ user: user, message: "user is created succesfully" }, { status: 201 })
            } else {
            return NextResponse.json({ user: null, message: 'This email already exists' }, { status: 400 });
        }


    } catch (error) {
        return NextResponse.json({ 
            message: "something went wrong" }, { status: 500 }
            )

    }
}