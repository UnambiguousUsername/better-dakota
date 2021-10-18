const { SlashCommandBuilder } = require('@discordjs/builders');
// const wait = require('util').promisify(setTimeout);

// pong ping
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Get ponged on.'),
    async execute(interaction) {
        await interaction.reply({
            content: 'Pong',
        });
    },
};