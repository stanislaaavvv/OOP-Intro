/**
 * Created by user on 8/21/16.
 */

function  Computer(year,price,isNotebook,hardDiskMemory,freeMemory,operatingSystem) {
    this.year = year;
    this.price = price;
    this.isNotebook = isNotebook;
    this.hardDiskMemory = hardDiskMemory;
    this.freeMemory = freeMemory;
    this.operatingSystem = operatingSystem;

}

Computer.prototype.changeOperationSystem = function (newOperationSystem) {
        this.operatingSystem = newOperationSystem;
};

Computer.prototype.useMemory = function (memory) {
    if (memory > this.freeMemory) {
        console.log('"Not enough free memory!"');
    } else {
        this.freeMemory = this.freeMemory - memory;
    }
};

Computer.prototype.getInfo = function () {
    console.log ('Year : ' + this.year + '  Price :' + this.price + '$  Is it notebook :' + this.isNotebook +
    '  Hard Disk memory : ' + this.hardDiskMemory + 'GB  Free memory : ' + this.freeMemory + 'GB  Operating system :' + this.operatingSystem);
};