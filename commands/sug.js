const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sug')
        .setDescription('test'),
    async execute(interaction) {
        return interaction.reply('Til sug!');
    },
}