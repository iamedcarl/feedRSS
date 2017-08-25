import { combineReducers } from 'redux';
import session from './session_reducer';
import articles from './article_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
  session,
  articles,
  ui,
});

export default rootReducer;
