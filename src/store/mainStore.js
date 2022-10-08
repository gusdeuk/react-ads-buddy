import { configureStore } from '@reduxjs/toolkit'
import testSettings from './reducers/testSettingsSliceReducer'
import appGlobalData from './reducers/appGlobalDataSliceReducer'

export const mainStore = configureStore({
    reducer: {
        testSettings: testSettings,
        appGlobalData: appGlobalData
    }
})
