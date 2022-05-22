import * as DiscordTypes from 'discord-api-types/v10';
/**
 * Discord API constants.
 */
export declare const DiscordConstants: {
    /**
     * Application command limits.
     * @see [Discord API Types](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure)
     */
    readonly APPLICATION_COMMAND_LIMITS: {
        readonly NAME: 32;
        readonly DESCRIPTION: 100;
        readonly OPTION: {
            readonly CHOICES: 25;
            readonly DESCRIPTION: 100;
            readonly NAME: 32;
        };
        readonly OPTIONS: 25;
    };
    /**
     * The maximum number of choices an autocomplete response can specify.
     * @see [Discord API Types](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete)
     */
    readonly AUTOCOMPLETE_MAX_CHOICES: 25;
    /**
     * Discord's base API URL.
     * @see [Discord API Reference](https://discord.com/developers/docs/reference#api-reference-base-url)
     */
    readonly BASE_URL: "https://discord.com/api";
    /**
     * Discord's CDN URL.
     * @see [Discord API Reference](https://discord.com/developers/docs/reference#image-formatting-image-base-url)
     */
    readonly CDN_URL: "https://cdn.discordapp.com";
    /**
     * Component limits.
     * @see [Discord API Reference](https://discord.com/developers/docs/interactions/message-components)
     */
    readonly COMPONENT_LIMITS: {
        readonly BUTTON: {
            readonly CUSTOM_ID: 100;
            readonly LABEL: 80;
        };
        readonly SELECT_MENU: {
            readonly CUSTOM_ID: 100;
            readonly MAX_VALUES: {
                readonly MIN: 1;
                readonly MAX: 25;
            };
            readonly MIN_VALUES: {
                readonly MIN: 0;
                readonly MAX: 25;
            };
            readonly OPTIONS: 25;
            readonly OPTION: {
                readonly DESCRIPTION: 100;
                readonly LABEL: 100;
                readonly VALUE: 100;
            };
            readonly PLACEHOLDER: 150;
        };
        readonly TEXT_INPUT: {
            readonly CUSTOM_ID: 100;
            readonly LABEL: 45;
            readonly MAX_LENGTH: {
                readonly MIN: 1;
                readonly MAX: 4000;
            };
            readonly MIN_LENGTH: {
                readonly MIN: 0;
                readonly MAX: 4000;
            };
            readonly PLACEHOLDER: 100;
            readonly VALUE: 4000;
        };
    };
    /**
     * The Discord epoch as a unix millisecond timestamp.
     * @see [Discord API Reference](https://discord.com/developers/docs/reference#snowflakes-snowflake-id-format-structure-left-to-right)
     */
    readonly DISCORD_EPOCH: 1420070400000;
    /**
     * Gateway [close event codes](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes).
     */
    readonly GATEWAY_CLOSE_CODES: {
        /**
         * Close codes that a shard should attempt to reconnect after receiving.
         */
        readonly RECONNECTABLE: readonly [DiscordTypes.GatewayCloseCodes.UnknownError, DiscordTypes.GatewayCloseCodes.UnknownOpcode, DiscordTypes.GatewayCloseCodes.DecodeError, DiscordTypes.GatewayCloseCodes.NotAuthenticated, DiscordTypes.GatewayCloseCodes.AlreadyAuthenticated, DiscordTypes.GatewayCloseCodes.InvalidSeq, DiscordTypes.GatewayCloseCodes.RateLimited, DiscordTypes.GatewayCloseCodes.SessionTimedOut];
        /**
         * Close codes that a shard should not attempt to reconnect after receiving.
         */
        readonly NOT_RECONNECTABLE: readonly [DiscordTypes.GatewayCloseCodes.AuthenticationFailed, DiscordTypes.GatewayCloseCodes.InvalidShard, DiscordTypes.GatewayCloseCodes.ShardingRequired, DiscordTypes.GatewayCloseCodes.InvalidAPIVersion, DiscordTypes.GatewayCloseCodes.InvalidIntents, DiscordTypes.GatewayCloseCodes.DisallowedIntents];
    };
    /**
     * Gateway intents.
     * Includes privileged intents.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/gateway#gateway-intents)
     */
    readonly GATEWAY_INTENTS: {
        readonly GUILDS: DiscordTypes.GatewayIntentBits.Guilds;
        readonly GUILD_MEMBERS: DiscordTypes.GatewayIntentBits.GuildMembers;
        readonly GUILD_BANS: DiscordTypes.GatewayIntentBits.GuildBans;
        readonly GUILD_EMOJIS_AND_STICKERS: DiscordTypes.GatewayIntentBits.GuildEmojisAndStickers;
        readonly GUILD_INTEGRATIONS: DiscordTypes.GatewayIntentBits.GuildIntegrations;
        readonly GUILD_WEBHOOKS: DiscordTypes.GatewayIntentBits.GuildWebhooks;
        readonly GUILD_INVITES: DiscordTypes.GatewayIntentBits.GuildInvites;
        readonly GUILD_VOICE_STATES: DiscordTypes.GatewayIntentBits.GuildVoiceStates;
        readonly GUILD_PRESENCES: DiscordTypes.GatewayIntentBits.GuildPresences;
        readonly GUILD_MESSAGES: DiscordTypes.GatewayIntentBits.GuildMessages;
        readonly GUILD_MESSAGE_REACTIONS: DiscordTypes.GatewayIntentBits.GuildMessageReactions;
        readonly GUILD_MESSAGE_TYPING: DiscordTypes.GatewayIntentBits.GuildMessageTyping;
        readonly DIRECT_MESSAGES: DiscordTypes.GatewayIntentBits.DirectMessages;
        readonly DIRECT_MESSAGE_REACTIONS: DiscordTypes.GatewayIntentBits.DirectMessageReactions;
        readonly DIRECT_MESSAGE_TYPING: DiscordTypes.GatewayIntentBits.DirectMessageTyping;
        readonly MESSAGE_CONTENT: DiscordTypes.GatewayIntentBits.MessageContent;
        readonly GUILD_SCHEDULED_EVENTS: DiscordTypes.GatewayIntentBits.GuildScheduledEvents;
    };
    /**
     * The maximum length in bytes allowed for the `nonce` property in a [request guild members](https://discord.com/developers/docs/topics/gateway#request-guild-members) payload.
     */
    readonly GATEWAY_MAX_REQUEST_GUILD_MEMBERS_NONCE_LENGTH: 32;
    /**
     * Privileged gateway intents.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/gateway#privileged-intents)
     */
    readonly GATEWAY_PRIVILEGED_INTENTS: {
        readonly GUILD_MEMBERS: DiscordTypes.GatewayIntentBits.GuildMembers;
        readonly GUILD_PRESENCES: DiscordTypes.GatewayIntentBits.GuildPresences;
        readonly MESSAGE_CONTENT: DiscordTypes.GatewayIntentBits.MessageContent;
    };
    /**
     * Gateway rate limits.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/gateway#rate-limiting)
     */
    readonly GATEWAY_RATELIMITS: {
        /**
         * The number of commands allowed to be sent every `RESET_AFTER` milliseconds.
         */
        readonly LIMIT: 120;
        /**
         * The amount of time that `LIMIT` is specified for.
         */
        readonly RESET_AFTER: 60000;
    };
    /**
     * The cooldown between spawning shards from the same bucket.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/gateway#sharding)
     */
    readonly GATEWAY_SHARD_SPAWN_COOLDOWN: 5000;
    /**
     * Allowed image formats.
     * @see [Discord API Reference](https://discord.com/developers/docs/reference#image-formatting-image-formats)
     */
    readonly IMAGE_FORMATS: readonly ["gif", "jpeg", "jpg", "json", "png", "webp"];
    /**
     * Allowed image sizes.
     * @see [Discord API Reference](https://discord.com/developers/docs/reference#image-formatting)
     */
    readonly IMAGE_SIZES: readonly [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
    /**
     * Limits for message embed fields.
     * @see [Discord API Reference](https://discord.com/developers/docs/resources/channel#embed-limits)
     */
    readonly MESSAGE_EMBED_LIMITS: {
        readonly AUTHOR_NAME: 256;
        readonly DESCRIPTION: 4096;
        readonly FIELD: {
            readonly NAME: 256;
            readonly VALUE: 1024;
        };
        readonly FIELDS: 25;
        readonly FOOTER_TEXT: 2048;
        readonly MAX_TOTAL_IN_MESSAGE: 6000;
        readonly TITLE: 256;
    };
    /**
     * Limits for creating messages.
     * @see [Discord API Reference](https://discord.com/developers/docs/resources/channel#create-message)
     */
    readonly MESSAGE_LIMITS: {
        readonly ATTACHMENTS: 10;
        readonly CONTENT: 2000;
        readonly EMBEDS: 10;
        readonly MAX_DEFAULT_ATTACHMENTS_SIZE: 8388608;
    };
    /**
     * Limits for modals.
     * @see [Discord API Reference](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal)
     */
    readonly MODAL_LIMITS: {
        readonly COMPONENTS: 5;
        readonly CUSTOM_ID: 100;
        readonly TITLE: 45;
    };
    /**
     * Bitwise permission flags.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags)
     */
    readonly PERMISSION_FLAGS: {
        readonly CREATE_INSTANT_INVITE: bigint;
        readonly KICK_MEMBERS: bigint;
        readonly BAN_MEMBERS: bigint;
        readonly ADMINISTRATOR: bigint;
        readonly MANAGE_CHANNELS: bigint;
        readonly MANAGE_GUILD: bigint;
        readonly ADD_REACTIONS: bigint;
        readonly VIEW_AUDIT_LOG: bigint;
        readonly PRIORITY_SPEAKER: bigint;
        readonly STREAM: bigint;
        readonly VIEW_CHANNEL: bigint;
        readonly SEND_MESSAGES: bigint;
        readonly SEND_TTS_MESSAGES: bigint;
        readonly MANAGE_MESSAGES: bigint;
        readonly EMBED_LINKS: bigint;
        readonly ATTACH_FILES: bigint;
        readonly READ_MESSAGE_HISTORY: bigint;
        readonly MENTION_EVERYONE: bigint;
        readonly USE_EXTERNAL_EMOJIS: bigint;
        readonly VIEW_GUILD_INSIGHTS: bigint;
        readonly CONNECT: bigint;
        readonly SPEAK: bigint;
        readonly MUTE_MEMBERS: bigint;
        readonly DEAFEN_MEMBERS: bigint;
        readonly MOVE_MEMBERS: bigint;
        readonly USE_VAD: bigint;
        readonly CHANGE_NICKNAME: bigint;
        readonly MANAGE_NICKNAMES: bigint;
        readonly MANAGE_ROLES: bigint;
        readonly MANAGE_WEBHOOKS: bigint;
        readonly MANAGE_EMOJIS_AND_STICKERS: bigint;
        readonly USE_APPLICATION_COMMANDS: bigint;
        readonly REQUEST_TO_SPEAK: bigint;
        readonly MANAGE_EVENTS: bigint;
        readonly MANAGE_THREADS: bigint;
        readonly CREATE_PUBLIC_THREADS: bigint;
        readonly CREATE_PRIVATE_THREADS: bigint;
        readonly USE_EXTERNAL_STICKERS: bigint;
        readonly SEND_MESSAGES_IN_THREADS: bigint;
        readonly USE_EMBEDDED_ACTIVITIES: bigint;
        readonly MODERATE_MEMBERS: bigint;
    };
    /**
     * Bitwise permission flags for when a user is timed out.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/permissions#permissions-for-timed-out-members)
     */
    readonly PERMISSION_FLAGS_TIMEOUT: {
        readonly VIEW_CHANNEL: bigint;
        readonly READ_MESSAGE_HISTORY: bigint;
    };
    /**
     * The ending key where an error array is defined on a rest error.
     */
    readonly REST_ERROR_KEY: "_errors";
    /**
     * The amount of milliseconds after a message is created where it causes issues with rate limiting.
     * @see [GitHub Issue](https://github.com/discord/discord-api-docs/issues/1295)
     */
    readonly REST_OLD_MESSAGE_THRESHOLD: 1209600000;
    /**
     * Rest rate limit headers.
     * Headers are lowercase to allow for easier comparison (`receivedHeader.toLowerCase() === REST_RATELIMIT_HEADERS.HEADER`), as some http libraries return headers in all uppercase or all lowercase.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/rate-limits#header-format)
     */
    readonly REST_RATELIMIT_HEADERS: {
        readonly LIMIT: "x-ratelimit-limit";
        readonly REMAINING: "x-ratelimit-remaining";
        readonly RESET: "x-ratelimit-reset";
        readonly RESET_AFTER: "x-ratelimit-reset-after";
        readonly BUCKET: "x-ratelimit-bucket";
        readonly GLOBAL: "x-ratelimit-global";
        readonly GLOBAL_RETRY_AFTER: "retry-after";
        readonly SCOPE: "x-ratelimit-scope";
    };
};
