
function getDate(dateFromUser = Date.now()) {
    let newDateJRB = new Date(dateFromUser);
    let monthJRB = newDateJRB.getMonth() + 1;
    let yearJRB = newDateJRB.getFullYear()
    let dateJRB = newDateJRB.getDate();

    return {
        format: function (currentFormatJRB = 'dd-mm-yy') {
            let styleJRB = currentFormatJRB.includes('-') ? '-' : currentFormatJRB.includes('/') ? '/' : '';
            let dateFormatSetterJRB = styleJRB == '-' ? currentFormatJRB.split('-') : currentFormatJRB.split('/');

            for (let i = 0; i < dateFormatSetterJRB.length; i++) {
                if (dateFormatSetterJRB[i].includes('d')) {
                    if (dateFormatSetterJRB[i].length > 2) {
                        console.log('wrong date format');
                        return;
                    }
                    if (dateJRB < 10) {
                        dateJRB = `0${dateJRB}`
                    }
                    dateFormatSetterJRB[i] = dateJRB;
                }

                else if (dateFormatSetterJRB[i].includes('m')) {
                    if (dateFormatSetterJRB[i].length > 2) {
                        console.log('wrong month format');
                        return;
                    }
                    if (monthJRB < 10) {
                        monthJRB = `0${monthJRB}`
                    }
                    dateFormatSetterJRB[i] = monthJRB;
                }

                else if (dateFormatSetterJRB[i].includes('y')) {
                    if (dateFormatSetterJRB[i].length > 4 || dateFormatSetterJRB[i].length == 3) {
                        console.log('year format wrong');
                        return;
                    }
                    if (dateFormatSetterJRB[i].length == 2) {
                        yearJRB = yearJRB.toString().slice(-2)
                    }
                    dateFormatSetterJRB[i] = yearJRB;
                }
            }
            return dateFormatSetterJRB.join(styleJRB);
        },
    }

    // else if(functionality === 'subtract_days_from_date') {
    //     return function(numberOfDaysToSub) {
    //         let days = Math.floor(numberOfDaysToSub);
    //         let timeByUser = days*24*60*60*1000
    //         let time = date.getTime();
    //         let newDate = new Date(time-timeByUser)
    //         return newDate;
    //     } 
    // }

}

module.exports = getDate;

// console.log(getDate().format('mm-yyyy-dd'))

// let m = inputDate('subtract_days_from_date', '2021-03-25')('5')

// let c = inputDate('format', m)('dd-mm-yyyy')

// console.log('m:-', c)