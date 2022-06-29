const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
// 月の単位だけは0から始まるからプラス1をしておく

const firstDate = new Date(year,month -1 ,1);
const firstDay = firstDate.getDay();


// 来月の最終日の前の日　いわゆる最終日
const lastDate = new Date(year,month,0);
const lastDayCount = lastDate.getDate();

let dayCount = 1;
let createhtml = '';

createhtml = '<h1>' + year + '/' + month + '</h1>';
createhtml += '<table>' + '<tr>' 

const weeks = ['日','月','火','水','木','金','土'];
for (let i = 0; i < weeks.length; i++) {
    createhtml += '<td>' + weeks[i] + '</td>';
}

createhtml += '<tr>';

for (let n = 0; n < 6; n++) {
    createhtml += '<tr>';

    for (let d = 0; d < 7; d++) {
        if (n == 0 && d < firstDay) {
            createhtml += '<td></td>'
        }else if(dayCount > lastDayCount){
            createhtml += '<td></td>'
        }else{
            createhtml += '<td>' + dayCount + '</td>';
            dayCount++;
        }
     }

    createhtml += '</tr>';
}
createhtml += '</table>'

document.querySelector('#calender').innerHTML = createhtml;
