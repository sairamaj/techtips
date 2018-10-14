const octokit = require("@octokit/rest")();
const Base64 = require("js-base64").Base64;

export class GitProxy {
    constructor(public accessToken: string){
    }

    getAuthHeader(): any {
        if (this.accessToken === undefined || this.accessToken.length == 0) {
          return {}; // when used in local we can use without token.
        }
    
        return {
          authorization: `Bearer ${this.accessToken}`
        };
      }
    
      async getRepoFiles(repo,path,ext): Promise<Array<string>> {
        var info = await octokit.repos.getContent({
          headers: this.getAuthHeader(),
          owner: "sairamaj",
          repo: repo,
          path: path
        });
        return info.data.map(p => p.name).filter(name=> name.endsWith(ext));
      }

      async getRepoFileContent(file): Promise<any> {
        var response = await octokit.repos.getContent({
          headers: this.getAuthHeader(),
          owner: "sairamaj",
          repo: "techdata",
          path: file
        }).catch(err => {
          return { error: err }
        });
    
        if( response.error !== undefined){
          return { error: response.error }
        }
        return {
          data: Base64.decode(response.data.content)
        };
      }
}