/**
 * Created by user on 8/21/16.
 */

var FirstComputer = new Computer(2007,1000,false,500,200,'Windows');
var SecondComputer = new Computer(2012,1800,true,750,400,'Linux');


FirstComputer.useMemory(100);
SecondComputer.changeOperationSystem('iOS');


FirstComputer.getInfo();
SecondComputer.getInfo();