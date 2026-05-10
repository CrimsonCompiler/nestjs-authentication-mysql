import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/Auth.dto';

const fakeUsers = [
  {
    id: 1,
    username: 'tousif',
    password: '123456',
  },
  {
    id: 2,
    username: 'john',
    password: 'password123',
  },
];

@Injectable()
export class AuthService {
  validateUser(authPayload: AuthPayloadDto) {
    const { username, password } = authPayload;
    const findUser = fakeUsers.find((user) => user.username === username);

    if (!findUser) return null;

    if(password === findUser.password) {
    }
  }
}
