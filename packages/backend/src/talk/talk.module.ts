import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { TalkController } from './talk.controller';
import { TalkGateway } from './talk.gateway';
import { TalkService } from './talk.service';

@Module({
  imports: [PrismaModule, AuthModule, UserModule],
  controllers: [TalkController],
  providers: [TalkService, TalkGateway],
})
export class TalkModule {}
