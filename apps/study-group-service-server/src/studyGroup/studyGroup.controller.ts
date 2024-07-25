import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudyGroupService } from "./studyGroup.service";
import { StudyGroupControllerBase } from "./base/studyGroup.controller.base";

@swagger.ApiTags("studyGroups")
@common.Controller("studyGroups")
export class StudyGroupController extends StudyGroupControllerBase {
  constructor(protected readonly service: StudyGroupService) {
    super(service);
  }
}
