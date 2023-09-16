import { SoundSet } from './schemas/sound-set.schema';
import * as mongoose from 'mongoose';
import { CreateSoundSetDto } from './dto/create.dto';
import { User } from '../auth/schemas/user.schema';
export declare class SoundSetService {
    private soundSetModel;
    constructor(soundSetModel: mongoose.Model<SoundSet>);
    findAll(user: User): Promise<SoundSet[]>;
    create(payload: CreateSoundSetDto, user: User): Promise<SoundSet>;
}
