import { Length, IsInt, isString, Min, Max, IsString } from 'class-validator';

export class CreatePollDto {
  @Length(1, 100)
  @IsString()
  topic: string;

  @Min(1)
  @Max(5)
  @IsInt()
  votesPerVoter: number;

  @Length(1, 25)
  @IsString()
  name: string;
}

export class JoinPollDto {
  @Length(6, 6)
  @IsString()
  pollId: string;

  @Length(1, 18)
  @IsString()
  name: string;
}
