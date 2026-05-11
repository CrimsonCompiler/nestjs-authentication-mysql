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

    if (user && (await bcrypt.compare(authPayload.password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new HttpException('Invalid credentials', 401);
  }

  async login(authPayload: AuthPayloadDto) {
    const user = await this.validateUser(authPayload);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
