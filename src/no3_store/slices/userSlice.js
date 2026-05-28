import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { userTotalGetApi } from "../apis/user.api"

export const fetchUserTotalGet = createAsyncThunk(
    "fetchUserTotalGet",
    async(_, thunkApi) => {
        try {
            const payload = await userTotalGetApi()
            return payload
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)       
        }
    }
)


const initUser = [
  {id : 1, username: "ttt", password : "1111"},
  {id : 1, username: "qqq", password : "1111"},
  {id : 1, username: "www", password : "1111"},
  {id : 1, username: "eee", password : "1111"},
]

const initialState = {
  users : initUser ,
  username : "",
  isLogin : false
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers:{
        login: (state, action) => {
            state.username = action.payload
            state.isLogin = true
        },
        logout: (state) => {
            state.username = ""
            state.isLogin = false
        },
        addUser: (state, action) => {
            state.users = [
                ...state.users ,
                {
                    id : action.payload.id ,
                    username : action.payload.user.username ,
                    password : action.payload.user.password
                }
            ]
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchUserTotalGet.fulfilled, (state, action) => {
                    state.users = action.payload
                })
        }
    }
})

export const {login, logout, addUser} = userSlice.actions ;
export default userSlice.reducer