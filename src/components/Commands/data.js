const commands = [{
        name: "avatar",
        category: "info",
        description: "Get a User's Avatar"
    },
    {
        name: "channelinfo",
        category: "info",
        description: "Get Channel's Details"
    }, {
        name: "server",
        category: "info",
        description: "Get Server's Details"
    }, {
        name: "user",
        category: "info",
        description: "Get User's Details"
    }, {
        name: "ban",
        category: "moderation",
        description: "Bans the mentioned member"
    }, {
        name: "clear",
        category: "moderation",
        description: "Purges specified number of messages"
    }, {
        name: "kick",
        category: "moderation",
        description: "Kicks the mentioned member"
    }, {
        name: "mute",
        category: "moderation",
        description: "Mute a Member"
    }, {
        name: "unmute",
        category: "moderation",
        description: "Unmute a Member"
    }, {
        name: "role",
        category: "moderation",
        description: "Asks tagged user to take roles"
    }, {
        name: "warn",
        category: "moderation",
        description: "Warns a member with the provided reason"
    }, {
        name: "removewarn",
        category: "moderation",
        description: "Remove Warnings of a Member "
    }, {
        name: "warns",
        category: "moderation",
        description: "Lists All Warnings of a Member "
    }, {
        name: "csmeme",
        category: "memes",
        description: "Get a random Programming Meme"
    }, {
        name: "foodporn",
        category: "memes",
        description: "Get random Food's Images"
    }, {
        name: "meme",
        category: "memes",
        description: "Get a random Meme  "
    }, {
        name: "uwu",
        category: "memes",
        description: "Sends an awww inducing picture"
    }, {
        name: "wsmeme",
        category: "memes",
        description: "Sends a meme from r/WholesomeMemes"
    }, {
        name: "HOF",
        category: "fun",
        description: "Hall of Fame (for extremely dumb/smart "
    }, {
        name: "_8ball",
        category: "fun",
        description: "Evident by the name "
    }, {
        name: "camel",
        category: "fun",
        description: "Makes text camelcase "
    }, {
        name: "chintusearch",
        category: "fun",
        description: "Special search for special people "
    }, {
        name: "count",
        category: "fun",
        description: "Returns total number of messages in a channel "
    }, {
        name: "emojify",
        category: "fun",
        description: "Emojifys given text "
    }, {
        name: "retard",
        category: "fun",
        description: "Changes text into rEtArD cAsE "
    }, {
        name: "reverse",
        category: "fun",
        description: "Reverses a message for you "
    }, {
        name: "say",
        category: "fun",
        description: "Says a message on behalf of the user "
    }, {
        name: "gituser",
        category: "social",
        description: "Returns info about a github user "
    }, {
        name: "repos",
        category: "social",
        description: "Returns top 5 repositories of the requested user "
    }, {
        name: "gsearch",
        category: "social",
        description: "Returns top google search results for the given query "
    }, {
        name: "CreateLiveSubs",
        category: "social",
        description: "Creates a voice channel with the subscribers of the given channel "
    }, {
        name: "add_reply",
        category: "others",
        description: ""
    }, {
        name: "ping",
        category: "others",
        description: "Shows Ping "
    }, {
        name: "help",
        category: "others",
        description: "Shows Help message"
    }
]
export default commands;