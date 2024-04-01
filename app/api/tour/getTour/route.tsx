import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET(req: Request, res: NextResponse) {
    try {

        const url = req.url
        const hostHeader = req.headers.get("host")
        const { searchParams } = new URL(url, `http://${hostHeader}`);
        const tourId = searchParams.get("tourId");
      
        
        if (!tourId || typeof tourId !== 'string') {
            // Gérer le cas où tourId n'est pas fourni ou n'est pas une chaîne valide
            return NextResponse.json({ error: 'Missing or invalid tourId' }, {status: 400});
        }

        const tour = await db.tour.findUnique({
          where: {
            id: tourId
          },
          select: {
            itinerary: true
          }
        });

        if (!tour) {
            // ID non trouvé
         return NextResponse.json({ error: 'Tour not found' }, {status: 404});
        }

        // Renvoyer l'itinéraire
        return NextResponse.json(tour.itinerary, {status: 200});

      } catch (error) {
        console.error('Error fetching itinerary:', error);
      }
    }