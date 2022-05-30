import FileContainer from '../../containers/fileContainer';

class CartFileDao extends FileContainer{
    constructor(){
        super('DB/carts.json')
    }
}