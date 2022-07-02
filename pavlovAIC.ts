/// Pavlov.aic is an Artificial Intelligence Conscript that conducts headhunting for Research Division PSI-5 in Site-65.

import { WebhookClient, MessageEmbed } from "discord.js";

class PavlovAIC {
    public client: WebhookClient;

    public constructor(url: string) {
        this.client = new WebhookClient({ url: url });
    }

    public sendMessage(embed: MessageEmbed) {
        this.client.send({
            username: "Pavlov.aic",
            embeds: [embed]
        });
    }
};

export default PavlovAIC;