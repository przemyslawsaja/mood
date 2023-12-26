import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { MoodLogService } from './mood-log.service';
import { MoodLog } from './schemas/mood-log.schema';
import { AuthGuard } from '@nestjs/passport';
import { CreateMoodLogDto } from './dto/create.dto';

@Controller('mood-log')
@UseGuards(AuthGuard())
export class MoodLogController {
  constructor(private moodLogService: MoodLogService) {}

  @Get()
  async getAllMoodLogs(@Req() req): Promise<MoodLog[]> {
    return this.moodLogService.findAll(req.user);
  }

  @Post('/create')
  createMoodLog(
    @Body() createMoodLogDto: CreateMoodLogDto,
    @Req() req,
  ): Promise<MoodLog> {
    return this.moodLogService.create(createMoodLogDto, req.user);
  }

  @Delete('/remove/:id')
  removeMoodLog(@Req() req, @Param('id') id: string): Promise<MoodLog> {
    return this.moodLogService.remove(id);
  }
}
