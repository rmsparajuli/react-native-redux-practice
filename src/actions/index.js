export const increamentCounter = (count) => {
return {
    type:"INCREAMENT_COUNT",
    payload: count+1
}
}

export const decerementCounter = (count) => {
    return {
        type:"DECREMENT_COUNT",
        payload: count-1
    }
    }
    
