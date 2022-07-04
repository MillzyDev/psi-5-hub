/// Pavlov.aic is an Artificial Intelligence Conscript that conducts headhunting for Research Division PSI-5 in Site-65.

import { WebhookClient, MessageEmbed } from "discord.js";

class PavlovAIC {
    public client: WebhookClient;

    public constructor(url: any) {
        this.client = new WebhookClient({ url: url });
    }

    public sendMessage(embed: MessageEmbed) {
        this.client.send({
            username: "Pavlov.aic",
            avatarURL: "https://cdn.discordapp.com/attachments/986042737956622366/993523600873234452/psi-5-outlined.png",
            embeds: [embed]
        });
    }
};

export default PavlovAIC;