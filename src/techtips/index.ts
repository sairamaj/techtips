import { TechManager } from './techmanager';
export function run(context: any, req: any): void {
  const cat = new TechManager().getCategories();

  const category = context.bindingData.category;
  context.log(`category: ${category}`);
  if (category === null) {
    const response = cat.map(c => {
      return { name: c };
    });
    context.res = {
      body: response
    };
  } else {
    context.res = {
      body: new TechManager().getTips(category)
    };
  }

  context.done();
}
