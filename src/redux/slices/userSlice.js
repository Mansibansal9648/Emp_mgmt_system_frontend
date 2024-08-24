import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: '',
    name: '',
    email: '',
    userType: '',
    isLogin: false,
    accessToken: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, { payload }) => {
            state.id = payload.id
            state.name = payload.name
            state.email = payload.email
            state.userType = payload.userType
            state.isLogin = payload.isLogin
            state.accessToken = payload.accessToken
        },
    },
})

export default userSlice.reducer
export const { login } = userSlice.actions
