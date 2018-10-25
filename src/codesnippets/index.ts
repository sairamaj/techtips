import { CodeSnippetsManager } from "./codesnippetmanager";
import { _ } from "underscore";

export function run(context: any, req: any): void {

  context.log('codesnippets: request:' + JSON.stringify(req))
  const name = req.params.name;
  const githubApiAccessToken = process.env["GITHUBAPI_ACCESSTOKEN"]
  context.log(`codesnippets name:${name}`)
  if (name === undefined) {
    new CodeSnippetsManager(githubApiAccessToken).getTasks().then(snippets=> {
      context.res = {
        body: snippets.map(snippet => {
          return {
            ...snippet,
            href: `${context.req.originalUrl}/${snippet.name}`
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
    new CodeSnippetsManager(githubApiAccessToken).getTaskDetail(name)
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
