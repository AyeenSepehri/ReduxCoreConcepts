import {createSlice , configureStore} from "@reduxjs/toolkit"

const initConterState = {
    counter: 0,
    status: false
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initConterState,
    reducers: {
        increment(state) {
            state.counter ++;
        },
        decrement(state) {
            state.counter --;
        },
        increace(state , action) {
            state.counter = state.counter + action.payload;
        },
        status(state) {
            state.counter = 0
            state.status = !state.status;
        },
    }
})

const initAuthState = {
    isAuthenticate: false
}

const authSlice = createSlice({
    name: "authentication",
    initialState: initAuthState,
    reducers: {
        loggedIn(state) {
            state.isAuthenticate =  true
        },
        loggedOut(state) {
            state.isAuthenticate = false
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        Authentication: authSlice.reducer, 
    }
})

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;

// const counterReducer = (state = initState , action) => {
//     switch(action.type){
//         case "increment": {
//             return{
//                 counter: state.counter + 1,
//                 status: state.status
//             }
//         }
//         case "decrement" : {
//             return {
//                 counter: state.counter - 1,
//                 status: state.status
//             }
//         }
//         case "increace": {
//             return{
//                 counter: state.counter + action.amount,
//                 status: state.status
//             }
//         }
//         case "Status": {
//                 return{
//                     counter: 0,
//                     status: !state.status
//                 }
//         }
//         default : {
//             return state
//         }
//     }
// }


// store.dispatch({type: "increment"})

// store.dispatch({type: "decrement"})
