import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { PasswordService } from 'src/password/password.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly passwordService: PasswordService,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    if (await this.findUserByIdentityNumber(createUserDto.identityNumber)) {
      throw new ConflictException('identity number already used');
    }
    if (!createUserDto.email.match(/^[a-zA-Z0-9._%+-]+@issatso\.u-sousse\.tn$/))
      throw new UnauthorizedException('email not valid');

    if (await this.findUserByEmail(createUserDto.email)) {
      throw new ConflictException('email already used');
    }
    const hashedPassword = await this.passwordService.hashPassword(
      createUserDto.password,
    );
    const fullName = (
      createUserDto.firstName +
      ' ' +
      createUserDto.lastName
    ).trim();
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
      fullName,
    });

    return await this.userRepository.save(newUser);
  }
  findUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  findUserByIdentityNumber(identityNumber: string) {
    return this.userRepository.findOneBy({ identityNumber });
  }

  findUserById(id: number) {
    return this.userRepository.findOneBy({ id });
  }
}
