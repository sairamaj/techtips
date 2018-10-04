import { TaskManager } from "./taskmanager";
import { _ } from "underscore";

export function run(context: any, req: any): void {

  context.log('techtasks: request:' + JSON.stringify(req))
  const id = req.params.id;
  context.log(`techtasks id:${id}`)
  if (id === undefined) {
    context.res = {
      body: new TaskManager().getTasks().map(task => {
        return {
          ...task,
          href: `${context.req.originalUrl}/${task.id}`
        };
      })
    };
  }else{
    context.res = {
      body: new TaskManager().getTaskDetail(+id)
    }
  }

  context.done();
}
