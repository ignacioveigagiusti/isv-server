import FileContainer from '../../containers/fileContainer';

class cartFileDao extends FileContainer{
    constructor(){
        super('DB/carts.json')
    }
}