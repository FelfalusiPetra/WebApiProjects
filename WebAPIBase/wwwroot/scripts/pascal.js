window.onload = function () {
    initPascal(10);
};

var initPascal = function (n) {
    for (var sor = 0; sor < 10; sor++) {
        var újSorDiv = document.createElement('div')
        újSorDiv.classList.add('sor');
        document.getElementById('pascal').appendChild(újSorDiv);
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var újElemDiv = document.createElement("div")
            újElemDiv.classList.add('elem');
            újElemDiv.innerHTML = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop));
            újSorDiv.appendChild(újElemDiv);
        }
    }
}
var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

