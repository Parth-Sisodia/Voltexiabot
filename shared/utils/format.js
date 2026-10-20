function formatGuild(g) {
    return {
        id: g.id,
        name: g.name,
        icon: g.icon
    };
}

module.exports = { formatGuild };
