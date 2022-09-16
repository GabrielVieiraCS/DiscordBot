import { config } from "dotenv";
import { Client } from "discord.js";

const client = new Client();

client.login(process.env.DISCORD_BOT_TOKEN);
