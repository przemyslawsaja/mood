import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SoundSet } from './schemas/sound-set.schema';
import * as mongoose from 'mongoose';
import { CreateSoundSetDto } from './dto/create.dto';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class SoundSetService {
  constructor(
    @InjectModel(SoundSet.name)
    private soundSetModel: mongoose.Model<SoundSet>,
  ) {}

  async findAll(user: User): Promise<SoundSet[]> {
    return this.soundSetModel.find({ user: user._id });
  }

  async create(payload: CreateSoundSetDto, user: User): Promise<SoundSet> {
    const data = { ...payload, user: user._id };
    return await this.soundSetModel.create(data);
  }
}
