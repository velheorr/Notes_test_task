


// приведение даты к формату YYYY-MM-DD
export const dateFormat = (date)=>{
    let x = new Date(date);
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',

    };

    return x.toLocaleString("ru", options)
}