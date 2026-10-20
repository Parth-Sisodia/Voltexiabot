import discord
from discord.ext import commands
from database.sqlite import get_guild_settings

class Moderation(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_message(self, msg):
        if msg.author.bot:
            return

        profanity = ["fuck", "shit", "bitch", "ass", "cunt"]

        if any(word in msg.content.lower() for word in profanity):
            settings = get_guild_settings(msg.guild.id)
            punishment_channel = None

            if settings and settings["punishment_channel"]:
                punishment_channel = msg.guild.get_channel(settings["punishment_channel"])

            await msg.delete()

            if punishment_channel:
                await punishment_channel.send(f"{msg.author.mention} used profanity.")

            await msg.channel.send(f"{msg.author.mention}, watch your language.", delete_after=5)
