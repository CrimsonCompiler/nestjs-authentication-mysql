import { HttpException, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(authPayload: AuthPayloadDto) {
    const user = await this.usersService.findByEmail(authPayload.email);

    if (!user) {
      throw new HttpException('User not found', 404);
    }
    
  }
}
