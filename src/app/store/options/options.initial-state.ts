export interface OptionsReducer{
    theme: "light" | "dark",
    language: "es" | "en",
    route: string
    isMenuOpen: boolean
}

export const OPTIONS_REDUCER_INITIAL_STATE: OptionsReducer = {
    theme: "light",
    language: "es",
    route: "",
    isMenuOpen: true
}