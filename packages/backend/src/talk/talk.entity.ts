import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTalkRequest {}

export class InviteToTalkRequest {
  @IsNotEmpty()
  @IsEmail()
  inviteeEmail!: string;
}
