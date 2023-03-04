export default class Icon {
    constructor(
        private readonly name: string,
        private readonly url: string,
        private readonly ext: string = 'png',
        private readonly link: string
    ) {}

    public getName(): string {
        return this.name;
    }
    
    public getFileName(): string {
        return this.name + '.' + this.ext;
    }

    public getSourcePath(): string {
        return 'icons' + this.url + '/' + this.getFileName();
    }
    
    public getLink(): string {
        return this.link;
    }
}