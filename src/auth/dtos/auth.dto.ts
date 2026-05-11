import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';

export class AuthPayloadDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email!: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  @Min(5, { message: 'Password must be at least 5 characters long' })
  password!: string;
}
