function genSubTable(i, j) {
    let table = document.createElement("table");
    for (let ii=0; ii<3; ++ii) {
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
        let row = table.insertRow();
        for (let jj=0; jj<3; ++jj) {
            let cell = row.insertCell();
            cell.id = `${i*3 + ii}.${j*3 + jj}`;
            input = document.createElement("input");
            input.maxlength = 1;
            input.style.width = 30;
            let val = ((i*3 + ii) + (j*3 + jj)) % 10;
            input.value = String(val);
            //input.value = String.fromCharCode('A'.charCodeAt(0) + (i*3 + ii)*9 + (j*3 + jj) );
            cell.appendChild(input);
        }
    }
    return table;
}

function genTable() {
    let table = document.createElement("table");
    for (let i=0; i<3; ++i) {
        let row = table.insertRow();
        for (let j=0; j<3; ++j) {
            let cell = row.insertCell();
            cell.appendChild(genSubTable(i, j));
        }
    }
    document.body.appendChild(table);
}


window.onload = function() {
    console.log("onload");
    genTable();
}

function clearBoard() {
    //let cell = document.getElementById("0.0");
    let cell = document.getElementById("4.8");
    cell.innerText = "?";
}
