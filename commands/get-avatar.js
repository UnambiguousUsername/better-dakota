const { SlashCommandBuilder } = require('@discordjs/builders');

// grab pic
module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option =>
			option.setName('target')
				.setDescription('The user\'s avatar to show')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.reply({
			content: `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`,
		});
	},
};