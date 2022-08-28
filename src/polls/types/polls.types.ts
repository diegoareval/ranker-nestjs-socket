export type CreatePollsFields = {
  topic: string;
  votesPerVoter: number;
  name: string;
};

export type JoinPollsFields = {
  pollId: string;
  name: string;
};

export type RejoinPollsFields = {
  pollId: string;
  userId: string;
  name: string;
};
