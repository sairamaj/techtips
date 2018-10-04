import { TaskManager } from "./taskmanager";
import { _ } from "underscore";

export function run(context: any, req: any): void {
  function normalize(val) {
    if (val === null || val === undefined || _.isEmpty(val)) {
      return undefined;
    }
    return val;
  }
  const id = normalize(context.bindingData.id);
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