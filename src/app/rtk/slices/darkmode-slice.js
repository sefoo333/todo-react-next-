import { createSlice } from "@reduxjs/toolkit"


export const darkMode = createSlice({
    initialState: [],
    name: "darkMode",
    reducers: {
        add_dark: (state, action) => {
            state.push("done")
            console.log(state)
        }
    }
})





export const { add_dark, } = darkMode.actions
export default darkMode.reducer