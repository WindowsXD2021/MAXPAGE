/*__  __          __   _______        _____ ______ 
 |  \/  |   /\    \ \ / /  __ \ /\   / ____|  ____|
 | \  / |  /  \    \ V /| |__) /  \ | |  __| |__   
 | |\/| | / /\ \    > < |  ___/ /\ \| | |_ |  __|  
 | |  | |/ ____ \  / . \| |  / ____ \ |__| | |____ 
 |_|  |_/_/    \_\/_/ \_\_| /_/    \_\_____|______|
 
by Ignacy Swiatecki

Licensed under MIT (https://github.com/WindowsXD2021/MAXPAGE/blob/master/LICENSE)
*/
function redirect(url) {
    location.href = url;
}
function recursiveList(arr, id, stylesOlUl=null, stylesLi=null, ordered=false) {
    if (ordered == true) {
        var text = `<ol style=\"${stylesOlUl}\">`;
        for (var i = 0; i < arr.lenght; i++) {
            text += `<li style=\"${stylesLi}\">` + arr[i] + "</li>";
        }
        text += "</ol>";
        document.getElementById(id).innerHTML = text;
    } else if (ordered == false) {
        var text = `<ul style=\"${stylesOlUl}\">`;
        for (var i = 0; i < arr.lenght; i++) {
            text += `<li style=\"${stylesLi}\">` + arr[i] + "</li>";
        }
        text += "</ul>";
        document.getElementById(id).innerHTML = text;
    }
}