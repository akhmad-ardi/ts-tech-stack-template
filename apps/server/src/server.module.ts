import { Module } from '@nestjs/common';
// import { ServerController } from './server.controller';
// import { ServerService } from './server.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  // controllers: [ServerController],
  // providers: [ServerService],
})
export class ServerModule {}
