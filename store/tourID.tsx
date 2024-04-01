import {create} from 'zustand';

interface TourIdStoreState {
  tourId: string | undefined; 
  updateTourId: (newTourId: string) => void;
}

// store Zustand pour l'ID du tour
export const TourIdStore = create<TourIdStoreState>((set) => ({
  tourId: "",
  updateTourId: (tourId:string) => {
  console.log("Nouvel ID de tournée:", tourId);
  set({ tourId: tourId })
  } // Fonction pour mettre à jour l'ID du tour
}));

