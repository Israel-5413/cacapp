/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Calendar } from "./Calendar";
import { CalendarCountArgs } from "./CalendarCountArgs";
import { CalendarFindManyArgs } from "./CalendarFindManyArgs";
import { CalendarFindUniqueArgs } from "./CalendarFindUniqueArgs";
import { CreateCalendarArgs } from "./CreateCalendarArgs";
import { UpdateCalendarArgs } from "./UpdateCalendarArgs";
import { DeleteCalendarArgs } from "./DeleteCalendarArgs";
import { CalendarService } from "../calendar.service";
@graphql.Resolver(() => Calendar)
export class CalendarResolverBase {
  constructor(protected readonly service: CalendarService) {}

  async _calendarsMeta(
    @graphql.Args() args: CalendarCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Calendar])
  async calendars(
    @graphql.Args() args: CalendarFindManyArgs
  ): Promise<Calendar[]> {
    return this.service.calendars(args);
  }

  @graphql.Query(() => Calendar, { nullable: true })
  async calendar(
    @graphql.Args() args: CalendarFindUniqueArgs
  ): Promise<Calendar | null> {
    const result = await this.service.calendar(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Calendar)
  async createCalendar(
    @graphql.Args() args: CreateCalendarArgs
  ): Promise<Calendar> {
    return await this.service.createCalendar({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Calendar)
  async updateCalendar(
    @graphql.Args() args: UpdateCalendarArgs
  ): Promise<Calendar | null> {
    try {
      return await this.service.updateCalendar({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Calendar)
  async deleteCalendar(
    @graphql.Args() args: DeleteCalendarArgs
  ): Promise<Calendar | null> {
    try {
      return await this.service.deleteCalendar(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
