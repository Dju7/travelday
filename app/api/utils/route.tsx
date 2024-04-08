import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { tour, transport, booking, location } = body;

        if (!tour || !transport || !booking) {
            return new NextResponse('Missing Fields', { status: 400 });
        }

        // Créer l'Utils et lier au Tour
        const createdUtils = await db.utils.create({
            data: {
                tour: { connect: { id: tour } },
                transport: transport,
                booking: booking,
                location: location
            }
        });
        
        console.log(createdUtils)
        
        if (!createdUtils) {
            return new NextResponse('Error creating Utils', { status: 500 });
        }

        return NextResponse.json({ message: "Les informations sont enregistrées avec succès" }, { status: 201 });
    } catch (error) {
        console.error("Error:", error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}