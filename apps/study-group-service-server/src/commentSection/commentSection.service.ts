import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommentSectionServiceBase } from "./base/commentSection.service.base";

@Injectable()
export class CommentSectionService extends CommentSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
