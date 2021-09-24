module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready to use! ID: ${client.user.tag}`);
        client.user.setUsername('Discord Music Bot');

        client.user.setPresence({ activities: [{ name: 'music from Youtube!', type: 'LISTENING' }], status: 'dnd' });
    }
};