import {combineReducers} from 'redux';
import GameModeReducer from './reducers-game-mode';
import AuthReducer from './reducers-auth';
import LoginErrorReducer from './reducers-login-error';
import LeaderReducer from './reducers-leader';
import TopicsReducer from './reducers-topics';
import TopicsPartReducer from './reducers-topicpart'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    mode: GameModeReducer,
    user: AuthReducer,
    loginError: LoginErrorReducer,
    leaders: LeaderReducer,
    topics: TopicsReducer,
    topicpart: TopicsPartReducer
});

export default allReducers
