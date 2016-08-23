/**
 * Created by user on 8/23/16.
 */
function  Employee(name) {
    if (isNaN(name)) {
        var _name = name;
    }else console.log('Incorrect name!');
    var _currentTask;
    var _hoursLeft;

    this.getName = function () {
        return _name;
    };

    this.setName = function (name) {
        if (!isNaN(name)) {
            return 'Incorrect Name!';
        }
        _name = name;
    };

    this.getCurrentTask = function () {
        return _currentTask;
    };

    this.setCurrentTask = function (currentTask) {
        _currentTask = currentTask;
    };

    this.getHoursLeft = function () {
        return _hoursLeft;
    };

    this.setHoursLeft = function (hoursLeft) {
        if (isNaN(hoursLeft) || hoursLeft < 0) {
            return 'Incorrect Hours!';
        }
        _hoursLeft = hoursLeft;
    };

}

Employee.prototype.work = function () {
    var task = this.getCurrentTask();

    if (this.getHoursLeft() - task.getWorkingHours() < 0) {
        task.setWorkingHours(task.getWorkingHours() - this.getHoursLeft());
        this.setHoursLeft(0);
    }else {
        this.setHoursLeft(this.getHoursLeft() - task.getWorkingHours());
        task.setWorkingHours(0);
    }
};

Employee.prototype.showReport = function () {
    var NameOfEmpl = this.getName();
    var NameOfTask = this.getCurrentTask().getName();
    var EmplHoursLeft = this.getHoursLeft();
    var TaskHoursLeft = this.getCurrentTask().getWorkingHours();

    return console.log('The '+NameOfEmpl+' employee was working on '+NameOfTask+' task.His work hours left today is  '+ EmplHoursLeft + '!Hours left for the ' +
        'task to be done is:'+TaskHoursLeft)+'!';

};