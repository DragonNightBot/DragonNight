const { Structures, MessagePayload, MessageEmbed } = require("discord.js");

module.exports = Structures.extend(
  "Message",
  (Message) =>
    class HurricanoMessage extends Message {
      constructor(...args) {
        super(...args);
      }
      async say(options) {
        const msg = await this.channel.send(options);
        return msg;
      }
      async sendErrorReply(Header, Msg, Footer, Fields) {
        const embed = new MessageEmbed()
          .setAuthor(
            Header,
            "https://raw.githubusercontent.com/HurricanoBot/HurricanoImages/master/SetAuthorEmojis/Error.png"
          )
          .setColor("#ff6962");
        if (Msg) {
          embed.setDescription(Msg);
        }
        if (Footer) {
          embed.setFooter(Footer, this.author.displayAvatarURL());
        } else {
          embed.setFooter(
            this.member.displayName,
            this.author.displayAvatarURL()
          );
        }
        if (Fields) embed.addFields(Fields);
        const msg = await this.reply({ embeds: [embed] });
        return msg;
      }
      async sendSuccessReply(Header, Msg, Footer, Fields) {
        const embed = new MessageEmbed()
          .setAuthor(
            Header,
            "https://raw.githubusercontent.com/HurricanoBot/HurricanoImages/master/SetAuthorEmojis/Success.png"
          )
          .setColor("#32ba7c");
        if (Msg) {
          embed.setDescription(Msg);
        }
        if (Footer) {
          embed.setFooter(Footer, this.author.displayAvatarURL());
        } else {
          embed.setFooter(this.author.username, this.author.displayAvatarURL());
        }
        if (Footer) {
          embed.setFooter(Footer, this.author.displayAvatarURL());
        } else {
          embed.setFooter(
            this.member.displayName,
            this.author.displayAvatarURL()
          );
        }
        if (Fields) embed.addFields(Fields);
        const msg = await this.reply({ embeds: [embed] });
        return msg;
      }
    }
);
