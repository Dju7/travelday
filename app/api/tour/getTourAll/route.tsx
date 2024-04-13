import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export async function GET(req: Request, res: NextResponse) {
    try {
      const session = await getServerSession(authOptions);

      if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, {status: 401});
      }

      const user = await db.user.findFirst({
        where: {
          username: session.user.username
        }
      });

      if (!user) {
        return NextResponse.json({ error: "User not found" }, {status: 404});
      }

      const userId = user.id;

        const tour = await db.tour.findMany({
          where: {
            authorId: userId
          },
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