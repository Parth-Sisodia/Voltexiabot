import discord
from discord.ext import commands
import os

from cogs.verification import Verification
from cogs.tickets import Tickets
from cogs.moderation import Moderation
from cogs.setup import Setup
from database.sqlite import init_db

TOKEN = os.getenv("DISCORD_TOKEN")

intents = discord.Intents.all()
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"{bot.user} is online!")
    await bot.tree.sync()

async def load_cogs():
    await bot.add_cog(Verification(bot))
    await bot.add_cog(Tickets(bot))
    await bot.add_cog(Moderation(bot))
    await bot.add_cog(Setup(bot))

    init_db()

bot.loop.create_task(load_cogs())
bot.run(TOKEN)
