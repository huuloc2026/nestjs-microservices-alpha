import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Tran',
      age: 25,
    },
    {
      id: 2,
      firstName: 'Jake',
      lastName: 'Bui',
      age: 15,
    },
  ];
  findAll() {
    return this.users;
  }
}
