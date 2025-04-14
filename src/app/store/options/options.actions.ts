import { createAction, props } from "@ngrx/store";

export const setTheme = createAction(
    '[Options] Set Theme', 
    props<{theme: "light" | "dark"}>()
)

export const setLanguage = createAction(
    '[Options] Set Language', 
    props<{language: "es" | "en"}>()
)

export const setRoute = createAction(
    '[Options] Set Route', 
    props<{route: string}>()
)