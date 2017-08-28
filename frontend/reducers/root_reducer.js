import { combineReducers } from 'redux';
import session from './session_reducer';
import collections from './collection_reducer';
import articles from './article_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
  session,
  collections,
  articles,
  ui,
});

export default rootReducer;
