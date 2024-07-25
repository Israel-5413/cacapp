import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudyGroupServiceBase } from "./base/studyGroup.service.base";

@Injectable()
export class StudyGroupService extends StudyGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
