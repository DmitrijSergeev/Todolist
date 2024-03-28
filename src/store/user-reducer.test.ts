import {userReducer} from "./user-reducer";

test('only age', ()=>{
    const startState = {
        age: 14,
        childrenCount: 2,
        name: 'John'
    }
    const endState = userReducer(startState, {type: 'INCREMENT_AGE'})

    expect(endState.age).toBe(15)
})

test('only childrenCount', ()=>{
    const startState = {
        age: 14,
        childrenCount: 2,
        name: 'John'
    }
    const endState = userReducer(startState, {type: 'INCREMENT-CHILDREN-COUNT'})
    expect(endState.childrenCount).toBe(3)
})
test('user reducer should change name of user', () => {
    const startState = {name: 'Dimych', age: 20, childrenCount: 2}
    const newName = 'Viktor'
    const endState = userReducer(startState, {type: 'CHANGE-NAME', newName: newName})

    expect(endState.name).toBe(newName)
})