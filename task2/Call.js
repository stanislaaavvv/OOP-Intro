/**
 * Created by user on 8/21/16.
 */
function  Call(caller,reciever,duration) {
    var _caller = caller;
    var _reciever = reciever;
    var _duration = duration;
    var _callPrice = _priceForAMinute * duration;


    this.getCaller = function (){
        return _caller;
    };

    this.getReciever = function () {
        return _reciever;
    };

    this.getDuration = function () {
        return _duration;
    };

    this.getCallPrice = function () {
        return _callPrice;
    }

    this.setCaller = function (caller) {
        _caller = caller;
    };

    this.setReciever = function (reciever) {
        _reciever = reciever;
    };

    this.setDuration = function (duration) {
        _duration = duration;
    };

}