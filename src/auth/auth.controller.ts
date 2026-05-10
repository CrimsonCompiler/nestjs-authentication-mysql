import { Body, Controller, Post } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  @Post()
  login(@Body() authPayload: AuthPayloadDto) {}
}
