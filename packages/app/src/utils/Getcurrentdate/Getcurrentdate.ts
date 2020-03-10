function getCurrentDate() {
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth()+1

    return `${date<10?`0${date}`:`${date}`}/${month<10?`0${month}`:`${month}`}`
}

export default getCurrentDate