import { Message, MessageEmbed, GuildMember } from "discord.js";
import * as OS from "os";
import RoleBot from "../../src/bot";

export default {
  desc: "Information about the bot",
  name: "botstatus",
  args: "",
  run: (message: Message, _args: string[], client: RoleBot) => {
    const embed = new MessageEmbed();
    let userCount = 0;
    let channelCount = 0;

    client.guilds.forEach(g => {
      userCount += g.memberCount;
      channelCount += g.channels.size;
    });

    embed
      .setColor(16711683)
      .setTitle(`**Bot Status**`)
      .setThumbnail(client.user!.avatarURL() || "")
      .addField(`**Bot Developer:**`, `AndroidWaifu`, true)
      .addField(`**The bot is in:**`, `${client.guilds.size} servers`, true)
      .addField(`**The bot is watching:**`, `${userCount} users`, true)
      .addField(`**The bot is watching:**`, `${channelCount} channels`, true)
      .addField(`**Bot OS:**`, `${OS.platform()}`, true);
    message.channel.send(embed);
  },
  can_run: function(_author: GuildMember): boolean {
    return true;
  }
};