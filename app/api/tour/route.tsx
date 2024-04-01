import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {title, date, duration, itinerary, author} = body
       

        if(!title || !date || !itinerary || !author || !duration) {
            return new NextResponse('Missing Fields', { status: 400 })
        }

        // Récupérer l'utilisateur en fonction du nom d'utilisateur
        const user = await db.user.findUnique({
            where: {
                username: author
            }
        });

        if (!user) {
            return new NextResponse('User not found', { status: 404 });
        }

            const tour = await db.tour.create({
                data: {
                    title,
                    date,
                    duration,
                    itinerary,
                    author:{ connect: { id: user.id } }   
                }
            })

            return NextResponse.json({ tourID: tour.id, message: "Tour is created succesfully" }, { status: 201 })
            

        } catch (error) {
            console.error("Error:", error);
            return new NextResponse('Internal Server Error', { status: 500 });
        }
}