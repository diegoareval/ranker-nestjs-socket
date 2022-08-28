import { Injectable } from '@nestjs/common';
import {
  CreatePollsFields,
  JoinPollsFields,
  RejoinPollsFields,
} from './types/polls.types';
import { createPollId, createNominationId, createUserId } from './utils/ids';

@Injectable()
export class PollService {
  async createPoll(fields: CreatePollsFields) {
    const pollId = createPollId();
    const userId = createUserId();
    return {
      ...fields,
      pollId,
      userId,
    };
  }
  async joinPoll(fields: JoinPollsFields) {
    const userId = createUserId();
    return {
      ...fields,
      userId,
    };
  }
  async reJoinPoll(fields: RejoinPollsFields) {
    const userId = createUserId();
    return {
      ...fields
    };
  }
}
