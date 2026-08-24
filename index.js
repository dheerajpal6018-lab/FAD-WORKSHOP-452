import {EventEmitter} from "node:events";
const task = new EventEmitter();

task.on("great",(name) => {
console.log('hello, ${name}! Welcome to the session.');
});
task.on("exit", (reason) =>{
    console.log('session ending . Reason: ${reason}');

});
task.on("great", () =>{
    console.log("class started by chandrahas mishra");

});
task.on("exit", () =>{
    console.log("class finished by chandrahas mishra ");

});
task.emit("great", "Student");
task.emit("exit", "Class completed");



