import { Body, Controller, Post } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/Auth.dto';

@Controller('auth')
export class AuthController {
    

    @Post()
    login(@Body() authPayload:AuthPayloadDto){

    }
}
