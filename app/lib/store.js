import { create } from 'zustand';

export const useStore = create((set) => ({
  // Active look module (used for scroll-based models)
  activeLook: null,
  setActiveLook: (look) => set({ activeLook: look }),

  // Modal & UI states
  modalOpen: false,
  setModalOpen: (open) => set({ modalOpen: open }),

  // Customizer (Mix and Match)
  customizerOpen: false,
  setCustomizerOpen: (open) => set({ customizerOpen: open }),

  selectedPieces: {
    necklace: null,
    armlet:   null,
    ring:     null,
    earchain: null,
    headgear: null,
  },
  setPiece: (slot, id) =>
    set((state) => ({
      selectedPieces: { ...state.selectedPieces, [slot]: id },
    })),
  clearPieces: () =>
    set({
      selectedPieces: {
        necklace: null, armlet: null, ring: null, earchain: null, headgear: null,
      },
    }),

  // Rental inquiry
  rentalLook: null,
  setRentalLook: (look) => set({ rentalLook: look }),
  rentalOpen: false,
  setRentalOpen: (open) => set({ rentalOpen: open }),

  // Scroll progress (0–1), used by GSAP
  scrollProgress: 0,
  setScrollProgress: (v) => set({ scrollProgress: v }),
}));

export default useStore;