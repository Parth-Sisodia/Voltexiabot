import discord
from discord.ext import commands
from cogs.verification import Verification
from cogs.moderation import Moderation
from cogs.tickets import Tickets
from cogs.setup import Setup
from database.sqlite import init_db
import os

TOKEN = os.getenv("DISCORD_TOKEN")
MAIN_SERVER_ID = int(os.getenv("MAIN_SERVER_ID"))

intents = discord.Intents.all()
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"{bot.user} is online!")

async def setup_bot():
    await bot.add_cog(Verification(bot))
    await bot.add_cog(Moderation(bot))
    await bot.add_cog(Tickets(bot))
    await bot.add_cog(Setup(bot))

    init_db()
    await bot.tree.sync()

bot.loop.create_task(setup_bot())
bot.run(TOKEN)
