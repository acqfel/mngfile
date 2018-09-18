export class User {
    constructor(
    public id: number,
    public name: string,
    public admin: boolean,
    public department: string,
    public nickname?: string
  ) {  }
}
