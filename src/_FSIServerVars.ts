export class _FSIServerVars {

    // PLEASE ENTER THE HOST AND CREDENTIALS TO BE USED BY THE API SAMPLES HERE

    // FSI Server host and credentials
    public readonly host: string = "";        // example: https://fsi.example.tld
    public readonly userName: string = "";
    public readonly passWord: string = "";

    // the values below do not need to be modified for
    // FSI Servers containing the default connector "sample-images"
    public readonly tempDirRoot: string = "/images/"; // the path to create temporary directories in
    public readonly sampleConnector: string = "/sample-images/";
    public readonly sampleImagesDirectory: string = "/sample-images/Collection/";

    constructor(){
        if (!this.host) this.throwRequiredVar("the FSI Server host");
        if (!this.userName) this.throwRequiredVar("a valid user name");
        if (!this.passWord) this.throwRequiredVar("a valid password");
    }

    public getTempDir(): string{
        return this.tempDirRoot + "ApiTEMP_" + new Date().getTime() + "_" + Math.round(1000000 * Math.random());
    }

    public throwRequiredVar(what: string): void{
        throw new Error("Please specify " + what + " in the file \"samples/src/_FSIServerVars.ts\" before running this sample!");
    }
}