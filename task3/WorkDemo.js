/**
 * Created by user on 8/23/16.
 */
var employee1 = new Employee('Ivan');
var employee2 = new Employee('Dimitur');

var task1 = new Task('BMW REAR GLASS', 120);
var task2 = new Task('BMW AUDIO SYSTEM', 80);

employee1.setHoursLeft('8');
employee2.setHoursLeft('8');
employee1.setCurrentTask(task1);
employee2.setCurrentTask(task2);
employee1.work();
employee2.work();
employee1.showReport();
employee2.showReport();
