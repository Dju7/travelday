import { create } from 'zustand'

export const geoLocStore = create((set)=> ({
    geoloc : {
        country: 'default',
        latlng: [48.891897, 2.347856]

    },
    updateGeoloc: (newGeoloc:any) => set({
        geoloc: {
            country: newGeoloc.name,
            latlng: newGeoloc.latlng.split(',').map(parseFloat)
        }
    }
    )
}))