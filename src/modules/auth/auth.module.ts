import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { DiscordModule } from 'src/extension-modules/discord/discord.module'
import AuthController from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { jwt } from '../../../config.json'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
import { UserBotModule } from '../users-bots/user-bot.module'

@Module({
  imports: [
    DiscordModule,
    UserBotModule,
    PassportModule,
    JwtModule.register({
      secret: jwt.secret,
      signOptions: {
        expiresIn: '604800s'
      }
    })
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    JwtStrategy
  ],
  exports: [
    AuthService
  ]
})
export class AuthModule {}
