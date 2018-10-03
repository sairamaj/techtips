import { TechManager } from './techmanager';
import { TipSearch } from './tipsearch';
import { _ } from 'underscore';

export function run(context: any, req: any): void {

  function getCategory(context){
    const category = context.bindingData.category;
    if(category === null || category === undefined || _.isEmpty(category) ){
      return undefined;
    }
    return category;
  }
  const category = getCategory(context);
  const tipFilter = context.bindingData.tip;
  const search = context.req.query;
  context.log(`category: ${category} tip: ${tipFilter}`);

  if (category === undefined){

    if (search.q !== undefined) {
      // search
      context.log(`search in progress ${search.q}`);
      context.res = {
        body: TipSearch.search(search.q)
      }
    } else {
      // getting categories.
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
    }
  } else {
    // getting tips for categories.
    context.res = {
      body: new TechManager().getTips(category, tipFilter)
    };
  }

  context.done();
}
