const { SlashCommandBuilder } = require('@discordjs/builders');
// const wait = require('util').promisify(setTimeout);
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');

// testing out menus and buttons
module.exports = {
	data: new SlashCommandBuilder()
		.setName('action')
		.setDescription('Action things'),
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents( new MessageButton()
                .setCustomId('primary')
                .setLabel('Primary')
                .setStyle('PRIMARY')
                .setDisabled(true),
            );

            const roww = new MessageActionRow()
            .addComponents( new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('Nothing selected')
                .setMinValues(1)
                .setMaxValues(2)
                .addOptions([
                    {
                        label: 'select me',
                        description: 'This is a description',
                        value: 'first_option', 
                    },
                    {
                        label: 'or me',
                        description: 'another description',
                        value: 'second_option',
                    },
                ])
            );

        await interaction.reply({
            content: 'eskimos',
            components: [row, roww],
        });
    },
};