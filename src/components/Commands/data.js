const commands = [
  {
    name: "avatar",
    category: "info",
    description: "Get user avatar",
  },
  {
    name: "channel_info",
    category: "info",
    description: "Get Channel's Details",
  },
  {
    name: "server",
    category: "info",
    description: "Get Server's Info",
  },
  {
    name: "user",
    category: "info",
    description: "Get User's Info",
  },
  {
    name: "ping",
    category: "utility",
    description: "Sends the latency of the bot",
  },
  {
    name: "suggest",
    category: "utility",
    description: "Suggest a feature or an improvement for chintu!",
  },
  {
    name: "invite",
    category: "utility",
    description: "Invite Chintu to your server!!!",
  },
  {
    name: "prefix",
    category: "utility",
    description: `Change Chintu's prefix (Use double quotes [" "] around the prefix to add whitespace [$prefix "pls "])`,
  },
  {
    name: "add",
    category: "utility",
    description: "Add a previously removed command back to your server",
  },
  {
    name: "remove",
    category: "utility",
    description: "Remove a command from your server",
  },
  // Moderation Starts
  {
    name: "ban",
    category: "moderation",
    description: "Bans the mentioned member",
  },
  {
    name: "clear",
    category: "moderation",
    description: "Purges specified number of messages",
  },
  {
    name: "kick",
    category: "moderation",
    description: "Kicks the mentioned member",
  },
  {
    name: "mute",
    category: "moderation",
    description: "Mute a Member",
  },
  {
    name: "unmute",
    category: "moderation",
    description: "Unmute a Member",
  },
  {
    name: "role",
    category: "moderation",
    description: "Asks tagged user to take roles",
  },
  {
    name: "warn",
    category: "moderation",
    description: "Warns a member with the provided reason",
  },
  {
    name: "warns",
    category: "moderation",
    description: "Lists All Warnings of a Member",
  },
  //   Memes Starts
  {
    name: "csmeme",
    category: "memes",
    description: "Get a random Programming Meme",
  },
  {
    name: "foodporn",
    category: "memes",
    description: "Get random Food's Images",
  },
  {
    name: "meme",
    category: "memes",
    description: "Get a random Meme  ",
  },
  {
    name: "uwu",
    category: "memes",
    description: "Sends an awww inducing picture",
  },
  {
    name: "wsmeme",
    category: "memes",
    description: "Sends a meme from r/WholesomeMemes",
  },
  //   Fun Starts
  {
    name: "gsearch",
    category: "fun",
    description: "Sends top google search result with page description",
  },
  {
    name: "8ball",
    category: "fun",
    description: "Ask question and get advice from me",
  },
  {
    name: "urban",
    category: "fun",
    description: "Find the 'best' definition to your words",
  },
  {
    name: "jokes",
    category: "fun",
    description: "Request I'll tell a joke",
  },
  {
    name: "beer",
    category: "fun",
    description: "Give someone a beer!",
  },
  {
    name: "howhot",
    category: "fun",
    description: "Returns a percent for how hot is a discord use",
  },
  {
    name: "f",
    category: "fun",
    description: "Press F to pay respect",
  },
  {
    name: "coinflip",
    category: "fun",
    description: "Coinflip",
  },
  {
    name: "wiki",
    category: "fun",
    description: "Search wikipedia for any information ",
  },
  {
    name: "kill",
    category: "fun",
    description: "kill someone",
  },
  {
    name: "roast",
    category: "fun",
    description: "Roast Someone",
  },
  {
    name: "pp",
    category: "fun",
    description: "To check pp size",
  },
  {
    name: "howgay",
    category: "fun",
    description: "To check gayness",
  },
  {
    name: "password",
    category: "fun",
    description: "Get random password in DM",
  },
  {
    name: "insult",
    category: "fun",
    description: "Returns some evil insults",
  },
  //   Images Starts
  {
    name: "slap",
    category: "images",
    description: "Slap someone",
  },
  {
    name: "worthless",
    category: "images",
    description: "You are",
  },
  {
    name: "keepquiet",
    category: "images",
    description: "Shhh!",
  },
  {
    name: "fart",
    category: "images",
    description: "?",
  },
  {
    name: "pee",
    category: "images",
    description: "Well this one is really funny",
  },
  {
    name: "coffindance",
    category: "images",
    description: "You already know",
  },
  {
    name: "smash",
    category: "images",
    description: "Don't know what to add here lol",
  },
  {
    name: "wanted",
    category: "images",
    description: "You are under arrest",
  },
  {
    name: "gay",
    category: "images",
    description: "Show your gay pride",
  },
  //   Fonts
  {
    name: "fontlist",
    category: "fonts",
    description: "Display all Font List",
  },
  {
    name: "fontify",
    category: "fonts",
    description: "Change font and send the message",
  },
  //   Currency
  {
    name: "daily",
    category: "currency",
    description: "Daily dose of sweet cash",
  },
  {
    name: "weekly",
    category: "currency",
    description: "Weekly dose of sweet cash",
  },
  {
    name: "monthly",
    category: "currency",
    description: "Monthly dose of sweet cash",
  },
  {
    name: "balance",
    category: "currency",
    description: "Check the balance of those pesky scrubs",
  },
  {
    name: "withdraw",
    category: "currency",
    description: "Withdraw your sweet cash",
  },
  {
    name: "deposit",
    category: "currency",
    description: "Deposit your sweet cash",
  },
  {
    name: "give",
    category: "currency",
    description: "Give away your hard earned cash",
  },
  {
    name: "shop",
    category: "currency",
    description: "ee what treasures await your purchase",
  },
  {
    name: "gift",
    category: "currency",
    description: "Give away your precious items",
  },
  {
    name: "buy",
    category: "currency",
    description: "Buy the items of your dreams from the shop",
  },
  {
    name: "bet",
    category: "currency",
    description:
      "Join in on some gambling action, similar to Klondike dice game",
  },
  {
    name: "use",
    category: "currency",
    description: "Use the items you got there in your inventory",
  },
  {
    name: "iteminfo",
    category: "currency",
    description: "Gives info about the item",
  },
  {
    name: "inventory",
    category: "currency",
    description: "Check what you have in your inventory",
  },
  {
    name: "quiz",
    category: "currency",
    description: "Get coins for answering questions",
  },
  //   Social Starts
  {
    name: "gituser",
    category: "github",
    description: "Returns info about a github user ",
  },
  {
    name: "repos",
    category: "github",
    description: "Returns top 5 repositories of the requested user ",
  },
];
export default commands;
