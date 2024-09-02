import { Denops } from "jsr:@denops/std@7.1.1";
import { g } from "jsr:@denops/std@7.1.1/variable";
import * as helper from "jsr:@denops/std@7.1.1/helper";
import * as fn from "jsr:@denops/std@7.1.1/function";
import { assert, is } from "jsr:@core/unknownutil";

import { effect, ref } from "npm:@vue/reactivity@3.4.31";
import { type Client, useClient } from "./client.ts";

const denopsClient = ref<Denops>();
const discordClient = ref<Client>();

async function init(denops: Denops) {
  denopsClient.value = denops;
  discordClient.value = await useClient("");
}

export function main(denops: Denops) {
  denops.dispatcher = {
    /** Initialize the plugin */
    init: async () => {
      await init(denops);
    },
  };
}
