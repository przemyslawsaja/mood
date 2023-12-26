import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../auth/schemas/user.schema';
import * as mongoose from 'mongoose';
import { MoodLogStatus } from '../mood-log.constants';

@Schema({
  timestamps: true,
})
export class MoodLog {
  @Prop()
  content: string;

  @Prop()
  status: MoodLogStatus;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const MoodLogSchema = SchemaFactory.createForClass(MoodLog);
