import { Denops } from "jsr:@denops/std@7.1.1";
import { assert, is } from "jsr:@core/unknownutil";
import { effect, ref } from "npm:@vue/reactivity@3.4.31";
import { Client } from "npm:@xhayper/discord-rpc@1.2.0";
import pRetry from "npm:p-retry@6.2.0";

import { CLIENT_IDS } from "./constants.ts";

/** Denops instance */
const denopsClient = ref<Denops>();

/** Discord RPC client */
let discordClient: Client;
/** Discord RPC client ready state */
const discordClientReady = ref(false);

effect(() => {
  console.log("change detected");
  if (discordClientReady.value) {
    const host = denopsClient.value?.meta.host;
    discordClient?.user?.setActivity({
      state: `${host ?? "?"} is running`,
      details: "Pain and Suffering",
      startTimestamp: Date.now(),
    });
  }
});

async function init(denops: Denops) {
  denopsClient.value = denops;

  const clientId = CLIENT_IDS[denops.meta.host];
  discordClient = new Client({ clientId });
  discordClient?.on("ready", () => discordClientReady.value = true);
  await pRetry(() => discordClient?.login(), { retries: 5 });
}

export function main(denops: Denops) {
  denops.dispatcher = {
    /** Initialize the plugin */
    init: () => {
      init(denops);
    },
  };
}
