import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: tsarType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === "up") {
                return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
            } else if (action.payload === "down") {
                return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
            }

        }
            return state
        case 'check': {
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}

type tsarType = SortUpACType | SortDownACType | FilterAgeType

type SortUpACType = ReturnType<typeof SortUpAC>

const SortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}

type SortDownACType = ReturnType<typeof SortDownAC>
const SortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}

type FilterAgeType = ReturnType<typeof FiltrerAge>
const FiltrerAge = () => {
    return {
        type: 'check',
        payload: 18
    }
}
