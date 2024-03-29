import { TechManager } from "./techmanager";
import { TipSearch } from "./tipsearch";
import { _ } from "underscore";

export function run(context: any, req: any): void {
  console.log("context:" + JSON.stringify(context));
  console.log("req:" + JSON.stringify(req));
  const category = req.params.category;
  const tipFilter = req.params.tip;
  const search = req.query;
  const githubApiAccessToken = process.env["GITHUBAPI_ACCESSTOKEN"];
  context.log("techtips: request:" + JSON.stringify(req));
  context.log(`category: ${category} tip: ${tipFilter} search:${search}`);

  if (category === undefined) {
    if (search != undefined && search.q !== undefined) {
      // search
      context.log(`search in progress ${search.q}`);
      TipSearch.search(search.q)
        .then(results => {
          context.res = {
            body: results
          };
          context.done();
        })
        .catch(err => {
          context.res = {
            body: err
          };
          context.done();
        });
    } else {
      // getting categories.

      new TechManager(githubApiAccessToken)
        .getCategories()
        .then(cat => {
          context.res = {
            body: cat.map(c => {
              return {
                name: c.name,
                type: c.type,
                href: `${context.req.originalUrl}/${c.name}`
              };
            })
          };
          context.done();
        })
        .catch(err => {
          context.res = {
            body: err
          };
          context.done();
        });
    }
  } else {
    // getting tips for categories.
    new TechManager(githubApiAccessToken)
      .getTips(category, tipFilter)
      .then(tips => {
        context.res = {
          body: tips
        };
        context.done();
      })
      .catch(err => {
        context.res = {
          body: { error: err }
        };
        context.done();
      });
  }
}
