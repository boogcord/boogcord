import { GatewayOptions } from './GatewayOptions';
import { GatewayShard } from './GatewayShard';
import { Cache } from '../cache/Cache';
import { Rest } from '../rest/Rest';
import { LogCallback } from '../types/Log';
import { ExtendedMap, TypedEmitter } from '@br88c/node-utils';
import * as DiscordTypes from 'discord-api-types/v10';
import { Snowflake } from 'discord-api-types/v10';
/**
 * {@link Gateway} events.
 * Note that with the exception of `SHARDS_READY`, all events are a relay of a {@link GatewayShard} event emit (For example, `READY` signifies a single shard receiving a `READY` dispatch).
 * @see [Discord API Reference](https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events)
 */
export interface GatewayEvents {
    /**
     * When all {@link GatewayShard shards} are spawned and ready.
     * Data is success and fail tallies for shard spawns.
     */
    SHARDS_READY: {
        success: number;
        failed: number;
    };
    /**
     * When a payload is sent. Data is the sent payload.
     */
    SENT: string;
    /**
     * When a {@link GatewayShard shard} enters a disconnected state.
     */
    SHARD_STATE_DISCONNECTED: GatewayShard;
    /**
     * When a {@link GatewayShard shard} enters a connecting state.
     */
    SHARD_STATE_CONNECTING: GatewayShard;
    /**
     * When a {@link GatewayShard shard} enters a resuming state.
     */
    SHARD_STATE_RESUMING: GatewayShard;
    /**
     * When a {@link GatewayShard shard} enters a connected state.
     */
    SHARD_STATE_CONNECTED: GatewayShard;
    '*': DiscordTypes.GatewayDispatchPayload;
    READY: DiscordTypes.GatewayReadyDispatch;
    RESUMED: DiscordTypes.GatewayResumedDispatch;
    CHANNEL_CREATE: DiscordTypes.GatewayChannelCreateDispatch;
    CHANNEL_UPDATE: DiscordTypes.GatewayChannelUpdateDispatch;
    CHANNEL_DELETE: DiscordTypes.GatewayChannelDeleteDispatch;
    CHANNEL_PINS_UPDATE: DiscordTypes.GatewayChannelPinsUpdateDispatch;
    THREAD_CREATE: DiscordTypes.GatewayThreadCreateDispatch;
    THREAD_UPDATE: DiscordTypes.GatewayThreadUpdateDispatch;
    THREAD_DELETE: DiscordTypes.GatewayThreadDeleteDispatch;
    THREAD_LIST_SYNC: DiscordTypes.GatewayThreadListSyncDispatch;
    THREAD_MEMBER_UPDATE: DiscordTypes.GatewayThreadMemberUpdateDispatch;
    THREAD_MEMBERS_UPDATE: DiscordTypes.GatewayThreadMembersUpdateDispatch;
    GUILD_CREATE: DiscordTypes.GatewayGuildCreateDispatch;
    GUILD_UPDATE: DiscordTypes.GatewayGuildUpdateDispatch;
    GUILD_DELETE: DiscordTypes.GatewayGuildDeleteDispatch;
    GUILD_BAN_ADD: DiscordTypes.GatewayGuildBanAddDispatch;
    GUILD_BAN_REMOVE: DiscordTypes.GatewayGuildBanRemoveDispatch;
    GUILD_EMOJIS_UPDATE: DiscordTypes.GatewayGuildEmojisUpdateDispatch;
    GUILD_STICKERS_UPDATE: DiscordTypes.GatewayGuildStickersUpdateDispatch;
    GUILD_INTEGRATIONS_UPDATE: DiscordTypes.GatewayGuildIntegrationsUpdateDispatch;
    GUILD_MEMBER_ADD: DiscordTypes.GatewayGuildMemberAddDispatch;
    GUILD_MEMBER_REMOVE: DiscordTypes.GatewayGuildMemberRemoveDispatch;
    GUILD_MEMBER_UPDATE: DiscordTypes.GatewayGuildMemberUpdateDispatch;
    GUILD_MEMBERS_CHUNK: DiscordTypes.GatewayGuildMembersChunkDispatch;
    GUILD_ROLE_CREATE: DiscordTypes.GatewayGuildRoleCreateDispatch;
    GUILD_ROLE_UPDATE: DiscordTypes.GatewayGuildRoleUpdateDispatch;
    GUILD_ROLE_DELETE: DiscordTypes.GatewayGuildRoleDeleteDispatch;
    GUILD_SCHEDULED_EVENT_CREATE: DiscordTypes.GatewayGuildScheduledEventCreateDispatch;
    GUILD_SCHEDULED_EVENT_UPDATE: DiscordTypes.GatewayGuildScheduledEventUpdateDispatch;
    GUILD_SCHEDULED_EVENT_DELETE: DiscordTypes.GatewayGuildScheduledEventDeleteDispatch;
    GUILD_SCHEDULED_EVENT_USER_ADD: DiscordTypes.GatewayGuildScheduledEventUserAddDispatch;
    GUILD_SCHEDULED_EVENT_USER_REMOVE: DiscordTypes.GatewayGuildScheduledEventUserRemoveDispatch;
    INTEGRATION_CREATE: DiscordTypes.GatewayIntegrationCreateDispatch;
    INTEGRATION_UPDATE: DiscordTypes.GatewayIntegrationUpdateDispatch;
    INTEGRATION_DELETE: DiscordTypes.GatewayIntegrationDeleteDispatch;
    INTERACTION_CREATE: DiscordTypes.GatewayInteractionCreateDispatch;
    INVITE_CREATE: DiscordTypes.GatewayInviteCreateDispatch;
    INVITE_DELETE: DiscordTypes.GatewayInviteDeleteDispatch;
    MESSAGE_CREATE: DiscordTypes.GatewayMessageCreateDispatch;
    MESSAGE_UPDATE: DiscordTypes.GatewayMessageUpdateDispatch;
    MESSAGE_DELETE: DiscordTypes.GatewayMessageDeleteDispatch;
    MESSAGE_DELETE_BULK: DiscordTypes.GatewayMessageDeleteBulkDispatch;
    MESSAGE_REACTION_ADD: DiscordTypes.GatewayMessageReactionAddDispatch;
    MESSAGE_REACTION_REMOVE: DiscordTypes.GatewayMessageReactionRemoveDispatch;
    MESSAGE_REACTION_REMOVE_ALL: DiscordTypes.GatewayMessageReactionRemoveAllDispatch;
    MESSAGE_REACTION_REMOVE_EMOJI: DiscordTypes.GatewayMessageReactionRemoveEmojiDispatch;
    PRESENCE_UPDATE: DiscordTypes.GatewayPresenceUpdateDispatch;
    STAGE_INSTANCE_CREATE: DiscordTypes.GatewayStageInstanceCreateDispatch;
    STAGE_INSTANCE_DELETE: DiscordTypes.GatewayStageInstanceDeleteDispatch;
    STAGE_INSTANCE_UPDATE: DiscordTypes.GatewayStageInstanceUpdateDispatch;
    TYPING_START: DiscordTypes.GatewayTypingStartDispatch;
    USER_UPDATE: DiscordTypes.GatewayUserUpdateDispatch;
    VOICE_STATE_UPDATE: DiscordTypes.GatewayVoiceStateUpdateDispatch;
    VOICE_SERVER_UPDATE: DiscordTypes.GatewayVoiceServerUpdateDispatch;
    WEBHOOKS_UPDATE: DiscordTypes.GatewayWebhooksUpdateDispatch;
}
/**
 * The gateway manager.
 * Manages {@link GatewayShard shards}, handles incoming payloads, and sends commands to the Discord gateway.
 *
 * All events are emitted with their entire payload; [Discord API Reference](https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure).
 * Dispatched events are emitted under the {@link GatewayEvents `*`} event prior to being passed through the cache event handler.
 * After being handled by the {@link Cache cache manager}, they are emitted again under their individual event name (example: `GUILD_CREATE`).
 */
