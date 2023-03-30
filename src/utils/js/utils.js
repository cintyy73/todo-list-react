export const setItemLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getItemLS = (key) => {
    return JSON.parse(localStorage.getItem(key ))
}
