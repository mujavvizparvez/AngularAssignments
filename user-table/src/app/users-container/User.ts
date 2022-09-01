import { IUser } from '../models/IUser';

export class User implements IUser {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public location: string
  ) {}
}
