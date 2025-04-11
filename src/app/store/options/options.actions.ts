import { createAction, props } from "@ngrx/store";

export const setTheme = createAction(
    '[Options] Set Theme', 
    props<{theme: "light" | "dark"}>()
)