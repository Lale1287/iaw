export class FileModel {

    name: String;
    creationDate: number;
    id?: string
    constructor(name: String) {
        this.name = name;
        this.creationDate = Date.now();
    }
}