export declare class Gateway extends TypedEmitter<GatewayEvents> {
    /**
     * {@link GatewayShard Gateway shards}.
     * Modifying this map externally may result in unexpected behavior.
     */
    shards: ExtendedMap<number, GatewayShard>;
    /**
     * The latest self user received from the gateway.
     */
    user: DiscordTypes.APIUser | null;
    /**
     * {@link GatewayOptions Options} for the gateway manager.
     * Note that any options not specified are set to a default value.
     */
    readonly options: Required<GatewayOptions> & {
        intents: number;
    };
    /**
     * The {@link Cache cache manager} to update from incoming events.
     */
    private _cache?;
    /**
     * The {@link LogCallback log callback} used by the gateway manager.
     */
    private _log;
    /**
     * A value to use as `this` in the `this#_log`.
     */
    private _logThisArg?;
    /**
     * An increment used for creating unique nonce values for [request guild member](https://discord.com/developers/docs/topics/gateway#request-guild-members) payloads.
     */
    private _requestGuildMembersNonceIncrement;
    /**
     * The {@link Rest rest manager} to use for fetching gateway endpoints.
     */
    private _rest;
    /**
     * Stored calculated sharding options.
     */
    private _storedCalculatedShards;
    /**
     * Stored response from `Rest#getGatewayBot()`.
     */
    private _storedGetGatewayBot;
    /**
     * The bot's token.
     */
    private readonly _token;
    /**
     * Create a gateway manager.
     * @param token The bot's token.
     * @param rest The {@link Rest rest manager} to use for fetching gateway endpoints.
     * @param cache The {@link Cache cache} to update from incoming events. If `false` is specified, {@link GatewayEvents gateway events} will not be passed to a cache event handler.
     * @param options {@link GatewayOptions Gateway options}.
     * @param logCallback A {@link LogCallback callback} to be used for logging events internally in the gateway manager.
     * @param logThisArg A value to use as `this` in the `logCallback`.
     */
    constructor(token: string, rest: Rest, cache: Cache | false, options?: GatewayOptions, logCallback?: LogCallback, logThisArg?: any);
    /**
     * If all shards are in a {@link GatewayShardState READY} state.
     */
    get shardsReady(): boolean;
    /**
     * Connect to the gateway.
     * @param gatewayBot A pre-fetched `GET` `/gateway/bot`. Not required, as this method will fetch it if not specified.
     * @returns The results from {@link GatewayShard shard} spawns.
     */
    connect(gatewayBot?: DiscordTypes.APIGatewayBotInfo): Promise<Array<PromiseSettledResult<DiscordTypes.GatewayReadyDispatch>>>;
    /**
     * Get a guild's shard.
     * @param guildId The guild's ID.
     * @param ensure If true, an error is thrown if a {@link GatewayShard} is not found.
     * @returns The guild's shard, or a shard ID if the shard is not in this manager.
     * @see [Discord API Reference]
     */
    guildShard<T extends boolean>(guildId: Snowflake, ensure?: T): T extends true ? GatewayShard : GatewayShard | number;
    /**
     * Get members from a guild.
     * @param guildId The ID of the guild to get members from.
     * @param options Guild member request options.
     * @returns Received members, presences, and unfound members.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/gateway#request-guild-members)
     */
    getGuildMembers(guildId: Snowflake, options?: Partial<Omit<DiscordTypes.GatewayRequestGuildMembersData, `guild_id` | `presences`>>): Promise<{
        members: ExtendedMap<Snowflake, DiscordTypes.APIGuildMember>;
        presences?: ExtendedMap<Snowflake, DiscordTypes.GatewayPresenceUpdate>;
        notFound?: Snowflake[];
    }>;
    /**
     * Update the bot's voice state.
     * @param guildId The guild to set the voice state in.
     * @param channelId The channel to join. `null`disconnects the bot.
     * @param mute If the bot should self mute.
     * @param deafen If the bot should self deafen.
     * @see [Discord API Reference](https://discord.com/developers/docs/topics/gateway#update-voice-state)
     */
    updateVoiceState(guildId: Snowflake, channelId: Snowflake | null, mute?: boolean, deafen?: boolean): Promise<void>;
    /**
     * Update the bot's presence.
     * @param presence Presence data.
     * @param shard A shard or shards to set the presence on. A number will set the presence on a single shard with a matching ID, a number array will set the presence on all shards matching am ID in the array, and `all` will set the presence on all shards.
     */
    updatePresence(presence: {
        since: number | null;
        activities: Array<{
            name: string;
            type: number;
            url?: string | null;
        }>;
        status: `online` | `dnd` | `idle` | `invisible` | `offline`;
        afk: boolean;
    } | DiscordTypes.GatewayPresenceUpdateData, shard?: number | number[] | `all`): Promise<void>;
    /**
     * Get a guild's shard ID.
     * @param guildId The guild's ID.
     * @param numShards The `numShards` value sent in the identify payload.
     * @returns A shard ID.
     */
    private _guildShard;
    /**
     * Creates intents flags from intents specified in the constructor.
     * @param specified The specified intents.
     * @returns Intents flags.
     */
    private _intentsFactory;
}
