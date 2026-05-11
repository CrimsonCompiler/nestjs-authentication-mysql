import { IsEmail, IsNotEmpty, Min } from 'class-validator';

export class AuthPayloadDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email!: string;

  @IsNotEmpty({ message: 'Password is required' })
  @Min(6, { message: 'Password must be at least 6 characters long' })
  password!: string;
}
