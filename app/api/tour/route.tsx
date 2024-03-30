import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Nouveau Utilisateur

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {title, date, itinerary, author} = body
       

        if(!title || !date || !itinerary || !author) {
            return new NextResponse('Missing Fields', { status: 400 })
        }

            const user = await db.tour.create({
                data: {
                    title,
                    date,
                    itinerary,
                    author: author
                    
                }
            })

            return NextResponse.json({ user: user, message: "user is created succesfully" }, { status: 201 })


    } catch (error) {
        return NextResponse.json({ 
            message: "something went wrong" }, { status: 500 }
            )

    }
}