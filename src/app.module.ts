import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfigs } from './config/app.config';
import { PollsModule } from './polls/polls.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfigs],
    }),
    PollsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
