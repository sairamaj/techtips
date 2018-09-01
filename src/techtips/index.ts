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
    const response = new TechManager().getTips(category)
    .map(tip => {
      return { name: tip};
    });

    context.res = {
      body: response
    };
  }

  context.done();
}
