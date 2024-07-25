import * as graphql from "@nestjs/graphql";
import { StudyGroupResolverBase } from "./base/studyGroup.resolver.base";
import { StudyGroup } from "./base/StudyGroup";
import { StudyGroupService } from "./studyGroup.service";

@graphql.Resolver(() => StudyGroup)
export class StudyGroupResolver extends StudyGroupResolverBase {
  constructor(protected readonly service: StudyGroupService) {
    super(service);
  }
}
