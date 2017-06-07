const monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function dateFormatter (timestamp) {
    let newDate = new Date(timestamp);
    newDate = monthsList[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear();
    return newDate;
}
