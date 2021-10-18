// get stuff
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

// get the commands
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


// something?
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

// idk what this does either
const rest = new REST({ version: '9' }).setToken(token);

// register the commands
(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		// guild command registering
		// await rest.put(
		// 	Routes.applicationGuildCommands(clientId, guildId),
		// 	{ body: commands },
		// );
		
		// global command registering
		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();