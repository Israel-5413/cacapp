import { Module } from "@nestjs/common";
import { ResourceModule } from "./resource/resource.module";
import { MeetingModule } from "./meeting/meeting.module";
import { StudyGroupModule } from "./studyGroup/studyGroup.module";
import { CommentSectionModule } from "./commentSection/commentSection.module";
import { PrivateChatModule } from "./privateChat/privateChat.module";
import { CalendarModule } from "./calendar/calendar.module";
import { UserModule } from "./user/user.module";
import { FeedbackReplyModule } from "./feedbackReply/feedbackReply.module";
import { MyFriendsModule } from "./myFriends/myFriends.module";
import { TasksModule } from "./tasks/tasks.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ResourceModule,
    MeetingModule,
    StudyGroupModule,
    CommentSectionModule,
    PrivateChatModule,
    CalendarModule,
    UserModule,
    FeedbackReplyModule,
    MyFriendsModule,
    TasksModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
