import { Tip } from "./tip";
import { TechManager } from "./techmanager";
import { TechCategory } from "./techcategory";
var fulltextsearchlight = require('full-text-search-light');

export class TipSearch{
    static isIndexed : boolean;
    static engine = new fulltextsearchlight({
        ignore_case: true,   // default = true, Ignore case during all search queries
        index_amount: 8   // default = 12, The more indexes you have, the faster can be your search but the slower the 'add' method  gets
      });

    static search(value) : Array<Tip>{
        if(!TipSearch.isIndexed){
            console.log('indexing...')
            TipSearch.index();
            TipSearch.isIndexed = true
        }
        
        return TipSearch.engine.search(value)
    }

    static index(){
        // new TechManager("").getCategories().forEach(category=>{
        //     new TechManager("").getTips(category.name, undefined).forEach(tip =>{
        //         TipSearch.engine.add(tip);
        //     })
        // })
    }
}