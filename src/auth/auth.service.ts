import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/auth.dto';

const fakeUsers = [
  {
    id: 1,
    email: 'tousif@example.com',
    password: '123456',
  },
  {
    id: 2,
    email: 'john@example.com',
    password: 'password123',
  },
];

@Injectable()
export class AuthService {
  validateUser(authPayload: AuthPayloadDto) {
    const { email, password } = authPayload;
    const findUser = fakeUsers.find((user) => user.email === email);

    if (!findUser) return null;

    if(password === findUser.password) {
      return findUser;
    }
  }
}
