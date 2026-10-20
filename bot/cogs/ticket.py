import discord
from discord.ext import commands
from database.sqlite import get_guild_settings

class Tickets(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_interaction(self, interaction):
        pass

    @commands.command()
    async def ticket(self, ctx):
        settings = get_guild_settings(ctx.guild.id)
        if not settings or not settings["ticket_category"]:
            return await ctx.send("Ticket system not configured.")

        await ctx.send("Ticket panel coming soon.")
