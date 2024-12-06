import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { pid: tourId } = req.query; // Utilisez le nom du paramètre défini dans votre chemin

        if (!tourId || typeof tourId !== 'string') {
            return res.status(400).json({ error: 'Missing or invalid tourId' });
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
            return res.status(404).json({ error: 'Tour not found' });
        }

        return res.status(204).json({ status: 204 });

    } catch (error) {
        console.error('Error deleting tour:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}