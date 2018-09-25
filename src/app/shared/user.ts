export class User {
    constructor(
    public id: string,
    public name: string,
    public department: string,
    public admin?: boolean,
    public nickname?: string
  ) {  }
}
