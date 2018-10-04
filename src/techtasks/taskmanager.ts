import { Task } from "./task";

export class TaskManager{
    getTasks() : Array<Task>{
        return [
            new Task(1,"ResourceGroup.Create"),
            new Task(2,"VM.Create.Basic"),
            new Task(3,"VM.Create.With.PreInstalled"),
            new Task(4,"WebApp.Create"),
            new Task(5,"Api.Create")
        ]
    }

    getTaskDetail(id:number) : Task{
        return new Task(id,`task: ${id}`, `${id} details here.`);
    }
}
