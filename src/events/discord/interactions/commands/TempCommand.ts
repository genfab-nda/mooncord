import {CommandInteraction} from "discord.js";
import {EmbedHelper} from "../../../../helper/EmbedHelper";
import { TempHelper } from "../../../../helper/TempHelper";

export class TempCommand {
    protected embedHelper = new EmbedHelper()
    protected tempHelper = new TempHelper()
    public constructor(interaction: CommandInteraction, commandId: string) {
        if(commandId !== 'temp') { return }

        this.execute(interaction)
    }

    protected async execute(interaction: CommandInteraction) {
        const message = await this.embedHelper.generateEmbed('temperatures')

        void interaction.reply(message.embed)
    }

}