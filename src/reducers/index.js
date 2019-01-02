import {combinedReducers} from 'redux'
import commentsReducer from './comments'

export default combinedReducers({
    comments: commentsReducer
})