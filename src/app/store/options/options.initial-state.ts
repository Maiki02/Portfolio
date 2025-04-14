export interface OptionsReducer{
    theme: "light" | "dark",
    language: "es" | "en",
    route: string
}

export const OPTIONS_REDUCER_INITIAL_STATE: OptionsReducer = {
    theme: "light",
    language: "es",
    route: ""
}