const GetInfoById = function (id, arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        arr.find(element => {
            return id === element.id
        })
    }
}

export default {
    GetInfoById
}