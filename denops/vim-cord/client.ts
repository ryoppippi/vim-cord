import { Client } from "npm:@xhayper/discord-rpc@1.2.0";

export type { Client };

export async function useClient(clientId: string): Promise<Client> {
  const client = new Client({
    clientId,
  });

  await client.login();

  return client;
}
