import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from 'redux-thunk'
import { cartReducer } from "./reducers/cartReducer";
import { cinemaReducer } from "./reducers/cinemaReducer";

import { showReducer } from "./reducers/showReducer";
import { userReducer } from "./reducers/userReducer";

const reducers = combineReducers({
    show    :  showReducer,
    cinema  :  cinemaReducer,
    cart    :  cartReducer,
    user    :  userReducer
})



const store = createStore(reducers,applyMiddleware(thunk))

export type State = ReturnType<typeof reducers>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store