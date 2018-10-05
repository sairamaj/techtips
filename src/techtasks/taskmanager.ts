import { Task } from "./task";
const octokit = require('@octokit/rest')()
const Base64 = require('js-base64').Base64;

export class TaskManager {

    accessToken: string = "d70585d17c12eeaf52774808d1b03c79f78ba942";
    getAuthHeader(): any {
        return {
            authorization: `Bearer ${this.accessToken}`
        }
    }
    async getRepoFileContent(file): Promise<string> {
        var response = await octokit.repos.getContent({
            headers: this.getAuthHeader(),
            owner: 'sairamaj',
            repo: 'techtips',
            path: file
        })
        return Base64.decode(response.data.content)
    }

    async getRepoFiles(path): Promise<Array<string>> {
        var info = await octokit.repos.getContent({
            headers: this.getAuthHeader(),
            owner: 'sairamaj',
            repo: 'techtips',
            path: path
        })
        return info.data.map(p => p.name);
    }

    async getTasks(): Promise<Array<Task>> {
        var mdFiles = await this.getRepoFiles('data/techtasks/azure')
        return mdFiles.map(mdFile => new Task(mdFile))
    }

    async getTaskDetail(name: string): Promise<Task> {
        var content = await this.getRepoFileContent(`data/techtasks/azure/${name}`);
        return new Task(name, content);
    }
}
