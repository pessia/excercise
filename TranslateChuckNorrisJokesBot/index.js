import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import { getJoke } from "./api.js";
dotenv.config();

const TELEGRAM_BOT_API_KEY = process.env.TELEGRAM_BOT_API_KEY;
const telegramBot = new TelegramBot(TELEGRAM_BOT_API_KEY, { polling: true });

function setLang()  {

}

telegramBot.onText(/set language (.+)/, (msg, match) => {
    const r = match[1];
    setLang().then((x)=>
    telegramBot.sendMessage(msg.chat.id, r + x));
});

telegramBot.onText(/\d+/, (msg) => {
    getJoke(msg.text).then((x)=>
    telegramBot.sendMessage(msg.chat.id, x));
});

