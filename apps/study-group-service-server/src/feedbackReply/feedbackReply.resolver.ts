import * as graphql from "@nestjs/graphql";
import { FeedbackReplyResolverBase } from "./base/feedbackReply.resolver.base";
import { FeedbackReply } from "./base/FeedbackReply";
import { FeedbackReplyService } from "./feedbackReply.service";

@graphql.Resolver(() => FeedbackReply)
export class FeedbackReplyResolver extends FeedbackReplyResolverBase {
  constructor(protected readonly service: FeedbackReplyService) {
    super(service);
  }
}
