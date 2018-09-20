import { TechManager } from './techmanager';
export function run(context: any, req: any): void {

  const category = context.bindingData.category;
  const tipFilter = context.bindingData.tip;
  context.log(`category: ${category} tip: ${tipFilter}`);
  if (category === null || category === undefined) {
    context.res = {
      body: new TechManager().getCategories()
      .map(c => {
        return {
          name: c.name,
          type: c.type,
          href: `${context.req.originalUrl}/${c.name}`
        };
      })
    };
  } else {
    context.res = {
      body: new TechManager().getTips(category, tipFilter)
    };
  }

  context.done();
}
