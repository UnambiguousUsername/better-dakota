const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);
const { MessageEmbed } = require('discord.js');

// this was just used by me to test embedding mostly
module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Do not use this command'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('NSFW')
            .setURL('https://www.youtube.com/c/NormalizingNudity')
            .setDescription('NSFW');

        await interaction.deferReply({});
        await wait(1000);
        await interaction.editReply({
            content: 'Tickle',
        });
        await wait(1000);
        await interaction.followUp({
            content: 'Heres a new youtube channel',
            ephemeral: true,
            embeds: [embed],
        });
    },
};