import { TechManager } from "./techmanager";
import { TipSearch } from "./tipsearch";
import { _ } from "underscore";

export function run(context: any, req: any): void {
  console.log('context:' + JSON.stringify(context))
  console.log('req:' + JSON.stringify(req))
  const category = req.params.category;
  const tipFilter = req.params.tip;
  const search = req.query;
  context.log('techtips: request:' + JSON.stringify(req))
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
