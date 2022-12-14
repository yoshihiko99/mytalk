import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ModuleRef } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { useContainer } from 'class-validator';

import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { IsUserAlreadyExistConstraint } from './auth.entity';
import { AuthService } from './auth.service';
import { JwtRefreshStrategy } from './jwt-refresh.strategy';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    ConfigModule,

    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
      }),
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    JwtRefreshStrategy,
    IsUserAlreadyExistConstraint,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})

// for IsUserAlreadyExistConstraint injection
export class AuthModule {
  constructor(private moduleRef: ModuleRef) {}
  onModuleInit() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useContainer(this.moduleRef, { fallbackOnErrors: true });
  }
}
