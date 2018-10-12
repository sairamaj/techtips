import { TechCategory } from './techcategory';

class Test{
    
    test():void {
        let category = new TechCategory('', 'readme')
        category.getTips().then(t => {
            console.log(t)
        }).catch(err => {
            console.log('error :' + err)
        })
    }
}

new Test().test();