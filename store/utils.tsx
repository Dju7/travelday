import { create } from 'zustand';

export const utilsStore = create((set) => ({
    utils: {
        transport: [],
        booking: [],
        location: []
    },
    updateTransport: (newTransport: any) => {
        console.log("Nouvelles données de transport :", newTransport);
        set((state: { utils: any; }) => ({
            utils: {
                ...state.utils,
                transport: newTransport
            }
        }));
    },
    updateBooking: (newBooking: any) => {
        console.log("Nouvelles données de réservation :", newBooking);
        set((state: { utils: any; }) => ({
            utils: {
                ...state.utils,
                booking: newBooking
            }
        }));
    },
    updateLocation: (newLocation: any) => {
        console.log("Nouvelles données de location :", newLocation);
        set((state: { utils: any; }) => ({
            utils: {
                ...state.utils,
                location: newLocation
            }
        }));
    }
}));