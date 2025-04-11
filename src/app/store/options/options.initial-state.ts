export interface OptionsReducer{
    theme: "light" | "dark",
}

export const OPTIONS_REDUCER_INITIAL_STATE: OptionsReducer = {
    theme: "light"
}