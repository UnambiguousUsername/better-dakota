// require filesystem for file pathing
// client, collection, intents for functioning | token for loggin in
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

// dunno what client does
// read the command and event files
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

// register all the commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// register all the event listeners
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}


// im ready
client.once('ready', () => {
    console.log('Fertig');
});


// try to execute commands
client.on('interactionCreate', async interaction => {
	if (interaction.isCommand()) {
		const command = client.commands.get(interaction.commandName);

		if (command) {
			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(error);
				await interaction.reply({
					content: 'There was an error while executing this command!',
					ephemeral: true,
				});
			}
		}
	}

	if (interaction.isButton()) {
		console.log(interaction);
	}

	if (interaction.isSelectMenu()) {
		console.log(interaction);
	}
});

// login
client.login(token);