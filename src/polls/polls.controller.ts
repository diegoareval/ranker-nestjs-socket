import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos/polls.dto';

@Controller('polls')
export class PollsController {
  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    Logger.log('Create');
    return createPollDto;
  }

  @Post('/join')
  async join(@Body() joinPollDto: JoinPollDto) {
    Logger.log('joining');
    return joinPollDto;
  }

  @Post('/rejoin')
  async reJoin() {
    Logger.log('rejoining');
  }
}
