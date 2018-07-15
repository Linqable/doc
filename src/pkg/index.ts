
// fuck webpack aliases
// fuck typescript aliases

declare class PackageJson {
    public version: string;
    public description: string;
    public author: string;
}
export default class pkg {
    private static get json(): PackageJson {
        return require("./../../package.json");
    }
    public static get version() {
        return this.json.version;
    }
    public static get description() {
        return this.json.description;
    }
    public static get author() {
        return this.json.author;
    }
}