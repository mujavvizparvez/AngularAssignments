import { IUser } from "../models/IUser";

export class User implements IUser {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public occupation?: string,
   
  ) {}
}
