const { SlashCommandBuilder } = require('@discordjs/builders');

// grab info
module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Get some information.')
		.addSubcommand(subcommand => subcommand
			.setName('server')
			.setDescription('Info about the server'))
		.addSubcommand(subcommand => subcommand
			.setName('user')
			.setDescription('Info about a user')
			.addUserOption(option => option
				.setName('target')
				.setDescription('The user you wanna peep on')
				.setRequired(true))),
	async execute(interaction) {
		const sub = interaction.options.getSubcommand();
		
		if (sub == 'server') {
			await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
		} else if (sub == 'user') {
			await interaction.reply(`User tag: ${interaction.user.tag}\nUser id: ${interaction.user.id}`);
		} else {
			await interaction.reply('I\'m not quite sure how you got here...');
		}
	},
};