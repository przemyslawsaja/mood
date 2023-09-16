import { SoundSetService } from './sound-set.service';
import { SoundSet } from './schemas/sound-set.schema';
import { CreateSoundSetDto } from './dto/create.dto';
export declare class SoundSetController {
    private soundSetService;
    constructor(soundSetService: SoundSetService);
    getAllSoundSet(req: any): Promise<SoundSet[]>;
    createSoundSet(createSoundSetDto: CreateSoundSetDto, req: any): Promise<SoundSet>;
}
