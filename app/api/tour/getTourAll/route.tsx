import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET(req: Request, res: NextResponse) {
    try {

        const tour = await db.tour.findMany({
          include : {
            utils: true
          }
        });

        if (!tour) {
            // ID non trouvé
         return NextResponse.json({ error: 'Tour not found' }, {status: 404});
        }

        // Renvoyer l'itinéraire
        return NextResponse.json(tour, {status: 200});

      } catch (error) {
        console.error('Error fetching itinerary:', error);
      }
    }