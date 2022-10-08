import { createSlice } from '@reduxjs/toolkit';

// 1 - reducer states defaults
const initialState = {
    isLogged: false,
    userName: '',
    userRole: 'Warp Engine Designer',
    userEmail: 'gordon.shumway@iqvia.com',
    randomSessionId: Math.floor(Math.random() * 100).toString()
}

// 2 - reducer declaration > slice
export const appGlobalDataSlice = createSlice({
    name: 'appGlobalData',
    initialState,
    reducers: {
        setIsLogged: (state, showBool) => {
            state.isLogged = showBool.payload
        },
        setUserName: (state, showString) => {
            state.userName = showString.payload
        },
        setUserRole: (state, showString) => {
            state.userRole = showString.payload
        },
        setUserEmail: (state, showString) => {
            state.userEmail = showString.payload
        }
    }
})

// 3 - Action creators are generated for each case reducer function
export const { setIsLogged, setUserName, setUserEmail, setUserRole } = appGlobalDataSlice.actions

export default appGlobalDataSlice.reducer
