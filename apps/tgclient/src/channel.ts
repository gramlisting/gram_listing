import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";

const apiId = 22981752;
const apiHash = "b3d00bce0fd8a3cc7fc18dcd828561b9";

// fill this later with the value from session.save()
const session = new StringSession(
  "1BQANOTEuMTA4LjU2LjE2NwG7bmc7d/N/PmA1CYqgn7UcUIh8HNvu9RdhcXLD+Oej485CfVWYHFt2XVQPmA2HLq6dyUEfDU4e/Nzg1WPcbIKlu/RsGR8U8Xu0qPRL3XAgr2JZwfg68bMkO+s0cephNV4oi64CpvDZqWDf+fvuRzEVvzglcKk+vVxpj8N61cA3N9uxMIU73548WdnTTXeKMvIDBMy8rI+kPZsN6XBkq5JpfBiU6kPAl3o4wkByYnrZb6QrmEQBFGQHmm81TX4QAmjOBAqeUEs2JDFQnW6LOygdutw1G8wAh1XuJbSIH8ZESyVJz9SSAS5yXuOMHNRObGQYuLlYthfmn8GB3nY4Kx6myw==",
);

const client = new TelegramClient(session, apiId, apiHash, {
  connectionRetries: 5,
  proxy: {
    ip: "127.0.0.1", // Proxy host (IP or hostname)
    port: 7890, // Proxy port
    socksType: 5, // SOCKS5
    timeout: 10,
  },
});

(async function run() {
  await client.connect();

  const result: Api.messages.ChatFull = await client.invoke(
    new Api.channels.GetFullChannel({
      channel: "xx",
    }),
  );
  console.log(JSON.stringify(result)); // prints the result
})();
