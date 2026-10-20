import discord
from discord.ext import commands
from database.sqlite import set_verified
from config import MAIN_SERVER_ID

class Verification(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_member_join(self, member):
        if member.guild.id == MAIN_SERVER_ID:
            set_verified(member.id, 1)
            print(f"{member} verified globally")

    @commands.Cog.listener()
    async def on_member_remove(self, member):
        if member.guild.id == MAIN_SERVER_ID:
            set_verified(member.id, 0)
            print(f"{member} unverified globally")
