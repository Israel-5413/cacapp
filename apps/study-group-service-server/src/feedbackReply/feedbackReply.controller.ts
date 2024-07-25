import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeedbackReplyService } from "./feedbackReply.service";
import { FeedbackReplyControllerBase } from "./base/feedbackReply.controller.base";

@swagger.ApiTags("feedbackReplies")
@common.Controller("feedbackReplies")
export class FeedbackReplyController extends FeedbackReplyControllerBase {
  constructor(protected readonly service: FeedbackReplyService) {
    super(service);
  }
}
