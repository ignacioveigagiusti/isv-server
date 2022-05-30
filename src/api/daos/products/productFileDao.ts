import FileContainer from '../../containers/fileContainer';

class ProductFileDao extends FileContainer{
    constructor(){
        super('DB/products.json')
    }
}