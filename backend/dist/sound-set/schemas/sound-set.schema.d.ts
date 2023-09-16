import { User } from '../../auth/schemas/user.schema';
import * as mongoose from 'mongoose';
export declare class SoundSet {
    name: string;
    waterfall: number;
    sea: number;
    train: number;
    firePit: number;
    birds: number;
    rain: number;
    user: User;
}
export declare const SoundSetSchema: mongoose.Schema<SoundSet, mongoose.Model<SoundSet, any, any, any, mongoose.Document<unknown, any, SoundSet> & SoundSet & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, SoundSet, mongoose.Document<unknown, {}, SoundSet> & SoundSet & {
    _id: mongoose.Types.ObjectId;
}>;
