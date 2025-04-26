import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { PrismaService } from 'src/database/prisma.service';
import { SupabaseService } from 'src/supabase/supabase.service';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/services/user.service';


@Module({
  imports:[UserModule],
  controllers: [AuthController],
  providers: [AuthService,SupabaseService],
})
export class AuthModule {}
