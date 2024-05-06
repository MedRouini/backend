import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;
  @MinLength(6, { message: 'Password is too short' })
  readonly password: string;
  @IsNotEmpty()
  @IsAlpha()
  readonly firstName: string;
  @IsNotEmpty()
  @IsAlpha()
  readonly lastName: string;
  @MinLength(8, { message: 'This not a valid ID number' })
  @MaxLength(8, { message: 'This not a valid ID number' })
  readonly identityNumber: string;
}
