import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommentSectionService } from "./commentSection.service";
import { CommentSectionControllerBase } from "./base/commentSection.controller.base";

@swagger.ApiTags("commentSections")
@common.Controller("commentSections")
export class CommentSectionController extends CommentSectionControllerBase {
  constructor(protected readonly service: CommentSectionService) {
    super(service);
  }
}
