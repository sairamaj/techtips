export function run(context: any, req: any): void {

  context.res = {
    body: {
      msg: "hello"
    }
  }

  context.done();
}
