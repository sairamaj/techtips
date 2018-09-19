import { TechManager } from './techmanager';
export function run(context: any, req: any): void {

  const category = context.bindingData.category;
  const tipFilter = context.bindingData.tip;
  context.log(`category: ${category} tip: ${tipFilter}`);
  if (category === null) {
    context.res = {
      body: new TechManager().getCategories()
      .map(c => {
        return {
          name: c,
          href: `${context.req.originalUrl}/${c}`
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
