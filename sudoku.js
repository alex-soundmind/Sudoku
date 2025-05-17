var Sudoku;
Sudoku = (function (window, document, undefined) {
Cell = function(a){};
Table = function () {};

Sudoku = function (options) {
    this.table = new Table();

    this.load = function(str){
        this.table.load(str);
    };
    };
    return Sudoku;
})(window, document);