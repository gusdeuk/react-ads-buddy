import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    stringMutado: 'hola',
    isHomePage: false,
    preferredColor: 'none'
}

export const testSettingsSlice = createSlice({
    name: 'testSettings',
    initialState,
    reducers: {
        incrementValue: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
            state.stringMutado = 'hola ' + state.value
        },
        decrementValue: (state) => {
            state.value -= 1
            state.stringMutado = 'hola ' + state.value
        },
        incrementValueByAmount: (state, action) => {
            state.value += action.payload
        },
        setIsHomePageOn: (state) => {
            state.isHomePage = true
        },
        setIsHomePageOff: (state) => {
            state.isHomePage = false
        },
        setPreferredColor: (state, colorString) => {
            state.preferredColor = colorString.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    incrementValue,
    decrementValue,
    incrementValueByAmount,
    setIsHomePageOn,
    setIsHomePageOff,
    setPreferredColor
} = testSettingsSlice.actions

export default testSettingsSlice.reducer
