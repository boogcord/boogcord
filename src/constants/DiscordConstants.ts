import { GatewayCloseCodes, GatewayIntentBits, PermissionFlagsBits } from 'discord-api-types/v10';

/**
 * Discord API constants.
 */
export const DiscordConstants = {
    /**
     * Application command limits.
     * @see [Discord API Types](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure)
     */
    APPLICATION_COMMAND_LIMITS: {
        NAME: 32,
        DESCRIPTION: 100,
        OPTION: {
            CHOICES: 25,
            DESCRIPTION: 100,
            NAME: 32
        },
        OPTIONS: 25
    },
    /**
     * The maximum number of choices an autocomplete response can specify.
     * @see [Discord API Types](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete)
     */
    AUTOCOMPLETE_MAX_CHOICES: 25,
    /**
     * Discord's base API URL.
     * @see [Discord API Reference](https://discord.com/developers/docs/reference#api-reference-base-url)
     */
    BASE_URL: `https://discord.com/api`,
    /**
     * Discord's CDN URL.
     * @see [Discord API Reference](https://discord.com/developers/docs/reference#image-formatting-image-base-url)
     */
    CDN_URL: `https://cdn.discordapp.com`,
    /**
     * Official [Discord branding](https://discord.com/branding) colors.
     */
    COLORS: {
        BLURPLE: 0x5865F2,
        OLD_BLURPLE: 0x7289DA,
        GREEN: 0x57F287,
        YELLOW: 0xFEE75C,
        FUCHSIA: 0xEB459E,
        RED: 0xED4245,
        WHITE: 0xFFFFFF,
        BLACK: 0x000000
    },
    /**
     * Component limits.
     * @see [Discord API Reference](https://discord.com/developers/docs/interactions/message-components)
     */
    COMPONENT_LIMITS: {
        BUTTON: {
            CUSTOM_ID: 100,
            LABEL: 80
        },
        SELECT_MENU: {
            CUSTOM_ID: 100,
            MAX_VALUES: {
                MIN: 1,
                MAX: 25
            },
            MIN_VALUES: {
                MIN: 0,
                MAX: 25
            },
            OPTIONS: 25,
            OPTION: {
                DESCRIPTION: 100,
                LABEL: 100,
                VALUE: 100
            },
            PLACEHOLDER: 150
        },
        TEXT_INPUT: {
            CUSTOM_ID: 100,
            LABEL: 45,
            MAX_LENGTH: {
                MIN: 1,
                MAX: 4000
            },
            MIN_LENGTH: {
                MIN: 0,
                MAX: 4000
            },
            PLACEHOLDER: 100,
            VALUE: 4000
        }
    },
    /**
     * The Discord epoch as a unix millisecond timestamp.
     * @see [Discord API Reference](https://discord.com/developers/docs/reference#snowflakes-snowflake-id-format-structure-left-to-right)
     */
    DISCORD_EPOCH: 1420070400000,
    /**
     * Gateway [close event codes](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes).
     */
    GATEWAY_CLOSE_CODES: {
        /**
         * Close codes that a shard should attempt to reconnect after receiving.
         */
        RECONNECTABLE: [GatewayCloseCodes.UnknownError, GatewayCloseCodes.UnknownOpcode, GatewayCloseCodes.DecodeError, GatewayCloseCodes.NotAuthenticated, GatewayCloseCodes.AlreadyAuthenticated, GatewayCloseCodes.InvalidSeq, GatewayCloseCodes.RateLimited, GatewayCloseCodes.SessionTimedOut],
        /**
         * Close codes that a shard should not attempt to reconnect after receiving.
         */
        NOT_RECONNECTABLE: [GatewayCloseCodes.AuthenticationFailed, GatewayCloseCodes.InvalidShard, GatewayCloseCodes.ShardingRequired, GatewayCloseCodes.InvalidAPIVersion, GatewayCloseCodes.InvalidIntents, GatewayCloseCodes.DisallowedIntents]
    },
    /**
     * Gateway intents.
     * Includes privileged intents.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/gateway#gateway-intents)
     */
    GATEWAY_INTENTS: {
        GUILDS: GatewayIntentBits.Guilds,
        GUILD_MEMBERS: GatewayIntentBits.GuildMembers,
        GUILD_BANS: GatewayIntentBits.GuildBans,
        GUILD_EMOJIS_AND_STICKERS: GatewayIntentBits.GuildEmojisAndStickers,
        GUILD_INTEGRATIONS: GatewayIntentBits.GuildIntegrations,
        GUILD_WEBHOOKS: GatewayIntentBits.GuildWebhooks,
        GUILD_INVITES: GatewayIntentBits.GuildInvites,
        GUILD_VOICE_STATES: GatewayIntentBits.GuildVoiceStates,
        GUILD_PRESENCES: GatewayIntentBits.GuildPresences,
        GUILD_MESSAGES: GatewayIntentBits.GuildMessages,
        GUILD_MESSAGE_REACTIONS: GatewayIntentBits.GuildMessageReactions,
        GUILD_MESSAGE_TYPING: GatewayIntentBits.GuildMessageTyping,
        DIRECT_MESSAGES: GatewayIntentBits.DirectMessages,
        DIRECT_MESSAGE_REACTIONS: GatewayIntentBits.DirectMessageReactions,
        DIRECT_MESSAGE_TYPING: GatewayIntentBits.DirectMessageTyping,
        MESSAGE_CONTENT: GatewayIntentBits.MessageContent,
        GUILD_SCHEDULED_EVENTS: GatewayIntentBits.GuildScheduledEvents
    },
    /**
     * The maximum length in bytes allowed for the `nonce` property in a [request guild members](https://discord.com/developers/docs/topics/gateway#request-guild-members) payload.
     */
    GATEWAY_MAX_REQUEST_GUILD_MEMBERS_NONCE_LENGTH: 32,
    /**
     * Privileged gateway intents.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/gateway#privileged-intents)
     */
    GATEWAY_PRIVILEGED_INTENTS: {
        GUILD_MEMBERS: GatewayIntentBits.GuildMembers,
        GUILD_PRESENCES: GatewayIntentBits.GuildPresences,
        MESSAGE_CONTENT: GatewayIntentBits.MessageContent
    },
    /**
     * Gateway rate limits.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/gateway#rate-limiting)
     */
    GATEWAY_RATELIMITS: {
        /**
         * The number of commands allowed to be sent every `RESET_AFTER` milliseconds.
         */
        LIMIT: 120,
        /**
         * The amount of time that `LIMIT` is specified for.
         */
        RESET_AFTER: 60000
    },
    /**
     * The cooldown between spawning shards from the same bucket.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/gateway#sharding)
     */
    GATEWAY_SHARD_SPAWN_COOLDOWN: 5000,
    /**
     * Allowed image formats.
     * @see [Discord API Reference](https://discord.com/developers/docs/reference#image-formatting-image-formats)
     */
    IMAGE_FORMATS: [`gif`, `jpeg`, `jpg`, `json`, `png`, `webp`],
    /**
     * Allowed image sizes.
     * @see [Discord API Reference](https://discord.com/developers/docs/reference#image-formatting)
     */
    IMAGE_SIZES: [16, 32, 64, 128, 256, 512, 1024, 2048, 4096],
    /**
     * Limits for message embed fields.
     * @see [Discord API Reference](https://discord.com/developers/docs/resources/channel#embed-limits)
     */
    MESSAGE_EMBED_LIMITS: {
        AUTHOR_NAME: 256,
        DESCRIPTION: 4096,
        FIELD: {
            NAME: 256,
            VALUE: 1024
        },
        FIELDS: 25,
        FOOTER_TEXT: 2048,
        MAX_TOTAL_IN_MESSAGE: 6000,
        TITLE: 256
    },
    /**
     * Limits for creating messages.
     * @see [Discord API Reference](https://discord.com/developers/docs/resources/channel#create-message)
     */
    MESSAGE_LIMITS: {
        ATTACHMENTS: 10,
        CONTENT: 2000,
        EMBEDS: 10,
        MAX_DEFAULT_ATTACHMENTS_SIZE: 8388608
    },
    /**
     * Limits for modals.
     * @see [Discord API Reference](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal)
     */
    MODAL_LIMITS: {
        COMPONENTS: 5,
        CUSTOM_ID: 100,
        TITLE: 45
    },
    /**
     * Bitwise permission flags.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags)
     */
    PERMISSION_FLAGS: {
        CREATE_INSTANT_INVITE: PermissionFlagsBits.CreateInstantInvite,
        KICK_MEMBERS: PermissionFlagsBits.KickMembers,
        BAN_MEMBERS: PermissionFlagsBits.BanMembers,
        ADMINISTRATOR: PermissionFlagsBits.Administrator,
        MANAGE_CHANNELS: PermissionFlagsBits.ManageChannels,
        MANAGE_GUILD: PermissionFlagsBits.ManageGuild,
        ADD_REACTIONS: PermissionFlagsBits.AddReactions,
        VIEW_AUDIT_LOG: PermissionFlagsBits.ViewAuditLog,
        PRIORITY_SPEAKER: PermissionFlagsBits.PrioritySpeaker,
        STREAM: PermissionFlagsBits.Stream,
        VIEW_CHANNEL: PermissionFlagsBits.ViewChannel,
        SEND_MESSAGES: PermissionFlagsBits.SendMessages,
        SEND_TTS_MESSAGES: PermissionFlagsBits.SendTTSMessages,
        MANAGE_MESSAGES: PermissionFlagsBits.ManageMessages,
        EMBED_LINKS: PermissionFlagsBits.EmbedLinks,
        ATTACH_FILES: PermissionFlagsBits.AttachFiles,
        READ_MESSAGE_HISTORY: PermissionFlagsBits.ReadMessageHistory,
        MENTION_EVERYONE: PermissionFlagsBits.MentionEveryone,
        USE_EXTERNAL_EMOJIS: PermissionFlagsBits.UseExternalEmojis,
        VIEW_GUILD_INSIGHTS: PermissionFlagsBits.ViewGuildInsights,
        CONNECT: PermissionFlagsBits.Connect,
        SPEAK: PermissionFlagsBits.Speak,
        MUTE_MEMBERS: PermissionFlagsBits.MuteMembers,
        DEAFEN_MEMBERS: PermissionFlagsBits.DeafenMembers,
        MOVE_MEMBERS: PermissionFlagsBits.MoveMembers,
        USE_VAD: PermissionFlagsBits.UseVAD,
        CHANGE_NICKNAME: PermissionFlagsBits.ChangeNickname,
        MANAGE_NICKNAMES: PermissionFlagsBits.ManageNicknames,
        MANAGE_ROLES: PermissionFlagsBits.ManageRoles,
        MANAGE_WEBHOOKS: PermissionFlagsBits.ManageWebhooks,
        MANAGE_EMOJIS_AND_STICKERS: PermissionFlagsBits.ManageEmojisAndStickers,
        USE_APPLICATION_COMMANDS: PermissionFlagsBits.UseApplicationCommands,
        REQUEST_TO_SPEAK: PermissionFlagsBits.RequestToSpeak,
        MANAGE_EVENTS: PermissionFlagsBits.ManageEvents,
        MANAGE_THREADS: PermissionFlagsBits.ManageThreads,
        CREATE_PUBLIC_THREADS: PermissionFlagsBits.CreatePublicThreads,
        CREATE_PRIVATE_THREADS: PermissionFlagsBits.CreatePrivateThreads,
        USE_EXTERNAL_STICKERS: PermissionFlagsBits.UseExternalStickers,
        SEND_MESSAGES_IN_THREADS: PermissionFlagsBits.SendMessagesInThreads,
        USE_EMBEDDED_ACTIVITIES: PermissionFlagsBits.UseEmbeddedActivities,
        MODERATE_MEMBERS: PermissionFlagsBits.ModerateMembers
    },
    /**
     * Bitwise permission flags for when a user is timed out.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/permissions#permissions-for-timed-out-members)
     */
    PERMISSION_FLAGS_TIMEOUT: {
        VIEW_CHANNEL: PermissionFlagsBits.ViewChannel,
        READ_MESSAGE_HISTORY: PermissionFlagsBits.ReadMessageHistory
    },
    /**
     * The ending key where an error array is defined on a rest error.
     */
    REST_ERROR_KEY: `_errors`,
    /**
     * The amount of milliseconds after a message is created where it causes issues with rate limiting.
     * @see [GitHub Issue](https://github.com/discord/discord-api-docs/issues/1295)
     */
    REST_OLD_MESSAGE_THRESHOLD: 1209600000,
    /**
     * Rest rate limit headers.
     * Headers are lowercase to allow for easier comparison (`receivedHeader.toLowerCase() === REST_RATELIMIT_HEADERS.HEADER`), as some http libraries return headers in all uppercase or all lowercase.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/rate-limits#header-format)
     */
    REST_RATELIMIT_HEADERS: {
        LIMIT: `x-ratelimit-limit`,
        REMAINING: `x-ratelimit-remaining`,
        RESET: `x-ratelimit-reset`,
        RESET_AFTER: `x-ratelimit-reset-after`,
        BUCKET: `x-ratelimit-bucket`,
        GLOBAL: `x-ratelimit-global`,
        GLOBAL_RETRY_AFTER: `retry-after`,
        SCOPE: `x-ratelimit-scope`
    }
} as const;
