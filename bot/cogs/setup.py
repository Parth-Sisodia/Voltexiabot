import discord
from discord.ext import commands
from database.sqlite import set_guild_settings, get_guild_settings

class Setup(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def setup(self, ctx):
        await ctx.send("Setup panel coming soon.")
