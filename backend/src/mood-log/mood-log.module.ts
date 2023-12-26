import { Module } from '@nestjs/common';
import { MoodLogController } from './mood-log.controller';
import { MoodLogService } from './mood-log.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoodLogSchema } from './schemas/mood-log.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'MoodLog', schema: MoodLogSchema }]),
  ],
  controllers: [MoodLogController],
  providers: [MoodLogService],
})
export class MoodLogModule {}
