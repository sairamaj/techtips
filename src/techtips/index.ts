import { TechManager } from "./techmanager";
import { TipSearch } from "./tipsearch";
import { _ } from "underscore";

export function run(context: any, req: any): void {
  function normalize(val) {
    if (val === null || val === undefined || _.isEmpty(val)) {
      return undefined;
    }
    return val;
  }
  context.log('binding data:' + JSON.stringify(context.bindingData))
  const category = normalize(context.bindingData.category);
  const tipFilter = normalize(context.bindingData.tip);
  const search = normalize(context.req.query);
  context.log(`category: ${category} tip: ${tipFilter} search:${search}`);

  if (category === undefined) {
    if (search != undefined && search.q !== undefined) {
      // search
      context.log(`search in progress ${search.q}`);
      context.res = {
        body: TipSearch.search(search.q)
      };
    } else {
      // getting categories.
      context.res = {
        body: new TechManager().getCategories().map(c => {
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
