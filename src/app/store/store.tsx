import { create } from "zustand";

type obj = {}

interface IOStore {
    userInput: {
        face: string,
        betNumber: number,
        wager: number,
        side: string,
    },
    gameOutput: {
        wins: number,
        multiplier: string
    },
    setGameOutput: (value: string | number, field: string) => void,
    setFace: (value: string) => void,
    setBetNumber: (value: number) => void,
    setWager: (value: number) => void,
    setSide: (value: string) => void
}

export const useIOStore = create<IOStore>((set) => ({
    userInput: {
        face: "",
        betNumber: 1,
        wager: 0,
        side: "heads",
    },
    gameOutput: {
        wins: 0,
        multiplier: ""
    },
    setGameOutput: (value: string | number, field: string) => set((state) => ({ gameOutput: { ...state.gameOutput, [field]: value } })),
    setFace: (value: string) => set((state) => ({ userInput: { ...state.userInput, face: value } })),
    setBetNumber: (value: number) => set((state) => ({ userInput: { ...state.userInput, betNumber: value } })),
    setWager: (value: number) => set((state) => ({ userInput: { ...state.userInput, wager: value } })),
    setSide: (value: string) => set((state) => ({ userInput: { ...state.userInput, side: value } })),
}))

// updateField: (state, field) => set({ userInput: { ...userInput, [field]: state } }), upates one new field/key
// updateField: (newParams) => set({ userInput: { ...userInput, ...newParams } }), updates as much keys as i can pass through to the function
// updateField: (userInput) => set({ userInput }), replaces the whole object
