import { Module } from "@nestjs/common";
import { FeedbackReplyModuleBase } from "./base/feedbackReply.module.base";
import { FeedbackReplyService } from "./feedbackReply.service";
import { FeedbackReplyController } from "./feedbackReply.controller";
import { FeedbackReplyResolver } from "./feedbackReply.resolver";

@Module({
  imports: [FeedbackReplyModuleBase],
  controllers: [FeedbackReplyController],
  providers: [FeedbackReplyService, FeedbackReplyResolver],
  exports: [FeedbackReplyService],
})
export class FeedbackReplyModule {}
