import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { SoundSetService } from './sound-set.service';
import { SoundSet } from './schemas/sound-set.schema';
import { AuthGuard } from '@nestjs/passport';
import { CreateSoundSetDto } from './dto/create.dto';

@Controller('sound-set')
@UseGuards(AuthGuard())
export class SoundSetController {
  constructor(private soundSetService: SoundSetService) {}

  @Get()
  async getAllSoundSet(@Req() req): Promise<SoundSet[]> {
    return this.soundSetService.findAll(req.user);
  }

  @Post('/create')
  createSoundSet(
    @Body() createSoundSetDto: CreateSoundSetDto,
    @Req() req,
  ): Promise<SoundSet> {
    return this.soundSetService.create(createSoundSetDto, req.user);
  }
}
