import { TaskManager } from "./taskmanager";
import { _ } from "underscore";

export function run(context: any, req: any): void {

  context.log('techtasks: request:' + JSON.stringify(req))
  const name = req.params.name;
  context.log(`techtasks name:${name}`)
  if (name === undefined) {
    new TaskManager().getTasks().then(tasks => {
      context.res = {
        body: tasks.map(task => {
          return {
            ...task,
            href: `${context.req.originalUrl}/${task.name}`
          };
        })
      };
      context.done();
    })
      .catch(err => {
        context.res = {
          body: err
        }
        context.done();
      })
  } else {
    new TaskManager().getTaskDetail(name)
      .then(task => {
        context.res = {
          body : task
        }
        context.done();
      })
      .catch(err => {
        context.done();
      })
  }
}
