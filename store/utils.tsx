import { create } from 'zustand'

export const utilsStore = create((set)=> ({
    utils : {
        country: 'Aucune destination choisie',
        tour: [],
        date: '',
        transport: [],
        booking: [],
        location: []
        


    },
    updateUtils: (newUtils:any) => {
        set((state: { utils: { tour: any; date: any; transport: any; booking: any; location: any; }; }) => ({
            utils: {
                ...state.utils,
                country: newUtils.country,
                tour: newUtils.tour !== undefined ? newUtils.tour : state.utils.tour,
                date: newUtils.date !== undefined ? newUtils.date : state.utils.date,
                transport: newUtils.transport !== undefined ? newUtils.transport : state.utils.transport,
                booking: newUtils.booking !== undefined ? newUtils.booking : state.utils.booking,
                location: newUtils.location !== undefined ? newUtils.location : state.utils.location,
            }
        }));
    }
}));