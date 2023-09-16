import { User } from '../../auth/schemas/user.schema';
export declare class CreateSoundSetDto {
    name: string;
    readonly waterfall: number;
    readonly sea: number;
    readonly train: number;
    readonly firePit: number;
    readonly birds: number;
    readonly rain: number;
    readonly user: User;
}
