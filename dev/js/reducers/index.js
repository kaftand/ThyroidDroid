import {combineReducers} from 'redux';
import GameModeReducer from './reducers-game-mode';
import AuthReducer from './reducers-auth';
import loginErrorReducer from './reducers-login-error';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    mode: GameModeReducer,
    user: AuthReducer,
    loginError:loginErrorReducer
});

export default allReducers
