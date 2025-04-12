import { createReducer, on } from "@ngrx/store";
import { OPTIONS_REDUCER_INITIAL_STATE } from "./options.initial-state";
import * as actions from "./options.actions";

export const optionsReducer = createReducer(
    OPTIONS_REDUCER_INITIAL_STATE,
    on(actions.setTheme, (state, action) => (
      {
        ...state,
        theme: action.theme
      }
    )),

    on(actions.setLanguage, (state, action) => (
      {
        ...state,
        language: action.language
      }
    ))

);