let body = document.querySelector("body");

let createElement = (tag, children = [], innerText = '',attr = {}) => {
    let el = document.createElement(tag);
    if (innerText) {
        el.innerText = innerText;
    }
    let attrKeys = Object.keys(attr)
    if(attrKeys.length) {
        for (let i of attrKeys) {
            el.setAttribute(i, attr[i])
        }
    }
    if (children.length) {
        el.append(...children)
    }
    return el
}


let tbodyRows= []
for (let i of [
    [{value: 1, tag: "th", attr: {scope: "row"}}, {value: "Mark", tag: "td"}, {value: "Otto", tag: "td"}, {value: "@mdo", tag: "td"}], 
    [{value: 2, tag: "th", attr: {scope: "row"}}, {value: "Jacob", tag: "td"}, {value: "Thornton", tag: "td"}, {value: "@fat", tag: "td"}], 
    [{value: 3, tag: "th", attr: {scope: "row"}}, {value: "Larry the Bird", tag: "td", attr: {colspan: 2}}, {value: "@twitter", tag: "td"}]]){
        let tbodyRow = []
        for(let tdData of i) {
            tbodyRow.push(createElement(tdData.tag, [], tdData.value, tdData.attr))
        }
        tbodyRows.push(createElement("tr", tbodyRow))
}

let tableBody = createElement("tbody", tbodyRows)

let rows = []
for (var i of ["#", "First", "Last", "Handle"]) {
    rows.push(createElement("th", [], i, {scope: "col"}))
}
let headTr = createElement("tr", rows);
let tableHead = createElement("thead", [headTr])

let table = createElement("table", [tableHead, tableBody], "", {class: "table"})
body.appendChild(table)

