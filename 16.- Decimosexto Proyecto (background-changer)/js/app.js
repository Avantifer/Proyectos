const background = document.getElementById('background');
const btnDownload = document.getElementById('btn-save');
var fileName;

document.getElementById('dropdown').onchange = function() {
    background.className = this.value;
    document.getElementById('title').className = this.value+"-title";
    let style = window.getComputedStyle(background);
    let img = style.getPropertyValue('background-image');
    fileName = img.substring(img.lastIndexOf('/') + 1);
    fileName = fileName.slice(0, fileName.length-2);
}

var filters = document.querySelectorAll('input[type=range]');
function applyFilter(){
    var computedFilter = "";
    filters.forEach(function(item, index) {
        computedFilter += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
        background.style.filter = computedFilter;
    });
};