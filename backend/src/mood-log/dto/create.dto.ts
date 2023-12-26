import { IsNotEmpty, IsEmpty, IsString } from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
import { MoodLogStatus } from '../mood-log.constants';

export class CreateMoodLogDto {
  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsString()
  readonly status: MoodLogStatus;

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
