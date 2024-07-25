/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MyFriendsWhereInput } from "./MyFriendsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MyFriendsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MyFriendsWhereInput,
  })
  @ValidateNested()
  @Type(() => MyFriendsWhereInput)
  @IsOptional()
  @Field(() => MyFriendsWhereInput, {
    nullable: true,
  })
  every?: MyFriendsWhereInput;

  @ApiProperty({
    required: false,
    type: () => MyFriendsWhereInput,
  })
  @ValidateNested()
  @Type(() => MyFriendsWhereInput)
  @IsOptional()
  @Field(() => MyFriendsWhereInput, {
    nullable: true,
  })
  some?: MyFriendsWhereInput;

  @ApiProperty({
    required: false,
    type: () => MyFriendsWhereInput,
  })
  @ValidateNested()
  @Type(() => MyFriendsWhereInput)
  @IsOptional()
  @Field(() => MyFriendsWhereInput, {
    nullable: true,
  })
  none?: MyFriendsWhereInput;
}
export { MyFriendsListRelationFilter as MyFriendsListRelationFilter };
