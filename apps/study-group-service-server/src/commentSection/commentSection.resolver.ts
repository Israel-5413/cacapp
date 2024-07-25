import * as graphql from "@nestjs/graphql";
import { CommentSectionResolverBase } from "./base/commentSection.resolver.base";
import { CommentSection } from "./base/CommentSection";
import { CommentSectionService } from "./commentSection.service";

@graphql.Resolver(() => CommentSection)
export class CommentSectionResolver extends CommentSectionResolverBase {
  constructor(protected readonly service: CommentSectionService) {
    super(service);
  }
}
