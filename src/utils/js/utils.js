export const setItemLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getItemLS = (key) => {
    return JSON.parse(localStorage.getItem(key ))
}

//Header 

export const handleChange = (e, value, setValue) => {

    e.preventDefault()
    setValue({
        ...value,
        [e.target.name]: (e.target.value)
    })
}  
