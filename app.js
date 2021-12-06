function addText() {
    var text = document.getElementById("title")
    if (title.value.length > 2) {
        var title = document.getElementById("titlee")
        var titleTxt = document.createTextNode(title.value)
    }
    title.appendChild(titleTxt)
}


var title = document.createElement("div")
console.log(title)