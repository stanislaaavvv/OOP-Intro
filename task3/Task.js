/**
 * Created by user on 8/23/16.
 */
function Task(name , workingHours) {

    if (isNaN(name)) {
        var _name = name;
    }else console.log('Incorrect name!');

    if (!isNaN(workingHours) || workingHours > 0) {
        var _workingHours = workingHours;
    }else console.log('Incorrect hours!');

    this.getName = function () {
        return _name;
    };

    this.setName = function (name) {
        if (!isNaN(name)) {
            return 'Incorrect Name!';
        }
        _name = name;
    };

    this.getWorkingHours = function () {
        return _workingHours;
    };

    this.setWorkingHours = function (WorkingHours) {
        if (isNaN(WorkingHours) || WorkingHours < 0) {
            return 'Incorrect Hours!';
        }
        _workingHours = WorkingHours;
    };
}