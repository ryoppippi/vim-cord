import { Denops } from "jsr:@denops/std@7.1.1";
import { g } from "jsr:@denops/std@7.1.1/variable";
import * as helper from "jsr:@denops/std@7.1.1/helper";
import * as fn from "jsr:@denops/std@7.1.1/function";
import { assert, is } from "jsr:@core/unknownutil";
import { effect, ref } from "npm:@vue/reactivity@3.4.31";

import { type Client, useClient } from "./client.ts";
import { CLIENT_IDS } from "./constants.ts";

const denopsClient = ref<Denops>();
const discordClient = ref<Client>();

async function init(denops: Denops) {
  denopsClient.value = denops;
  const clientId = CLIENT_IDS[denops.meta.host];
  discordClient.value = await useClient(clientId);
}

export function main(denops: Denops) {
  denops.dispatcher = {
    /** Initialize the plugin */
    init: async () => {
      await init(denops);
    },
  };
}
