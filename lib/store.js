// ============================================================
// SIMHAAVATAR — Zustand Global Store
// ============================================================
import { create } from 'zustand'

export const useStore = create((set) => ({
  // Which look modal is open
  activeLook: null,
  setActiveLook: (look) => set({ activeLook: look }),

  // Rental inquiry panel
  rentalOpen: false,
  rentalLookId: null,
  openRental: (lookId) => set({ rentalOpen: true, rentalLookId: lookId }),
  closeRental: () => set({ rentalOpen: false, rentalLookId: null }),

  // Customizer — mix and match selected pieces
  customizerOpen: false,
  selectedPieces: {
    necklace:  null,
    armlet:    null,
    ring:      null,
    earchain:  null,
    headgear:  null,
  },
  setPiece: (slot, id) =>
    set((s) => ({ selectedPieces: { ...s.selectedPieces, [slot]: id } })),
  clearCustomizer: () =>
    set({ selectedPieces: { necklace: null, armlet: null, ring: null, earchain: null, headgear: null } }),
  toggleCustomizer: () =>
    set((s) => ({ customizerOpen: !s.customizerOpen })),

  // Scroll progress (0–1) for hero parallax
  scrollProgress: 0,
  setScrollProgress: (v) => set({ scrollProgress: v }),
}))
