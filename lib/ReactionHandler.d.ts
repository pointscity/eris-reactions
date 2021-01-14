/// <reference types="node" />
import Eris, { Emoji, Message } from 'eris';
import { EventEmitter } from 'events';
interface Options {
    time?: number;
    maxMatches?: number;
}
declare type Filter = (userID: string) => boolean;
/**
 * An extremely simple and pretty straight forward reaction collector for Eris
 */
declare class ReactionHandler extends EventEmitter {
    client: Eris.Client;
    message: Eris.Message;
    options: Options;
    permanent: boolean;
    ended: boolean;
    collected: any[];
    filter: Filter;
    listener: (msg: Message, emoji: Emoji, reactor: Eris.Member) => boolean;
    constructor(message: Message, filter: Filter, permanent?: boolean, options?: Options);
    /**
     * Verify a reaction for its validity with provided filters
     * @param {object} msg The message object
     * @param {object} emoji The emoji object containing its name and its ID
     * @param {Eris.Member} reactor The member who reacted to this message
     */
    checkPreConditions(msg: Message, emoji: Emoji, reactor: Eris.Member): boolean;
    /**
     * Stops collecting reactions and removes the listener from the client
     * @param {string} reason The reason for stopping
     */
    stopListening(reason: string): void;
}
declare const _default: {
    continuousReactionStream: typeof ReactionHandler;
    collectReactions: (message: Message, filter: Filter, options: Options) => Promise<unknown>;
};
export default _default;
