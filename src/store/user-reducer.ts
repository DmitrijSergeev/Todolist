
type StatType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = {
    [key: string]: any
}
export const userReducer = (state: StatType, action: ActionType) => {
    switch (action.type){
        case 'INCREMENT_AGE':
            state.age = state.age + 1
            return state
        case 'INCREMENT-CHILDREN-COUNT':
            state.childrenCount = state.childrenCount + 1
            return state
        case 'CHANGE-NAME':
            state.name = 'Viktor'
            return state
        default:
            throw new Error('I don\'t understand this type')
    }
}