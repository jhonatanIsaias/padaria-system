import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { PrismaService } from 'src/database/prisma.service';
import { SupabaseService } from 'src/supabase/supabase.service';


@Module({
  imports:[],
  controllers: [AuthController],
  providers: [AuthService,PrismaService,SupabaseService],
})
export class AuthModule {}
