import { ProjectManager } from "./projectmanager";
import { _ } from "underscore";

export function run(context: any, req: any): void {

  context.log('codesnippets: request:' + JSON.stringify(req))
  const name = req.params.name;
  const githubApiAccessToken = process.env["GITHUBAPI_ACCESSTOKEN"]
  context.log(`codesnippets name:${name}`)
  if (name === undefined) {
    new ProjectManager(githubApiAccessToken).getTasks().then(projects=> {
      context.res = {
        body: projects.map(project => {
          return {
            ...project,
            href: `${context.req.originalUrl}/${project.name}`
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
    new ProjectManager(githubApiAccessToken).getTaskDetail(name)
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
