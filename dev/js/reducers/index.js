import {combineReducers} from 'redux';
import GameModeReducer from './reducers-game-mode';
import AuthReducer from './reducers-auth';
import LoginErrorReducer from './reducers-login-error';
import LeaderReducer from './reducers-leader';
import TopicsReducer from './reducers-topics';
import TopicsPartReducer from './reducers-topicpart';
import CasesReducer from './reducers-cases';
import CasesPartReducer from './reducers-casepart';
import LoadingReducer from './reducers-loading';
import LessonReducer from './reducers-lesson';
import QuizReducer from './reducers-quiz';
import QuestionOrderReducer from './reducers-question-order';
import QuestionNumberReducer from './reducers-question-number';
import GraduatedListReducer from './reducers-graduated'

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
    topicpart: TopicsPartReducer,
    cases: CasesReducer,
    casepart: CasesPartReducer,
    loading: LoadingReducer,
    lesson: LessonReducer,
    quiz: QuizReducer,
    questionOrder: QuestionOrderReducer,
    questionNumber: QuestionNumberReducer,
    graduatedList: GraduatedListReducer
});

export default allReducers
