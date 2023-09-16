import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../auth/schemas/user.schema';
import * as mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class SoundSet {
  @Prop()
  name: string;

  @Prop()
  waterfall: number;

  @Prop()
  sea: number;

  @Prop()
  train: number;

  @Prop()
  firePit: number;

  @Prop()
  birds: number;

  @Prop()
  rain: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const SoundSetSchema = SchemaFactory.createForClass(SoundSet);
