import { Module } from "@nestjs/common";
import { CommentSectionModuleBase } from "./base/commentSection.module.base";
import { CommentSectionService } from "./commentSection.service";
import { CommentSectionController } from "./commentSection.controller";
import { CommentSectionResolver } from "./commentSection.resolver";

@Module({
  imports: [CommentSectionModuleBase],
  controllers: [CommentSectionController],
  providers: [CommentSectionService, CommentSectionResolver],
  exports: [CommentSectionService],
})
export class CommentSectionModule {}
