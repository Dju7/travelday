import { db } from "../../../../../lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, res: NextResponse) {
    try {
        const url = req.url;
        const hostHeader = req.headers.get("host");
        const { searchParams } = new URL(url, `http://${hostHeader}`);
        const tourId = searchParams.get("tourId");

        if (!tourId || typeof tourId !== 'string') {
            return NextResponse.json({ error: 'Missing or invalid tourId' }, { status: 400 });
        }

        const tour = await db.tour.delete({
            where: {
                id: tourId
            },
            include: {
                utils: true
            }
        });

        if (!tour) {
            return NextResponse.json({ error: 'Tour not found' }, { status: 404});
        }

        return NextResponse.json({ status: 204});

    } catch (error) {
        console.error('Error deleting tour:');
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}