import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'tools/database/database.module';
import { authProviders } from './auth.providers';
import { AuthService } from './auth.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    ...authProviders,
  ],
})
export class AuthModule { }
