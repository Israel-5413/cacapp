import { Module } from "@nestjs/common";
import { StudyGroupModuleBase } from "./base/studyGroup.module.base";
import { StudyGroupService } from "./studyGroup.service";
import { StudyGroupController } from "./studyGroup.controller";
import { StudyGroupResolver } from "./studyGroup.resolver";

@Module({
  imports: [StudyGroupModuleBase],
  controllers: [StudyGroupController],
  providers: [StudyGroupService, StudyGroupResolver],
  exports: [StudyGroupService],
})
export class StudyGroupModule {}
