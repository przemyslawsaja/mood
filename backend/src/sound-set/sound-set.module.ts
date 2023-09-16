import { Module } from '@nestjs/common';
import { SoundSetController } from './sound-set.controller';
import { SoundSetService } from './sound-set.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SoundSetSchema } from './schemas/sound-set.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'SoundSet', schema: SoundSetSchema }]),
  ],
  controllers: [SoundSetController],
  providers: [SoundSetService],
})
export class SoundSetModule {}
