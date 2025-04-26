import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

import { PrismaModule } from 'src/database/prisma.module';


@Module({
  imports: [PrismaModule], 
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], 
})
export class UserModule {}
