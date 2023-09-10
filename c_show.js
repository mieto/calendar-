var datetime = new Date();
var year = datetime.getFullYear();
var month = datetime.getMonth() + 1;
var day = datetime.getDate();
var hour = datetime.getHours();
var min = datetime.getMinutes();
var sec = datetime.getSeconds();





function datetimeshow() {
    var datetime_detail = year + "年" + month + '月' + day + '日' + hour + '時' + min + '分' + sec + '秒';
    alert(datetime_detail);
}
