import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos/polls.dto';
import { PollService } from './polls.service';

@Controller('polls')
export class PollsController {
  constructor(private pollService: PollService) {}
  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    const result = await this.pollService.createPoll(createPollDto);
    return result;
  }

  @Post('/join')
  async join(@Body() joinPollDto: JoinPollDto) {
    const result = await this.pollService.joinPoll(joinPollDto);
    return result;
  }

  @Post('/rejoin')
  async reJoin() {
    const result = await this.pollService.reJoinPoll({
      name: 'here',
      pollId: '1234',
      userId: '1234',
    });
    return result;
  }
}
