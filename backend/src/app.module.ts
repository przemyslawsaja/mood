import { Module } from '@nestjs/common';
import { MoodLogModule } from './mood-log/mood-log.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    MoodLogModule,
    AuthModule,
  ],
})
export class AppModule {}
