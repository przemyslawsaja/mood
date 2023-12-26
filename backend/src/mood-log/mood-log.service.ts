import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MoodLog } from './schemas/mood-log.schema';
import * as mongoose from 'mongoose';
import { CreateMoodLogDto } from './dto/create.dto';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class MoodLogService {
  constructor(
    @InjectModel(MoodLog.name)
    private moodLogModule: mongoose.Model<MoodLog>,
  ) {}

  async findAll(user: User): Promise<MoodLog[]> {
    return this.moodLogModule.find({ user: user._id });
  }

  async create(payload: CreateMoodLogDto, user: User): Promise<MoodLog> {
    const data = { ...payload, user: user._id };
    return await this.moodLogModule.create(data);
  }

  async remove(id: string) {
    return this.moodLogModule.findByIdAndRemove(id);
  }
}
