import { Module } from '@nestjs/common';
import { UsersModule } from 'resources/users/users.module'
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AppConfigModule, AppConfigService } from 'app';
import { JWT_TOKEN_EXPIRATION } from 'constants/default';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtSrategy } from './jwt.strategy';


@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      useFactory: async (configService: AppConfigService) => ({
        secret: configService.key,
        signOptions: { expiresIn: JWT_TOKEN_EXPIRATION },
      }),
      inject: [AppConfigService],
    }),
    AppConfigModule,
  ],
  providers: [AuthService, LocalStrategy, JwtSrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
