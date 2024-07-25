import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeedbackReplyServiceBase } from "./base/feedbackReply.service.base";

@Injectable()
export class FeedbackReplyService extends FeedbackReplyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
