import { Client } from "npm:@xhayper/discord-rpc@1.2.0";
import * as c from "./constants.ts";
import { effect, ref } from "npm:@vue/reactivity@3.4.31";

export type { Client };

export async function useClient(clientId: string): Promise<Client> {
  const client = new Client({
    clientId,
    transport: {
      type: "ipc",
    },
  });

  await client.login();

  return client;
}
