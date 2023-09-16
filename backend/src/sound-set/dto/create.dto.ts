import {
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
  IsEmpty,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class CreateSoundSetDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  readonly waterfall: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  readonly sea: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  readonly train: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  readonly firePit: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  readonly birds: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  readonly rain: number;

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
