const fs = require('fs')
import { join } from 'path'

export class TipManager{
    public getCatagories(): string[] {
        const isDirectory = source => fs.lstatSync(source).isDirectory()
        const isSpecial = source => source.includes('node_modules')
        
        const getDirectories = source =>
            fs.readdirSync(source).map(name => join(source, name))
            .filter(isDirectory).filter(source => !isSpecial(source))
        return getDirectories('.')
    }
}
