/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.LogOnEvent = (function() {

        /**
         * Properties of a LogOnEvent.
         * @memberof proto
         * @interface ILogOnEvent
         * @property {Uint8Array|null} [username] LogOnEvent username
         * @property {Uint8Array|null} [password] LogOnEvent password
         * @property {Uint8Array|null} [token] LogOnEvent token
         */

        /**
         * Constructs a new LogOnEvent.
         * @memberof proto
         * @classdesc Represents a LogOnEvent.
         * @implements ILogOnEvent
         * @constructor
         * @param {proto.ILogOnEvent=} [properties] Properties to set
         */
        function LogOnEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogOnEvent username.
         * @member {Uint8Array} username
         * @memberof proto.LogOnEvent
         * @instance
         */
        LogOnEvent.prototype.username = $util.newBuffer([]);

        /**
         * LogOnEvent password.
         * @member {Uint8Array} password
         * @memberof proto.LogOnEvent
         * @instance
         */
        LogOnEvent.prototype.password = $util.newBuffer([]);

        /**
         * LogOnEvent token.
         * @member {Uint8Array} token
         * @memberof proto.LogOnEvent
         * @instance
         */
        LogOnEvent.prototype.token = $util.newBuffer([]);

        /**
         * Creates a new LogOnEvent instance using the specified properties.
         * @function create
         * @memberof proto.LogOnEvent
         * @static
         * @param {proto.ILogOnEvent=} [properties] Properties to set
         * @returns {proto.LogOnEvent} LogOnEvent instance
         */
        LogOnEvent.create = function create(properties) {
            return new LogOnEvent(properties);
        };

        /**
         * Encodes the specified LogOnEvent message. Does not implicitly {@link proto.LogOnEvent.verify|verify} messages.
         * @function encode
         * @memberof proto.LogOnEvent
         * @static
         * @param {proto.ILogOnEvent} message LogOnEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogOnEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.username);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.password);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.token);
            return writer;
        };

        /**
         * Encodes the specified LogOnEvent message, length delimited. Does not implicitly {@link proto.LogOnEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.LogOnEvent
         * @static
         * @param {proto.ILogOnEvent} message LogOnEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogOnEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogOnEvent message from the specified reader or buffer.
         * @function decode
         * @memberof proto.LogOnEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.LogOnEvent} LogOnEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogOnEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.LogOnEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.bytes();
                    break;
                case 2:
                    message.password = reader.bytes();
                    break;
                case 3:
                    message.token = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogOnEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.LogOnEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.LogOnEvent} LogOnEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogOnEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogOnEvent message.
         * @function verify
         * @memberof proto.LogOnEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogOnEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!(message.username && typeof message.username.length === "number" || $util.isString(message.username)))
                    return "username: buffer expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!(message.password && typeof message.password.length === "number" || $util.isString(message.password)))
                    return "password: buffer expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            return null;
        };

        /**
         * Creates a LogOnEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.LogOnEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.LogOnEvent} LogOnEvent
         */
        LogOnEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.LogOnEvent)
                return object;
            var message = new $root.proto.LogOnEvent();
            if (object.username != null)
                if (typeof object.username === "string")
                    $util.base64.decode(object.username, message.username = $util.newBuffer($util.base64.length(object.username)), 0);
                else if (object.username.length)
                    message.username = object.username;
            if (object.password != null)
                if (typeof object.password === "string")
                    $util.base64.decode(object.password, message.password = $util.newBuffer($util.base64.length(object.password)), 0);
                else if (object.password.length)
                    message.password = object.password;
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length)
                    message.token = object.token;
            return message;
        };

        /**
         * Creates a plain object from a LogOnEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.LogOnEvent
         * @static
         * @param {proto.LogOnEvent} message LogOnEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogOnEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.username = "";
                else {
                    object.username = [];
                    if (options.bytes !== Array)
                        object.username = $util.newBuffer(object.username);
                }
                if (options.bytes === String)
                    object.password = "";
                else {
                    object.password = [];
                    if (options.bytes !== Array)
                        object.password = $util.newBuffer(object.password);
                }
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = options.bytes === String ? $util.base64.encode(message.username, 0, message.username.length) : options.bytes === Array ? Array.prototype.slice.call(message.username) : message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = options.bytes === String ? $util.base64.encode(message.password, 0, message.password.length) : options.bytes === Array ? Array.prototype.slice.call(message.password) : message.password;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            return object;
        };

        /**
         * Converts this LogOnEvent to JSON.
         * @function toJSON
         * @memberof proto.LogOnEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogOnEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LogOnEvent;
    })();

    proto.TheaterLogOnEvent = (function() {

        /**
         * Properties of a TheaterLogOnEvent.
         * @memberof proto
         * @interface ITheaterLogOnEvent
         * @property {Uint8Array|null} [room] TheaterLogOnEvent room
         * @property {Uint8Array|null} [token] TheaterLogOnEvent token
         */

        /**
         * Constructs a new TheaterLogOnEvent.
         * @memberof proto
         * @classdesc Represents a TheaterLogOnEvent.
         * @implements ITheaterLogOnEvent
         * @constructor
         * @param {proto.ITheaterLogOnEvent=} [properties] Properties to set
         */
        function TheaterLogOnEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TheaterLogOnEvent room.
         * @member {Uint8Array} room
         * @memberof proto.TheaterLogOnEvent
         * @instance
         */
        TheaterLogOnEvent.prototype.room = $util.newBuffer([]);

        /**
         * TheaterLogOnEvent token.
         * @member {Uint8Array} token
         * @memberof proto.TheaterLogOnEvent
         * @instance
         */
        TheaterLogOnEvent.prototype.token = $util.newBuffer([]);

        /**
         * Creates a new TheaterLogOnEvent instance using the specified properties.
         * @function create
         * @memberof proto.TheaterLogOnEvent
         * @static
         * @param {proto.ITheaterLogOnEvent=} [properties] Properties to set
         * @returns {proto.TheaterLogOnEvent} TheaterLogOnEvent instance
         */
        TheaterLogOnEvent.create = function create(properties) {
            return new TheaterLogOnEvent(properties);
        };

        /**
         * Encodes the specified TheaterLogOnEvent message. Does not implicitly {@link proto.TheaterLogOnEvent.verify|verify} messages.
         * @function encode
         * @memberof proto.TheaterLogOnEvent
         * @static
         * @param {proto.ITheaterLogOnEvent} message TheaterLogOnEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterLogOnEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.room != null && message.hasOwnProperty("room"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.room);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.token);
            return writer;
        };

        /**
         * Encodes the specified TheaterLogOnEvent message, length delimited. Does not implicitly {@link proto.TheaterLogOnEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TheaterLogOnEvent
         * @static
         * @param {proto.ITheaterLogOnEvent} message TheaterLogOnEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterLogOnEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TheaterLogOnEvent message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TheaterLogOnEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TheaterLogOnEvent} TheaterLogOnEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterLogOnEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TheaterLogOnEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.room = reader.bytes();
                    break;
                case 2:
                    message.token = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TheaterLogOnEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TheaterLogOnEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TheaterLogOnEvent} TheaterLogOnEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterLogOnEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TheaterLogOnEvent message.
         * @function verify
         * @memberof proto.TheaterLogOnEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TheaterLogOnEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.room != null && message.hasOwnProperty("room"))
                if (!(message.room && typeof message.room.length === "number" || $util.isString(message.room)))
                    return "room: buffer expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            return null;
        };

        /**
         * Creates a TheaterLogOnEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TheaterLogOnEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TheaterLogOnEvent} TheaterLogOnEvent
         */
        TheaterLogOnEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TheaterLogOnEvent)
                return object;
            var message = new $root.proto.TheaterLogOnEvent();
            if (object.room != null)
                if (typeof object.room === "string")
                    $util.base64.decode(object.room, message.room = $util.newBuffer($util.base64.length(object.room)), 0);
                else if (object.room.length)
                    message.room = object.room;
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length)
                    message.token = object.token;
            return message;
        };

        /**
         * Creates a plain object from a TheaterLogOnEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TheaterLogOnEvent
         * @static
         * @param {proto.TheaterLogOnEvent} message TheaterLogOnEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TheaterLogOnEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.room = "";
                else {
                    object.room = [];
                    if (options.bytes !== Array)
                        object.room = $util.newBuffer(object.room);
                }
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
            }
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = options.bytes === String ? $util.base64.encode(message.room, 0, message.room.length) : options.bytes === Array ? Array.prototype.slice.call(message.room) : message.room;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            return object;
        };

        /**
         * Converts this TheaterLogOnEvent to JSON.
         * @function toJSON
         * @memberof proto.TheaterLogOnEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TheaterLogOnEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TheaterLogOnEvent;
    })();

    proto.CMsgProtoBufHeader = (function() {

        /**
         * Properties of a CMsgProtoBufHeader.
         * @memberof proto
         * @interface ICMsgProtoBufHeader
         * @property {Uint8Array|null} [UserHash] CMsgProtoBufHeader UserHash
         * @property {Uint8Array|null} [IpAddr] CMsgProtoBufHeader IpAddr
         * @property {number|null} [SessionClientId] CMsgProtoBufHeader SessionClientId
         * @property {Uint8Array|null} [AuthToken] CMsgProtoBufHeader AuthToken
         */

        /**
         * Constructs a new CMsgProtoBufHeader.
         * @memberof proto
         * @classdesc Represents a CMsgProtoBufHeader.
         * @implements ICMsgProtoBufHeader
         * @constructor
         * @param {proto.ICMsgProtoBufHeader=} [properties] Properties to set
         */
        function CMsgProtoBufHeader(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMsgProtoBufHeader UserHash.
         * @member {Uint8Array} UserHash
         * @memberof proto.CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.UserHash = $util.newBuffer([]);

        /**
         * CMsgProtoBufHeader IpAddr.
         * @member {Uint8Array} IpAddr
         * @memberof proto.CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.IpAddr = $util.newBuffer([]);

        /**
         * CMsgProtoBufHeader SessionClientId.
         * @member {number} SessionClientId
         * @memberof proto.CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.SessionClientId = 0;

        /**
         * CMsgProtoBufHeader AuthToken.
         * @member {Uint8Array} AuthToken
         * @memberof proto.CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.AuthToken = $util.newBuffer([]);

        /**
         * Creates a new CMsgProtoBufHeader instance using the specified properties.
         * @function create
         * @memberof proto.CMsgProtoBufHeader
         * @static
         * @param {proto.ICMsgProtoBufHeader=} [properties] Properties to set
         * @returns {proto.CMsgProtoBufHeader} CMsgProtoBufHeader instance
         */
        CMsgProtoBufHeader.create = function create(properties) {
            return new CMsgProtoBufHeader(properties);
        };

        /**
         * Encodes the specified CMsgProtoBufHeader message. Does not implicitly {@link proto.CMsgProtoBufHeader.verify|verify} messages.
         * @function encode
         * @memberof proto.CMsgProtoBufHeader
         * @static
         * @param {proto.ICMsgProtoBufHeader} message CMsgProtoBufHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtoBufHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserHash != null && message.hasOwnProperty("UserHash"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.UserHash);
            if (message.IpAddr != null && message.hasOwnProperty("IpAddr"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.IpAddr);
            if (message.SessionClientId != null && message.hasOwnProperty("SessionClientId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SessionClientId);
            if (message.AuthToken != null && message.hasOwnProperty("AuthToken"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.AuthToken);
            return writer;
        };

        /**
         * Encodes the specified CMsgProtoBufHeader message, length delimited. Does not implicitly {@link proto.CMsgProtoBufHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CMsgProtoBufHeader
         * @static
         * @param {proto.ICMsgProtoBufHeader} message CMsgProtoBufHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtoBufHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMsgProtoBufHeader message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CMsgProtoBufHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CMsgProtoBufHeader} CMsgProtoBufHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtoBufHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CMsgProtoBufHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserHash = reader.bytes();
                    break;
                case 2:
                    message.IpAddr = reader.bytes();
                    break;
                case 3:
                    message.SessionClientId = reader.int32();
                    break;
                case 4:
                    message.AuthToken = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMsgProtoBufHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.CMsgProtoBufHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CMsgProtoBufHeader} CMsgProtoBufHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtoBufHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMsgProtoBufHeader message.
         * @function verify
         * @memberof proto.CMsgProtoBufHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgProtoBufHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserHash != null && message.hasOwnProperty("UserHash"))
                if (!(message.UserHash && typeof message.UserHash.length === "number" || $util.isString(message.UserHash)))
                    return "UserHash: buffer expected";
            if (message.IpAddr != null && message.hasOwnProperty("IpAddr"))
                if (!(message.IpAddr && typeof message.IpAddr.length === "number" || $util.isString(message.IpAddr)))
                    return "IpAddr: buffer expected";
            if (message.SessionClientId != null && message.hasOwnProperty("SessionClientId"))
                if (!$util.isInteger(message.SessionClientId))
                    return "SessionClientId: integer expected";
            if (message.AuthToken != null && message.hasOwnProperty("AuthToken"))
                if (!(message.AuthToken && typeof message.AuthToken.length === "number" || $util.isString(message.AuthToken)))
                    return "AuthToken: buffer expected";
            return null;
        };

        /**
         * Creates a CMsgProtoBufHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.CMsgProtoBufHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CMsgProtoBufHeader} CMsgProtoBufHeader
         */
        CMsgProtoBufHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CMsgProtoBufHeader)
                return object;
            var message = new $root.proto.CMsgProtoBufHeader();
            if (object.UserHash != null)
                if (typeof object.UserHash === "string")
                    $util.base64.decode(object.UserHash, message.UserHash = $util.newBuffer($util.base64.length(object.UserHash)), 0);
                else if (object.UserHash.length)
                    message.UserHash = object.UserHash;
            if (object.IpAddr != null)
                if (typeof object.IpAddr === "string")
                    $util.base64.decode(object.IpAddr, message.IpAddr = $util.newBuffer($util.base64.length(object.IpAddr)), 0);
                else if (object.IpAddr.length)
                    message.IpAddr = object.IpAddr;
            if (object.SessionClientId != null)
                message.SessionClientId = object.SessionClientId | 0;
            if (object.AuthToken != null)
                if (typeof object.AuthToken === "string")
                    $util.base64.decode(object.AuthToken, message.AuthToken = $util.newBuffer($util.base64.length(object.AuthToken)), 0);
                else if (object.AuthToken.length)
                    message.AuthToken = object.AuthToken;
            return message;
        };

        /**
         * Creates a plain object from a CMsgProtoBufHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.CMsgProtoBufHeader
         * @static
         * @param {proto.CMsgProtoBufHeader} message CMsgProtoBufHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgProtoBufHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.UserHash = "";
                else {
                    object.UserHash = [];
                    if (options.bytes !== Array)
                        object.UserHash = $util.newBuffer(object.UserHash);
                }
                if (options.bytes === String)
                    object.IpAddr = "";
                else {
                    object.IpAddr = [];
                    if (options.bytes !== Array)
                        object.IpAddr = $util.newBuffer(object.IpAddr);
                }
                object.SessionClientId = 0;
                if (options.bytes === String)
                    object.AuthToken = "";
                else {
                    object.AuthToken = [];
                    if (options.bytes !== Array)
                        object.AuthToken = $util.newBuffer(object.AuthToken);
                }
            }
            if (message.UserHash != null && message.hasOwnProperty("UserHash"))
                object.UserHash = options.bytes === String ? $util.base64.encode(message.UserHash, 0, message.UserHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.UserHash) : message.UserHash;
            if (message.IpAddr != null && message.hasOwnProperty("IpAddr"))
                object.IpAddr = options.bytes === String ? $util.base64.encode(message.IpAddr, 0, message.IpAddr.length) : options.bytes === Array ? Array.prototype.slice.call(message.IpAddr) : message.IpAddr;
            if (message.SessionClientId != null && message.hasOwnProperty("SessionClientId"))
                object.SessionClientId = message.SessionClientId;
            if (message.AuthToken != null && message.hasOwnProperty("AuthToken"))
                object.AuthToken = options.bytes === String ? $util.base64.encode(message.AuthToken, 0, message.AuthToken.length) : options.bytes === Array ? Array.prototype.slice.call(message.AuthToken) : message.AuthToken;
            return object;
        };

        /**
         * Converts this CMsgProtoBufHeader to JSON.
         * @function toJSON
         * @memberof proto.CMsgProtoBufHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgProtoBufHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMsgProtoBufHeader;
    })();

    proto.MsgEvent = (function() {

        /**
         * Properties of a MsgEvent.
         * @memberof proto
         * @interface IMsgEvent
         * @property {proto.EMSG|null} [type] MsgEvent type
         * @property {Uint8Array|null} [data] MsgEvent data
         * @property {google.protobuf.ITimestamp|null} [createdAt] MsgEvent createdAt
         */

        /**
         * Constructs a new MsgEvent.
         * @memberof proto
         * @classdesc Represents a MsgEvent.
         * @implements IMsgEvent
         * @constructor
         * @param {proto.IMsgEvent=} [properties] Properties to set
         */
        function MsgEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgEvent type.
         * @member {proto.EMSG} type
         * @memberof proto.MsgEvent
         * @instance
         */
        MsgEvent.prototype.type = 0;

        /**
         * MsgEvent data.
         * @member {Uint8Array} data
         * @memberof proto.MsgEvent
         * @instance
         */
        MsgEvent.prototype.data = $util.newBuffer([]);

        /**
         * MsgEvent createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof proto.MsgEvent
         * @instance
         */
        MsgEvent.prototype.createdAt = null;

        /**
         * Creates a new MsgEvent instance using the specified properties.
         * @function create
         * @memberof proto.MsgEvent
         * @static
         * @param {proto.IMsgEvent=} [properties] Properties to set
         * @returns {proto.MsgEvent} MsgEvent instance
         */
        MsgEvent.create = function create(properties) {
            return new MsgEvent(properties);
        };

        /**
         * Encodes the specified MsgEvent message. Does not implicitly {@link proto.MsgEvent.verify|verify} messages.
         * @function encode
         * @memberof proto.MsgEvent
         * @static
         * @param {proto.IMsgEvent} message MsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgEvent message, length delimited. Does not implicitly {@link proto.MsgEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.MsgEvent
         * @static
         * @param {proto.IMsgEvent} message MsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgEvent message from the specified reader or buffer.
         * @function decode
         * @memberof proto.MsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.MsgEvent} MsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.MsgEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.MsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.MsgEvent} MsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgEvent message.
         * @function verify
         * @memberof proto.MsgEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            return null;
        };

        /**
         * Creates a MsgEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.MsgEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.MsgEvent} MsgEvent
         */
        MsgEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.MsgEvent)
                return object;
            var message = new $root.proto.MsgEvent();
            switch (object.type) {
            case "INVALID":
            case 0:
                message.type = 0;
                break;
            case "PING":
            case 1:
                message.type = 1;
                break;
            case "PONG":
            case 2:
                message.type = 2;
                break;
            case "LOGON":
            case 3:
                message.type = 3;
                break;
            case "LOGOUT":
            case 4:
                message.type = 4;
                break;
            case "PERSONAL_STATE_CHANGED":
            case 5:
                message.type = 5;
                break;
            case "PERSONAL_ACTIVITY_CHANGED":
            case 6:
                message.type = 6;
                break;
            case "AUTHORIZED":
            case 7:
                message.type = 7;
                break;
            case "UNAUTHORIZED":
            case 8:
                message.type = 8;
                break;
            case "CHAT_MESSAGES":
            case 9:
                message.type = 9;
                break;
            case "LOG_MESSAGES":
            case 10:
                message.type = 10;
                break;
            case "NEW_CHAT_MESSAGE":
            case 11:
                message.type = 11;
                break;
            case "NEW_LOG_MESSAGE":
            case 12:
                message.type = 12;
                break;
            case "MEMBER_STATE_CHANGED":
            case 13:
                message.type = 13;
                break;
            case "THEATER_MEMBERS":
            case 14:
                message.type = 14;
                break;
            case "THEATER_PLAY":
            case 15:
                message.type = 15;
                break;
            case "THEATER_PAUSE":
            case 16:
                message.type = 16;
                break;
            case "NEW_NOTIFICATION":
            case 17:
                message.type = 17;
                break;
            case "FRIEND_REQUEST_ACCEPTED":
            case 18:
                message.type = 18;
                break;
            case "SYNC_ME":
            case 19:
                message.type = 19;
                break;
            case "SYNCED":
            case 20:
                message.type = 20;
                break;
            case "BUFFERING":
            case 21:
                message.type = 21;
                break;
            case "BUFFERED":
            case 22:
                message.type = 22;
                break;
            case "WAITING_FOR_CLIENTS":
            case 23:
                message.type = 23;
                break;
            case "CLIENTS_SYNCYED":
            case 24:
                message.type = 24;
                break;
            case "FINISHED_MOVIE":
            case 25:
                message.type = 25;
                break;
            case "PLAYING":
            case 26:
                message.type = 26;
                break;
            case "CLIENT_READY":
            case 27:
                message.type = 27;
                break;
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".proto.MsgEvent.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.MsgEvent
         * @static
         * @param {proto.MsgEvent} message MsgEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "INVALID" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.createdAt = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.proto.EMSG[message.type] : message.type;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            return object;
        };

        /**
         * Converts this MsgEvent to JSON.
         * @function toJSON
         * @memberof proto.MsgEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgEvent;
    })();

    /**
     * PERSONAL_STATE enum.
     * @name proto.PERSONAL_STATE
     * @enum {string}
     * @property {number} OFFLINE=0 OFFLINE value
     * @property {number} ONLINE=1 ONLINE value
     * @property {number} IDLE=2 IDLE value
     * @property {number} BUSY=3 BUSY value
     * @property {number} INVISIBLE=4 INVISIBLE value
     */
    proto.PERSONAL_STATE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OFFLINE"] = 0;
        values[valuesById[1] = "ONLINE"] = 1;
        values[valuesById[2] = "IDLE"] = 2;
        values[valuesById[3] = "BUSY"] = 3;
        values[valuesById[4] = "INVISIBLE"] = 4;
        return values;
    })();

    /**
     * EMSG enum.
     * @name proto.EMSG
     * @enum {string}
     * @property {number} INVALID=0 INVALID value
     * @property {number} PING=1 PING value
     * @property {number} PONG=2 PONG value
     * @property {number} LOGON=3 LOGON value
     * @property {number} LOGOUT=4 LOGOUT value
     * @property {number} PERSONAL_STATE_CHANGED=5 PERSONAL_STATE_CHANGED value
     * @property {number} PERSONAL_ACTIVITY_CHANGED=6 PERSONAL_ACTIVITY_CHANGED value
     * @property {number} AUTHORIZED=7 AUTHORIZED value
     * @property {number} UNAUTHORIZED=8 UNAUTHORIZED value
     * @property {number} CHAT_MESSAGES=9 CHAT_MESSAGES value
     * @property {number} LOG_MESSAGES=10 LOG_MESSAGES value
     * @property {number} NEW_CHAT_MESSAGE=11 NEW_CHAT_MESSAGE value
     * @property {number} NEW_LOG_MESSAGE=12 NEW_LOG_MESSAGE value
     * @property {number} MEMBER_STATE_CHANGED=13 MEMBER_STATE_CHANGED value
     * @property {number} THEATER_MEMBERS=14 THEATER_MEMBERS value
     * @property {number} THEATER_PLAY=15 THEATER_PLAY value
     * @property {number} THEATER_PAUSE=16 THEATER_PAUSE value
     * @property {number} NEW_NOTIFICATION=17 NEW_NOTIFICATION value
     * @property {number} FRIEND_REQUEST_ACCEPTED=18 FRIEND_REQUEST_ACCEPTED value
     * @property {number} SYNC_ME=19 SYNC_ME value
     * @property {number} SYNCED=20 SYNCED value
     * @property {number} BUFFERING=21 BUFFERING value
     * @property {number} BUFFERED=22 BUFFERED value
     * @property {number} WAITING_FOR_CLIENTS=23 WAITING_FOR_CLIENTS value
     * @property {number} CLIENTS_SYNCYED=24 CLIENTS_SYNCYED value
     * @property {number} FINISHED_MOVIE=25 FINISHED_MOVIE value
     * @property {number} PLAYING=26 PLAYING value
     * @property {number} CLIENT_READY=27 CLIENT_READY value
     */
    proto.EMSG = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALID"] = 0;
        values[valuesById[1] = "PING"] = 1;
        values[valuesById[2] = "PONG"] = 2;
        values[valuesById[3] = "LOGON"] = 3;
        values[valuesById[4] = "LOGOUT"] = 4;
        values[valuesById[5] = "PERSONAL_STATE_CHANGED"] = 5;
        values[valuesById[6] = "PERSONAL_ACTIVITY_CHANGED"] = 6;
        values[valuesById[7] = "AUTHORIZED"] = 7;
        values[valuesById[8] = "UNAUTHORIZED"] = 8;
        values[valuesById[9] = "CHAT_MESSAGES"] = 9;
        values[valuesById[10] = "LOG_MESSAGES"] = 10;
        values[valuesById[11] = "NEW_CHAT_MESSAGE"] = 11;
        values[valuesById[12] = "NEW_LOG_MESSAGE"] = 12;
        values[valuesById[13] = "MEMBER_STATE_CHANGED"] = 13;
        values[valuesById[14] = "THEATER_MEMBERS"] = 14;
        values[valuesById[15] = "THEATER_PLAY"] = 15;
        values[valuesById[16] = "THEATER_PAUSE"] = 16;
        values[valuesById[17] = "NEW_NOTIFICATION"] = 17;
        values[valuesById[18] = "FRIEND_REQUEST_ACCEPTED"] = 18;
        values[valuesById[19] = "SYNC_ME"] = 19;
        values[valuesById[20] = "SYNCED"] = 20;
        values[valuesById[21] = "BUFFERING"] = 21;
        values[valuesById[22] = "BUFFERED"] = 22;
        values[valuesById[23] = "WAITING_FOR_CLIENTS"] = 23;
        values[valuesById[24] = "CLIENTS_SYNCYED"] = 24;
        values[valuesById[25] = "FINISHED_MOVIE"] = 25;
        values[valuesById[26] = "PLAYING"] = 26;
        values[valuesById[27] = "CLIENT_READY"] = 27;
        return values;
    })();

    proto.ChatMsgEvent = (function() {

        /**
         * Properties of a ChatMsgEvent.
         * @memberof proto
         * @interface IChatMsgEvent
         * @property {Uint8Array|null} [message] ChatMsgEvent message
         * @property {string|null} [from] ChatMsgEvent from
         * @property {string|null} [to] ChatMsgEvent to
         * @property {proto.IUser|null} [user] ChatMsgEvent user
         * @property {Array.<number|Long>|null} [emojies] ChatMsgEvent emojies
         * @property {Array.<number|Long>|null} [mentions] ChatMsgEvent mentions
         * @property {google.protobuf.ITimestamp|null} [createdAt] ChatMsgEvent createdAt
         */

        /**
         * Constructs a new ChatMsgEvent.
         * @memberof proto
         * @classdesc Represents a ChatMsgEvent.
         * @implements IChatMsgEvent
         * @constructor
         * @param {proto.IChatMsgEvent=} [properties] Properties to set
         */
        function ChatMsgEvent(properties) {
            this.emojies = [];
            this.mentions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatMsgEvent message.
         * @member {Uint8Array} message
         * @memberof proto.ChatMsgEvent
         * @instance
         */
        ChatMsgEvent.prototype.message = $util.newBuffer([]);

        /**
         * ChatMsgEvent from.
         * @member {string} from
         * @memberof proto.ChatMsgEvent
         * @instance
         */
        ChatMsgEvent.prototype.from = "";

        /**
         * ChatMsgEvent to.
         * @member {string} to
         * @memberof proto.ChatMsgEvent
         * @instance
         */
        ChatMsgEvent.prototype.to = "";

        /**
         * ChatMsgEvent user.
         * @member {proto.IUser|null|undefined} user
         * @memberof proto.ChatMsgEvent
         * @instance
         */
        ChatMsgEvent.prototype.user = null;

        /**
         * ChatMsgEvent emojies.
         * @member {Array.<number|Long>} emojies
         * @memberof proto.ChatMsgEvent
         * @instance
         */
        ChatMsgEvent.prototype.emojies = $util.emptyArray;

        /**
         * ChatMsgEvent mentions.
         * @member {Array.<number|Long>} mentions
         * @memberof proto.ChatMsgEvent
         * @instance
         */
        ChatMsgEvent.prototype.mentions = $util.emptyArray;

        /**
         * ChatMsgEvent createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof proto.ChatMsgEvent
         * @instance
         */
        ChatMsgEvent.prototype.createdAt = null;

        /**
         * Creates a new ChatMsgEvent instance using the specified properties.
         * @function create
         * @memberof proto.ChatMsgEvent
         * @static
         * @param {proto.IChatMsgEvent=} [properties] Properties to set
         * @returns {proto.ChatMsgEvent} ChatMsgEvent instance
         */
        ChatMsgEvent.create = function create(properties) {
            return new ChatMsgEvent(properties);
        };

        /**
         * Encodes the specified ChatMsgEvent message. Does not implicitly {@link proto.ChatMsgEvent.verify|verify} messages.
         * @function encode
         * @memberof proto.ChatMsgEvent
         * @static
         * @param {proto.IChatMsgEvent} message ChatMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMsgEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.message);
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.from);
            if (message.to != null && message.hasOwnProperty("to"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.to);
            if (message.user != null && message.hasOwnProperty("user"))
                $root.proto.User.encode(message.user, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.emojies != null && message.emojies.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.emojies.length; ++i)
                    writer.uint64(message.emojies[i]);
                writer.ldelim();
            }
            if (message.mentions != null && message.mentions.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.mentions.length; ++i)
                    writer.uint64(message.mentions[i]);
                writer.ldelim();
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChatMsgEvent message, length delimited. Does not implicitly {@link proto.ChatMsgEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ChatMsgEvent
         * @static
         * @param {proto.IChatMsgEvent} message ChatMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMsgEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatMsgEvent message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ChatMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ChatMsgEvent} ChatMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMsgEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ChatMsgEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.bytes();
                    break;
                case 2:
                    message.from = reader.string();
                    break;
                case 3:
                    message.to = reader.string();
                    break;
                case 4:
                    message.user = $root.proto.User.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.emojies && message.emojies.length))
                        message.emojies = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.emojies.push(reader.uint64());
                    } else
                        message.emojies.push(reader.uint64());
                    break;
                case 6:
                    if (!(message.mentions && message.mentions.length))
                        message.mentions = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mentions.push(reader.uint64());
                    } else
                        message.mentions.push(reader.uint64());
                    break;
                case 7:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatMsgEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ChatMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ChatMsgEvent} ChatMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMsgEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatMsgEvent message.
         * @function verify
         * @memberof proto.ChatMsgEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMsgEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.proto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.emojies != null && message.hasOwnProperty("emojies")) {
                if (!Array.isArray(message.emojies))
                    return "emojies: array expected";
                for (var i = 0; i < message.emojies.length; ++i)
                    if (!$util.isInteger(message.emojies[i]) && !(message.emojies[i] && $util.isInteger(message.emojies[i].low) && $util.isInteger(message.emojies[i].high)))
                        return "emojies: integer|Long[] expected";
            }
            if (message.mentions != null && message.hasOwnProperty("mentions")) {
                if (!Array.isArray(message.mentions))
                    return "mentions: array expected";
                for (var i = 0; i < message.mentions.length; ++i)
                    if (!$util.isInteger(message.mentions[i]) && !(message.mentions[i] && $util.isInteger(message.mentions[i].low) && $util.isInteger(message.mentions[i].high)))
                        return "mentions: integer|Long[] expected";
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            return null;
        };

        /**
         * Creates a ChatMsgEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ChatMsgEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ChatMsgEvent} ChatMsgEvent
         */
        ChatMsgEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ChatMsgEvent)
                return object;
            var message = new $root.proto.ChatMsgEvent();
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            if (object.from != null)
                message.from = String(object.from);
            if (object.to != null)
                message.to = String(object.to);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".proto.ChatMsgEvent.user: object expected");
                message.user = $root.proto.User.fromObject(object.user);
            }
            if (object.emojies) {
                if (!Array.isArray(object.emojies))
                    throw TypeError(".proto.ChatMsgEvent.emojies: array expected");
                message.emojies = [];
                for (var i = 0; i < object.emojies.length; ++i)
                    if ($util.Long)
                        (message.emojies[i] = $util.Long.fromValue(object.emojies[i])).unsigned = true;
                    else if (typeof object.emojies[i] === "string")
                        message.emojies[i] = parseInt(object.emojies[i], 10);
                    else if (typeof object.emojies[i] === "number")
                        message.emojies[i] = object.emojies[i];
                    else if (typeof object.emojies[i] === "object")
                        message.emojies[i] = new $util.LongBits(object.emojies[i].low >>> 0, object.emojies[i].high >>> 0).toNumber(true);
            }
            if (object.mentions) {
                if (!Array.isArray(object.mentions))
                    throw TypeError(".proto.ChatMsgEvent.mentions: array expected");
                message.mentions = [];
                for (var i = 0; i < object.mentions.length; ++i)
                    if ($util.Long)
                        (message.mentions[i] = $util.Long.fromValue(object.mentions[i])).unsigned = true;
                    else if (typeof object.mentions[i] === "string")
                        message.mentions[i] = parseInt(object.mentions[i], 10);
                    else if (typeof object.mentions[i] === "number")
                        message.mentions[i] = object.mentions[i];
                    else if (typeof object.mentions[i] === "object")
                        message.mentions[i] = new $util.LongBits(object.mentions[i].low >>> 0, object.mentions[i].high >>> 0).toNumber(true);
            }
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".proto.ChatMsgEvent.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChatMsgEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ChatMsgEvent
         * @static
         * @param {proto.ChatMsgEvent} message ChatMsgEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMsgEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.emojies = [];
                object.mentions = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
                object.from = "";
                object.to = "";
                object.user = null;
                object.createdAt = null;
            }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.proto.User.toObject(message.user, options);
            if (message.emojies && message.emojies.length) {
                object.emojies = [];
                for (var j = 0; j < message.emojies.length; ++j)
                    if (typeof message.emojies[j] === "number")
                        object.emojies[j] = options.longs === String ? String(message.emojies[j]) : message.emojies[j];
                    else
                        object.emojies[j] = options.longs === String ? $util.Long.prototype.toString.call(message.emojies[j]) : options.longs === Number ? new $util.LongBits(message.emojies[j].low >>> 0, message.emojies[j].high >>> 0).toNumber(true) : message.emojies[j];
            }
            if (message.mentions && message.mentions.length) {
                object.mentions = [];
                for (var j = 0; j < message.mentions.length; ++j)
                    if (typeof message.mentions[j] === "number")
                        object.mentions[j] = options.longs === String ? String(message.mentions[j]) : message.mentions[j];
                    else
                        object.mentions[j] = options.longs === String ? $util.Long.prototype.toString.call(message.mentions[j]) : options.longs === Number ? new $util.LongBits(message.mentions[j].low >>> 0, message.mentions[j].high >>> 0).toNumber(true) : message.mentions[j];
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            return object;
        };

        /**
         * Converts this ChatMsgEvent to JSON.
         * @function toJSON
         * @memberof proto.ChatMsgEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMsgEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChatMsgEvent;
    })();

    proto.Friend = (function() {

        /**
         * Properties of a Friend.
         * @memberof proto
         * @interface IFriend
         * @property {string|null} [id] Friend id
         * @property {string|null} [friendId] Friend friendId
         * @property {string|null} [userId] Friend userId
         * @property {boolean|null} [accepted] Friend accepted
         * @property {google.protobuf.ITimestamp|null} [createdAt] Friend createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] Friend updatedAt
         */

        /**
         * Constructs a new Friend.
         * @memberof proto
         * @classdesc Represents a Friend.
         * @implements IFriend
         * @constructor
         * @param {proto.IFriend=} [properties] Properties to set
         */
        function Friend(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Friend id.
         * @member {string} id
         * @memberof proto.Friend
         * @instance
         */
        Friend.prototype.id = "";

        /**
         * Friend friendId.
         * @member {string} friendId
         * @memberof proto.Friend
         * @instance
         */
        Friend.prototype.friendId = "";

        /**
         * Friend userId.
         * @member {string} userId
         * @memberof proto.Friend
         * @instance
         */
        Friend.prototype.userId = "";

        /**
         * Friend accepted.
         * @member {boolean} accepted
         * @memberof proto.Friend
         * @instance
         */
        Friend.prototype.accepted = false;

        /**
         * Friend createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof proto.Friend
         * @instance
         */
        Friend.prototype.createdAt = null;

        /**
         * Friend updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof proto.Friend
         * @instance
         */
        Friend.prototype.updatedAt = null;

        /**
         * Creates a new Friend instance using the specified properties.
         * @function create
         * @memberof proto.Friend
         * @static
         * @param {proto.IFriend=} [properties] Properties to set
         * @returns {proto.Friend} Friend instance
         */
        Friend.create = function create(properties) {
            return new Friend(properties);
        };

        /**
         * Encodes the specified Friend message. Does not implicitly {@link proto.Friend.verify|verify} messages.
         * @function encode
         * @memberof proto.Friend
         * @static
         * @param {proto.IFriend} message Friend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Friend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.friendId);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            if (message.accepted != null && message.hasOwnProperty("accepted"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.accepted);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Friend message, length delimited. Does not implicitly {@link proto.Friend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Friend
         * @static
         * @param {proto.IFriend} message Friend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Friend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Friend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Friend} Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Friend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Friend();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.friendId = reader.string();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                case 4:
                    message.accepted = reader.bool();
                    break;
                case 5:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Friend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Friend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Friend} Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Friend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Friend message.
         * @function verify
         * @memberof proto.Friend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Friend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (!$util.isString(message.friendId))
                    return "friendId: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.accepted != null && message.hasOwnProperty("accepted"))
                if (typeof message.accepted !== "boolean")
                    return "accepted: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                if (error)
                    return "updatedAt." + error;
            }
            return null;
        };

        /**
         * Creates a Friend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Friend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Friend} Friend
         */
        Friend.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Friend)
                return object;
            var message = new $root.proto.Friend();
            if (object.id != null)
                message.id = String(object.id);
            if (object.friendId != null)
                message.friendId = String(object.friendId);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.accepted != null)
                message.accepted = Boolean(object.accepted);
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".proto.Friend.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.updatedAt != null) {
                if (typeof object.updatedAt !== "object")
                    throw TypeError(".proto.Friend.updatedAt: object expected");
                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a Friend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Friend
         * @static
         * @param {proto.Friend} message Friend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Friend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.friendId = "";
                object.userId = "";
                object.accepted = false;
                object.createdAt = null;
                object.updatedAt = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                object.friendId = message.friendId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.accepted != null && message.hasOwnProperty("accepted"))
                object.accepted = message.accepted;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
            return object;
        };

        /**
         * Converts this Friend to JSON.
         * @function toJSON
         * @memberof proto.Friend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Friend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Friend;
    })();

    proto.Activity = (function() {

        /**
         * Properties of an Activity.
         * @memberof proto
         * @interface IActivity
         * @property {string|null} [id] Activity id
         * @property {string|null} [activity] Activity activity
         */

        /**
         * Constructs a new Activity.
         * @memberof proto
         * @classdesc Represents an Activity.
         * @implements IActivity
         * @constructor
         * @param {proto.IActivity=} [properties] Properties to set
         */
        function Activity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Activity id.
         * @member {string} id
         * @memberof proto.Activity
         * @instance
         */
        Activity.prototype.id = "";

        /**
         * Activity activity.
         * @member {string} activity
         * @memberof proto.Activity
         * @instance
         */
        Activity.prototype.activity = "";

        /**
         * Creates a new Activity instance using the specified properties.
         * @function create
         * @memberof proto.Activity
         * @static
         * @param {proto.IActivity=} [properties] Properties to set
         * @returns {proto.Activity} Activity instance
         */
        Activity.create = function create(properties) {
            return new Activity(properties);
        };

        /**
         * Encodes the specified Activity message. Does not implicitly {@link proto.Activity.verify|verify} messages.
         * @function encode
         * @memberof proto.Activity
         * @static
         * @param {proto.IActivity} message Activity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Activity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.activity != null && message.hasOwnProperty("activity"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.activity);
            return writer;
        };

        /**
         * Encodes the specified Activity message, length delimited. Does not implicitly {@link proto.Activity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Activity
         * @static
         * @param {proto.IActivity} message Activity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Activity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Activity message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Activity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Activity} Activity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Activity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Activity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.activity = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Activity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Activity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Activity} Activity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Activity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Activity message.
         * @function verify
         * @memberof proto.Activity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Activity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.activity != null && message.hasOwnProperty("activity"))
                if (!$util.isString(message.activity))
                    return "activity: string expected";
            return null;
        };

        /**
         * Creates an Activity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Activity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Activity} Activity
         */
        Activity.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Activity)
                return object;
            var message = new $root.proto.Activity();
            if (object.id != null)
                message.id = String(object.id);
            if (object.activity != null)
                message.activity = String(object.activity);
            return message;
        };

        /**
         * Creates a plain object from an Activity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Activity
         * @static
         * @param {proto.Activity} message Activity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Activity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.activity = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.activity != null && message.hasOwnProperty("activity"))
                object.activity = message.activity;
            return object;
        };

        /**
         * Converts this Activity to JSON.
         * @function toJSON
         * @memberof proto.Activity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Activity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Activity;
    })();

    proto.User = (function() {

        /**
         * Properties of a User.
         * @memberof proto
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [fullname] User fullname
         * @property {string|null} [username] User username
         * @property {string|null} [hash] User hash
         * @property {string|null} [email] User email
         * @property {string|null} [password] User password
         * @property {boolean|null} [isActive] User isActive
         * @property {boolean|null} [emailVerified] User emailVerified
         * @property {boolean|null} [isStaff] User isStaff
         * @property {boolean|null} [verified] User verified
         * @property {string|null} [avatar] User avatar
         * @property {proto.IActivity|null} [activity] User activity
         * @property {proto.PERSONAL_STATE|null} [state] User state
         * @property {boolean|null} [twoFaEnabled] User twoFaEnabled
         * @property {string|null} [twoFaToken] User twoFaToken
         * @property {google.protobuf.ITimestamp|null} [lastLogin] User lastLogin
         * @property {google.protobuf.ITimestamp|null} [joinedAt] User joinedAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] User updatedAt
         */

        /**
         * Constructs a new User.
         * @memberof proto
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {proto.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof proto.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User fullname.
         * @member {string} fullname
         * @memberof proto.User
         * @instance
         */
        User.prototype.fullname = "";

        /**
         * User username.
         * @member {string} username
         * @memberof proto.User
         * @instance
         */
        User.prototype.username = "";

        /**
         * User hash.
         * @member {string} hash
         * @memberof proto.User
         * @instance
         */
        User.prototype.hash = "";

        /**
         * User email.
         * @member {string} email
         * @memberof proto.User
         * @instance
         */
        User.prototype.email = "";

        /**
         * User password.
         * @member {string} password
         * @memberof proto.User
         * @instance
         */
        User.prototype.password = "";

        /**
         * User isActive.
         * @member {boolean} isActive
         * @memberof proto.User
         * @instance
         */
        User.prototype.isActive = false;

        /**
         * User emailVerified.
         * @member {boolean} emailVerified
         * @memberof proto.User
         * @instance
         */
        User.prototype.emailVerified = false;

        /**
         * User isStaff.
         * @member {boolean} isStaff
         * @memberof proto.User
         * @instance
         */
        User.prototype.isStaff = false;

        /**
         * User verified.
         * @member {boolean} verified
         * @memberof proto.User
         * @instance
         */
        User.prototype.verified = false;

        /**
         * User avatar.
         * @member {string} avatar
         * @memberof proto.User
         * @instance
         */
        User.prototype.avatar = "";

        /**
         * User activity.
         * @member {proto.IActivity|null|undefined} activity
         * @memberof proto.User
         * @instance
         */
        User.prototype.activity = null;

        /**
         * User state.
         * @member {proto.PERSONAL_STATE} state
         * @memberof proto.User
         * @instance
         */
        User.prototype.state = 0;

        /**
         * User twoFaEnabled.
         * @member {boolean} twoFaEnabled
         * @memberof proto.User
         * @instance
         */
        User.prototype.twoFaEnabled = false;

        /**
         * User twoFaToken.
         * @member {string} twoFaToken
         * @memberof proto.User
         * @instance
         */
        User.prototype.twoFaToken = "";

        /**
         * User lastLogin.
         * @member {google.protobuf.ITimestamp|null|undefined} lastLogin
         * @memberof proto.User
         * @instance
         */
        User.prototype.lastLogin = null;

        /**
         * User joinedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} joinedAt
         * @memberof proto.User
         * @instance
         */
        User.prototype.joinedAt = null;

        /**
         * User updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof proto.User
         * @instance
         */
        User.prototype.updatedAt = null;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof proto.User
         * @static
         * @param {proto.IUser=} [properties] Properties to set
         * @returns {proto.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link proto.User.verify|verify} messages.
         * @function encode
         * @memberof proto.User
         * @static
         * @param {proto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.fullname != null && message.hasOwnProperty("fullname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.fullname);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
            if (message.hash != null && message.hasOwnProperty("hash"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.hash);
            if (message.email != null && message.hasOwnProperty("email"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.password);
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isActive);
            if (message.emailVerified != null && message.hasOwnProperty("emailVerified"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.emailVerified);
            if (message.isStaff != null && message.hasOwnProperty("isStaff"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isStaff);
            if (message.verified != null && message.hasOwnProperty("verified"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.verified);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.avatar);
            if (message.activity != null && message.hasOwnProperty("activity"))
                $root.proto.Activity.encode(message.activity, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.state);
            if (message.twoFaEnabled != null && message.hasOwnProperty("twoFaEnabled"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.twoFaEnabled);
            if (message.twoFaToken != null && message.hasOwnProperty("twoFaToken"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.twoFaToken);
            if (message.lastLogin != null && message.hasOwnProperty("lastLogin"))
                $root.google.protobuf.Timestamp.encode(message.lastLogin, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.joinedAt != null && message.hasOwnProperty("joinedAt"))
                $root.google.protobuf.Timestamp.encode(message.joinedAt, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link proto.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.User
         * @static
         * @param {proto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof proto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.fullname = reader.string();
                    break;
                case 3:
                    message.username = reader.string();
                    break;
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.email = reader.string();
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                case 7:
                    message.isActive = reader.bool();
                    break;
                case 8:
                    message.emailVerified = reader.bool();
                    break;
                case 9:
                    message.isStaff = reader.bool();
                    break;
                case 10:
                    message.verified = reader.bool();
                    break;
                case 11:
                    message.avatar = reader.string();
                    break;
                case 12:
                    message.activity = $root.proto.Activity.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.state = reader.int32();
                    break;
                case 14:
                    message.twoFaEnabled = reader.bool();
                    break;
                case 15:
                    message.twoFaToken = reader.string();
                    break;
                case 16:
                    message.lastLogin = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.joinedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof proto.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.fullname != null && message.hasOwnProperty("fullname"))
                if (!$util.isString(message.fullname))
                    return "fullname: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.hash != null && message.hasOwnProperty("hash"))
                if (!$util.isString(message.hash))
                    return "hash: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            if (message.emailVerified != null && message.hasOwnProperty("emailVerified"))
                if (typeof message.emailVerified !== "boolean")
                    return "emailVerified: boolean expected";
            if (message.isStaff != null && message.hasOwnProperty("isStaff"))
                if (typeof message.isStaff !== "boolean")
                    return "isStaff: boolean expected";
            if (message.verified != null && message.hasOwnProperty("verified"))
                if (typeof message.verified !== "boolean")
                    return "verified: boolean expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.activity != null && message.hasOwnProperty("activity")) {
                var error = $root.proto.Activity.verify(message.activity);
                if (error)
                    return "activity." + error;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.twoFaEnabled != null && message.hasOwnProperty("twoFaEnabled"))
                if (typeof message.twoFaEnabled !== "boolean")
                    return "twoFaEnabled: boolean expected";
            if (message.twoFaToken != null && message.hasOwnProperty("twoFaToken"))
                if (!$util.isString(message.twoFaToken))
                    return "twoFaToken: string expected";
            if (message.lastLogin != null && message.hasOwnProperty("lastLogin")) {
                var error = $root.google.protobuf.Timestamp.verify(message.lastLogin);
                if (error)
                    return "lastLogin." + error;
            }
            if (message.joinedAt != null && message.hasOwnProperty("joinedAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.joinedAt);
                if (error)
                    return "joinedAt." + error;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                if (error)
                    return "updatedAt." + error;
            }
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.User)
                return object;
            var message = new $root.proto.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.fullname != null)
                message.fullname = String(object.fullname);
            if (object.username != null)
                message.username = String(object.username);
            if (object.hash != null)
                message.hash = String(object.hash);
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            if (object.emailVerified != null)
                message.emailVerified = Boolean(object.emailVerified);
            if (object.isStaff != null)
                message.isStaff = Boolean(object.isStaff);
            if (object.verified != null)
                message.verified = Boolean(object.verified);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.activity != null) {
                if (typeof object.activity !== "object")
                    throw TypeError(".proto.User.activity: object expected");
                message.activity = $root.proto.Activity.fromObject(object.activity);
            }
            switch (object.state) {
            case "OFFLINE":
            case 0:
                message.state = 0;
                break;
            case "ONLINE":
            case 1:
                message.state = 1;
                break;
            case "IDLE":
            case 2:
                message.state = 2;
                break;
            case "BUSY":
            case 3:
                message.state = 3;
                break;
            case "INVISIBLE":
            case 4:
                message.state = 4;
                break;
            }
            if (object.twoFaEnabled != null)
                message.twoFaEnabled = Boolean(object.twoFaEnabled);
            if (object.twoFaToken != null)
                message.twoFaToken = String(object.twoFaToken);
            if (object.lastLogin != null) {
                if (typeof object.lastLogin !== "object")
                    throw TypeError(".proto.User.lastLogin: object expected");
                message.lastLogin = $root.google.protobuf.Timestamp.fromObject(object.lastLogin);
            }
            if (object.joinedAt != null) {
                if (typeof object.joinedAt !== "object")
                    throw TypeError(".proto.User.joinedAt: object expected");
                message.joinedAt = $root.google.protobuf.Timestamp.fromObject(object.joinedAt);
            }
            if (object.updatedAt != null) {
                if (typeof object.updatedAt !== "object")
                    throw TypeError(".proto.User.updatedAt: object expected");
                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.User
         * @static
         * @param {proto.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.fullname = "";
                object.username = "";
                object.hash = "";
                object.email = "";
                object.password = "";
                object.isActive = false;
                object.emailVerified = false;
                object.isStaff = false;
                object.verified = false;
                object.avatar = "";
                object.activity = null;
                object.state = options.enums === String ? "OFFLINE" : 0;
                object.twoFaEnabled = false;
                object.twoFaToken = "";
                object.lastLogin = null;
                object.joinedAt = null;
                object.updatedAt = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.fullname != null && message.hasOwnProperty("fullname"))
                object.fullname = message.fullname;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.hash != null && message.hasOwnProperty("hash"))
                object.hash = message.hash;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            if (message.emailVerified != null && message.hasOwnProperty("emailVerified"))
                object.emailVerified = message.emailVerified;
            if (message.isStaff != null && message.hasOwnProperty("isStaff"))
                object.isStaff = message.isStaff;
            if (message.verified != null && message.hasOwnProperty("verified"))
                object.verified = message.verified;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.activity != null && message.hasOwnProperty("activity"))
                object.activity = $root.proto.Activity.toObject(message.activity, options);
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.proto.PERSONAL_STATE[message.state] : message.state;
            if (message.twoFaEnabled != null && message.hasOwnProperty("twoFaEnabled"))
                object.twoFaEnabled = message.twoFaEnabled;
            if (message.twoFaToken != null && message.hasOwnProperty("twoFaToken"))
                object.twoFaToken = message.twoFaToken;
            if (message.lastLogin != null && message.hasOwnProperty("lastLogin"))
                object.lastLogin = $root.google.protobuf.Timestamp.toObject(message.lastLogin, options);
            if (message.joinedAt != null && message.hasOwnProperty("joinedAt"))
                object.joinedAt = $root.google.protobuf.Timestamp.toObject(message.joinedAt, options);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof proto.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    proto.Notification = (function() {

        /**
         * Properties of a Notification.
         * @memberof proto
         * @interface INotification
         * @property {string|null} [id] Notification id
         * @property {proto.Notification.NOTIFICATION_TYPE|null} [type] Notification type
         * @property {string|null} [data] Notification data
         * @property {boolean|null} [read] Notification read
         * @property {string|null} [fromUserId] Notification fromUserId
         * @property {proto.IUser|null} [fromUser] Notification fromUser
         * @property {string|null} [toUserId] Notification toUserId
         * @property {proto.IUser|null} [toUser] Notification toUser
         * @property {google.protobuf.ITimestamp|null} [readAt] Notification readAt
         * @property {google.protobuf.ITimestamp|null} [createdAt] Notification createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] Notification updatedAt
         */

        /**
         * Constructs a new Notification.
         * @memberof proto
         * @classdesc Represents a Notification.
         * @implements INotification
         * @constructor
         * @param {proto.INotification=} [properties] Properties to set
         */
        function Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Notification id.
         * @member {string} id
         * @memberof proto.Notification
         * @instance
         */
        Notification.prototype.id = "";

        /**
         * Notification type.
         * @member {proto.Notification.NOTIFICATION_TYPE} type
         * @memberof proto.Notification
         * @instance
         */
        Notification.prototype.type = 0;

        /**
         * Notification data.
         * @member {string} data
         * @memberof proto.Notification
         * @instance
         */
        Notification.prototype.data = "";

        /**
         * Notification read.
         * @member {boolean} read
         * @memberof proto.Notification
         * @instance
         */
        Notification.prototype.read = false;

        /**
         * Notification fromUserId.
         * @member {string} fromUserId
         * @memberof proto.Notification
         * @instance
         */
        Notification.prototype.fromUserId = "";

        /**
         * Notification fromUser.
         * @member {proto.IUser|null|undefined} fromUser
         * @memberof proto.Notification
         * @instance
         */
        Notification.prototype.fromUser = null;

        /**
         * Notification toUserId.
         * @member {string} toUserId
         * @memberof proto.Notification
         * @instance
         */
        Notification.prototype.toUserId = "";

        /**
         * Notification toUser.
         * @member {proto.IUser|null|undefined} toUser
         * @memberof proto.Notification
         * @instance
         */
        Notification.prototype.toUser = null;

        /**
         * Notification readAt.
         * @member {google.protobuf.ITimestamp|null|undefined} readAt
         * @memberof proto.Notification
         * @instance
         */
        Notification.prototype.readAt = null;

        /**
         * Notification createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof proto.Notification
         * @instance
         */
        Notification.prototype.createdAt = null;

        /**
         * Notification updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof proto.Notification
         * @instance
         */
        Notification.prototype.updatedAt = null;

        /**
         * Creates a new Notification instance using the specified properties.
         * @function create
         * @memberof proto.Notification
         * @static
         * @param {proto.INotification=} [properties] Properties to set
         * @returns {proto.Notification} Notification instance
         */
        Notification.create = function create(properties) {
            return new Notification(properties);
        };

        /**
         * Encodes the specified Notification message. Does not implicitly {@link proto.Notification.verify|verify} messages.
         * @function encode
         * @memberof proto.Notification
         * @static
         * @param {proto.INotification} message Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.data);
            if (message.read != null && message.hasOwnProperty("read"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.read);
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.fromUserId);
            if (message.fromUser != null && message.hasOwnProperty("fromUser"))
                $root.proto.User.encode(message.fromUser, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.toUserId);
            if (message.toUser != null && message.hasOwnProperty("toUser"))
                $root.proto.User.encode(message.toUser, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.readAt != null && message.hasOwnProperty("readAt"))
                $root.google.protobuf.Timestamp.encode(message.readAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Notification message, length delimited. Does not implicitly {@link proto.Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Notification
         * @static
         * @param {proto.INotification} message Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Notification message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Notification} Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.data = reader.string();
                    break;
                case 5:
                    message.read = reader.bool();
                    break;
                case 6:
                    message.fromUserId = reader.string();
                    break;
                case 7:
                    message.fromUser = $root.proto.User.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.toUserId = reader.string();
                    break;
                case 9:
                    message.toUser = $root.proto.User.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.readAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Notification} Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Notification message.
         * @function verify
         * @memberof proto.Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            if (message.read != null && message.hasOwnProperty("read"))
                if (typeof message.read !== "boolean")
                    return "read: boolean expected";
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                if (!$util.isString(message.fromUserId))
                    return "fromUserId: string expected";
            if (message.fromUser != null && message.hasOwnProperty("fromUser")) {
                var error = $root.proto.User.verify(message.fromUser);
                if (error)
                    return "fromUser." + error;
            }
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                if (!$util.isString(message.toUserId))
                    return "toUserId: string expected";
            if (message.toUser != null && message.hasOwnProperty("toUser")) {
                var error = $root.proto.User.verify(message.toUser);
                if (error)
                    return "toUser." + error;
            }
            if (message.readAt != null && message.hasOwnProperty("readAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.readAt);
                if (error)
                    return "readAt." + error;
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                if (error)
                    return "updatedAt." + error;
            }
            return null;
        };

        /**
         * Creates a Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Notification} Notification
         */
        Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Notification)
                return object;
            var message = new $root.proto.Notification();
            if (object.id != null)
                message.id = String(object.id);
            switch (object.type) {
            case "INVALID":
            case 0:
                message.type = 0;
                break;
            case "NEW_FRIEND":
            case 1:
                message.type = 1;
                break;
            case "NEW_THEATER_INVITE":
            case 2:
                message.type = 2;
                break;
            case "SYSTEM_NOTIFY":
            case 3:
                message.type = 3;
                break;
            }
            if (object.data != null)
                message.data = String(object.data);
            if (object.read != null)
                message.read = Boolean(object.read);
            if (object.fromUserId != null)
                message.fromUserId = String(object.fromUserId);
            if (object.fromUser != null) {
                if (typeof object.fromUser !== "object")
                    throw TypeError(".proto.Notification.fromUser: object expected");
                message.fromUser = $root.proto.User.fromObject(object.fromUser);
            }
            if (object.toUserId != null)
                message.toUserId = String(object.toUserId);
            if (object.toUser != null) {
                if (typeof object.toUser !== "object")
                    throw TypeError(".proto.Notification.toUser: object expected");
                message.toUser = $root.proto.User.fromObject(object.toUser);
            }
            if (object.readAt != null) {
                if (typeof object.readAt !== "object")
                    throw TypeError(".proto.Notification.readAt: object expected");
                message.readAt = $root.google.protobuf.Timestamp.fromObject(object.readAt);
            }
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".proto.Notification.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.updatedAt != null) {
                if (typeof object.updatedAt !== "object")
                    throw TypeError(".proto.Notification.updatedAt: object expected");
                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Notification
         * @static
         * @param {proto.Notification} message Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.type = options.enums === String ? "INVALID" : 0;
                object.data = "";
                object.read = false;
                object.fromUserId = "";
                object.fromUser = null;
                object.toUserId = "";
                object.toUser = null;
                object.readAt = null;
                object.createdAt = null;
                object.updatedAt = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.proto.Notification.NOTIFICATION_TYPE[message.type] : message.type;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            if (message.read != null && message.hasOwnProperty("read"))
                object.read = message.read;
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                object.fromUserId = message.fromUserId;
            if (message.fromUser != null && message.hasOwnProperty("fromUser"))
                object.fromUser = $root.proto.User.toObject(message.fromUser, options);
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                object.toUserId = message.toUserId;
            if (message.toUser != null && message.hasOwnProperty("toUser"))
                object.toUser = $root.proto.User.toObject(message.toUser, options);
            if (message.readAt != null && message.hasOwnProperty("readAt"))
                object.readAt = $root.google.protobuf.Timestamp.toObject(message.readAt, options);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
            return object;
        };

        /**
         * Converts this Notification to JSON.
         * @function toJSON
         * @memberof proto.Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * NOTIFICATION_TYPE enum.
         * @name proto.Notification.NOTIFICATION_TYPE
         * @enum {string}
         * @property {number} INVALID=0 INVALID value
         * @property {number} NEW_FRIEND=1 NEW_FRIEND value
         * @property {number} NEW_THEATER_INVITE=2 NEW_THEATER_INVITE value
         * @property {number} SYSTEM_NOTIFY=3 SYSTEM_NOTIFY value
         */
        Notification.NOTIFICATION_TYPE = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "NEW_FRIEND"] = 1;
            values[valuesById[2] = "NEW_THEATER_INVITE"] = 2;
            values[valuesById[3] = "SYSTEM_NOTIFY"] = 3;
            return values;
        })();

        return Notification;
    })();

    proto.RollbackStatesRequest = (function() {

        /**
         * Properties of a RollbackStatesRequest.
         * @memberof proto
         * @interface IRollbackStatesRequest
         * @property {Array.<string>|null} [usersIds] RollbackStatesRequest usersIds
         */

        /**
         * Constructs a new RollbackStatesRequest.
         * @memberof proto
         * @classdesc Represents a RollbackStatesRequest.
         * @implements IRollbackStatesRequest
         * @constructor
         * @param {proto.IRollbackStatesRequest=} [properties] Properties to set
         */
        function RollbackStatesRequest(properties) {
            this.usersIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RollbackStatesRequest usersIds.
         * @member {Array.<string>} usersIds
         * @memberof proto.RollbackStatesRequest
         * @instance
         */
        RollbackStatesRequest.prototype.usersIds = $util.emptyArray;

        /**
         * Creates a new RollbackStatesRequest instance using the specified properties.
         * @function create
         * @memberof proto.RollbackStatesRequest
         * @static
         * @param {proto.IRollbackStatesRequest=} [properties] Properties to set
         * @returns {proto.RollbackStatesRequest} RollbackStatesRequest instance
         */
        RollbackStatesRequest.create = function create(properties) {
            return new RollbackStatesRequest(properties);
        };

        /**
         * Encodes the specified RollbackStatesRequest message. Does not implicitly {@link proto.RollbackStatesRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.RollbackStatesRequest
         * @static
         * @param {proto.IRollbackStatesRequest} message RollbackStatesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RollbackStatesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.usersIds != null && message.usersIds.length)
                for (var i = 0; i < message.usersIds.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.usersIds[i]);
            return writer;
        };

        /**
         * Encodes the specified RollbackStatesRequest message, length delimited. Does not implicitly {@link proto.RollbackStatesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RollbackStatesRequest
         * @static
         * @param {proto.IRollbackStatesRequest} message RollbackStatesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RollbackStatesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RollbackStatesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RollbackStatesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RollbackStatesRequest} RollbackStatesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RollbackStatesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RollbackStatesRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.usersIds && message.usersIds.length))
                        message.usersIds = [];
                    message.usersIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RollbackStatesRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RollbackStatesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RollbackStatesRequest} RollbackStatesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RollbackStatesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RollbackStatesRequest message.
         * @function verify
         * @memberof proto.RollbackStatesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RollbackStatesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.usersIds != null && message.hasOwnProperty("usersIds")) {
                if (!Array.isArray(message.usersIds))
                    return "usersIds: array expected";
                for (var i = 0; i < message.usersIds.length; ++i)
                    if (!$util.isString(message.usersIds[i]))
                        return "usersIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RollbackStatesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RollbackStatesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RollbackStatesRequest} RollbackStatesRequest
         */
        RollbackStatesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RollbackStatesRequest)
                return object;
            var message = new $root.proto.RollbackStatesRequest();
            if (object.usersIds) {
                if (!Array.isArray(object.usersIds))
                    throw TypeError(".proto.RollbackStatesRequest.usersIds: array expected");
                message.usersIds = [];
                for (var i = 0; i < object.usersIds.length; ++i)
                    message.usersIds[i] = String(object.usersIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RollbackStatesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RollbackStatesRequest
         * @static
         * @param {proto.RollbackStatesRequest} message RollbackStatesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RollbackStatesRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.usersIds = [];
            if (message.usersIds && message.usersIds.length) {
                object.usersIds = [];
                for (var j = 0; j < message.usersIds.length; ++j)
                    object.usersIds[j] = message.usersIds[j];
            }
            return object;
        };

        /**
         * Converts this RollbackStatesRequest to JSON.
         * @function toJSON
         * @memberof proto.RollbackStatesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RollbackStatesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RollbackStatesRequest;
    })();

    proto.UpdateStateRequest = (function() {

        /**
         * Properties of an UpdateStateRequest.
         * @memberof proto
         * @interface IUpdateStateRequest
         * @property {proto.PERSONAL_STATE|null} [state] UpdateStateRequest state
         * @property {proto.IAuthenticateRequest|null} [authRequest] UpdateStateRequest authRequest
         */

        /**
         * Constructs a new UpdateStateRequest.
         * @memberof proto
         * @classdesc Represents an UpdateStateRequest.
         * @implements IUpdateStateRequest
         * @constructor
         * @param {proto.IUpdateStateRequest=} [properties] Properties to set
         */
        function UpdateStateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateStateRequest state.
         * @member {proto.PERSONAL_STATE} state
         * @memberof proto.UpdateStateRequest
         * @instance
         */
        UpdateStateRequest.prototype.state = 0;

        /**
         * UpdateStateRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.UpdateStateRequest
         * @instance
         */
        UpdateStateRequest.prototype.authRequest = null;

        /**
         * Creates a new UpdateStateRequest instance using the specified properties.
         * @function create
         * @memberof proto.UpdateStateRequest
         * @static
         * @param {proto.IUpdateStateRequest=} [properties] Properties to set
         * @returns {proto.UpdateStateRequest} UpdateStateRequest instance
         */
        UpdateStateRequest.create = function create(properties) {
            return new UpdateStateRequest(properties);
        };

        /**
         * Encodes the specified UpdateStateRequest message. Does not implicitly {@link proto.UpdateStateRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.UpdateStateRequest
         * @static
         * @param {proto.IUpdateStateRequest} message UpdateStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateStateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateStateRequest message, length delimited. Does not implicitly {@link proto.UpdateStateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UpdateStateRequest
         * @static
         * @param {proto.IUpdateStateRequest} message UpdateStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateStateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UpdateStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UpdateStateRequest} UpdateStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateStateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UpdateStateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateStateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.UpdateStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UpdateStateRequest} UpdateStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateStateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateStateRequest message.
         * @function verify
         * @memberof proto.UpdateStateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateStateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateStateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.UpdateStateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UpdateStateRequest} UpdateStateRequest
         */
        UpdateStateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UpdateStateRequest)
                return object;
            var message = new $root.proto.UpdateStateRequest();
            switch (object.state) {
            case "OFFLINE":
            case 0:
                message.state = 0;
                break;
            case "ONLINE":
            case 1:
                message.state = 1;
                break;
            case "IDLE":
            case 2:
                message.state = 2;
                break;
            case "BUSY":
            case 3:
                message.state = 3;
                break;
            case "INVISIBLE":
            case 4:
                message.state = 4;
                break;
            }
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.UpdateStateRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateStateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UpdateStateRequest
         * @static
         * @param {proto.UpdateStateRequest} message UpdateStateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateStateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.state = options.enums === String ? "OFFLINE" : 0;
                object.authRequest = null;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.proto.PERSONAL_STATE[message.state] : message.state;
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            return object;
        };

        /**
         * Converts this UpdateStateRequest to JSON.
         * @function toJSON
         * @memberof proto.UpdateStateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateStateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateStateRequest;
    })();

    proto.UpdateActivityRequest = (function() {

        /**
         * Properties of an UpdateActivityRequest.
         * @memberof proto
         * @interface IUpdateActivityRequest
         * @property {proto.IActivity|null} [activity] UpdateActivityRequest activity
         * @property {proto.IAuthenticateRequest|null} [authRequest] UpdateActivityRequest authRequest
         */

        /**
         * Constructs a new UpdateActivityRequest.
         * @memberof proto
         * @classdesc Represents an UpdateActivityRequest.
         * @implements IUpdateActivityRequest
         * @constructor
         * @param {proto.IUpdateActivityRequest=} [properties] Properties to set
         */
        function UpdateActivityRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateActivityRequest activity.
         * @member {proto.IActivity|null|undefined} activity
         * @memberof proto.UpdateActivityRequest
         * @instance
         */
        UpdateActivityRequest.prototype.activity = null;

        /**
         * UpdateActivityRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.UpdateActivityRequest
         * @instance
         */
        UpdateActivityRequest.prototype.authRequest = null;

        /**
         * Creates a new UpdateActivityRequest instance using the specified properties.
         * @function create
         * @memberof proto.UpdateActivityRequest
         * @static
         * @param {proto.IUpdateActivityRequest=} [properties] Properties to set
         * @returns {proto.UpdateActivityRequest} UpdateActivityRequest instance
         */
        UpdateActivityRequest.create = function create(properties) {
            return new UpdateActivityRequest(properties);
        };

        /**
         * Encodes the specified UpdateActivityRequest message. Does not implicitly {@link proto.UpdateActivityRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.UpdateActivityRequest
         * @static
         * @param {proto.IUpdateActivityRequest} message UpdateActivityRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateActivityRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.activity != null && message.hasOwnProperty("activity"))
                $root.proto.Activity.encode(message.activity, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateActivityRequest message, length delimited. Does not implicitly {@link proto.UpdateActivityRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UpdateActivityRequest
         * @static
         * @param {proto.IUpdateActivityRequest} message UpdateActivityRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateActivityRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateActivityRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UpdateActivityRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UpdateActivityRequest} UpdateActivityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateActivityRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UpdateActivityRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.activity = $root.proto.Activity.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateActivityRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.UpdateActivityRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UpdateActivityRequest} UpdateActivityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateActivityRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateActivityRequest message.
         * @function verify
         * @memberof proto.UpdateActivityRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateActivityRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.activity != null && message.hasOwnProperty("activity")) {
                var error = $root.proto.Activity.verify(message.activity);
                if (error)
                    return "activity." + error;
            }
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateActivityRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.UpdateActivityRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UpdateActivityRequest} UpdateActivityRequest
         */
        UpdateActivityRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UpdateActivityRequest)
                return object;
            var message = new $root.proto.UpdateActivityRequest();
            if (object.activity != null) {
                if (typeof object.activity !== "object")
                    throw TypeError(".proto.UpdateActivityRequest.activity: object expected");
                message.activity = $root.proto.Activity.fromObject(object.activity);
            }
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.UpdateActivityRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateActivityRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UpdateActivityRequest
         * @static
         * @param {proto.UpdateActivityRequest} message UpdateActivityRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateActivityRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.activity = null;
                object.authRequest = null;
            }
            if (message.activity != null && message.hasOwnProperty("activity"))
                object.activity = $root.proto.Activity.toObject(message.activity, options);
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            return object;
        };

        /**
         * Converts this UpdateActivityRequest to JSON.
         * @function toJSON
         * @memberof proto.UpdateActivityRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateActivityRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateActivityRequest;
    })();

    proto.FriendRequest = (function() {

        /**
         * Properties of a FriendRequest.
         * @memberof proto
         * @interface IFriendRequest
         * @property {string|null} [requestId] FriendRequest requestId
         * @property {string|null} [friendId] FriendRequest friendId
         * @property {proto.IAuthenticateRequest|null} [authRequest] FriendRequest authRequest
         */

        /**
         * Constructs a new FriendRequest.
         * @memberof proto
         * @classdesc Represents a FriendRequest.
         * @implements IFriendRequest
         * @constructor
         * @param {proto.IFriendRequest=} [properties] Properties to set
         */
        function FriendRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendRequest requestId.
         * @member {string} requestId
         * @memberof proto.FriendRequest
         * @instance
         */
        FriendRequest.prototype.requestId = "";

        /**
         * FriendRequest friendId.
         * @member {string} friendId
         * @memberof proto.FriendRequest
         * @instance
         */
        FriendRequest.prototype.friendId = "";

        /**
         * FriendRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.FriendRequest
         * @instance
         */
        FriendRequest.prototype.authRequest = null;

        /**
         * Creates a new FriendRequest instance using the specified properties.
         * @function create
         * @memberof proto.FriendRequest
         * @static
         * @param {proto.IFriendRequest=} [properties] Properties to set
         * @returns {proto.FriendRequest} FriendRequest instance
         */
        FriendRequest.create = function create(properties) {
            return new FriendRequest(properties);
        };

        /**
         * Encodes the specified FriendRequest message. Does not implicitly {@link proto.FriendRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.FriendRequest
         * @static
         * @param {proto.IFriendRequest} message FriendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.friendId);
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FriendRequest message, length delimited. Does not implicitly {@link proto.FriendRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.FriendRequest
         * @static
         * @param {proto.IFriendRequest} message FriendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.FriendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.FriendRequest} FriendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FriendRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.string();
                    break;
                case 2:
                    message.friendId = reader.string();
                    break;
                case 3:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.FriendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.FriendRequest} FriendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendRequest message.
         * @function verify
         * @memberof proto.FriendRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isString(message.requestId))
                    return "requestId: string expected";
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (!$util.isString(message.friendId))
                    return "friendId: string expected";
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            return null;
        };

        /**
         * Creates a FriendRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.FriendRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.FriendRequest} FriendRequest
         */
        FriendRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.FriendRequest)
                return object;
            var message = new $root.proto.FriendRequest();
            if (object.requestId != null)
                message.requestId = String(object.requestId);
            if (object.friendId != null)
                message.friendId = String(object.friendId);
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.FriendRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.FriendRequest
         * @static
         * @param {proto.FriendRequest} message FriendRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.requestId = "";
                object.friendId = "";
                object.authRequest = null;
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                object.friendId = message.friendId;
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            return object;
        };

        /**
         * Converts this FriendRequest to JSON.
         * @function toJSON
         * @memberof proto.FriendRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendRequest;
    })();

    proto.CreateUserRequest = (function() {

        /**
         * Properties of a CreateUserRequest.
         * @memberof proto
         * @interface ICreateUserRequest
         * @property {proto.IUser|null} [user] CreateUserRequest user
         */

        /**
         * Constructs a new CreateUserRequest.
         * @memberof proto
         * @classdesc Represents a CreateUserRequest.
         * @implements ICreateUserRequest
         * @constructor
         * @param {proto.ICreateUserRequest=} [properties] Properties to set
         */
        function CreateUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserRequest user.
         * @member {proto.IUser|null|undefined} user
         * @memberof proto.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.user = null;

        /**
         * Creates a new CreateUserRequest instance using the specified properties.
         * @function create
         * @memberof proto.CreateUserRequest
         * @static
         * @param {proto.ICreateUserRequest=} [properties] Properties to set
         * @returns {proto.CreateUserRequest} CreateUserRequest instance
         */
        CreateUserRequest.create = function create(properties) {
            return new CreateUserRequest(properties);
        };

        /**
         * Encodes the specified CreateUserRequest message. Does not implicitly {@link proto.CreateUserRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.CreateUserRequest
         * @static
         * @param {proto.ICreateUserRequest} message CreateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link proto.CreateUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CreateUserRequest
         * @static
         * @param {proto.ICreateUserRequest} message CreateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CreateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CreateUserRequest} CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CreateUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.proto.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.CreateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CreateUserRequest} CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserRequest message.
         * @function verify
         * @memberof proto.CreateUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.proto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.CreateUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CreateUserRequest} CreateUserRequest
         */
        CreateUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CreateUserRequest)
                return object;
            var message = new $root.proto.CreateUserRequest();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".proto.CreateUserRequest.user: object expected");
                message.user = $root.proto.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.CreateUserRequest
         * @static
         * @param {proto.CreateUserRequest} message CreateUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.proto.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this CreateUserRequest to JSON.
         * @function toJSON
         * @memberof proto.CreateUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserRequest;
    })();

    proto.GetFriendRequest = (function() {

        /**
         * Properties of a GetFriendRequest.
         * @memberof proto
         * @interface IGetFriendRequest
         * @property {proto.IUser|null} [user] GetFriendRequest user
         */

        /**
         * Constructs a new GetFriendRequest.
         * @memberof proto
         * @classdesc Represents a GetFriendRequest.
         * @implements IGetFriendRequest
         * @constructor
         * @param {proto.IGetFriendRequest=} [properties] Properties to set
         */
        function GetFriendRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFriendRequest user.
         * @member {proto.IUser|null|undefined} user
         * @memberof proto.GetFriendRequest
         * @instance
         */
        GetFriendRequest.prototype.user = null;

        /**
         * Creates a new GetFriendRequest instance using the specified properties.
         * @function create
         * @memberof proto.GetFriendRequest
         * @static
         * @param {proto.IGetFriendRequest=} [properties] Properties to set
         * @returns {proto.GetFriendRequest} GetFriendRequest instance
         */
        GetFriendRequest.create = function create(properties) {
            return new GetFriendRequest(properties);
        };

        /**
         * Encodes the specified GetFriendRequest message. Does not implicitly {@link proto.GetFriendRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.GetFriendRequest
         * @static
         * @param {proto.IGetFriendRequest} message GetFriendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFriendRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetFriendRequest message, length delimited. Does not implicitly {@link proto.GetFriendRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.GetFriendRequest
         * @static
         * @param {proto.IGetFriendRequest} message GetFriendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFriendRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFriendRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.GetFriendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.GetFriendRequest} GetFriendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFriendRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.GetFriendRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.proto.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetFriendRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.GetFriendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.GetFriendRequest} GetFriendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFriendRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFriendRequest message.
         * @function verify
         * @memberof proto.GetFriendRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFriendRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.proto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a GetFriendRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.GetFriendRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.GetFriendRequest} GetFriendRequest
         */
        GetFriendRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.GetFriendRequest)
                return object;
            var message = new $root.proto.GetFriendRequest();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".proto.GetFriendRequest.user: object expected");
                message.user = $root.proto.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetFriendRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.GetFriendRequest
         * @static
         * @param {proto.GetFriendRequest} message GetFriendRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetFriendRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.proto.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this GetFriendRequest to JSON.
         * @function toJSON
         * @memberof proto.GetFriendRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetFriendRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetFriendRequest;
    })();

    proto.GetUserResponse = (function() {

        /**
         * Properties of a GetUserResponse.
         * @memberof proto
         * @interface IGetUserResponse
         * @property {number|Long|null} [code] GetUserResponse code
         * @property {string|null} [status] GetUserResponse status
         * @property {string|null} [message] GetUserResponse message
         * @property {proto.IUser|null} [result] GetUserResponse result
         */

        /**
         * Constructs a new GetUserResponse.
         * @memberof proto
         * @classdesc Represents a GetUserResponse.
         * @implements IGetUserResponse
         * @constructor
         * @param {proto.IGetUserResponse=} [properties] Properties to set
         */
        function GetUserResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserResponse code.
         * @member {number|Long} code
         * @memberof proto.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetUserResponse status.
         * @member {string} status
         * @memberof proto.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.status = "";

        /**
         * GetUserResponse message.
         * @member {string} message
         * @memberof proto.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.message = "";

        /**
         * GetUserResponse result.
         * @member {proto.IUser|null|undefined} result
         * @memberof proto.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.result = null;

        /**
         * Creates a new GetUserResponse instance using the specified properties.
         * @function create
         * @memberof proto.GetUserResponse
         * @static
         * @param {proto.IGetUserResponse=} [properties] Properties to set
         * @returns {proto.GetUserResponse} GetUserResponse instance
         */
        GetUserResponse.create = function create(properties) {
            return new GetUserResponse(properties);
        };

        /**
         * Encodes the specified GetUserResponse message. Does not implicitly {@link proto.GetUserResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.GetUserResponse
         * @static
         * @param {proto.IGetUserResponse} message GetUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.result != null && message.hasOwnProperty("result"))
                $root.proto.User.encode(message.result, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUserResponse message, length delimited. Does not implicitly {@link proto.GetUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.GetUserResponse
         * @static
         * @param {proto.IGetUserResponse} message GetUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.GetUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.GetUserResponse} GetUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.GetUserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    message.result = $root.proto.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.GetUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.GetUserResponse} GetUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserResponse message.
         * @function verify
         * @memberof proto.GetUserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.proto.User.verify(message.result);
                if (error)
                    return "result." + error;
            }
            return null;
        };

        /**
         * Creates a GetUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.GetUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.GetUserResponse} GetUserResponse
         */
        GetUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.GetUserResponse)
                return object;
            var message = new $root.proto.GetUserResponse();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.message != null)
                message.message = String(object.message);
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".proto.GetUserResponse.result: object expected");
                message.result = $root.proto.User.fromObject(object.result);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.GetUserResponse
         * @static
         * @param {proto.GetUserResponse} message GetUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                object.message = "";
                object.result = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.proto.User.toObject(message.result, options);
            return object;
        };

        /**
         * Converts this GetUserResponse to JSON.
         * @function toJSON
         * @memberof proto.GetUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserResponse;
    })();

    proto.FriendsResponse = (function() {

        /**
         * Properties of a FriendsResponse.
         * @memberof proto
         * @interface IFriendsResponse
         * @property {number|Long|null} [code] FriendsResponse code
         * @property {string|null} [status] FriendsResponse status
         * @property {string|null} [message] FriendsResponse message
         * @property {Array.<proto.IUser>|null} [result] FriendsResponse result
         */

        /**
         * Constructs a new FriendsResponse.
         * @memberof proto
         * @classdesc Represents a FriendsResponse.
         * @implements IFriendsResponse
         * @constructor
         * @param {proto.IFriendsResponse=} [properties] Properties to set
         */
        function FriendsResponse(properties) {
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendsResponse code.
         * @member {number|Long} code
         * @memberof proto.FriendsResponse
         * @instance
         */
        FriendsResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FriendsResponse status.
         * @member {string} status
         * @memberof proto.FriendsResponse
         * @instance
         */
        FriendsResponse.prototype.status = "";

        /**
         * FriendsResponse message.
         * @member {string} message
         * @memberof proto.FriendsResponse
         * @instance
         */
        FriendsResponse.prototype.message = "";

        /**
         * FriendsResponse result.
         * @member {Array.<proto.IUser>} result
         * @memberof proto.FriendsResponse
         * @instance
         */
        FriendsResponse.prototype.result = $util.emptyArray;

        /**
         * Creates a new FriendsResponse instance using the specified properties.
         * @function create
         * @memberof proto.FriendsResponse
         * @static
         * @param {proto.IFriendsResponse=} [properties] Properties to set
         * @returns {proto.FriendsResponse} FriendsResponse instance
         */
        FriendsResponse.create = function create(properties) {
            return new FriendsResponse(properties);
        };

        /**
         * Encodes the specified FriendsResponse message. Does not implicitly {@link proto.FriendsResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.FriendsResponse
         * @static
         * @param {proto.IFriendsResponse} message FriendsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.result != null && message.result.length)
                for (var i = 0; i < message.result.length; ++i)
                    $root.proto.User.encode(message.result[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FriendsResponse message, length delimited. Does not implicitly {@link proto.FriendsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.FriendsResponse
         * @static
         * @param {proto.IFriendsResponse} message FriendsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.FriendsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.FriendsResponse} FriendsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FriendsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    if (!(message.result && message.result.length))
                        message.result = [];
                    message.result.push($root.proto.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.FriendsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.FriendsResponse} FriendsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendsResponse message.
         * @function verify
         * @memberof proto.FriendsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                if (!Array.isArray(message.result))
                    return "result: array expected";
                for (var i = 0; i < message.result.length; ++i) {
                    var error = $root.proto.User.verify(message.result[i]);
                    if (error)
                        return "result." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FriendsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.FriendsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.FriendsResponse} FriendsResponse
         */
        FriendsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.FriendsResponse)
                return object;
            var message = new $root.proto.FriendsResponse();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.message != null)
                message.message = String(object.message);
            if (object.result) {
                if (!Array.isArray(object.result))
                    throw TypeError(".proto.FriendsResponse.result: array expected");
                message.result = [];
                for (var i = 0; i < object.result.length; ++i) {
                    if (typeof object.result[i] !== "object")
                        throw TypeError(".proto.FriendsResponse.result: object expected");
                    message.result[i] = $root.proto.User.fromObject(object.result[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.FriendsResponse
         * @static
         * @param {proto.FriendsResponse} message FriendsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.result = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.result && message.result.length) {
                object.result = [];
                for (var j = 0; j < message.result.length; ++j)
                    object.result[j] = $root.proto.User.toObject(message.result[j], options);
            }
            return object;
        };

        /**
         * Converts this FriendsResponse to JSON.
         * @function toJSON
         * @memberof proto.FriendsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendsResponse;
    })();

    proto.FriendResponse = (function() {

        /**
         * Properties of a FriendResponse.
         * @memberof proto
         * @interface IFriendResponse
         * @property {number|Long|null} [code] FriendResponse code
         * @property {string|null} [status] FriendResponse status
         * @property {string|null} [message] FriendResponse message
         * @property {proto.IUser|null} [result] FriendResponse result
         */

        /**
         * Constructs a new FriendResponse.
         * @memberof proto
         * @classdesc Represents a FriendResponse.
         * @implements IFriendResponse
         * @constructor
         * @param {proto.IFriendResponse=} [properties] Properties to set
         */
        function FriendResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendResponse code.
         * @member {number|Long} code
         * @memberof proto.FriendResponse
         * @instance
         */
        FriendResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FriendResponse status.
         * @member {string} status
         * @memberof proto.FriendResponse
         * @instance
         */
        FriendResponse.prototype.status = "";

        /**
         * FriendResponse message.
         * @member {string} message
         * @memberof proto.FriendResponse
         * @instance
         */
        FriendResponse.prototype.message = "";

        /**
         * FriendResponse result.
         * @member {proto.IUser|null|undefined} result
         * @memberof proto.FriendResponse
         * @instance
         */
        FriendResponse.prototype.result = null;

        /**
         * Creates a new FriendResponse instance using the specified properties.
         * @function create
         * @memberof proto.FriendResponse
         * @static
         * @param {proto.IFriendResponse=} [properties] Properties to set
         * @returns {proto.FriendResponse} FriendResponse instance
         */
        FriendResponse.create = function create(properties) {
            return new FriendResponse(properties);
        };

        /**
         * Encodes the specified FriendResponse message. Does not implicitly {@link proto.FriendResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.FriendResponse
         * @static
         * @param {proto.IFriendResponse} message FriendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.result != null && message.hasOwnProperty("result"))
                $root.proto.User.encode(message.result, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FriendResponse message, length delimited. Does not implicitly {@link proto.FriendResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.FriendResponse
         * @static
         * @param {proto.IFriendResponse} message FriendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.FriendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.FriendResponse} FriendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FriendResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    message.result = $root.proto.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.FriendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.FriendResponse} FriendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendResponse message.
         * @function verify
         * @memberof proto.FriendResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.proto.User.verify(message.result);
                if (error)
                    return "result." + error;
            }
            return null;
        };

        /**
         * Creates a FriendResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.FriendResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.FriendResponse} FriendResponse
         */
        FriendResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.FriendResponse)
                return object;
            var message = new $root.proto.FriendResponse();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.message != null)
                message.message = String(object.message);
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".proto.FriendResponse.result: object expected");
                message.result = $root.proto.User.fromObject(object.result);
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.FriendResponse
         * @static
         * @param {proto.FriendResponse} message FriendResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                object.message = "";
                object.result = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.proto.User.toObject(message.result, options);
            return object;
        };

        /**
         * Converts this FriendResponse to JSON.
         * @function toJSON
         * @memberof proto.FriendResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendResponse;
    })();

    proto.CreateNotificationRequest = (function() {

        /**
         * Properties of a CreateNotificationRequest.
         * @memberof proto
         * @interface ICreateNotificationRequest
         * @property {proto.INotification|null} [notification] CreateNotificationRequest notification
         * @property {proto.IAuthenticateRequest|null} [authRequest] CreateNotificationRequest authRequest
         */

        /**
         * Constructs a new CreateNotificationRequest.
         * @memberof proto
         * @classdesc Represents a CreateNotificationRequest.
         * @implements ICreateNotificationRequest
         * @constructor
         * @param {proto.ICreateNotificationRequest=} [properties] Properties to set
         */
        function CreateNotificationRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateNotificationRequest notification.
         * @member {proto.INotification|null|undefined} notification
         * @memberof proto.CreateNotificationRequest
         * @instance
         */
        CreateNotificationRequest.prototype.notification = null;

        /**
         * CreateNotificationRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.CreateNotificationRequest
         * @instance
         */
        CreateNotificationRequest.prototype.authRequest = null;

        /**
         * Creates a new CreateNotificationRequest instance using the specified properties.
         * @function create
         * @memberof proto.CreateNotificationRequest
         * @static
         * @param {proto.ICreateNotificationRequest=} [properties] Properties to set
         * @returns {proto.CreateNotificationRequest} CreateNotificationRequest instance
         */
        CreateNotificationRequest.create = function create(properties) {
            return new CreateNotificationRequest(properties);
        };

        /**
         * Encodes the specified CreateNotificationRequest message. Does not implicitly {@link proto.CreateNotificationRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.CreateNotificationRequest
         * @static
         * @param {proto.ICreateNotificationRequest} message CreateNotificationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateNotificationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.notification != null && message.hasOwnProperty("notification"))
                $root.proto.Notification.encode(message.notification, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateNotificationRequest message, length delimited. Does not implicitly {@link proto.CreateNotificationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CreateNotificationRequest
         * @static
         * @param {proto.ICreateNotificationRequest} message CreateNotificationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateNotificationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateNotificationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CreateNotificationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CreateNotificationRequest} CreateNotificationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateNotificationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CreateNotificationRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.notification = $root.proto.Notification.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateNotificationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.CreateNotificationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CreateNotificationRequest} CreateNotificationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateNotificationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateNotificationRequest message.
         * @function verify
         * @memberof proto.CreateNotificationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateNotificationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.notification != null && message.hasOwnProperty("notification")) {
                var error = $root.proto.Notification.verify(message.notification);
                if (error)
                    return "notification." + error;
            }
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            return null;
        };

        /**
         * Creates a CreateNotificationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.CreateNotificationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CreateNotificationRequest} CreateNotificationRequest
         */
        CreateNotificationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CreateNotificationRequest)
                return object;
            var message = new $root.proto.CreateNotificationRequest();
            if (object.notification != null) {
                if (typeof object.notification !== "object")
                    throw TypeError(".proto.CreateNotificationRequest.notification: object expected");
                message.notification = $root.proto.Notification.fromObject(object.notification);
            }
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.CreateNotificationRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateNotificationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.CreateNotificationRequest
         * @static
         * @param {proto.CreateNotificationRequest} message CreateNotificationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateNotificationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.notification = null;
                object.authRequest = null;
            }
            if (message.notification != null && message.hasOwnProperty("notification"))
                object.notification = $root.proto.Notification.toObject(message.notification, options);
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            return object;
        };

        /**
         * Converts this CreateNotificationRequest to JSON.
         * @function toJSON
         * @memberof proto.CreateNotificationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateNotificationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateNotificationRequest;
    })();

    proto.NotificationResponse = (function() {

        /**
         * Properties of a NotificationResponse.
         * @memberof proto
         * @interface INotificationResponse
         * @property {number|Long|null} [code] NotificationResponse code
         * @property {string|null} [status] NotificationResponse status
         * @property {string|null} [message] NotificationResponse message
         * @property {number|Long|null} [unreadCount] NotificationResponse unreadCount
         * @property {Array.<proto.INotification>|null} [result] NotificationResponse result
         */

        /**
         * Constructs a new NotificationResponse.
         * @memberof proto
         * @classdesc Represents a NotificationResponse.
         * @implements INotificationResponse
         * @constructor
         * @param {proto.INotificationResponse=} [properties] Properties to set
         */
        function NotificationResponse(properties) {
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotificationResponse code.
         * @member {number|Long} code
         * @memberof proto.NotificationResponse
         * @instance
         */
        NotificationResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NotificationResponse status.
         * @member {string} status
         * @memberof proto.NotificationResponse
         * @instance
         */
        NotificationResponse.prototype.status = "";

        /**
         * NotificationResponse message.
         * @member {string} message
         * @memberof proto.NotificationResponse
         * @instance
         */
        NotificationResponse.prototype.message = "";

        /**
         * NotificationResponse unreadCount.
         * @member {number|Long} unreadCount
         * @memberof proto.NotificationResponse
         * @instance
         */
        NotificationResponse.prototype.unreadCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NotificationResponse result.
         * @member {Array.<proto.INotification>} result
         * @memberof proto.NotificationResponse
         * @instance
         */
        NotificationResponse.prototype.result = $util.emptyArray;

        /**
         * Creates a new NotificationResponse instance using the specified properties.
         * @function create
         * @memberof proto.NotificationResponse
         * @static
         * @param {proto.INotificationResponse=} [properties] Properties to set
         * @returns {proto.NotificationResponse} NotificationResponse instance
         */
        NotificationResponse.create = function create(properties) {
            return new NotificationResponse(properties);
        };

        /**
         * Encodes the specified NotificationResponse message. Does not implicitly {@link proto.NotificationResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.NotificationResponse
         * @static
         * @param {proto.INotificationResponse} message NotificationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotificationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.unreadCount != null && message.hasOwnProperty("unreadCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.unreadCount);
            if (message.result != null && message.result.length)
                for (var i = 0; i < message.result.length; ++i)
                    $root.proto.Notification.encode(message.result[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotificationResponse message, length delimited. Does not implicitly {@link proto.NotificationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotificationResponse
         * @static
         * @param {proto.INotificationResponse} message NotificationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotificationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotificationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotificationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotificationResponse} NotificationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotificationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotificationResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    message.unreadCount = reader.int64();
                    break;
                case 5:
                    if (!(message.result && message.result.length))
                        message.result = [];
                    message.result.push($root.proto.Notification.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotificationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotificationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotificationResponse} NotificationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotificationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotificationResponse message.
         * @function verify
         * @memberof proto.NotificationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotificationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.unreadCount != null && message.hasOwnProperty("unreadCount"))
                if (!$util.isInteger(message.unreadCount) && !(message.unreadCount && $util.isInteger(message.unreadCount.low) && $util.isInteger(message.unreadCount.high)))
                    return "unreadCount: integer|Long expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                if (!Array.isArray(message.result))
                    return "result: array expected";
                for (var i = 0; i < message.result.length; ++i) {
                    var error = $root.proto.Notification.verify(message.result[i]);
                    if (error)
                        return "result." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NotificationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.NotificationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.NotificationResponse} NotificationResponse
         */
        NotificationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.NotificationResponse)
                return object;
            var message = new $root.proto.NotificationResponse();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.message != null)
                message.message = String(object.message);
            if (object.unreadCount != null)
                if ($util.Long)
                    (message.unreadCount = $util.Long.fromValue(object.unreadCount)).unsigned = false;
                else if (typeof object.unreadCount === "string")
                    message.unreadCount = parseInt(object.unreadCount, 10);
                else if (typeof object.unreadCount === "number")
                    message.unreadCount = object.unreadCount;
                else if (typeof object.unreadCount === "object")
                    message.unreadCount = new $util.LongBits(object.unreadCount.low >>> 0, object.unreadCount.high >>> 0).toNumber();
            if (object.result) {
                if (!Array.isArray(object.result))
                    throw TypeError(".proto.NotificationResponse.result: array expected");
                message.result = [];
                for (var i = 0; i < object.result.length; ++i) {
                    if (typeof object.result[i] !== "object")
                        throw TypeError(".proto.NotificationResponse.result: object expected");
                    message.result[i] = $root.proto.Notification.fromObject(object.result[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NotificationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.NotificationResponse
         * @static
         * @param {proto.NotificationResponse} message NotificationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotificationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.result = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                object.message = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.unreadCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.unreadCount = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.unreadCount != null && message.hasOwnProperty("unreadCount"))
                if (typeof message.unreadCount === "number")
                    object.unreadCount = options.longs === String ? String(message.unreadCount) : message.unreadCount;
                else
                    object.unreadCount = options.longs === String ? $util.Long.prototype.toString.call(message.unreadCount) : options.longs === Number ? new $util.LongBits(message.unreadCount.low >>> 0, message.unreadCount.high >>> 0).toNumber() : message.unreadCount;
            if (message.result && message.result.length) {
                object.result = [];
                for (var j = 0; j < message.result.length; ++j)
                    object.result[j] = $root.proto.Notification.toObject(message.result[j], options);
            }
            return object;
        };

        /**
         * Converts this NotificationResponse to JSON.
         * @function toJSON
         * @memberof proto.NotificationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotificationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotificationResponse;
    })();

    proto.SearchUserRequest = (function() {

        /**
         * Properties of a SearchUserRequest.
         * @memberof proto
         * @interface ISearchUserRequest
         * @property {string|null} [keyword] SearchUserRequest keyword
         * @property {proto.IAuthenticateRequest|null} [authRequest] SearchUserRequest authRequest
         */

        /**
         * Constructs a new SearchUserRequest.
         * @memberof proto
         * @classdesc Represents a SearchUserRequest.
         * @implements ISearchUserRequest
         * @constructor
         * @param {proto.ISearchUserRequest=} [properties] Properties to set
         */
        function SearchUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchUserRequest keyword.
         * @member {string} keyword
         * @memberof proto.SearchUserRequest
         * @instance
         */
        SearchUserRequest.prototype.keyword = "";

        /**
         * SearchUserRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.SearchUserRequest
         * @instance
         */
        SearchUserRequest.prototype.authRequest = null;

        /**
         * Creates a new SearchUserRequest instance using the specified properties.
         * @function create
         * @memberof proto.SearchUserRequest
         * @static
         * @param {proto.ISearchUserRequest=} [properties] Properties to set
         * @returns {proto.SearchUserRequest} SearchUserRequest instance
         */
        SearchUserRequest.create = function create(properties) {
            return new SearchUserRequest(properties);
        };

        /**
         * Encodes the specified SearchUserRequest message. Does not implicitly {@link proto.SearchUserRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.SearchUserRequest
         * @static
         * @param {proto.ISearchUserRequest} message SearchUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.keyword);
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SearchUserRequest message, length delimited. Does not implicitly {@link proto.SearchUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SearchUserRequest
         * @static
         * @param {proto.ISearchUserRequest} message SearchUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SearchUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SearchUserRequest} SearchUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SearchUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.keyword = reader.string();
                    break;
                case 2:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.SearchUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SearchUserRequest} SearchUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchUserRequest message.
         * @function verify
         * @memberof proto.SearchUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                if (!$util.isString(message.keyword))
                    return "keyword: string expected";
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            return null;
        };

        /**
         * Creates a SearchUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.SearchUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SearchUserRequest} SearchUserRequest
         */
        SearchUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SearchUserRequest)
                return object;
            var message = new $root.proto.SearchUserRequest();
            if (object.keyword != null)
                message.keyword = String(object.keyword);
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.SearchUserRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a SearchUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SearchUserRequest
         * @static
         * @param {proto.SearchUserRequest} message SearchUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.keyword = "";
                object.authRequest = null;
            }
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                object.keyword = message.keyword;
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            return object;
        };

        /**
         * Converts this SearchUserRequest to JSON.
         * @function toJSON
         * @memberof proto.SearchUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SearchUserRequest;
    })();

    proto.SearchUserResponse = (function() {

        /**
         * Properties of a SearchUserResponse.
         * @memberof proto
         * @interface ISearchUserResponse
         * @property {number|Long|null} [code] SearchUserResponse code
         * @property {string|null} [status] SearchUserResponse status
         * @property {string|null} [message] SearchUserResponse message
         * @property {Array.<proto.IUser>|null} [result] SearchUserResponse result
         */

        /**
         * Constructs a new SearchUserResponse.
         * @memberof proto
         * @classdesc Represents a SearchUserResponse.
         * @implements ISearchUserResponse
         * @constructor
         * @param {proto.ISearchUserResponse=} [properties] Properties to set
         */
        function SearchUserResponse(properties) {
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchUserResponse code.
         * @member {number|Long} code
         * @memberof proto.SearchUserResponse
         * @instance
         */
        SearchUserResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SearchUserResponse status.
         * @member {string} status
         * @memberof proto.SearchUserResponse
         * @instance
         */
        SearchUserResponse.prototype.status = "";

        /**
         * SearchUserResponse message.
         * @member {string} message
         * @memberof proto.SearchUserResponse
         * @instance
         */
        SearchUserResponse.prototype.message = "";

        /**
         * SearchUserResponse result.
         * @member {Array.<proto.IUser>} result
         * @memberof proto.SearchUserResponse
         * @instance
         */
        SearchUserResponse.prototype.result = $util.emptyArray;

        /**
         * Creates a new SearchUserResponse instance using the specified properties.
         * @function create
         * @memberof proto.SearchUserResponse
         * @static
         * @param {proto.ISearchUserResponse=} [properties] Properties to set
         * @returns {proto.SearchUserResponse} SearchUserResponse instance
         */
        SearchUserResponse.create = function create(properties) {
            return new SearchUserResponse(properties);
        };

        /**
         * Encodes the specified SearchUserResponse message. Does not implicitly {@link proto.SearchUserResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SearchUserResponse
         * @static
         * @param {proto.ISearchUserResponse} message SearchUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchUserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.result != null && message.result.length)
                for (var i = 0; i < message.result.length; ++i)
                    $root.proto.User.encode(message.result[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SearchUserResponse message, length delimited. Does not implicitly {@link proto.SearchUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SearchUserResponse
         * @static
         * @param {proto.ISearchUserResponse} message SearchUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SearchUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SearchUserResponse} SearchUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SearchUserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    if (!(message.result && message.result.length))
                        message.result = [];
                    message.result.push($root.proto.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchUserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.SearchUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SearchUserResponse} SearchUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchUserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchUserResponse message.
         * @function verify
         * @memberof proto.SearchUserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchUserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                if (!Array.isArray(message.result))
                    return "result: array expected";
                for (var i = 0; i < message.result.length; ++i) {
                    var error = $root.proto.User.verify(message.result[i]);
                    if (error)
                        return "result." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SearchUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.SearchUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SearchUserResponse} SearchUserResponse
         */
        SearchUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SearchUserResponse)
                return object;
            var message = new $root.proto.SearchUserResponse();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.message != null)
                message.message = String(object.message);
            if (object.result) {
                if (!Array.isArray(object.result))
                    throw TypeError(".proto.SearchUserResponse.result: array expected");
                message.result = [];
                for (var i = 0; i < object.result.length; ++i) {
                    if (typeof object.result[i] !== "object")
                        throw TypeError(".proto.SearchUserResponse.result: object expected");
                    message.result[i] = $root.proto.User.fromObject(object.result[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SearchUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SearchUserResponse
         * @static
         * @param {proto.SearchUserResponse} message SearchUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.result = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.result && message.result.length) {
                object.result = [];
                for (var j = 0; j < message.result.length; ++j)
                    object.result[j] = $root.proto.User.toObject(message.result[j], options);
            }
            return object;
        };

        /**
         * Converts this SearchUserResponse to JSON.
         * @function toJSON
         * @memberof proto.SearchUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SearchUserResponse;
    })();

    proto.UpdateUserRequest = (function() {

        /**
         * Properties of an UpdateUserRequest.
         * @memberof proto
         * @interface IUpdateUserRequest
         * @property {proto.IAuthenticateRequest|null} [authRequest] UpdateUserRequest authRequest
         * @property {proto.IUser|null} [result] UpdateUserRequest result
         */

        /**
         * Constructs a new UpdateUserRequest.
         * @memberof proto
         * @classdesc Represents an UpdateUserRequest.
         * @implements IUpdateUserRequest
         * @constructor
         * @param {proto.IUpdateUserRequest=} [properties] Properties to set
         */
        function UpdateUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.UpdateUserRequest
         * @instance
         */
        UpdateUserRequest.prototype.authRequest = null;

        /**
         * UpdateUserRequest result.
         * @member {proto.IUser|null|undefined} result
         * @memberof proto.UpdateUserRequest
         * @instance
         */
        UpdateUserRequest.prototype.result = null;

        /**
         * Creates a new UpdateUserRequest instance using the specified properties.
         * @function create
         * @memberof proto.UpdateUserRequest
         * @static
         * @param {proto.IUpdateUserRequest=} [properties] Properties to set
         * @returns {proto.UpdateUserRequest} UpdateUserRequest instance
         */
        UpdateUserRequest.create = function create(properties) {
            return new UpdateUserRequest(properties);
        };

        /**
         * Encodes the specified UpdateUserRequest message. Does not implicitly {@link proto.UpdateUserRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.UpdateUserRequest
         * @static
         * @param {proto.IUpdateUserRequest} message UpdateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.proto.User.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateUserRequest message, length delimited. Does not implicitly {@link proto.UpdateUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UpdateUserRequest
         * @static
         * @param {proto.IUpdateUserRequest} message UpdateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UpdateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UpdateUserRequest} UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UpdateUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = $root.proto.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.UpdateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UpdateUserRequest} UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateUserRequest message.
         * @function verify
         * @memberof proto.UpdateUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.proto.User.verify(message.result);
                if (error)
                    return "result." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.UpdateUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UpdateUserRequest} UpdateUserRequest
         */
        UpdateUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UpdateUserRequest)
                return object;
            var message = new $root.proto.UpdateUserRequest();
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.UpdateUserRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".proto.UpdateUserRequest.result: object expected");
                message.result = $root.proto.User.fromObject(object.result);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UpdateUserRequest
         * @static
         * @param {proto.UpdateUserRequest} message UpdateUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.authRequest = null;
                object.result = null;
            }
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.proto.User.toObject(message.result, options);
            return object;
        };

        /**
         * Converts this UpdateUserRequest to JSON.
         * @function toJSON
         * @memberof proto.UpdateUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateUserRequest;
    })();

    proto.UpdatePasswordRequest = (function() {

        /**
         * Properties of an UpdatePasswordRequest.
         * @memberof proto
         * @interface IUpdatePasswordRequest
         * @property {proto.IAuthenticateRequest|null} [authRequest] UpdatePasswordRequest authRequest
         * @property {string|null} [currentPassword] UpdatePasswordRequest currentPassword
         * @property {string|null} [newPassword] UpdatePasswordRequest newPassword
         * @property {string|null} [verifyNewPassword] UpdatePasswordRequest verifyNewPassword
         */

        /**
         * Constructs a new UpdatePasswordRequest.
         * @memberof proto
         * @classdesc Represents an UpdatePasswordRequest.
         * @implements IUpdatePasswordRequest
         * @constructor
         * @param {proto.IUpdatePasswordRequest=} [properties] Properties to set
         */
        function UpdatePasswordRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdatePasswordRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.UpdatePasswordRequest
         * @instance
         */
        UpdatePasswordRequest.prototype.authRequest = null;

        /**
         * UpdatePasswordRequest currentPassword.
         * @member {string} currentPassword
         * @memberof proto.UpdatePasswordRequest
         * @instance
         */
        UpdatePasswordRequest.prototype.currentPassword = "";

        /**
         * UpdatePasswordRequest newPassword.
         * @member {string} newPassword
         * @memberof proto.UpdatePasswordRequest
         * @instance
         */
        UpdatePasswordRequest.prototype.newPassword = "";

        /**
         * UpdatePasswordRequest verifyNewPassword.
         * @member {string} verifyNewPassword
         * @memberof proto.UpdatePasswordRequest
         * @instance
         */
        UpdatePasswordRequest.prototype.verifyNewPassword = "";

        /**
         * Creates a new UpdatePasswordRequest instance using the specified properties.
         * @function create
         * @memberof proto.UpdatePasswordRequest
         * @static
         * @param {proto.IUpdatePasswordRequest=} [properties] Properties to set
         * @returns {proto.UpdatePasswordRequest} UpdatePasswordRequest instance
         */
        UpdatePasswordRequest.create = function create(properties) {
            return new UpdatePasswordRequest(properties);
        };

        /**
         * Encodes the specified UpdatePasswordRequest message. Does not implicitly {@link proto.UpdatePasswordRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.UpdatePasswordRequest
         * @static
         * @param {proto.IUpdatePasswordRequest} message UpdatePasswordRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePasswordRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.currentPassword != null && message.hasOwnProperty("currentPassword"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.currentPassword);
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.newPassword);
            if (message.verifyNewPassword != null && message.hasOwnProperty("verifyNewPassword"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.verifyNewPassword);
            return writer;
        };

        /**
         * Encodes the specified UpdatePasswordRequest message, length delimited. Does not implicitly {@link proto.UpdatePasswordRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UpdatePasswordRequest
         * @static
         * @param {proto.IUpdatePasswordRequest} message UpdatePasswordRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePasswordRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdatePasswordRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UpdatePasswordRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UpdatePasswordRequest} UpdatePasswordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePasswordRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UpdatePasswordRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.currentPassword = reader.string();
                    break;
                case 3:
                    message.newPassword = reader.string();
                    break;
                case 4:
                    message.verifyNewPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdatePasswordRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.UpdatePasswordRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UpdatePasswordRequest} UpdatePasswordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePasswordRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdatePasswordRequest message.
         * @function verify
         * @memberof proto.UpdatePasswordRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdatePasswordRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            if (message.currentPassword != null && message.hasOwnProperty("currentPassword"))
                if (!$util.isString(message.currentPassword))
                    return "currentPassword: string expected";
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                if (!$util.isString(message.newPassword))
                    return "newPassword: string expected";
            if (message.verifyNewPassword != null && message.hasOwnProperty("verifyNewPassword"))
                if (!$util.isString(message.verifyNewPassword))
                    return "verifyNewPassword: string expected";
            return null;
        };

        /**
         * Creates an UpdatePasswordRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.UpdatePasswordRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UpdatePasswordRequest} UpdatePasswordRequest
         */
        UpdatePasswordRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UpdatePasswordRequest)
                return object;
            var message = new $root.proto.UpdatePasswordRequest();
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.UpdatePasswordRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            if (object.currentPassword != null)
                message.currentPassword = String(object.currentPassword);
            if (object.newPassword != null)
                message.newPassword = String(object.newPassword);
            if (object.verifyNewPassword != null)
                message.verifyNewPassword = String(object.verifyNewPassword);
            return message;
        };

        /**
         * Creates a plain object from an UpdatePasswordRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UpdatePasswordRequest
         * @static
         * @param {proto.UpdatePasswordRequest} message UpdatePasswordRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdatePasswordRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.authRequest = null;
                object.currentPassword = "";
                object.newPassword = "";
                object.verifyNewPassword = "";
            }
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            if (message.currentPassword != null && message.hasOwnProperty("currentPassword"))
                object.currentPassword = message.currentPassword;
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                object.newPassword = message.newPassword;
            if (message.verifyNewPassword != null && message.hasOwnProperty("verifyNewPassword"))
                object.verifyNewPassword = message.verifyNewPassword;
            return object;
        };

        /**
         * Converts this UpdatePasswordRequest to JSON.
         * @function toJSON
         * @memberof proto.UpdatePasswordRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdatePasswordRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdatePasswordRequest;
    })();

    proto.RecoveryCode = (function() {

        /**
         * Properties of a RecoveryCode.
         * @memberof proto
         * @interface IRecoveryCode
         * @property {string|null} [id] RecoveryCode id
         * @property {string|null} [code] RecoveryCode code
         * @property {string|null} [userId] RecoveryCode userId
         * @property {google.protobuf.ITimestamp|null} [createdAt] RecoveryCode createdAt
         */

        /**
         * Constructs a new RecoveryCode.
         * @memberof proto
         * @classdesc Represents a RecoveryCode.
         * @implements IRecoveryCode
         * @constructor
         * @param {proto.IRecoveryCode=} [properties] Properties to set
         */
        function RecoveryCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecoveryCode id.
         * @member {string} id
         * @memberof proto.RecoveryCode
         * @instance
         */
        RecoveryCode.prototype.id = "";

        /**
         * RecoveryCode code.
         * @member {string} code
         * @memberof proto.RecoveryCode
         * @instance
         */
        RecoveryCode.prototype.code = "";

        /**
         * RecoveryCode userId.
         * @member {string} userId
         * @memberof proto.RecoveryCode
         * @instance
         */
        RecoveryCode.prototype.userId = "";

        /**
         * RecoveryCode createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof proto.RecoveryCode
         * @instance
         */
        RecoveryCode.prototype.createdAt = null;

        /**
         * Creates a new RecoveryCode instance using the specified properties.
         * @function create
         * @memberof proto.RecoveryCode
         * @static
         * @param {proto.IRecoveryCode=} [properties] Properties to set
         * @returns {proto.RecoveryCode} RecoveryCode instance
         */
        RecoveryCode.create = function create(properties) {
            return new RecoveryCode(properties);
        };

        /**
         * Encodes the specified RecoveryCode message. Does not implicitly {@link proto.RecoveryCode.verify|verify} messages.
         * @function encode
         * @memberof proto.RecoveryCode
         * @static
         * @param {proto.IRecoveryCode} message RecoveryCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecoveryCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RecoveryCode message, length delimited. Does not implicitly {@link proto.RecoveryCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RecoveryCode
         * @static
         * @param {proto.IRecoveryCode} message RecoveryCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecoveryCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RecoveryCode message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RecoveryCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RecoveryCode} RecoveryCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecoveryCode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RecoveryCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                case 4:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RecoveryCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RecoveryCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RecoveryCode} RecoveryCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecoveryCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RecoveryCode message.
         * @function verify
         * @memberof proto.RecoveryCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RecoveryCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            return null;
        };

        /**
         * Creates a RecoveryCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RecoveryCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RecoveryCode} RecoveryCode
         */
        RecoveryCode.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RecoveryCode)
                return object;
            var message = new $root.proto.RecoveryCode();
            if (object.id != null)
                message.id = String(object.id);
            if (object.code != null)
                message.code = String(object.code);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".proto.RecoveryCode.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a RecoveryCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RecoveryCode
         * @static
         * @param {proto.RecoveryCode} message RecoveryCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RecoveryCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.code = "";
                object.userId = "";
                object.createdAt = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            return object;
        };

        /**
         * Converts this RecoveryCode to JSON.
         * @function toJSON
         * @memberof proto.RecoveryCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RecoveryCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RecoveryCode;
    })();

    proto.RecoveryCodesResponse = (function() {

        /**
         * Properties of a RecoveryCodesResponse.
         * @memberof proto
         * @interface IRecoveryCodesResponse
         * @property {number|Long|null} [code] RecoveryCodesResponse code
         * @property {string|null} [status] RecoveryCodesResponse status
         * @property {string|null} [message] RecoveryCodesResponse message
         * @property {Array.<proto.IRecoveryCode>|null} [result] RecoveryCodesResponse result
         */

        /**
         * Constructs a new RecoveryCodesResponse.
         * @memberof proto
         * @classdesc Represents a RecoveryCodesResponse.
         * @implements IRecoveryCodesResponse
         * @constructor
         * @param {proto.IRecoveryCodesResponse=} [properties] Properties to set
         */
        function RecoveryCodesResponse(properties) {
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecoveryCodesResponse code.
         * @member {number|Long} code
         * @memberof proto.RecoveryCodesResponse
         * @instance
         */
        RecoveryCodesResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RecoveryCodesResponse status.
         * @member {string} status
         * @memberof proto.RecoveryCodesResponse
         * @instance
         */
        RecoveryCodesResponse.prototype.status = "";

        /**
         * RecoveryCodesResponse message.
         * @member {string} message
         * @memberof proto.RecoveryCodesResponse
         * @instance
         */
        RecoveryCodesResponse.prototype.message = "";

        /**
         * RecoveryCodesResponse result.
         * @member {Array.<proto.IRecoveryCode>} result
         * @memberof proto.RecoveryCodesResponse
         * @instance
         */
        RecoveryCodesResponse.prototype.result = $util.emptyArray;

        /**
         * Creates a new RecoveryCodesResponse instance using the specified properties.
         * @function create
         * @memberof proto.RecoveryCodesResponse
         * @static
         * @param {proto.IRecoveryCodesResponse=} [properties] Properties to set
         * @returns {proto.RecoveryCodesResponse} RecoveryCodesResponse instance
         */
        RecoveryCodesResponse.create = function create(properties) {
            return new RecoveryCodesResponse(properties);
        };

        /**
         * Encodes the specified RecoveryCodesResponse message. Does not implicitly {@link proto.RecoveryCodesResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.RecoveryCodesResponse
         * @static
         * @param {proto.IRecoveryCodesResponse} message RecoveryCodesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecoveryCodesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.result != null && message.result.length)
                for (var i = 0; i < message.result.length; ++i)
                    $root.proto.RecoveryCode.encode(message.result[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RecoveryCodesResponse message, length delimited. Does not implicitly {@link proto.RecoveryCodesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RecoveryCodesResponse
         * @static
         * @param {proto.IRecoveryCodesResponse} message RecoveryCodesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecoveryCodesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RecoveryCodesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RecoveryCodesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RecoveryCodesResponse} RecoveryCodesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecoveryCodesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RecoveryCodesResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    if (!(message.result && message.result.length))
                        message.result = [];
                    message.result.push($root.proto.RecoveryCode.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RecoveryCodesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RecoveryCodesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RecoveryCodesResponse} RecoveryCodesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecoveryCodesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RecoveryCodesResponse message.
         * @function verify
         * @memberof proto.RecoveryCodesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RecoveryCodesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                if (!Array.isArray(message.result))
                    return "result: array expected";
                for (var i = 0; i < message.result.length; ++i) {
                    var error = $root.proto.RecoveryCode.verify(message.result[i]);
                    if (error)
                        return "result." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RecoveryCodesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RecoveryCodesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RecoveryCodesResponse} RecoveryCodesResponse
         */
        RecoveryCodesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RecoveryCodesResponse)
                return object;
            var message = new $root.proto.RecoveryCodesResponse();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.message != null)
                message.message = String(object.message);
            if (object.result) {
                if (!Array.isArray(object.result))
                    throw TypeError(".proto.RecoveryCodesResponse.result: array expected");
                message.result = [];
                for (var i = 0; i < object.result.length; ++i) {
                    if (typeof object.result[i] !== "object")
                        throw TypeError(".proto.RecoveryCodesResponse.result: object expected");
                    message.result[i] = $root.proto.RecoveryCode.fromObject(object.result[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RecoveryCodesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RecoveryCodesResponse
         * @static
         * @param {proto.RecoveryCodesResponse} message RecoveryCodesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RecoveryCodesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.result = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.result && message.result.length) {
                object.result = [];
                for (var j = 0; j < message.result.length; ++j)
                    object.result[j] = $root.proto.RecoveryCode.toObject(message.result[j], options);
            }
            return object;
        };

        /**
         * Converts this RecoveryCodesResponse to JSON.
         * @function toJSON
         * @memberof proto.RecoveryCodesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RecoveryCodesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RecoveryCodesResponse;
    })();

    proto.TwoFactorAuthRequest = (function() {

        /**
         * Properties of a TwoFactorAuthRequest.
         * @memberof proto
         * @interface ITwoFactorAuthRequest
         * @property {string|null} [code] TwoFactorAuthRequest code
         * @property {proto.IAuthenticateRequest|null} [authRequest] TwoFactorAuthRequest authRequest
         */

        /**
         * Constructs a new TwoFactorAuthRequest.
         * @memberof proto
         * @classdesc Represents a TwoFactorAuthRequest.
         * @implements ITwoFactorAuthRequest
         * @constructor
         * @param {proto.ITwoFactorAuthRequest=} [properties] Properties to set
         */
        function TwoFactorAuthRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TwoFactorAuthRequest code.
         * @member {string} code
         * @memberof proto.TwoFactorAuthRequest
         * @instance
         */
        TwoFactorAuthRequest.prototype.code = "";

        /**
         * TwoFactorAuthRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.TwoFactorAuthRequest
         * @instance
         */
        TwoFactorAuthRequest.prototype.authRequest = null;

        /**
         * Creates a new TwoFactorAuthRequest instance using the specified properties.
         * @function create
         * @memberof proto.TwoFactorAuthRequest
         * @static
         * @param {proto.ITwoFactorAuthRequest=} [properties] Properties to set
         * @returns {proto.TwoFactorAuthRequest} TwoFactorAuthRequest instance
         */
        TwoFactorAuthRequest.create = function create(properties) {
            return new TwoFactorAuthRequest(properties);
        };

        /**
         * Encodes the specified TwoFactorAuthRequest message. Does not implicitly {@link proto.TwoFactorAuthRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.TwoFactorAuthRequest
         * @static
         * @param {proto.ITwoFactorAuthRequest} message TwoFactorAuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwoFactorAuthRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TwoFactorAuthRequest message, length delimited. Does not implicitly {@link proto.TwoFactorAuthRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TwoFactorAuthRequest
         * @static
         * @param {proto.ITwoFactorAuthRequest} message TwoFactorAuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwoFactorAuthRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TwoFactorAuthRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TwoFactorAuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TwoFactorAuthRequest} TwoFactorAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwoFactorAuthRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TwoFactorAuthRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TwoFactorAuthRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TwoFactorAuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TwoFactorAuthRequest} TwoFactorAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwoFactorAuthRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TwoFactorAuthRequest message.
         * @function verify
         * @memberof proto.TwoFactorAuthRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TwoFactorAuthRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            return null;
        };

        /**
         * Creates a TwoFactorAuthRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TwoFactorAuthRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TwoFactorAuthRequest} TwoFactorAuthRequest
         */
        TwoFactorAuthRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TwoFactorAuthRequest)
                return object;
            var message = new $root.proto.TwoFactorAuthRequest();
            if (object.code != null)
                message.code = String(object.code);
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.TwoFactorAuthRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a TwoFactorAuthRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TwoFactorAuthRequest
         * @static
         * @param {proto.TwoFactorAuthRequest} message TwoFactorAuthRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TwoFactorAuthRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = "";
                object.authRequest = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            return object;
        };

        /**
         * Converts this TwoFactorAuthRequest to JSON.
         * @function toJSON
         * @memberof proto.TwoFactorAuthRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TwoFactorAuthRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TwoFactorAuthRequest;
    })();

    proto.UserService = (function() {

        /**
         * Constructs a new UserService service.
         * @memberof proto
         * @classdesc Represents a UserService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function UserService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (UserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserService;

        /**
         * Creates new UserService service using the specified rpc implementation.
         * @function create
         * @memberof proto.UserService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {UserService} RPC service. Useful where requests and/or responses are streamed.
         */
        UserService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link proto.UserService#rollbackStates}.
         * @memberof proto.UserService
         * @typedef RollbackStatesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls RollbackStates.
         * @function rollbackStates
         * @memberof proto.UserService
         * @instance
         * @param {proto.IRollbackStatesRequest} request RollbackStatesRequest message or plain object
         * @param {proto.UserService.RollbackStatesCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.rollbackStates = function rollbackStates(request, callback) {
            return this.rpcCall(rollbackStates, $root.proto.RollbackStatesRequest, $root.proto.Response, request, callback);
        }, "name", { value: "RollbackStates" });

        /**
         * Calls RollbackStates.
         * @function rollbackStates
         * @memberof proto.UserService
         * @instance
         * @param {proto.IRollbackStatesRequest} request RollbackStatesRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#updateState}.
         * @memberof proto.UserService
         * @typedef UpdateStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls UpdateState.
         * @function updateState
         * @memberof proto.UserService
         * @instance
         * @param {proto.IUpdateStateRequest} request UpdateStateRequest message or plain object
         * @param {proto.UserService.UpdateStateCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.updateState = function updateState(request, callback) {
            return this.rpcCall(updateState, $root.proto.UpdateStateRequest, $root.proto.Response, request, callback);
        }, "name", { value: "UpdateState" });

        /**
         * Calls UpdateState.
         * @function updateState
         * @memberof proto.UserService
         * @instance
         * @param {proto.IUpdateStateRequest} request UpdateStateRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#updateActivity}.
         * @memberof proto.UserService
         * @typedef UpdateActivityCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls UpdateActivity.
         * @function updateActivity
         * @memberof proto.UserService
         * @instance
         * @param {proto.IUpdateActivityRequest} request UpdateActivityRequest message or plain object
         * @param {proto.UserService.UpdateActivityCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.updateActivity = function updateActivity(request, callback) {
            return this.rpcCall(updateActivity, $root.proto.UpdateActivityRequest, $root.proto.Response, request, callback);
        }, "name", { value: "UpdateActivity" });

        /**
         * Calls UpdateActivity.
         * @function updateActivity
         * @memberof proto.UserService
         * @instance
         * @param {proto.IUpdateActivityRequest} request UpdateActivityRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#removeActivity}.
         * @memberof proto.UserService
         * @typedef RemoveActivityCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls RemoveActivity.
         * @function removeActivity
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @param {proto.UserService.RemoveActivityCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.removeActivity = function removeActivity(request, callback) {
            return this.rpcCall(removeActivity, $root.proto.AuthenticateRequest, $root.proto.Response, request, callback);
        }, "name", { value: "RemoveActivity" });

        /**
         * Calls RemoveActivity.
         * @function removeActivity
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#getUser}.
         * @memberof proto.UserService
         * @typedef GetUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.GetUserResponse} [response] GetUserResponse
         */

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @param {proto.UserService.GetUserCallback} callback Node-style callback called with the error, if any, and GetUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.getUser = function getUser(request, callback) {
            return this.rpcCall(getUser, $root.proto.AuthenticateRequest, $root.proto.GetUserResponse, request, callback);
        }, "name", { value: "GetUser" });

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @returns {Promise<proto.GetUserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#updateUser}.
         * @memberof proto.UserService
         * @typedef UpdateUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.GetUserResponse} [response] GetUserResponse
         */

        /**
         * Calls UpdateUser.
         * @function updateUser
         * @memberof proto.UserService
         * @instance
         * @param {proto.IUpdateUserRequest} request UpdateUserRequest message or plain object
         * @param {proto.UserService.UpdateUserCallback} callback Node-style callback called with the error, if any, and GetUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.updateUser = function updateUser(request, callback) {
            return this.rpcCall(updateUser, $root.proto.UpdateUserRequest, $root.proto.GetUserResponse, request, callback);
        }, "name", { value: "UpdateUser" });

        /**
         * Calls UpdateUser.
         * @function updateUser
         * @memberof proto.UserService
         * @instance
         * @param {proto.IUpdateUserRequest} request UpdateUserRequest message or plain object
         * @returns {Promise<proto.GetUserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#updatePassword}.
         * @memberof proto.UserService
         * @typedef UpdatePasswordCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls UpdatePassword.
         * @function updatePassword
         * @memberof proto.UserService
         * @instance
         * @param {proto.IUpdatePasswordRequest} request UpdatePasswordRequest message or plain object
         * @param {proto.UserService.UpdatePasswordCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.updatePassword = function updatePassword(request, callback) {
            return this.rpcCall(updatePassword, $root.proto.UpdatePasswordRequest, $root.proto.Response, request, callback);
        }, "name", { value: "UpdatePassword" });

        /**
         * Calls UpdatePassword.
         * @function updatePassword
         * @memberof proto.UserService
         * @instance
         * @param {proto.IUpdatePasswordRequest} request UpdatePasswordRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#search}.
         * @memberof proto.UserService
         * @typedef SearchCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.SearchUserResponse} [response] SearchUserResponse
         */

        /**
         * Calls Search.
         * @function search
         * @memberof proto.UserService
         * @instance
         * @param {proto.ISearchUserRequest} request SearchUserRequest message or plain object
         * @param {proto.UserService.SearchCallback} callback Node-style callback called with the error, if any, and SearchUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.search = function search(request, callback) {
            return this.rpcCall(search, $root.proto.SearchUserRequest, $root.proto.SearchUserResponse, request, callback);
        }, "name", { value: "Search" });

        /**
         * Calls Search.
         * @function search
         * @memberof proto.UserService
         * @instance
         * @param {proto.ISearchUserRequest} request SearchUserRequest message or plain object
         * @returns {Promise<proto.SearchUserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#createUser}.
         * @memberof proto.UserService
         * @typedef CreateUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.AuthResponse} [response] AuthResponse
         */

        /**
         * Calls CreateUser.
         * @function createUser
         * @memberof proto.UserService
         * @instance
         * @param {proto.ICreateUserRequest} request CreateUserRequest message or plain object
         * @param {proto.UserService.CreateUserCallback} callback Node-style callback called with the error, if any, and AuthResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.createUser = function createUser(request, callback) {
            return this.rpcCall(createUser, $root.proto.CreateUserRequest, $root.proto.AuthResponse, request, callback);
        }, "name", { value: "CreateUser" });

        /**
         * Calls CreateUser.
         * @function createUser
         * @memberof proto.UserService
         * @instance
         * @param {proto.ICreateUserRequest} request CreateUserRequest message or plain object
         * @returns {Promise<proto.AuthResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#generateRecoveryCodes}.
         * @memberof proto.UserService
         * @typedef GenerateRecoveryCodesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.RecoveryCodesResponse} [response] RecoveryCodesResponse
         */

        /**
         * Calls GenerateRecoveryCodes.
         * @function generateRecoveryCodes
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @param {proto.UserService.GenerateRecoveryCodesCallback} callback Node-style callback called with the error, if any, and RecoveryCodesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.generateRecoveryCodes = function generateRecoveryCodes(request, callback) {
            return this.rpcCall(generateRecoveryCodes, $root.proto.AuthenticateRequest, $root.proto.RecoveryCodesResponse, request, callback);
        }, "name", { value: "GenerateRecoveryCodes" });

        /**
         * Calls GenerateRecoveryCodes.
         * @function generateRecoveryCodes
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @returns {Promise<proto.RecoveryCodesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#enableTwoFactorAuth}.
         * @memberof proto.UserService
         * @typedef EnableTwoFactorAuthCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls EnableTwoFactorAuth.
         * @function enableTwoFactorAuth
         * @memberof proto.UserService
         * @instance
         * @param {proto.ITwoFactorAuthRequest} request TwoFactorAuthRequest message or plain object
         * @param {proto.UserService.EnableTwoFactorAuthCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.enableTwoFactorAuth = function enableTwoFactorAuth(request, callback) {
            return this.rpcCall(enableTwoFactorAuth, $root.proto.TwoFactorAuthRequest, $root.proto.Response, request, callback);
        }, "name", { value: "EnableTwoFactorAuth" });

        /**
         * Calls EnableTwoFactorAuth.
         * @function enableTwoFactorAuth
         * @memberof proto.UserService
         * @instance
         * @param {proto.ITwoFactorAuthRequest} request TwoFactorAuthRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#disableTwoFactorAuth}.
         * @memberof proto.UserService
         * @typedef DisableTwoFactorAuthCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls DisableTwoFactorAuth.
         * @function disableTwoFactorAuth
         * @memberof proto.UserService
         * @instance
         * @param {proto.ITwoFactorAuthRequest} request TwoFactorAuthRequest message or plain object
         * @param {proto.UserService.DisableTwoFactorAuthCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.disableTwoFactorAuth = function disableTwoFactorAuth(request, callback) {
            return this.rpcCall(disableTwoFactorAuth, $root.proto.TwoFactorAuthRequest, $root.proto.Response, request, callback);
        }, "name", { value: "DisableTwoFactorAuth" });

        /**
         * Calls DisableTwoFactorAuth.
         * @function disableTwoFactorAuth
         * @memberof proto.UserService
         * @instance
         * @param {proto.ITwoFactorAuthRequest} request TwoFactorAuthRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#getFriend}.
         * @memberof proto.UserService
         * @typedef GetFriendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.FriendResponse} [response] FriendResponse
         */

        /**
         * Calls GetFriend.
         * @function getFriend
         * @memberof proto.UserService
         * @instance
         * @param {proto.IFriendRequest} request FriendRequest message or plain object
         * @param {proto.UserService.GetFriendCallback} callback Node-style callback called with the error, if any, and FriendResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.getFriend = function getFriend(request, callback) {
            return this.rpcCall(getFriend, $root.proto.FriendRequest, $root.proto.FriendResponse, request, callback);
        }, "name", { value: "GetFriend" });

        /**
         * Calls GetFriend.
         * @function getFriend
         * @memberof proto.UserService
         * @instance
         * @param {proto.IFriendRequest} request FriendRequest message or plain object
         * @returns {Promise<proto.FriendResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#getFriendRequest}.
         * @memberof proto.UserService
         * @typedef GetFriendRequestCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Friend} [response] Friend
         */

        /**
         * Calls GetFriendRequest.
         * @function getFriendRequest
         * @memberof proto.UserService
         * @instance
         * @param {proto.IFriendRequest} request FriendRequest message or plain object
         * @param {proto.UserService.GetFriendRequestCallback} callback Node-style callback called with the error, if any, and Friend
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.getFriendRequest = function getFriendRequest(request, callback) {
            return this.rpcCall(getFriendRequest, $root.proto.FriendRequest, $root.proto.Friend, request, callback);
        }, "name", { value: "GetFriendRequest" });

        /**
         * Calls GetFriendRequest.
         * @function getFriendRequest
         * @memberof proto.UserService
         * @instance
         * @param {proto.IFriendRequest} request FriendRequest message or plain object
         * @returns {Promise<proto.Friend>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#sendFriendRequest}.
         * @memberof proto.UserService
         * @typedef SendFriendRequestCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls SendFriendRequest.
         * @function sendFriendRequest
         * @memberof proto.UserService
         * @instance
         * @param {proto.IFriendRequest} request FriendRequest message or plain object
         * @param {proto.UserService.SendFriendRequestCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.sendFriendRequest = function sendFriendRequest(request, callback) {
            return this.rpcCall(sendFriendRequest, $root.proto.FriendRequest, $root.proto.Response, request, callback);
        }, "name", { value: "SendFriendRequest" });

        /**
         * Calls SendFriendRequest.
         * @function sendFriendRequest
         * @memberof proto.UserService
         * @instance
         * @param {proto.IFriendRequest} request FriendRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#acceptFriendRequest}.
         * @memberof proto.UserService
         * @typedef AcceptFriendRequestCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls AcceptFriendRequest.
         * @function acceptFriendRequest
         * @memberof proto.UserService
         * @instance
         * @param {proto.IFriendRequest} request FriendRequest message or plain object
         * @param {proto.UserService.AcceptFriendRequestCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.acceptFriendRequest = function acceptFriendRequest(request, callback) {
            return this.rpcCall(acceptFriendRequest, $root.proto.FriendRequest, $root.proto.Response, request, callback);
        }, "name", { value: "AcceptFriendRequest" });

        /**
         * Calls AcceptFriendRequest.
         * @function acceptFriendRequest
         * @memberof proto.UserService
         * @instance
         * @param {proto.IFriendRequest} request FriendRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#getFriends}.
         * @memberof proto.UserService
         * @typedef GetFriendsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.FriendsResponse} [response] FriendsResponse
         */

        /**
         * Calls GetFriends.
         * @function getFriends
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @param {proto.UserService.GetFriendsCallback} callback Node-style callback called with the error, if any, and FriendsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.getFriends = function getFriends(request, callback) {
            return this.rpcCall(getFriends, $root.proto.AuthenticateRequest, $root.proto.FriendsResponse, request, callback);
        }, "name", { value: "GetFriends" });

        /**
         * Calls GetFriends.
         * @function getFriends
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @returns {Promise<proto.FriendsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#getNotifications}.
         * @memberof proto.UserService
         * @typedef GetNotificationsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.NotificationResponse} [response] NotificationResponse
         */

        /**
         * Calls GetNotifications.
         * @function getNotifications
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @param {proto.UserService.GetNotificationsCallback} callback Node-style callback called with the error, if any, and NotificationResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.getNotifications = function getNotifications(request, callback) {
            return this.rpcCall(getNotifications, $root.proto.AuthenticateRequest, $root.proto.NotificationResponse, request, callback);
        }, "name", { value: "GetNotifications" });

        /**
         * Calls GetNotifications.
         * @function getNotifications
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @returns {Promise<proto.NotificationResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#createNotification}.
         * @memberof proto.UserService
         * @typedef CreateNotificationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.NotificationResponse} [response] NotificationResponse
         */

        /**
         * Calls CreateNotification.
         * @function createNotification
         * @memberof proto.UserService
         * @instance
         * @param {proto.ICreateNotificationRequest} request CreateNotificationRequest message or plain object
         * @param {proto.UserService.CreateNotificationCallback} callback Node-style callback called with the error, if any, and NotificationResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.createNotification = function createNotification(request, callback) {
            return this.rpcCall(createNotification, $root.proto.CreateNotificationRequest, $root.proto.NotificationResponse, request, callback);
        }, "name", { value: "CreateNotification" });

        /**
         * Calls CreateNotification.
         * @function createNotification
         * @memberof proto.UserService
         * @instance
         * @param {proto.ICreateNotificationRequest} request CreateNotificationRequest message or plain object
         * @returns {Promise<proto.NotificationResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.UserService#readAllNotifications}.
         * @memberof proto.UserService
         * @typedef ReadAllNotificationsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.NotificationResponse} [response] NotificationResponse
         */

        /**
         * Calls ReadAllNotifications.
         * @function readAllNotifications
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @param {proto.UserService.ReadAllNotificationsCallback} callback Node-style callback called with the error, if any, and NotificationResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.readAllNotifications = function readAllNotifications(request, callback) {
            return this.rpcCall(readAllNotifications, $root.proto.AuthenticateRequest, $root.proto.NotificationResponse, request, callback);
        }, "name", { value: "ReadAllNotifications" });

        /**
         * Calls ReadAllNotifications.
         * @function readAllNotifications
         * @memberof proto.UserService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @returns {Promise<proto.NotificationResponse>} Promise
         * @variation 2
         */

        return UserService;
    })();

    proto.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof proto
         * @interface IResponse
         * @property {number|Long|null} [code] Response code
         * @property {string|null} [status] Response status
         * @property {Uint8Array|null} [result] Response result
         * @property {string|null} [message] Response message
         */

        /**
         * Constructs a new Response.
         * @memberof proto
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {proto.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response code.
         * @member {number|Long} code
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response status.
         * @member {string} status
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.status = "";

        /**
         * Response result.
         * @member {Uint8Array} result
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.result = $util.newBuffer([]);

        /**
         * Response message.
         * @member {string} message
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.message = "";

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof proto.Response
         * @static
         * @param {proto.IResponse=} [properties] Properties to set
         * @returns {proto.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link proto.Response.verify|verify} messages.
         * @function encode
         * @memberof proto.Response
         * @static
         * @param {proto.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.result);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link proto.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Response
         * @static
         * @param {proto.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.result = reader.bytes();
                    break;
                case 4:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof proto.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!(message.result && typeof message.result.length === "number" || $util.isString(message.result)))
                    return "result: buffer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Response)
                return object;
            var message = new $root.proto.Response();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.result != null)
                if (typeof object.result === "string")
                    $util.base64.decode(object.result, message.result = $util.newBuffer($util.base64.length(object.result)), 0);
                else if (object.result.length)
                    message.result = object.result;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Response
         * @static
         * @param {proto.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                if (options.bytes === String)
                    object.result = "";
                else {
                    object.result = [];
                    if (options.bytes !== Array)
                        object.result = $util.newBuffer(object.result);
                }
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.bytes === String ? $util.base64.encode(message.result, 0, message.result.length) : options.bytes === Array ? Array.prototype.slice.call(message.result) : message.result;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof proto.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    proto.ValidationError = (function() {

        /**
         * Properties of a ValidationError.
         * @memberof proto
         * @interface IValidationError
         * @property {string|null} [field] ValidationError field
         * @property {Array.<string>|null} [errors] ValidationError errors
         */

        /**
         * Constructs a new ValidationError.
         * @memberof proto
         * @classdesc Represents a ValidationError.
         * @implements IValidationError
         * @constructor
         * @param {proto.IValidationError=} [properties] Properties to set
         */
        function ValidationError(properties) {
            this.errors = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValidationError field.
         * @member {string} field
         * @memberof proto.ValidationError
         * @instance
         */
        ValidationError.prototype.field = "";

        /**
         * ValidationError errors.
         * @member {Array.<string>} errors
         * @memberof proto.ValidationError
         * @instance
         */
        ValidationError.prototype.errors = $util.emptyArray;

        /**
         * Creates a new ValidationError instance using the specified properties.
         * @function create
         * @memberof proto.ValidationError
         * @static
         * @param {proto.IValidationError=} [properties] Properties to set
         * @returns {proto.ValidationError} ValidationError instance
         */
        ValidationError.create = function create(properties) {
            return new ValidationError(properties);
        };

        /**
         * Encodes the specified ValidationError message. Does not implicitly {@link proto.ValidationError.verify|verify} messages.
         * @function encode
         * @memberof proto.ValidationError
         * @static
         * @param {proto.IValidationError} message ValidationError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidationError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.field != null && message.hasOwnProperty("field"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.field);
            if (message.errors != null && message.errors.length)
                for (var i = 0; i < message.errors.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errors[i]);
            return writer;
        };

        /**
         * Encodes the specified ValidationError message, length delimited. Does not implicitly {@link proto.ValidationError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ValidationError
         * @static
         * @param {proto.IValidationError} message ValidationError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidationError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ValidationError message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ValidationError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ValidationError} ValidationError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidationError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ValidationError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.field = reader.string();
                    break;
                case 2:
                    if (!(message.errors && message.errors.length))
                        message.errors = [];
                    message.errors.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ValidationError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ValidationError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ValidationError} ValidationError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidationError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ValidationError message.
         * @function verify
         * @memberof proto.ValidationError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ValidationError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.field != null && message.hasOwnProperty("field"))
                if (!$util.isString(message.field))
                    return "field: string expected";
            if (message.errors != null && message.hasOwnProperty("errors")) {
                if (!Array.isArray(message.errors))
                    return "errors: array expected";
                for (var i = 0; i < message.errors.length; ++i)
                    if (!$util.isString(message.errors[i]))
                        return "errors: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ValidationError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ValidationError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ValidationError} ValidationError
         */
        ValidationError.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ValidationError)
                return object;
            var message = new $root.proto.ValidationError();
            if (object.field != null)
                message.field = String(object.field);
            if (object.errors) {
                if (!Array.isArray(object.errors))
                    throw TypeError(".proto.ValidationError.errors: array expected");
                message.errors = [];
                for (var i = 0; i < object.errors.length; ++i)
                    message.errors[i] = String(object.errors[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ValidationError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ValidationError
         * @static
         * @param {proto.ValidationError} message ValidationError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ValidationError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.errors = [];
            if (options.defaults)
                object.field = "";
            if (message.field != null && message.hasOwnProperty("field"))
                object.field = message.field;
            if (message.errors && message.errors.length) {
                object.errors = [];
                for (var j = 0; j < message.errors.length; ++j)
                    object.errors[j] = message.errors[j];
            }
            return object;
        };

        /**
         * Converts this ValidationError to JSON.
         * @function toJSON
         * @memberof proto.ValidationError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ValidationError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ValidationError;
    })();

    proto.AuthenticateRequest = (function() {

        /**
         * Properties of an AuthenticateRequest.
         * @memberof proto
         * @interface IAuthenticateRequest
         * @property {Uint8Array|null} [token] AuthenticateRequest token
         */

        /**
         * Constructs a new AuthenticateRequest.
         * @memberof proto
         * @classdesc Represents an AuthenticateRequest.
         * @implements IAuthenticateRequest
         * @constructor
         * @param {proto.IAuthenticateRequest=} [properties] Properties to set
         */
        function AuthenticateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthenticateRequest token.
         * @member {Uint8Array} token
         * @memberof proto.AuthenticateRequest
         * @instance
         */
        AuthenticateRequest.prototype.token = $util.newBuffer([]);

        /**
         * Creates a new AuthenticateRequest instance using the specified properties.
         * @function create
         * @memberof proto.AuthenticateRequest
         * @static
         * @param {proto.IAuthenticateRequest=} [properties] Properties to set
         * @returns {proto.AuthenticateRequest} AuthenticateRequest instance
         */
        AuthenticateRequest.create = function create(properties) {
            return new AuthenticateRequest(properties);
        };

        /**
         * Encodes the specified AuthenticateRequest message. Does not implicitly {@link proto.AuthenticateRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.AuthenticateRequest
         * @static
         * @param {proto.IAuthenticateRequest} message AuthenticateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.token);
            return writer;
        };

        /**
         * Encodes the specified AuthenticateRequest message, length delimited. Does not implicitly {@link proto.AuthenticateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AuthenticateRequest
         * @static
         * @param {proto.IAuthenticateRequest} message AuthenticateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthenticateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AuthenticateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AuthenticateRequest} AuthenticateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AuthenticateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthenticateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AuthenticateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AuthenticateRequest} AuthenticateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthenticateRequest message.
         * @function verify
         * @memberof proto.AuthenticateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthenticateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            return null;
        };

        /**
         * Creates an AuthenticateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.AuthenticateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.AuthenticateRequest} AuthenticateRequest
         */
        AuthenticateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.AuthenticateRequest)
                return object;
            var message = new $root.proto.AuthenticateRequest();
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length)
                    message.token = object.token;
            return message;
        };

        /**
         * Creates a plain object from an AuthenticateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.AuthenticateRequest
         * @static
         * @param {proto.AuthenticateRequest} message AuthenticateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthenticateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            return object;
        };

        /**
         * Converts this AuthenticateRequest to JSON.
         * @function toJSON
         * @memberof proto.AuthenticateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthenticateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthenticateRequest;
    })();

    proto.AuthRequest = (function() {

        /**
         * Properties of an AuthRequest.
         * @memberof proto
         * @interface IAuthRequest
         * @property {string|null} [user] AuthRequest user
         * @property {string|null} [pass] AuthRequest pass
         */

        /**
         * Constructs a new AuthRequest.
         * @memberof proto
         * @classdesc Represents an AuthRequest.
         * @implements IAuthRequest
         * @constructor
         * @param {proto.IAuthRequest=} [properties] Properties to set
         */
        function AuthRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthRequest user.
         * @member {string} user
         * @memberof proto.AuthRequest
         * @instance
         */
        AuthRequest.prototype.user = "";

        /**
         * AuthRequest pass.
         * @member {string} pass
         * @memberof proto.AuthRequest
         * @instance
         */
        AuthRequest.prototype.pass = "";

        /**
         * Creates a new AuthRequest instance using the specified properties.
         * @function create
         * @memberof proto.AuthRequest
         * @static
         * @param {proto.IAuthRequest=} [properties] Properties to set
         * @returns {proto.AuthRequest} AuthRequest instance
         */
        AuthRequest.create = function create(properties) {
            return new AuthRequest(properties);
        };

        /**
         * Encodes the specified AuthRequest message. Does not implicitly {@link proto.AuthRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.AuthRequest
         * @static
         * @param {proto.IAuthRequest} message AuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.user);
            if (message.pass != null && message.hasOwnProperty("pass"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pass);
            return writer;
        };

        /**
         * Encodes the specified AuthRequest message, length delimited. Does not implicitly {@link proto.AuthRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AuthRequest
         * @static
         * @param {proto.IAuthRequest} message AuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AuthRequest} AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AuthRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 2:
                    message.pass = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AuthRequest} AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthRequest message.
         * @function verify
         * @memberof proto.AuthRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user"))
                if (!$util.isString(message.user))
                    return "user: string expected";
            if (message.pass != null && message.hasOwnProperty("pass"))
                if (!$util.isString(message.pass))
                    return "pass: string expected";
            return null;
        };

        /**
         * Creates an AuthRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.AuthRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.AuthRequest} AuthRequest
         */
        AuthRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.AuthRequest)
                return object;
            var message = new $root.proto.AuthRequest();
            if (object.user != null)
                message.user = String(object.user);
            if (object.pass != null)
                message.pass = String(object.pass);
            return message;
        };

        /**
         * Creates a plain object from an AuthRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.AuthRequest
         * @static
         * @param {proto.AuthRequest} message AuthRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = "";
                object.pass = "";
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = message.user;
            if (message.pass != null && message.hasOwnProperty("pass"))
                object.pass = message.pass;
            return object;
        };

        /**
         * Converts this AuthRequest to JSON.
         * @function toJSON
         * @memberof proto.AuthRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthRequest;
    })();

    proto.AuthResponse = (function() {

        /**
         * Properties of an AuthResponse.
         * @memberof proto
         * @interface IAuthResponse
         * @property {number|Long|null} [code] AuthResponse code
         * @property {string|null} [status] AuthResponse status
         * @property {Uint8Array|null} [token] AuthResponse token
         * @property {string|null} [type] AuthResponse type
         * @property {string|null} [message] AuthResponse message
         * @property {Uint8Array|null} [refreshedToken] AuthResponse refreshedToken
         * @property {Array.<proto.IValidationError>|null} [validationError] AuthResponse validationError
         */

        /**
         * Constructs a new AuthResponse.
         * @memberof proto
         * @classdesc Represents an AuthResponse.
         * @implements IAuthResponse
         * @constructor
         * @param {proto.IAuthResponse=} [properties] Properties to set
         */
        function AuthResponse(properties) {
            this.validationError = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthResponse code.
         * @member {number|Long} code
         * @memberof proto.AuthResponse
         * @instance
         */
        AuthResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AuthResponse status.
         * @member {string} status
         * @memberof proto.AuthResponse
         * @instance
         */
        AuthResponse.prototype.status = "";

        /**
         * AuthResponse token.
         * @member {Uint8Array} token
         * @memberof proto.AuthResponse
         * @instance
         */
        AuthResponse.prototype.token = $util.newBuffer([]);

        /**
         * AuthResponse type.
         * @member {string} type
         * @memberof proto.AuthResponse
         * @instance
         */
        AuthResponse.prototype.type = "";

        /**
         * AuthResponse message.
         * @member {string} message
         * @memberof proto.AuthResponse
         * @instance
         */
        AuthResponse.prototype.message = "";

        /**
         * AuthResponse refreshedToken.
         * @member {Uint8Array} refreshedToken
         * @memberof proto.AuthResponse
         * @instance
         */
        AuthResponse.prototype.refreshedToken = $util.newBuffer([]);

        /**
         * AuthResponse validationError.
         * @member {Array.<proto.IValidationError>} validationError
         * @memberof proto.AuthResponse
         * @instance
         */
        AuthResponse.prototype.validationError = $util.emptyArray;

        /**
         * Creates a new AuthResponse instance using the specified properties.
         * @function create
         * @memberof proto.AuthResponse
         * @static
         * @param {proto.IAuthResponse=} [properties] Properties to set
         * @returns {proto.AuthResponse} AuthResponse instance
         */
        AuthResponse.create = function create(properties) {
            return new AuthResponse(properties);
        };

        /**
         * Encodes the specified AuthResponse message. Does not implicitly {@link proto.AuthResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.AuthResponse
         * @static
         * @param {proto.IAuthResponse} message AuthResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.token);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.message);
            if (message.refreshedToken != null && message.hasOwnProperty("refreshedToken"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.refreshedToken);
            if (message.validationError != null && message.validationError.length)
                for (var i = 0; i < message.validationError.length; ++i)
                    $root.proto.ValidationError.encode(message.validationError[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link proto.AuthResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AuthResponse
         * @static
         * @param {proto.IAuthResponse} message AuthResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AuthResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AuthResponse} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AuthResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.token = reader.bytes();
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                case 5:
                    message.message = reader.string();
                    break;
                case 6:
                    message.refreshedToken = reader.bytes();
                    break;
                case 7:
                    if (!(message.validationError && message.validationError.length))
                        message.validationError = [];
                    message.validationError.push($root.proto.ValidationError.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AuthResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AuthResponse} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthResponse message.
         * @function verify
         * @memberof proto.AuthResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.refreshedToken != null && message.hasOwnProperty("refreshedToken"))
                if (!(message.refreshedToken && typeof message.refreshedToken.length === "number" || $util.isString(message.refreshedToken)))
                    return "refreshedToken: buffer expected";
            if (message.validationError != null && message.hasOwnProperty("validationError")) {
                if (!Array.isArray(message.validationError))
                    return "validationError: array expected";
                for (var i = 0; i < message.validationError.length; ++i) {
                    var error = $root.proto.ValidationError.verify(message.validationError[i]);
                    if (error)
                        return "validationError." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AuthResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.AuthResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.AuthResponse} AuthResponse
         */
        AuthResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.AuthResponse)
                return object;
            var message = new $root.proto.AuthResponse();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length)
                    message.token = object.token;
            if (object.type != null)
                message.type = String(object.type);
            if (object.message != null)
                message.message = String(object.message);
            if (object.refreshedToken != null)
                if (typeof object.refreshedToken === "string")
                    $util.base64.decode(object.refreshedToken, message.refreshedToken = $util.newBuffer($util.base64.length(object.refreshedToken)), 0);
                else if (object.refreshedToken.length)
                    message.refreshedToken = object.refreshedToken;
            if (object.validationError) {
                if (!Array.isArray(object.validationError))
                    throw TypeError(".proto.AuthResponse.validationError: array expected");
                message.validationError = [];
                for (var i = 0; i < object.validationError.length; ++i) {
                    if (typeof object.validationError[i] !== "object")
                        throw TypeError(".proto.AuthResponse.validationError: object expected");
                    message.validationError[i] = $root.proto.ValidationError.fromObject(object.validationError[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AuthResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.AuthResponse
         * @static
         * @param {proto.AuthResponse} message AuthResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.validationError = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
                object.type = "";
                object.message = "";
                if (options.bytes === String)
                    object.refreshedToken = "";
                else {
                    object.refreshedToken = [];
                    if (options.bytes !== Array)
                        object.refreshedToken = $util.newBuffer(object.refreshedToken);
                }
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.refreshedToken != null && message.hasOwnProperty("refreshedToken"))
                object.refreshedToken = options.bytes === String ? $util.base64.encode(message.refreshedToken, 0, message.refreshedToken.length) : options.bytes === Array ? Array.prototype.slice.call(message.refreshedToken) : message.refreshedToken;
            if (message.validationError && message.validationError.length) {
                object.validationError = [];
                for (var j = 0; j < message.validationError.length; ++j)
                    object.validationError[j] = $root.proto.ValidationError.toObject(message.validationError[j], options);
            }
            return object;
        };

        /**
         * Converts this AuthResponse to JSON.
         * @function toJSON
         * @memberof proto.AuthResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthResponse;
    })();

    proto.RefreshTokenRequest = (function() {

        /**
         * Properties of a RefreshTokenRequest.
         * @memberof proto
         * @interface IRefreshTokenRequest
         * @property {Uint8Array|null} [refreshedToken] RefreshTokenRequest refreshedToken
         */

        /**
         * Constructs a new RefreshTokenRequest.
         * @memberof proto
         * @classdesc Represents a RefreshTokenRequest.
         * @implements IRefreshTokenRequest
         * @constructor
         * @param {proto.IRefreshTokenRequest=} [properties] Properties to set
         */
        function RefreshTokenRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RefreshTokenRequest refreshedToken.
         * @member {Uint8Array} refreshedToken
         * @memberof proto.RefreshTokenRequest
         * @instance
         */
        RefreshTokenRequest.prototype.refreshedToken = $util.newBuffer([]);

        /**
         * Creates a new RefreshTokenRequest instance using the specified properties.
         * @function create
         * @memberof proto.RefreshTokenRequest
         * @static
         * @param {proto.IRefreshTokenRequest=} [properties] Properties to set
         * @returns {proto.RefreshTokenRequest} RefreshTokenRequest instance
         */
        RefreshTokenRequest.create = function create(properties) {
            return new RefreshTokenRequest(properties);
        };

        /**
         * Encodes the specified RefreshTokenRequest message. Does not implicitly {@link proto.RefreshTokenRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.RefreshTokenRequest
         * @static
         * @param {proto.IRefreshTokenRequest} message RefreshTokenRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshTokenRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.refreshedToken != null && message.hasOwnProperty("refreshedToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.refreshedToken);
            return writer;
        };

        /**
         * Encodes the specified RefreshTokenRequest message, length delimited. Does not implicitly {@link proto.RefreshTokenRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RefreshTokenRequest
         * @static
         * @param {proto.IRefreshTokenRequest} message RefreshTokenRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshTokenRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RefreshTokenRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RefreshTokenRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RefreshTokenRequest} RefreshTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshTokenRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RefreshTokenRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.refreshedToken = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RefreshTokenRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RefreshTokenRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RefreshTokenRequest} RefreshTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshTokenRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RefreshTokenRequest message.
         * @function verify
         * @memberof proto.RefreshTokenRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RefreshTokenRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.refreshedToken != null && message.hasOwnProperty("refreshedToken"))
                if (!(message.refreshedToken && typeof message.refreshedToken.length === "number" || $util.isString(message.refreshedToken)))
                    return "refreshedToken: buffer expected";
            return null;
        };

        /**
         * Creates a RefreshTokenRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RefreshTokenRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RefreshTokenRequest} RefreshTokenRequest
         */
        RefreshTokenRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RefreshTokenRequest)
                return object;
            var message = new $root.proto.RefreshTokenRequest();
            if (object.refreshedToken != null)
                if (typeof object.refreshedToken === "string")
                    $util.base64.decode(object.refreshedToken, message.refreshedToken = $util.newBuffer($util.base64.length(object.refreshedToken)), 0);
                else if (object.refreshedToken.length)
                    message.refreshedToken = object.refreshedToken;
            return message;
        };

        /**
         * Creates a plain object from a RefreshTokenRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RefreshTokenRequest
         * @static
         * @param {proto.RefreshTokenRequest} message RefreshTokenRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RefreshTokenRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.refreshedToken = "";
                else {
                    object.refreshedToken = [];
                    if (options.bytes !== Array)
                        object.refreshedToken = $util.newBuffer(object.refreshedToken);
                }
            if (message.refreshedToken != null && message.hasOwnProperty("refreshedToken"))
                object.refreshedToken = options.bytes === String ? $util.base64.encode(message.refreshedToken, 0, message.refreshedToken.length) : options.bytes === Array ? Array.prototype.slice.call(message.refreshedToken) : message.refreshedToken;
            return object;
        };

        /**
         * Converts this RefreshTokenRequest to JSON.
         * @function toJSON
         * @memberof proto.RefreshTokenRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RefreshTokenRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RefreshTokenRequest;
    })();

    proto.OAUTHRequest = (function() {

        /**
         * Properties of a OAUTHRequest.
         * @memberof proto
         * @interface IOAUTHRequest
         * @property {proto.OAUTHRequest.Service|null} [service] OAUTHRequest service
         * @property {string|null} [code] OAUTHRequest code
         */

        /**
         * Constructs a new OAUTHRequest.
         * @memberof proto
         * @classdesc Represents a OAUTHRequest.
         * @implements IOAUTHRequest
         * @constructor
         * @param {proto.IOAUTHRequest=} [properties] Properties to set
         */
        function OAUTHRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OAUTHRequest service.
         * @member {proto.OAUTHRequest.Service} service
         * @memberof proto.OAUTHRequest
         * @instance
         */
        OAUTHRequest.prototype.service = 0;

        /**
         * OAUTHRequest code.
         * @member {string} code
         * @memberof proto.OAUTHRequest
         * @instance
         */
        OAUTHRequest.prototype.code = "";

        /**
         * Creates a new OAUTHRequest instance using the specified properties.
         * @function create
         * @memberof proto.OAUTHRequest
         * @static
         * @param {proto.IOAUTHRequest=} [properties] Properties to set
         * @returns {proto.OAUTHRequest} OAUTHRequest instance
         */
        OAUTHRequest.create = function create(properties) {
            return new OAUTHRequest(properties);
        };

        /**
         * Encodes the specified OAUTHRequest message. Does not implicitly {@link proto.OAUTHRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.OAUTHRequest
         * @static
         * @param {proto.IOAUTHRequest} message OAUTHRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OAUTHRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.service != null && message.hasOwnProperty("service"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.service);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified OAUTHRequest message, length delimited. Does not implicitly {@link proto.OAUTHRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.OAUTHRequest
         * @static
         * @param {proto.IOAUTHRequest} message OAUTHRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OAUTHRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a OAUTHRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.OAUTHRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.OAUTHRequest} OAUTHRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OAUTHRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.OAUTHRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.service = reader.int32();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a OAUTHRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.OAUTHRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.OAUTHRequest} OAUTHRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OAUTHRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a OAUTHRequest message.
         * @function verify
         * @memberof proto.OAUTHRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OAUTHRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.service != null && message.hasOwnProperty("service"))
                switch (message.service) {
                default:
                    return "service: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a OAUTHRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.OAUTHRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.OAUTHRequest} OAUTHRequest
         */
        OAUTHRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.OAUTHRequest)
                return object;
            var message = new $root.proto.OAUTHRequest();
            switch (object.service) {
            case "Invalid":
            case 0:
                message.service = 0;
                break;
            case "Google":
            case 1:
                message.service = 1;
                break;
            case "Discord":
            case 2:
                message.service = 2;
                break;
            }
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a OAUTHRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.OAUTHRequest
         * @static
         * @param {proto.OAUTHRequest} message OAUTHRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OAUTHRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.service = options.enums === String ? "Invalid" : 0;
                object.code = "";
            }
            if (message.service != null && message.hasOwnProperty("service"))
                object.service = options.enums === String ? $root.proto.OAUTHRequest.Service[message.service] : message.service;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this OAUTHRequest to JSON.
         * @function toJSON
         * @memberof proto.OAUTHRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OAUTHRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Service enum.
         * @name proto.OAUTHRequest.Service
         * @enum {string}
         * @property {number} Invalid=0 Invalid value
         * @property {number} Google=1 Google value
         * @property {number} Discord=2 Discord value
         */
        OAUTHRequest.Service = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Invalid"] = 0;
            values[valuesById[1] = "Google"] = 1;
            values[valuesById[2] = "Discord"] = 2;
            return values;
        })();

        return OAUTHRequest;
    })();

    proto.AuthService = (function() {

        /**
         * Constructs a new AuthService service.
         * @memberof proto
         * @classdesc Represents an AuthService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AuthService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AuthService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AuthService;

        /**
         * Creates new AuthService service using the specified rpc implementation.
         * @function create
         * @memberof proto.AuthService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AuthService} RPC service. Useful where requests and/or responses are streamed.
         */
        AuthService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link proto.AuthService#authenticate}.
         * @memberof proto.AuthService
         * @typedef AuthenticateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.AuthResponse} [response] AuthResponse
         */

        /**
         * Calls Authenticate.
         * @function authenticate
         * @memberof proto.AuthService
         * @instance
         * @param {proto.IAuthRequest} request AuthRequest message or plain object
         * @param {proto.AuthService.AuthenticateCallback} callback Node-style callback called with the error, if any, and AuthResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.authenticate = function authenticate(request, callback) {
            return this.rpcCall(authenticate, $root.proto.AuthRequest, $root.proto.AuthResponse, request, callback);
        }, "name", { value: "Authenticate" });

        /**
         * Calls Authenticate.
         * @function authenticate
         * @memberof proto.AuthService
         * @instance
         * @param {proto.IAuthRequest} request AuthRequest message or plain object
         * @returns {Promise<proto.AuthResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.AuthService#callbackOAUTH}.
         * @memberof proto.AuthService
         * @typedef CallbackOAUTHCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.AuthResponse} [response] AuthResponse
         */

        /**
         * Calls CallbackOAUTH.
         * @function callbackOAUTH
         * @memberof proto.AuthService
         * @instance
         * @param {proto.IOAUTHRequest} request OAUTHRequest message or plain object
         * @param {proto.AuthService.CallbackOAUTHCallback} callback Node-style callback called with the error, if any, and AuthResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.callbackOAUTH = function callbackOAUTH(request, callback) {
            return this.rpcCall(callbackOAUTH, $root.proto.OAUTHRequest, $root.proto.AuthResponse, request, callback);
        }, "name", { value: "CallbackOAUTH" });

        /**
         * Calls CallbackOAUTH.
         * @function callbackOAUTH
         * @memberof proto.AuthService
         * @instance
         * @param {proto.IOAUTHRequest} request OAUTHRequest message or plain object
         * @returns {Promise<proto.AuthResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.AuthService#refreshToken}.
         * @memberof proto.AuthService
         * @typedef RefreshTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.AuthResponse} [response] AuthResponse
         */

        /**
         * Calls RefreshToken.
         * @function refreshToken
         * @memberof proto.AuthService
         * @instance
         * @param {proto.IRefreshTokenRequest} request RefreshTokenRequest message or plain object
         * @param {proto.AuthService.RefreshTokenCallback} callback Node-style callback called with the error, if any, and AuthResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.refreshToken = function refreshToken(request, callback) {
            return this.rpcCall(refreshToken, $root.proto.RefreshTokenRequest, $root.proto.AuthResponse, request, callback);
        }, "name", { value: "RefreshToken" });

        /**
         * Calls RefreshToken.
         * @function refreshToken
         * @memberof proto.AuthService
         * @instance
         * @param {proto.IRefreshTokenRequest} request RefreshTokenRequest message or plain object
         * @returns {Promise<proto.AuthResponse>} Promise
         * @variation 2
         */

        return AuthService;
    })();

    proto.TheaterMembers = (function() {

        /**
         * Properties of a TheaterMembers.
         * @memberof proto
         * @interface ITheaterMembers
         * @property {Array.<proto.IUser>|null} [members] TheaterMembers members
         */

        /**
         * Constructs a new TheaterMembers.
         * @memberof proto
         * @classdesc Represents a TheaterMembers.
         * @implements ITheaterMembers
         * @constructor
         * @param {proto.ITheaterMembers=} [properties] Properties to set
         */
        function TheaterMembers(properties) {
            this.members = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TheaterMembers members.
         * @member {Array.<proto.IUser>} members
         * @memberof proto.TheaterMembers
         * @instance
         */
        TheaterMembers.prototype.members = $util.emptyArray;

        /**
         * Creates a new TheaterMembers instance using the specified properties.
         * @function create
         * @memberof proto.TheaterMembers
         * @static
         * @param {proto.ITheaterMembers=} [properties] Properties to set
         * @returns {proto.TheaterMembers} TheaterMembers instance
         */
        TheaterMembers.create = function create(properties) {
            return new TheaterMembers(properties);
        };

        /**
         * Encodes the specified TheaterMembers message. Does not implicitly {@link proto.TheaterMembers.verify|verify} messages.
         * @function encode
         * @memberof proto.TheaterMembers
         * @static
         * @param {proto.ITheaterMembers} message TheaterMembers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterMembers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.members != null && message.members.length)
                for (var i = 0; i < message.members.length; ++i)
                    $root.proto.User.encode(message.members[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TheaterMembers message, length delimited. Does not implicitly {@link proto.TheaterMembers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TheaterMembers
         * @static
         * @param {proto.ITheaterMembers} message TheaterMembers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterMembers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TheaterMembers message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TheaterMembers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TheaterMembers} TheaterMembers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterMembers.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TheaterMembers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.members && message.members.length))
                        message.members = [];
                    message.members.push($root.proto.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TheaterMembers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TheaterMembers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TheaterMembers} TheaterMembers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterMembers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TheaterMembers message.
         * @function verify
         * @memberof proto.TheaterMembers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TheaterMembers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!Array.isArray(message.members))
                    return "members: array expected";
                for (var i = 0; i < message.members.length; ++i) {
                    var error = $root.proto.User.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TheaterMembers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TheaterMembers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TheaterMembers} TheaterMembers
         */
        TheaterMembers.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TheaterMembers)
                return object;
            var message = new $root.proto.TheaterMembers();
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".proto.TheaterMembers.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".proto.TheaterMembers.members: object expected");
                    message.members[i] = $root.proto.User.fromObject(object.members[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TheaterMembers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TheaterMembers
         * @static
         * @param {proto.TheaterMembers} message TheaterMembers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TheaterMembers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.members = [];
            if (message.members && message.members.length) {
                object.members = [];
                for (var j = 0; j < message.members.length; ++j)
                    object.members[j] = $root.proto.User.toObject(message.members[j], options);
            }
            return object;
        };

        /**
         * Converts this TheaterMembers to JSON.
         * @function toJSON
         * @memberof proto.TheaterMembers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TheaterMembers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TheaterMembers;
    })();

    proto.NotificationMsgEvent = (function() {

        /**
         * Properties of a NotificationMsgEvent.
         * @memberof proto
         * @interface INotificationMsgEvent
         * @property {proto.INotification|null} [notification] NotificationMsgEvent notification
         */

        /**
         * Constructs a new NotificationMsgEvent.
         * @memberof proto
         * @classdesc Represents a NotificationMsgEvent.
         * @implements INotificationMsgEvent
         * @constructor
         * @param {proto.INotificationMsgEvent=} [properties] Properties to set
         */
        function NotificationMsgEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotificationMsgEvent notification.
         * @member {proto.INotification|null|undefined} notification
         * @memberof proto.NotificationMsgEvent
         * @instance
         */
        NotificationMsgEvent.prototype.notification = null;

        /**
         * Creates a new NotificationMsgEvent instance using the specified properties.
         * @function create
         * @memberof proto.NotificationMsgEvent
         * @static
         * @param {proto.INotificationMsgEvent=} [properties] Properties to set
         * @returns {proto.NotificationMsgEvent} NotificationMsgEvent instance
         */
        NotificationMsgEvent.create = function create(properties) {
            return new NotificationMsgEvent(properties);
        };

        /**
         * Encodes the specified NotificationMsgEvent message. Does not implicitly {@link proto.NotificationMsgEvent.verify|verify} messages.
         * @function encode
         * @memberof proto.NotificationMsgEvent
         * @static
         * @param {proto.INotificationMsgEvent} message NotificationMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotificationMsgEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.notification != null && message.hasOwnProperty("notification"))
                $root.proto.Notification.encode(message.notification, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotificationMsgEvent message, length delimited. Does not implicitly {@link proto.NotificationMsgEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotificationMsgEvent
         * @static
         * @param {proto.INotificationMsgEvent} message NotificationMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotificationMsgEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotificationMsgEvent message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotificationMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotificationMsgEvent} NotificationMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotificationMsgEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotificationMsgEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.notification = $root.proto.Notification.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotificationMsgEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotificationMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotificationMsgEvent} NotificationMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotificationMsgEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotificationMsgEvent message.
         * @function verify
         * @memberof proto.NotificationMsgEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotificationMsgEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.notification != null && message.hasOwnProperty("notification")) {
                var error = $root.proto.Notification.verify(message.notification);
                if (error)
                    return "notification." + error;
            }
            return null;
        };

        /**
         * Creates a NotificationMsgEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.NotificationMsgEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.NotificationMsgEvent} NotificationMsgEvent
         */
        NotificationMsgEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.NotificationMsgEvent)
                return object;
            var message = new $root.proto.NotificationMsgEvent();
            if (object.notification != null) {
                if (typeof object.notification !== "object")
                    throw TypeError(".proto.NotificationMsgEvent.notification: object expected");
                message.notification = $root.proto.Notification.fromObject(object.notification);
            }
            return message;
        };

        /**
         * Creates a plain object from a NotificationMsgEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.NotificationMsgEvent
         * @static
         * @param {proto.NotificationMsgEvent} message NotificationMsgEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotificationMsgEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.notification = null;
            if (message.notification != null && message.hasOwnProperty("notification"))
                object.notification = $root.proto.Notification.toObject(message.notification, options);
            return object;
        };

        /**
         * Converts this NotificationMsgEvent to JSON.
         * @function toJSON
         * @memberof proto.NotificationMsgEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotificationMsgEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotificationMsgEvent;
    })();

    proto.FriendRequestAcceptedMsgEvent = (function() {

        /**
         * Properties of a FriendRequestAcceptedMsgEvent.
         * @memberof proto
         * @interface IFriendRequestAcceptedMsgEvent
         * @property {proto.IUser|null} [friend] FriendRequestAcceptedMsgEvent friend
         */

        /**
         * Constructs a new FriendRequestAcceptedMsgEvent.
         * @memberof proto
         * @classdesc Represents a FriendRequestAcceptedMsgEvent.
         * @implements IFriendRequestAcceptedMsgEvent
         * @constructor
         * @param {proto.IFriendRequestAcceptedMsgEvent=} [properties] Properties to set
         */
        function FriendRequestAcceptedMsgEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendRequestAcceptedMsgEvent friend.
         * @member {proto.IUser|null|undefined} friend
         * @memberof proto.FriendRequestAcceptedMsgEvent
         * @instance
         */
        FriendRequestAcceptedMsgEvent.prototype.friend = null;

        /**
         * Creates a new FriendRequestAcceptedMsgEvent instance using the specified properties.
         * @function create
         * @memberof proto.FriendRequestAcceptedMsgEvent
         * @static
         * @param {proto.IFriendRequestAcceptedMsgEvent=} [properties] Properties to set
         * @returns {proto.FriendRequestAcceptedMsgEvent} FriendRequestAcceptedMsgEvent instance
         */
        FriendRequestAcceptedMsgEvent.create = function create(properties) {
            return new FriendRequestAcceptedMsgEvent(properties);
        };

        /**
         * Encodes the specified FriendRequestAcceptedMsgEvent message. Does not implicitly {@link proto.FriendRequestAcceptedMsgEvent.verify|verify} messages.
         * @function encode
         * @memberof proto.FriendRequestAcceptedMsgEvent
         * @static
         * @param {proto.IFriendRequestAcceptedMsgEvent} message FriendRequestAcceptedMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRequestAcceptedMsgEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friend != null && message.hasOwnProperty("friend"))
                $root.proto.User.encode(message.friend, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FriendRequestAcceptedMsgEvent message, length delimited. Does not implicitly {@link proto.FriendRequestAcceptedMsgEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.FriendRequestAcceptedMsgEvent
         * @static
         * @param {proto.IFriendRequestAcceptedMsgEvent} message FriendRequestAcceptedMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRequestAcceptedMsgEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendRequestAcceptedMsgEvent message from the specified reader or buffer.
         * @function decode
         * @memberof proto.FriendRequestAcceptedMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.FriendRequestAcceptedMsgEvent} FriendRequestAcceptedMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRequestAcceptedMsgEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FriendRequestAcceptedMsgEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.friend = $root.proto.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendRequestAcceptedMsgEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.FriendRequestAcceptedMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.FriendRequestAcceptedMsgEvent} FriendRequestAcceptedMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRequestAcceptedMsgEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendRequestAcceptedMsgEvent message.
         * @function verify
         * @memberof proto.FriendRequestAcceptedMsgEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendRequestAcceptedMsgEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friend != null && message.hasOwnProperty("friend")) {
                var error = $root.proto.User.verify(message.friend);
                if (error)
                    return "friend." + error;
            }
            return null;
        };

        /**
         * Creates a FriendRequestAcceptedMsgEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.FriendRequestAcceptedMsgEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.FriendRequestAcceptedMsgEvent} FriendRequestAcceptedMsgEvent
         */
        FriendRequestAcceptedMsgEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.FriendRequestAcceptedMsgEvent)
                return object;
            var message = new $root.proto.FriendRequestAcceptedMsgEvent();
            if (object.friend != null) {
                if (typeof object.friend !== "object")
                    throw TypeError(".proto.FriendRequestAcceptedMsgEvent.friend: object expected");
                message.friend = $root.proto.User.fromObject(object.friend);
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendRequestAcceptedMsgEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.FriendRequestAcceptedMsgEvent
         * @static
         * @param {proto.FriendRequestAcceptedMsgEvent} message FriendRequestAcceptedMsgEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendRequestAcceptedMsgEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.friend = null;
            if (message.friend != null && message.hasOwnProperty("friend"))
                object.friend = $root.proto.User.toObject(message.friend, options);
            return object;
        };

        /**
         * Converts this FriendRequestAcceptedMsgEvent to JSON.
         * @function toJSON
         * @memberof proto.FriendRequestAcceptedMsgEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendRequestAcceptedMsgEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendRequestAcceptedMsgEvent;
    })();

    proto.PingMsgEvent = (function() {

        /**
         * Properties of a PingMsgEvent.
         * @memberof proto
         * @interface IPingMsgEvent
         * @property {proto.PERSONAL_STATE|null} [state] PingMsgEvent state
         */

        /**
         * Constructs a new PingMsgEvent.
         * @memberof proto
         * @classdesc Represents a PingMsgEvent.
         * @implements IPingMsgEvent
         * @constructor
         * @param {proto.IPingMsgEvent=} [properties] Properties to set
         */
        function PingMsgEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingMsgEvent state.
         * @member {proto.PERSONAL_STATE} state
         * @memberof proto.PingMsgEvent
         * @instance
         */
        PingMsgEvent.prototype.state = 0;

        /**
         * Creates a new PingMsgEvent instance using the specified properties.
         * @function create
         * @memberof proto.PingMsgEvent
         * @static
         * @param {proto.IPingMsgEvent=} [properties] Properties to set
         * @returns {proto.PingMsgEvent} PingMsgEvent instance
         */
        PingMsgEvent.create = function create(properties) {
            return new PingMsgEvent(properties);
        };

        /**
         * Encodes the specified PingMsgEvent message. Does not implicitly {@link proto.PingMsgEvent.verify|verify} messages.
         * @function encode
         * @memberof proto.PingMsgEvent
         * @static
         * @param {proto.IPingMsgEvent} message PingMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingMsgEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified PingMsgEvent message, length delimited. Does not implicitly {@link proto.PingMsgEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.PingMsgEvent
         * @static
         * @param {proto.IPingMsgEvent} message PingMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingMsgEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingMsgEvent message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PingMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.PingMsgEvent} PingMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingMsgEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PingMsgEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingMsgEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.PingMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.PingMsgEvent} PingMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingMsgEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingMsgEvent message.
         * @function verify
         * @memberof proto.PingMsgEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingMsgEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a PingMsgEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.PingMsgEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.PingMsgEvent} PingMsgEvent
         */
        PingMsgEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.PingMsgEvent)
                return object;
            var message = new $root.proto.PingMsgEvent();
            switch (object.state) {
            case "OFFLINE":
            case 0:
                message.state = 0;
                break;
            case "ONLINE":
            case 1:
                message.state = 1;
                break;
            case "IDLE":
            case 2:
                message.state = 2;
                break;
            case "BUSY":
            case 3:
                message.state = 3;
                break;
            case "INVISIBLE":
            case 4:
                message.state = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a PingMsgEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.PingMsgEvent
         * @static
         * @param {proto.PingMsgEvent} message PingMsgEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingMsgEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.state = options.enums === String ? "OFFLINE" : 0;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.proto.PERSONAL_STATE[message.state] : message.state;
            return object;
        };

        /**
         * Converts this PingMsgEvent to JSON.
         * @function toJSON
         * @memberof proto.PingMsgEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingMsgEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingMsgEvent;
    })();

    proto.PersonalStateMsgEvent = (function() {

        /**
         * Properties of a PersonalStateMsgEvent.
         * @memberof proto
         * @interface IPersonalStateMsgEvent
         * @property {proto.IUser|null} [user] PersonalStateMsgEvent user
         * @property {proto.PERSONAL_STATE|null} [state] PersonalStateMsgEvent state
         * @property {proto.IActivity|null} [activity] PersonalStateMsgEvent activity
         */

        /**
         * Constructs a new PersonalStateMsgEvent.
         * @memberof proto
         * @classdesc Represents a PersonalStateMsgEvent.
         * @implements IPersonalStateMsgEvent
         * @constructor
         * @param {proto.IPersonalStateMsgEvent=} [properties] Properties to set
         */
        function PersonalStateMsgEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PersonalStateMsgEvent user.
         * @member {proto.IUser|null|undefined} user
         * @memberof proto.PersonalStateMsgEvent
         * @instance
         */
        PersonalStateMsgEvent.prototype.user = null;

        /**
         * PersonalStateMsgEvent state.
         * @member {proto.PERSONAL_STATE} state
         * @memberof proto.PersonalStateMsgEvent
         * @instance
         */
        PersonalStateMsgEvent.prototype.state = 0;

        /**
         * PersonalStateMsgEvent activity.
         * @member {proto.IActivity|null|undefined} activity
         * @memberof proto.PersonalStateMsgEvent
         * @instance
         */
        PersonalStateMsgEvent.prototype.activity = null;

        /**
         * Creates a new PersonalStateMsgEvent instance using the specified properties.
         * @function create
         * @memberof proto.PersonalStateMsgEvent
         * @static
         * @param {proto.IPersonalStateMsgEvent=} [properties] Properties to set
         * @returns {proto.PersonalStateMsgEvent} PersonalStateMsgEvent instance
         */
        PersonalStateMsgEvent.create = function create(properties) {
            return new PersonalStateMsgEvent(properties);
        };

        /**
         * Encodes the specified PersonalStateMsgEvent message. Does not implicitly {@link proto.PersonalStateMsgEvent.verify|verify} messages.
         * @function encode
         * @memberof proto.PersonalStateMsgEvent
         * @static
         * @param {proto.IPersonalStateMsgEvent} message PersonalStateMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonalStateMsgEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.activity != null && message.hasOwnProperty("activity"))
                $root.proto.Activity.encode(message.activity, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PersonalStateMsgEvent message, length delimited. Does not implicitly {@link proto.PersonalStateMsgEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.PersonalStateMsgEvent
         * @static
         * @param {proto.IPersonalStateMsgEvent} message PersonalStateMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonalStateMsgEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PersonalStateMsgEvent message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PersonalStateMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.PersonalStateMsgEvent} PersonalStateMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonalStateMsgEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PersonalStateMsgEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.proto.User.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.activity = $root.proto.Activity.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PersonalStateMsgEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.PersonalStateMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.PersonalStateMsgEvent} PersonalStateMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonalStateMsgEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PersonalStateMsgEvent message.
         * @function verify
         * @memberof proto.PersonalStateMsgEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PersonalStateMsgEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.proto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.activity != null && message.hasOwnProperty("activity")) {
                var error = $root.proto.Activity.verify(message.activity);
                if (error)
                    return "activity." + error;
            }
            return null;
        };

        /**
         * Creates a PersonalStateMsgEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.PersonalStateMsgEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.PersonalStateMsgEvent} PersonalStateMsgEvent
         */
        PersonalStateMsgEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.PersonalStateMsgEvent)
                return object;
            var message = new $root.proto.PersonalStateMsgEvent();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".proto.PersonalStateMsgEvent.user: object expected");
                message.user = $root.proto.User.fromObject(object.user);
            }
            switch (object.state) {
            case "OFFLINE":
            case 0:
                message.state = 0;
                break;
            case "ONLINE":
            case 1:
                message.state = 1;
                break;
            case "IDLE":
            case 2:
                message.state = 2;
                break;
            case "BUSY":
            case 3:
                message.state = 3;
                break;
            case "INVISIBLE":
            case 4:
                message.state = 4;
                break;
            }
            if (object.activity != null) {
                if (typeof object.activity !== "object")
                    throw TypeError(".proto.PersonalStateMsgEvent.activity: object expected");
                message.activity = $root.proto.Activity.fromObject(object.activity);
            }
            return message;
        };

        /**
         * Creates a plain object from a PersonalStateMsgEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.PersonalStateMsgEvent
         * @static
         * @param {proto.PersonalStateMsgEvent} message PersonalStateMsgEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PersonalStateMsgEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = null;
                object.state = options.enums === String ? "OFFLINE" : 0;
                object.activity = null;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.proto.User.toObject(message.user, options);
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.proto.PERSONAL_STATE[message.state] : message.state;
            if (message.activity != null && message.hasOwnProperty("activity"))
                object.activity = $root.proto.Activity.toObject(message.activity, options);
            return object;
        };

        /**
         * Converts this PersonalStateMsgEvent to JSON.
         * @function toJSON
         * @memberof proto.PersonalStateMsgEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PersonalStateMsgEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PersonalStateMsgEvent;
    })();

    proto.PersonalActivityMsgEvent = (function() {

        /**
         * Properties of a PersonalActivityMsgEvent.
         * @memberof proto
         * @interface IPersonalActivityMsgEvent
         * @property {proto.IUser|null} [user] PersonalActivityMsgEvent user
         * @property {proto.IActivity|null} [activity] PersonalActivityMsgEvent activity
         */

        /**
         * Constructs a new PersonalActivityMsgEvent.
         * @memberof proto
         * @classdesc Represents a PersonalActivityMsgEvent.
         * @implements IPersonalActivityMsgEvent
         * @constructor
         * @param {proto.IPersonalActivityMsgEvent=} [properties] Properties to set
         */
        function PersonalActivityMsgEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PersonalActivityMsgEvent user.
         * @member {proto.IUser|null|undefined} user
         * @memberof proto.PersonalActivityMsgEvent
         * @instance
         */
        PersonalActivityMsgEvent.prototype.user = null;

        /**
         * PersonalActivityMsgEvent activity.
         * @member {proto.IActivity|null|undefined} activity
         * @memberof proto.PersonalActivityMsgEvent
         * @instance
         */
        PersonalActivityMsgEvent.prototype.activity = null;

        /**
         * Creates a new PersonalActivityMsgEvent instance using the specified properties.
         * @function create
         * @memberof proto.PersonalActivityMsgEvent
         * @static
         * @param {proto.IPersonalActivityMsgEvent=} [properties] Properties to set
         * @returns {proto.PersonalActivityMsgEvent} PersonalActivityMsgEvent instance
         */
        PersonalActivityMsgEvent.create = function create(properties) {
            return new PersonalActivityMsgEvent(properties);
        };

        /**
         * Encodes the specified PersonalActivityMsgEvent message. Does not implicitly {@link proto.PersonalActivityMsgEvent.verify|verify} messages.
         * @function encode
         * @memberof proto.PersonalActivityMsgEvent
         * @static
         * @param {proto.IPersonalActivityMsgEvent} message PersonalActivityMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonalActivityMsgEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.activity != null && message.hasOwnProperty("activity"))
                $root.proto.Activity.encode(message.activity, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PersonalActivityMsgEvent message, length delimited. Does not implicitly {@link proto.PersonalActivityMsgEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.PersonalActivityMsgEvent
         * @static
         * @param {proto.IPersonalActivityMsgEvent} message PersonalActivityMsgEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonalActivityMsgEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PersonalActivityMsgEvent message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PersonalActivityMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.PersonalActivityMsgEvent} PersonalActivityMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonalActivityMsgEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PersonalActivityMsgEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.proto.User.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.activity = $root.proto.Activity.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PersonalActivityMsgEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.PersonalActivityMsgEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.PersonalActivityMsgEvent} PersonalActivityMsgEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonalActivityMsgEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PersonalActivityMsgEvent message.
         * @function verify
         * @memberof proto.PersonalActivityMsgEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PersonalActivityMsgEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.proto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.activity != null && message.hasOwnProperty("activity")) {
                var error = $root.proto.Activity.verify(message.activity);
                if (error)
                    return "activity." + error;
            }
            return null;
        };

        /**
         * Creates a PersonalActivityMsgEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.PersonalActivityMsgEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.PersonalActivityMsgEvent} PersonalActivityMsgEvent
         */
        PersonalActivityMsgEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.PersonalActivityMsgEvent)
                return object;
            var message = new $root.proto.PersonalActivityMsgEvent();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".proto.PersonalActivityMsgEvent.user: object expected");
                message.user = $root.proto.User.fromObject(object.user);
            }
            if (object.activity != null) {
                if (typeof object.activity !== "object")
                    throw TypeError(".proto.PersonalActivityMsgEvent.activity: object expected");
                message.activity = $root.proto.Activity.fromObject(object.activity);
            }
            return message;
        };

        /**
         * Creates a plain object from a PersonalActivityMsgEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.PersonalActivityMsgEvent
         * @static
         * @param {proto.PersonalActivityMsgEvent} message PersonalActivityMsgEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PersonalActivityMsgEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = null;
                object.activity = null;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.proto.User.toObject(message.user, options);
            if (message.activity != null && message.hasOwnProperty("activity"))
                object.activity = $root.proto.Activity.toObject(message.activity, options);
            return object;
        };

        /**
         * Converts this PersonalActivityMsgEvent to JSON.
         * @function toJSON
         * @memberof proto.PersonalActivityMsgEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PersonalActivityMsgEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PersonalActivityMsgEvent;
    })();

    proto.TheaterVideoPlayer = (function() {

        /**
         * Properties of a TheaterVideoPlayer.
         * @memberof proto
         * @interface ITheaterVideoPlayer
         * @property {string|null} [theaterId] TheaterVideoPlayer theaterId
         * @property {proto.IMediaSource|null} [mediaSource] TheaterVideoPlayer mediaSource
         * @property {number|null} [currentTime] TheaterVideoPlayer currentTime
         * @property {proto.TheaterVideoPlayer.State|null} [state] TheaterVideoPlayer state
         * @property {string|null} [userId] TheaterVideoPlayer userId
         * @property {google.protobuf.ITimestamp|null} [sentAt] TheaterVideoPlayer sentAt
         */

        /**
         * Constructs a new TheaterVideoPlayer.
         * @memberof proto
         * @classdesc Represents a TheaterVideoPlayer.
         * @implements ITheaterVideoPlayer
         * @constructor
         * @param {proto.ITheaterVideoPlayer=} [properties] Properties to set
         */
        function TheaterVideoPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TheaterVideoPlayer theaterId.
         * @member {string} theaterId
         * @memberof proto.TheaterVideoPlayer
         * @instance
         */
        TheaterVideoPlayer.prototype.theaterId = "";

        /**
         * TheaterVideoPlayer mediaSource.
         * @member {proto.IMediaSource|null|undefined} mediaSource
         * @memberof proto.TheaterVideoPlayer
         * @instance
         */
        TheaterVideoPlayer.prototype.mediaSource = null;

        /**
         * TheaterVideoPlayer currentTime.
         * @member {number} currentTime
         * @memberof proto.TheaterVideoPlayer
         * @instance
         */
        TheaterVideoPlayer.prototype.currentTime = 0;

        /**
         * TheaterVideoPlayer state.
         * @member {proto.TheaterVideoPlayer.State} state
         * @memberof proto.TheaterVideoPlayer
         * @instance
         */
        TheaterVideoPlayer.prototype.state = 0;

        /**
         * TheaterVideoPlayer userId.
         * @member {string} userId
         * @memberof proto.TheaterVideoPlayer
         * @instance
         */
        TheaterVideoPlayer.prototype.userId = "";

        /**
         * TheaterVideoPlayer sentAt.
         * @member {google.protobuf.ITimestamp|null|undefined} sentAt
         * @memberof proto.TheaterVideoPlayer
         * @instance
         */
        TheaterVideoPlayer.prototype.sentAt = null;

        /**
         * Creates a new TheaterVideoPlayer instance using the specified properties.
         * @function create
         * @memberof proto.TheaterVideoPlayer
         * @static
         * @param {proto.ITheaterVideoPlayer=} [properties] Properties to set
         * @returns {proto.TheaterVideoPlayer} TheaterVideoPlayer instance
         */
        TheaterVideoPlayer.create = function create(properties) {
            return new TheaterVideoPlayer(properties);
        };

        /**
         * Encodes the specified TheaterVideoPlayer message. Does not implicitly {@link proto.TheaterVideoPlayer.verify|verify} messages.
         * @function encode
         * @memberof proto.TheaterVideoPlayer
         * @static
         * @param {proto.ITheaterVideoPlayer} message TheaterVideoPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterVideoPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.theaterId);
            if (message.mediaSource != null && message.hasOwnProperty("mediaSource"))
                $root.proto.MediaSource.encode(message.mediaSource, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.currentTime != null && message.hasOwnProperty("currentTime"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.currentTime);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.userId);
            if (message.sentAt != null && message.hasOwnProperty("sentAt"))
                $root.google.protobuf.Timestamp.encode(message.sentAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TheaterVideoPlayer message, length delimited. Does not implicitly {@link proto.TheaterVideoPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TheaterVideoPlayer
         * @static
         * @param {proto.ITheaterVideoPlayer} message TheaterVideoPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterVideoPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TheaterVideoPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TheaterVideoPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TheaterVideoPlayer} TheaterVideoPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterVideoPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TheaterVideoPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.theaterId = reader.string();
                    break;
                case 2:
                    message.mediaSource = $root.proto.MediaSource.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.currentTime = reader.float();
                    break;
                case 5:
                    message.state = reader.int32();
                    break;
                case 6:
                    message.userId = reader.string();
                    break;
                case 7:
                    message.sentAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TheaterVideoPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TheaterVideoPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TheaterVideoPlayer} TheaterVideoPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterVideoPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TheaterVideoPlayer message.
         * @function verify
         * @memberof proto.TheaterVideoPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TheaterVideoPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                if (!$util.isString(message.theaterId))
                    return "theaterId: string expected";
            if (message.mediaSource != null && message.hasOwnProperty("mediaSource")) {
                var error = $root.proto.MediaSource.verify(message.mediaSource);
                if (error)
                    return "mediaSource." + error;
            }
            if (message.currentTime != null && message.hasOwnProperty("currentTime"))
                if (typeof message.currentTime !== "number")
                    return "currentTime: number expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.sentAt != null && message.hasOwnProperty("sentAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.sentAt);
                if (error)
                    return "sentAt." + error;
            }
            return null;
        };

        /**
         * Creates a TheaterVideoPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TheaterVideoPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TheaterVideoPlayer} TheaterVideoPlayer
         */
        TheaterVideoPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TheaterVideoPlayer)
                return object;
            var message = new $root.proto.TheaterVideoPlayer();
            if (object.theaterId != null)
                message.theaterId = String(object.theaterId);
            if (object.mediaSource != null) {
                if (typeof object.mediaSource !== "object")
                    throw TypeError(".proto.TheaterVideoPlayer.mediaSource: object expected");
                message.mediaSource = $root.proto.MediaSource.fromObject(object.mediaSource);
            }
            if (object.currentTime != null)
                message.currentTime = Number(object.currentTime);
            switch (object.state) {
            case "INVALID":
            case 0:
                message.state = 0;
                break;
            case "PLAYING":
            case 1:
                message.state = 1;
                break;
            case "PAUSED":
            case 2:
                message.state = 2;
                break;
            }
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.sentAt != null) {
                if (typeof object.sentAt !== "object")
                    throw TypeError(".proto.TheaterVideoPlayer.sentAt: object expected");
                message.sentAt = $root.google.protobuf.Timestamp.fromObject(object.sentAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a TheaterVideoPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TheaterVideoPlayer
         * @static
         * @param {proto.TheaterVideoPlayer} message TheaterVideoPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TheaterVideoPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.theaterId = "";
                object.mediaSource = null;
                object.currentTime = 0;
                object.state = options.enums === String ? "INVALID" : 0;
                object.userId = "";
                object.sentAt = null;
            }
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                object.theaterId = message.theaterId;
            if (message.mediaSource != null && message.hasOwnProperty("mediaSource"))
                object.mediaSource = $root.proto.MediaSource.toObject(message.mediaSource, options);
            if (message.currentTime != null && message.hasOwnProperty("currentTime"))
                object.currentTime = options.json && !isFinite(message.currentTime) ? String(message.currentTime) : message.currentTime;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.proto.TheaterVideoPlayer.State[message.state] : message.state;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.sentAt != null && message.hasOwnProperty("sentAt"))
                object.sentAt = $root.google.protobuf.Timestamp.toObject(message.sentAt, options);
            return object;
        };

        /**
         * Converts this TheaterVideoPlayer to JSON.
         * @function toJSON
         * @memberof proto.TheaterVideoPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TheaterVideoPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * State enum.
         * @name proto.TheaterVideoPlayer.State
         * @enum {string}
         * @property {number} INVALID=0 INVALID value
         * @property {number} PLAYING=1 PLAYING value
         * @property {number} PAUSED=2 PAUSED value
         */
        TheaterVideoPlayer.State = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "PLAYING"] = 1;
            values[valuesById[2] = "PAUSED"] = 2;
            return values;
        })();

        return TheaterVideoPlayer;
    })();

    /**
     * PRIVACY enum.
     * @name proto.PRIVACY
     * @enum {string}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} PUBLIC=1 PUBLIC value
     * @property {number} PRIVATE=2 PRIVATE value
     * @property {number} FRIENDS=3 FRIENDS value
     * @property {number} CHOOSEN_FRIENDS=4 CHOOSEN_FRIENDS value
     */
    proto.PRIVACY = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "PUBLIC"] = 1;
        values[valuesById[2] = "PRIVATE"] = 2;
        values[valuesById[3] = "FRIENDS"] = 3;
        values[valuesById[4] = "CHOOSEN_FRIENDS"] = 4;
        return values;
    })();

    /**
     * VIDEO_PLAYER_ACCESS enum.
     * @name proto.VIDEO_PLAYER_ACCESS
     * @enum {string}
     * @property {number} ACCESS_UNKNOWN=0 ACCESS_UNKNOWN value
     * @property {number} ACCESS_BY_USER=1 ACCESS_BY_USER value
     * @property {number} ACCESS_BY_EVERYONE=2 ACCESS_BY_EVERYONE value
     * @property {number} ACCESS_BY_FRIENDS=3 ACCESS_BY_FRIENDS value
     * @property {number} ACCESS_BY_CHOOSEN_FRIENDS=4 ACCESS_BY_CHOOSEN_FRIENDS value
     */
    proto.VIDEO_PLAYER_ACCESS = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ACCESS_UNKNOWN"] = 0;
        values[valuesById[1] = "ACCESS_BY_USER"] = 1;
        values[valuesById[2] = "ACCESS_BY_EVERYONE"] = 2;
        values[valuesById[3] = "ACCESS_BY_FRIENDS"] = 3;
        values[valuesById[4] = "ACCESS_BY_CHOOSEN_FRIENDS"] = 4;
        return values;
    })();

    proto.TheaterRole = (function() {

        /**
         * Properties of a TheaterRole.
         * @memberof proto
         * @interface ITheaterRole
         * @property {string|null} [id] TheaterRole id
         * @property {string|null} [theaterId] TheaterRole theaterId
         * @property {string|null} [title] TheaterRole title
         */

        /**
         * Constructs a new TheaterRole.
         * @memberof proto
         * @classdesc Represents a TheaterRole.
         * @implements ITheaterRole
         * @constructor
         * @param {proto.ITheaterRole=} [properties] Properties to set
         */
        function TheaterRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TheaterRole id.
         * @member {string} id
         * @memberof proto.TheaterRole
         * @instance
         */
        TheaterRole.prototype.id = "";

        /**
         * TheaterRole theaterId.
         * @member {string} theaterId
         * @memberof proto.TheaterRole
         * @instance
         */
        TheaterRole.prototype.theaterId = "";

        /**
         * TheaterRole title.
         * @member {string} title
         * @memberof proto.TheaterRole
         * @instance
         */
        TheaterRole.prototype.title = "";

        /**
         * Creates a new TheaterRole instance using the specified properties.
         * @function create
         * @memberof proto.TheaterRole
         * @static
         * @param {proto.ITheaterRole=} [properties] Properties to set
         * @returns {proto.TheaterRole} TheaterRole instance
         */
        TheaterRole.create = function create(properties) {
            return new TheaterRole(properties);
        };

        /**
         * Encodes the specified TheaterRole message. Does not implicitly {@link proto.TheaterRole.verify|verify} messages.
         * @function encode
         * @memberof proto.TheaterRole
         * @static
         * @param {proto.ITheaterRole} message TheaterRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.theaterId);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            return writer;
        };

        /**
         * Encodes the specified TheaterRole message, length delimited. Does not implicitly {@link proto.TheaterRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TheaterRole
         * @static
         * @param {proto.ITheaterRole} message TheaterRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TheaterRole message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TheaterRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TheaterRole} TheaterRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TheaterRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.theaterId = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TheaterRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TheaterRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TheaterRole} TheaterRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TheaterRole message.
         * @function verify
         * @memberof proto.TheaterRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TheaterRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                if (!$util.isString(message.theaterId))
                    return "theaterId: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            return null;
        };

        /**
         * Creates a TheaterRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TheaterRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TheaterRole} TheaterRole
         */
        TheaterRole.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TheaterRole)
                return object;
            var message = new $root.proto.TheaterRole();
            if (object.id != null)
                message.id = String(object.id);
            if (object.theaterId != null)
                message.theaterId = String(object.theaterId);
            if (object.title != null)
                message.title = String(object.title);
            return message;
        };

        /**
         * Creates a plain object from a TheaterRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TheaterRole
         * @static
         * @param {proto.TheaterRole} message TheaterRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TheaterRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.theaterId = "";
                object.title = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                object.theaterId = message.theaterId;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            return object;
        };

        /**
         * Converts this TheaterRole to JSON.
         * @function toJSON
         * @memberof proto.TheaterRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TheaterRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TheaterRole;
    })();

    proto.VideoPlayerAccessByRoles = (function() {

        /**
         * Properties of a VideoPlayerAccessByRoles.
         * @memberof proto
         * @interface IVideoPlayerAccessByRoles
         * @property {Array.<proto.ITheaterRole>|null} [roles] VideoPlayerAccessByRoles roles
         */

        /**
         * Constructs a new VideoPlayerAccessByRoles.
         * @memberof proto
         * @classdesc Represents a VideoPlayerAccessByRoles.
         * @implements IVideoPlayerAccessByRoles
         * @constructor
         * @param {proto.IVideoPlayerAccessByRoles=} [properties] Properties to set
         */
        function VideoPlayerAccessByRoles(properties) {
            this.roles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VideoPlayerAccessByRoles roles.
         * @member {Array.<proto.ITheaterRole>} roles
         * @memberof proto.VideoPlayerAccessByRoles
         * @instance
         */
        VideoPlayerAccessByRoles.prototype.roles = $util.emptyArray;

        /**
         * Creates a new VideoPlayerAccessByRoles instance using the specified properties.
         * @function create
         * @memberof proto.VideoPlayerAccessByRoles
         * @static
         * @param {proto.IVideoPlayerAccessByRoles=} [properties] Properties to set
         * @returns {proto.VideoPlayerAccessByRoles} VideoPlayerAccessByRoles instance
         */
        VideoPlayerAccessByRoles.create = function create(properties) {
            return new VideoPlayerAccessByRoles(properties);
        };

        /**
         * Encodes the specified VideoPlayerAccessByRoles message. Does not implicitly {@link proto.VideoPlayerAccessByRoles.verify|verify} messages.
         * @function encode
         * @memberof proto.VideoPlayerAccessByRoles
         * @static
         * @param {proto.IVideoPlayerAccessByRoles} message VideoPlayerAccessByRoles message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoPlayerAccessByRoles.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roles != null && message.roles.length)
                for (var i = 0; i < message.roles.length; ++i)
                    $root.proto.TheaterRole.encode(message.roles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VideoPlayerAccessByRoles message, length delimited. Does not implicitly {@link proto.VideoPlayerAccessByRoles.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.VideoPlayerAccessByRoles
         * @static
         * @param {proto.IVideoPlayerAccessByRoles} message VideoPlayerAccessByRoles message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoPlayerAccessByRoles.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VideoPlayerAccessByRoles message from the specified reader or buffer.
         * @function decode
         * @memberof proto.VideoPlayerAccessByRoles
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.VideoPlayerAccessByRoles} VideoPlayerAccessByRoles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoPlayerAccessByRoles.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.VideoPlayerAccessByRoles();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.roles && message.roles.length))
                        message.roles = [];
                    message.roles.push($root.proto.TheaterRole.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VideoPlayerAccessByRoles message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.VideoPlayerAccessByRoles
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.VideoPlayerAccessByRoles} VideoPlayerAccessByRoles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoPlayerAccessByRoles.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VideoPlayerAccessByRoles message.
         * @function verify
         * @memberof proto.VideoPlayerAccessByRoles
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VideoPlayerAccessByRoles.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roles != null && message.hasOwnProperty("roles")) {
                if (!Array.isArray(message.roles))
                    return "roles: array expected";
                for (var i = 0; i < message.roles.length; ++i) {
                    var error = $root.proto.TheaterRole.verify(message.roles[i]);
                    if (error)
                        return "roles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a VideoPlayerAccessByRoles message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.VideoPlayerAccessByRoles
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.VideoPlayerAccessByRoles} VideoPlayerAccessByRoles
         */
        VideoPlayerAccessByRoles.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.VideoPlayerAccessByRoles)
                return object;
            var message = new $root.proto.VideoPlayerAccessByRoles();
            if (object.roles) {
                if (!Array.isArray(object.roles))
                    throw TypeError(".proto.VideoPlayerAccessByRoles.roles: array expected");
                message.roles = [];
                for (var i = 0; i < object.roles.length; ++i) {
                    if (typeof object.roles[i] !== "object")
                        throw TypeError(".proto.VideoPlayerAccessByRoles.roles: object expected");
                    message.roles[i] = $root.proto.TheaterRole.fromObject(object.roles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a VideoPlayerAccessByRoles message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.VideoPlayerAccessByRoles
         * @static
         * @param {proto.VideoPlayerAccessByRoles} message VideoPlayerAccessByRoles
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VideoPlayerAccessByRoles.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roles = [];
            if (message.roles && message.roles.length) {
                object.roles = [];
                for (var j = 0; j < message.roles.length; ++j)
                    object.roles[j] = $root.proto.TheaterRole.toObject(message.roles[j], options);
            }
            return object;
        };

        /**
         * Converts this VideoPlayerAccessByRoles to JSON.
         * @function toJSON
         * @memberof proto.VideoPlayerAccessByRoles
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VideoPlayerAccessByRoles.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VideoPlayerAccessByRoles;
    })();

    proto.Subtitle = (function() {

        /**
         * Properties of a Subtitle.
         * @memberof proto
         * @interface ISubtitle
         * @property {string|null} [id] Subtitle id
         * @property {string|null} [mediaSourceId] Subtitle mediaSourceId
         * @property {string|null} [lang] Subtitle lang
         * @property {string|null} [file] Subtitle file
         * @property {google.protobuf.ITimestamp|null} [createdAt] Subtitle createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] Subtitle updatedAt
         */

        /**
         * Constructs a new Subtitle.
         * @memberof proto
         * @classdesc Represents a Subtitle.
         * @implements ISubtitle
         * @constructor
         * @param {proto.ISubtitle=} [properties] Properties to set
         */
        function Subtitle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Subtitle id.
         * @member {string} id
         * @memberof proto.Subtitle
         * @instance
         */
        Subtitle.prototype.id = "";

        /**
         * Subtitle mediaSourceId.
         * @member {string} mediaSourceId
         * @memberof proto.Subtitle
         * @instance
         */
        Subtitle.prototype.mediaSourceId = "";

        /**
         * Subtitle lang.
         * @member {string} lang
         * @memberof proto.Subtitle
         * @instance
         */
        Subtitle.prototype.lang = "";

        /**
         * Subtitle file.
         * @member {string} file
         * @memberof proto.Subtitle
         * @instance
         */
        Subtitle.prototype.file = "";

        /**
         * Subtitle createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof proto.Subtitle
         * @instance
         */
        Subtitle.prototype.createdAt = null;

        /**
         * Subtitle updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof proto.Subtitle
         * @instance
         */
        Subtitle.prototype.updatedAt = null;

        /**
         * Creates a new Subtitle instance using the specified properties.
         * @function create
         * @memberof proto.Subtitle
         * @static
         * @param {proto.ISubtitle=} [properties] Properties to set
         * @returns {proto.Subtitle} Subtitle instance
         */
        Subtitle.create = function create(properties) {
            return new Subtitle(properties);
        };

        /**
         * Encodes the specified Subtitle message. Does not implicitly {@link proto.Subtitle.verify|verify} messages.
         * @function encode
         * @memberof proto.Subtitle
         * @static
         * @param {proto.ISubtitle} message Subtitle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Subtitle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.mediaSourceId != null && message.hasOwnProperty("mediaSourceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mediaSourceId);
            if (message.lang != null && message.hasOwnProperty("lang"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lang);
            if (message.file != null && message.hasOwnProperty("file"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.file);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Subtitle message, length delimited. Does not implicitly {@link proto.Subtitle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Subtitle
         * @static
         * @param {proto.ISubtitle} message Subtitle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Subtitle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Subtitle message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Subtitle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Subtitle} Subtitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Subtitle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Subtitle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.mediaSourceId = reader.string();
                    break;
                case 3:
                    message.lang = reader.string();
                    break;
                case 4:
                    message.file = reader.string();
                    break;
                case 5:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Subtitle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Subtitle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Subtitle} Subtitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Subtitle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Subtitle message.
         * @function verify
         * @memberof proto.Subtitle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Subtitle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.mediaSourceId != null && message.hasOwnProperty("mediaSourceId"))
                if (!$util.isString(message.mediaSourceId))
                    return "mediaSourceId: string expected";
            if (message.lang != null && message.hasOwnProperty("lang"))
                if (!$util.isString(message.lang))
                    return "lang: string expected";
            if (message.file != null && message.hasOwnProperty("file"))
                if (!$util.isString(message.file))
                    return "file: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                if (error)
                    return "updatedAt." + error;
            }
            return null;
        };

        /**
         * Creates a Subtitle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Subtitle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Subtitle} Subtitle
         */
        Subtitle.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Subtitle)
                return object;
            var message = new $root.proto.Subtitle();
            if (object.id != null)
                message.id = String(object.id);
            if (object.mediaSourceId != null)
                message.mediaSourceId = String(object.mediaSourceId);
            if (object.lang != null)
                message.lang = String(object.lang);
            if (object.file != null)
                message.file = String(object.file);
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".proto.Subtitle.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.updatedAt != null) {
                if (typeof object.updatedAt !== "object")
                    throw TypeError(".proto.Subtitle.updatedAt: object expected");
                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a Subtitle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Subtitle
         * @static
         * @param {proto.Subtitle} message Subtitle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Subtitle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.mediaSourceId = "";
                object.lang = "";
                object.file = "";
                object.createdAt = null;
                object.updatedAt = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.mediaSourceId != null && message.hasOwnProperty("mediaSourceId"))
                object.mediaSourceId = message.mediaSourceId;
            if (message.lang != null && message.hasOwnProperty("lang"))
                object.lang = message.lang;
            if (message.file != null && message.hasOwnProperty("file"))
                object.file = message.file;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
            return object;
        };

        /**
         * Converts this Subtitle to JSON.
         * @function toJSON
         * @memberof proto.Subtitle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Subtitle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Subtitle;
    })();

    proto.MediaSource = (function() {

        /**
         * Properties of a MediaSource.
         * @memberof proto
         * @interface IMediaSource
         * @property {string|null} [id] MediaSource id
         * @property {string|null} [title] MediaSource title
         * @property {proto.MediaSource.Type|null} [type] MediaSource type
         * @property {string|null} [banner] MediaSource banner
         * @property {string|null} [uri] MediaSource uri
         * @property {number|Long|null} [lastPlayedTime] MediaSource lastPlayedTime
         * @property {Array.<proto.ISubtitle>|null} [subtitles] MediaSource subtitles
         * @property {string|null} [userId] MediaSource userId
         * @property {number|Long|null} [length] MediaSource length
         * @property {google.protobuf.ITimestamp|null} [createdAt] MediaSource createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] MediaSource updatedAt
         */

        /**
         * Constructs a new MediaSource.
         * @memberof proto
         * @classdesc Represents a MediaSource.
         * @implements IMediaSource
         * @constructor
         * @param {proto.IMediaSource=} [properties] Properties to set
         */
        function MediaSource(properties) {
            this.subtitles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MediaSource id.
         * @member {string} id
         * @memberof proto.MediaSource
         * @instance
         */
        MediaSource.prototype.id = "";

        /**
         * MediaSource title.
         * @member {string} title
         * @memberof proto.MediaSource
         * @instance
         */
        MediaSource.prototype.title = "";

        /**
         * MediaSource type.
         * @member {proto.MediaSource.Type} type
         * @memberof proto.MediaSource
         * @instance
         */
        MediaSource.prototype.type = 0;

        /**
         * MediaSource banner.
         * @member {string} banner
         * @memberof proto.MediaSource
         * @instance
         */
        MediaSource.prototype.banner = "";

        /**
         * MediaSource uri.
         * @member {string} uri
         * @memberof proto.MediaSource
         * @instance
         */
        MediaSource.prototype.uri = "";

        /**
         * MediaSource lastPlayedTime.
         * @member {number|Long} lastPlayedTime
         * @memberof proto.MediaSource
         * @instance
         */
        MediaSource.prototype.lastPlayedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MediaSource subtitles.
         * @member {Array.<proto.ISubtitle>} subtitles
         * @memberof proto.MediaSource
         * @instance
         */
        MediaSource.prototype.subtitles = $util.emptyArray;

        /**
         * MediaSource userId.
         * @member {string} userId
         * @memberof proto.MediaSource
         * @instance
         */
        MediaSource.prototype.userId = "";

        /**
         * MediaSource length.
         * @member {number|Long} length
         * @memberof proto.MediaSource
         * @instance
         */
        MediaSource.prototype.length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MediaSource createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof proto.MediaSource
         * @instance
         */
        MediaSource.prototype.createdAt = null;

        /**
         * MediaSource updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof proto.MediaSource
         * @instance
         */
        MediaSource.prototype.updatedAt = null;

        /**
         * Creates a new MediaSource instance using the specified properties.
         * @function create
         * @memberof proto.MediaSource
         * @static
         * @param {proto.IMediaSource=} [properties] Properties to set
         * @returns {proto.MediaSource} MediaSource instance
         */
        MediaSource.create = function create(properties) {
            return new MediaSource(properties);
        };

        /**
         * Encodes the specified MediaSource message. Does not implicitly {@link proto.MediaSource.verify|verify} messages.
         * @function encode
         * @memberof proto.MediaSource
         * @static
         * @param {proto.IMediaSource} message MediaSource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediaSource.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.banner != null && message.hasOwnProperty("banner"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.banner);
            if (message.uri != null && message.hasOwnProperty("uri"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.uri);
            if (message.lastPlayedTime != null && message.hasOwnProperty("lastPlayedTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.lastPlayedTime);
            if (message.subtitles != null && message.subtitles.length)
                for (var i = 0; i < message.subtitles.length; ++i)
                    $root.proto.Subtitle.encode(message.subtitles[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.userId);
            if (message.length != null && message.hasOwnProperty("length"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.length);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MediaSource message, length delimited. Does not implicitly {@link proto.MediaSource.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.MediaSource
         * @static
         * @param {proto.IMediaSource} message MediaSource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediaSource.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MediaSource message from the specified reader or buffer.
         * @function decode
         * @memberof proto.MediaSource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.MediaSource} MediaSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediaSource.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.MediaSource();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.banner = reader.string();
                    break;
                case 5:
                    message.uri = reader.string();
                    break;
                case 6:
                    message.lastPlayedTime = reader.int64();
                    break;
                case 7:
                    if (!(message.subtitles && message.subtitles.length))
                        message.subtitles = [];
                    message.subtitles.push($root.proto.Subtitle.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.userId = reader.string();
                    break;
                case 9:
                    message.length = reader.int64();
                    break;
                case 10:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MediaSource message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.MediaSource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.MediaSource} MediaSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediaSource.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MediaSource message.
         * @function verify
         * @memberof proto.MediaSource
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MediaSource.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.banner != null && message.hasOwnProperty("banner"))
                if (!$util.isString(message.banner))
                    return "banner: string expected";
            if (message.uri != null && message.hasOwnProperty("uri"))
                if (!$util.isString(message.uri))
                    return "uri: string expected";
            if (message.lastPlayedTime != null && message.hasOwnProperty("lastPlayedTime"))
                if (!$util.isInteger(message.lastPlayedTime) && !(message.lastPlayedTime && $util.isInteger(message.lastPlayedTime.low) && $util.isInteger(message.lastPlayedTime.high)))
                    return "lastPlayedTime: integer|Long expected";
            if (message.subtitles != null && message.hasOwnProperty("subtitles")) {
                if (!Array.isArray(message.subtitles))
                    return "subtitles: array expected";
                for (var i = 0; i < message.subtitles.length; ++i) {
                    var error = $root.proto.Subtitle.verify(message.subtitles[i]);
                    if (error)
                        return "subtitles." + error;
                }
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.length != null && message.hasOwnProperty("length"))
                if (!$util.isInteger(message.length) && !(message.length && $util.isInteger(message.length.low) && $util.isInteger(message.length.high)))
                    return "length: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                if (error)
                    return "updatedAt." + error;
            }
            return null;
        };

        /**
         * Creates a MediaSource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.MediaSource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.MediaSource} MediaSource
         */
        MediaSource.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.MediaSource)
                return object;
            var message = new $root.proto.MediaSource();
            if (object.id != null)
                message.id = String(object.id);
            if (object.title != null)
                message.title = String(object.title);
            switch (object.type) {
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "YOUTUBE":
            case 1:
                message.type = 1;
                break;
            case "TORRENT":
            case 2:
                message.type = 2;
                break;
            case "SOUND_CLOUD":
            case 3:
                message.type = 3;
                break;
            case "DOWNLOAD_URI":
            case 4:
                message.type = 4;
                break;
            case "LOCAL_PATH":
            case 5:
                message.type = 5;
                break;
            }
            if (object.banner != null)
                message.banner = String(object.banner);
            if (object.uri != null)
                message.uri = String(object.uri);
            if (object.lastPlayedTime != null)
                if ($util.Long)
                    (message.lastPlayedTime = $util.Long.fromValue(object.lastPlayedTime)).unsigned = false;
                else if (typeof object.lastPlayedTime === "string")
                    message.lastPlayedTime = parseInt(object.lastPlayedTime, 10);
                else if (typeof object.lastPlayedTime === "number")
                    message.lastPlayedTime = object.lastPlayedTime;
                else if (typeof object.lastPlayedTime === "object")
                    message.lastPlayedTime = new $util.LongBits(object.lastPlayedTime.low >>> 0, object.lastPlayedTime.high >>> 0).toNumber();
            if (object.subtitles) {
                if (!Array.isArray(object.subtitles))
                    throw TypeError(".proto.MediaSource.subtitles: array expected");
                message.subtitles = [];
                for (var i = 0; i < object.subtitles.length; ++i) {
                    if (typeof object.subtitles[i] !== "object")
                        throw TypeError(".proto.MediaSource.subtitles: object expected");
                    message.subtitles[i] = $root.proto.Subtitle.fromObject(object.subtitles[i]);
                }
            }
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.length != null)
                if ($util.Long)
                    (message.length = $util.Long.fromValue(object.length)).unsigned = false;
                else if (typeof object.length === "string")
                    message.length = parseInt(object.length, 10);
                else if (typeof object.length === "number")
                    message.length = object.length;
                else if (typeof object.length === "object")
                    message.length = new $util.LongBits(object.length.low >>> 0, object.length.high >>> 0).toNumber();
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".proto.MediaSource.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.updatedAt != null) {
                if (typeof object.updatedAt !== "object")
                    throw TypeError(".proto.MediaSource.updatedAt: object expected");
                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a MediaSource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.MediaSource
         * @static
         * @param {proto.MediaSource} message MediaSource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MediaSource.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.subtitles = [];
            if (options.defaults) {
                object.id = "";
                object.title = "";
                object.type = options.enums === String ? "UNKNOWN" : 0;
                object.banner = "";
                object.uri = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastPlayedTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastPlayedTime = options.longs === String ? "0" : 0;
                object.userId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.length = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.length = options.longs === String ? "0" : 0;
                object.createdAt = null;
                object.updatedAt = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.proto.MediaSource.Type[message.type] : message.type;
            if (message.banner != null && message.hasOwnProperty("banner"))
                object.banner = message.banner;
            if (message.uri != null && message.hasOwnProperty("uri"))
                object.uri = message.uri;
            if (message.lastPlayedTime != null && message.hasOwnProperty("lastPlayedTime"))
                if (typeof message.lastPlayedTime === "number")
                    object.lastPlayedTime = options.longs === String ? String(message.lastPlayedTime) : message.lastPlayedTime;
                else
                    object.lastPlayedTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastPlayedTime) : options.longs === Number ? new $util.LongBits(message.lastPlayedTime.low >>> 0, message.lastPlayedTime.high >>> 0).toNumber() : message.lastPlayedTime;
            if (message.subtitles && message.subtitles.length) {
                object.subtitles = [];
                for (var j = 0; j < message.subtitles.length; ++j)
                    object.subtitles[j] = $root.proto.Subtitle.toObject(message.subtitles[j], options);
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.length != null && message.hasOwnProperty("length"))
                if (typeof message.length === "number")
                    object.length = options.longs === String ? String(message.length) : message.length;
                else
                    object.length = options.longs === String ? $util.Long.prototype.toString.call(message.length) : options.longs === Number ? new $util.LongBits(message.length.low >>> 0, message.length.high >>> 0).toNumber() : message.length;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
            return object;
        };

        /**
         * Converts this MediaSource to JSON.
         * @function toJSON
         * @memberof proto.MediaSource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MediaSource.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name proto.MediaSource.Type
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} YOUTUBE=1 YOUTUBE value
         * @property {number} TORRENT=2 TORRENT value
         * @property {number} SOUND_CLOUD=3 SOUND_CLOUD value
         * @property {number} DOWNLOAD_URI=4 DOWNLOAD_URI value
         * @property {number} LOCAL_PATH=5 LOCAL_PATH value
         */
        MediaSource.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "YOUTUBE"] = 1;
            values[valuesById[2] = "TORRENT"] = 2;
            values[valuesById[3] = "SOUND_CLOUD"] = 3;
            values[valuesById[4] = "DOWNLOAD_URI"] = 4;
            values[valuesById[5] = "LOCAL_PATH"] = 5;
            return values;
        })();

        return MediaSource;
    })();

    proto.Theater = (function() {

        /**
         * Properties of a Theater.
         * @memberof proto
         * @interface ITheater
         * @property {string|null} [id] Theater id
         * @property {string|null} [description] Theater description
         * @property {proto.PRIVACY|null} [privacy] Theater privacy
         * @property {proto.VIDEO_PLAYER_ACCESS|null} [videoPlayerAccess] Theater videoPlayerAccess
         * @property {string|null} [userId] Theater userId
         * @property {proto.IUser|null} [user] Theater user
         * @property {proto.IMediaSource|null} [mediaSource] Theater mediaSource
         * @property {boolean|null} [followed] Theater followed
         * @property {google.protobuf.ITimestamp|null} [createdAt] Theater createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] Theater updatedAt
         */

        /**
         * Constructs a new Theater.
         * @memberof proto
         * @classdesc Represents a Theater.
         * @implements ITheater
         * @constructor
         * @param {proto.ITheater=} [properties] Properties to set
         */
        function Theater(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Theater id.
         * @member {string} id
         * @memberof proto.Theater
         * @instance
         */
        Theater.prototype.id = "";

        /**
         * Theater description.
         * @member {string} description
         * @memberof proto.Theater
         * @instance
         */
        Theater.prototype.description = "";

        /**
         * Theater privacy.
         * @member {proto.PRIVACY} privacy
         * @memberof proto.Theater
         * @instance
         */
        Theater.prototype.privacy = 0;

        /**
         * Theater videoPlayerAccess.
         * @member {proto.VIDEO_PLAYER_ACCESS} videoPlayerAccess
         * @memberof proto.Theater
         * @instance
         */
        Theater.prototype.videoPlayerAccess = 0;

        /**
         * Theater userId.
         * @member {string} userId
         * @memberof proto.Theater
         * @instance
         */
        Theater.prototype.userId = "";

        /**
         * Theater user.
         * @member {proto.IUser|null|undefined} user
         * @memberof proto.Theater
         * @instance
         */
        Theater.prototype.user = null;

        /**
         * Theater mediaSource.
         * @member {proto.IMediaSource|null|undefined} mediaSource
         * @memberof proto.Theater
         * @instance
         */
        Theater.prototype.mediaSource = null;

        /**
         * Theater followed.
         * @member {boolean} followed
         * @memberof proto.Theater
         * @instance
         */
        Theater.prototype.followed = false;

        /**
         * Theater createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof proto.Theater
         * @instance
         */
        Theater.prototype.createdAt = null;

        /**
         * Theater updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof proto.Theater
         * @instance
         */
        Theater.prototype.updatedAt = null;

        /**
         * Creates a new Theater instance using the specified properties.
         * @function create
         * @memberof proto.Theater
         * @static
         * @param {proto.ITheater=} [properties] Properties to set
         * @returns {proto.Theater} Theater instance
         */
        Theater.create = function create(properties) {
            return new Theater(properties);
        };

        /**
         * Encodes the specified Theater message. Does not implicitly {@link proto.Theater.verify|verify} messages.
         * @function encode
         * @memberof proto.Theater
         * @static
         * @param {proto.ITheater} message Theater message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Theater.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            if (message.privacy != null && message.hasOwnProperty("privacy"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.privacy);
            if (message.videoPlayerAccess != null && message.hasOwnProperty("videoPlayerAccess"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.videoPlayerAccess);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.userId);
            if (message.user != null && message.hasOwnProperty("user"))
                $root.proto.User.encode(message.user, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.mediaSource != null && message.hasOwnProperty("mediaSource"))
                $root.proto.MediaSource.encode(message.mediaSource, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.followed != null && message.hasOwnProperty("followed"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.followed);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Theater message, length delimited. Does not implicitly {@link proto.Theater.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Theater
         * @static
         * @param {proto.ITheater} message Theater message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Theater.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Theater message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Theater
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Theater} Theater
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Theater.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Theater();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 4:
                    message.privacy = reader.int32();
                    break;
                case 5:
                    message.videoPlayerAccess = reader.int32();
                    break;
                case 6:
                    message.userId = reader.string();
                    break;
                case 7:
                    message.user = $root.proto.User.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.mediaSource = $root.proto.MediaSource.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.followed = reader.bool();
                    break;
                case 10:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Theater message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Theater
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Theater} Theater
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Theater.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Theater message.
         * @function verify
         * @memberof proto.Theater
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Theater.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.privacy != null && message.hasOwnProperty("privacy"))
                switch (message.privacy) {
                default:
                    return "privacy: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.videoPlayerAccess != null && message.hasOwnProperty("videoPlayerAccess"))
                switch (message.videoPlayerAccess) {
                default:
                    return "videoPlayerAccess: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.proto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.mediaSource != null && message.hasOwnProperty("mediaSource")) {
                var error = $root.proto.MediaSource.verify(message.mediaSource);
                if (error)
                    return "mediaSource." + error;
            }
            if (message.followed != null && message.hasOwnProperty("followed"))
                if (typeof message.followed !== "boolean")
                    return "followed: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                if (error)
                    return "updatedAt." + error;
            }
            return null;
        };

        /**
         * Creates a Theater message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Theater
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Theater} Theater
         */
        Theater.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Theater)
                return object;
            var message = new $root.proto.Theater();
            if (object.id != null)
                message.id = String(object.id);
            if (object.description != null)
                message.description = String(object.description);
            switch (object.privacy) {
            case "UNKNOWN":
            case 0:
                message.privacy = 0;
                break;
            case "PUBLIC":
            case 1:
                message.privacy = 1;
                break;
            case "PRIVATE":
            case 2:
                message.privacy = 2;
                break;
            case "FRIENDS":
            case 3:
                message.privacy = 3;
                break;
            case "CHOOSEN_FRIENDS":
            case 4:
                message.privacy = 4;
                break;
            }
            switch (object.videoPlayerAccess) {
            case "ACCESS_UNKNOWN":
            case 0:
                message.videoPlayerAccess = 0;
                break;
            case "ACCESS_BY_USER":
            case 1:
                message.videoPlayerAccess = 1;
                break;
            case "ACCESS_BY_EVERYONE":
            case 2:
                message.videoPlayerAccess = 2;
                break;
            case "ACCESS_BY_FRIENDS":
            case 3:
                message.videoPlayerAccess = 3;
                break;
            case "ACCESS_BY_CHOOSEN_FRIENDS":
            case 4:
                message.videoPlayerAccess = 4;
                break;
            }
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".proto.Theater.user: object expected");
                message.user = $root.proto.User.fromObject(object.user);
            }
            if (object.mediaSource != null) {
                if (typeof object.mediaSource !== "object")
                    throw TypeError(".proto.Theater.mediaSource: object expected");
                message.mediaSource = $root.proto.MediaSource.fromObject(object.mediaSource);
            }
            if (object.followed != null)
                message.followed = Boolean(object.followed);
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".proto.Theater.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.updatedAt != null) {
                if (typeof object.updatedAt !== "object")
                    throw TypeError(".proto.Theater.updatedAt: object expected");
                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a Theater message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Theater
         * @static
         * @param {proto.Theater} message Theater
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Theater.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.description = "";
                object.privacy = options.enums === String ? "UNKNOWN" : 0;
                object.videoPlayerAccess = options.enums === String ? "ACCESS_UNKNOWN" : 0;
                object.userId = "";
                object.user = null;
                object.mediaSource = null;
                object.followed = false;
                object.createdAt = null;
                object.updatedAt = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.privacy != null && message.hasOwnProperty("privacy"))
                object.privacy = options.enums === String ? $root.proto.PRIVACY[message.privacy] : message.privacy;
            if (message.videoPlayerAccess != null && message.hasOwnProperty("videoPlayerAccess"))
                object.videoPlayerAccess = options.enums === String ? $root.proto.VIDEO_PLAYER_ACCESS[message.videoPlayerAccess] : message.videoPlayerAccess;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.proto.User.toObject(message.user, options);
            if (message.mediaSource != null && message.hasOwnProperty("mediaSource"))
                object.mediaSource = $root.proto.MediaSource.toObject(message.mediaSource, options);
            if (message.followed != null && message.hasOwnProperty("followed"))
                object.followed = message.followed;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
            return object;
        };

        /**
         * Converts this Theater to JSON.
         * @function toJSON
         * @memberof proto.Theater
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Theater.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Theater;
    })();

    proto.TheaterAuthRequest = (function() {

        /**
         * Properties of a TheaterAuthRequest.
         * @memberof proto
         * @interface ITheaterAuthRequest
         * @property {proto.ITheater|null} [theater] TheaterAuthRequest theater
         * @property {proto.IAuthenticateRequest|null} [authRequest] TheaterAuthRequest authRequest
         */

        /**
         * Constructs a new TheaterAuthRequest.
         * @memberof proto
         * @classdesc Represents a TheaterAuthRequest.
         * @implements ITheaterAuthRequest
         * @constructor
         * @param {proto.ITheaterAuthRequest=} [properties] Properties to set
         */
        function TheaterAuthRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TheaterAuthRequest theater.
         * @member {proto.ITheater|null|undefined} theater
         * @memberof proto.TheaterAuthRequest
         * @instance
         */
        TheaterAuthRequest.prototype.theater = null;

        /**
         * TheaterAuthRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.TheaterAuthRequest
         * @instance
         */
        TheaterAuthRequest.prototype.authRequest = null;

        /**
         * Creates a new TheaterAuthRequest instance using the specified properties.
         * @function create
         * @memberof proto.TheaterAuthRequest
         * @static
         * @param {proto.ITheaterAuthRequest=} [properties] Properties to set
         * @returns {proto.TheaterAuthRequest} TheaterAuthRequest instance
         */
        TheaterAuthRequest.create = function create(properties) {
            return new TheaterAuthRequest(properties);
        };

        /**
         * Encodes the specified TheaterAuthRequest message. Does not implicitly {@link proto.TheaterAuthRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.TheaterAuthRequest
         * @static
         * @param {proto.ITheaterAuthRequest} message TheaterAuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterAuthRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.theater != null && message.hasOwnProperty("theater"))
                $root.proto.Theater.encode(message.theater, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TheaterAuthRequest message, length delimited. Does not implicitly {@link proto.TheaterAuthRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TheaterAuthRequest
         * @static
         * @param {proto.ITheaterAuthRequest} message TheaterAuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterAuthRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TheaterAuthRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TheaterAuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TheaterAuthRequest} TheaterAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterAuthRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TheaterAuthRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.theater = $root.proto.Theater.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TheaterAuthRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TheaterAuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TheaterAuthRequest} TheaterAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterAuthRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TheaterAuthRequest message.
         * @function verify
         * @memberof proto.TheaterAuthRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TheaterAuthRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.theater != null && message.hasOwnProperty("theater")) {
                var error = $root.proto.Theater.verify(message.theater);
                if (error)
                    return "theater." + error;
            }
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            return null;
        };

        /**
         * Creates a TheaterAuthRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TheaterAuthRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TheaterAuthRequest} TheaterAuthRequest
         */
        TheaterAuthRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TheaterAuthRequest)
                return object;
            var message = new $root.proto.TheaterAuthRequest();
            if (object.theater != null) {
                if (typeof object.theater !== "object")
                    throw TypeError(".proto.TheaterAuthRequest.theater: object expected");
                message.theater = $root.proto.Theater.fromObject(object.theater);
            }
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.TheaterAuthRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a TheaterAuthRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TheaterAuthRequest
         * @static
         * @param {proto.TheaterAuthRequest} message TheaterAuthRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TheaterAuthRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.theater = null;
                object.authRequest = null;
            }
            if (message.theater != null && message.hasOwnProperty("theater"))
                object.theater = $root.proto.Theater.toObject(message.theater, options);
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            return object;
        };

        /**
         * Converts this TheaterAuthRequest to JSON.
         * @function toJSON
         * @memberof proto.TheaterAuthRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TheaterAuthRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TheaterAuthRequest;
    })();

    proto.RemoveSubtitleRequest = (function() {

        /**
         * Properties of a RemoveSubtitleRequest.
         * @memberof proto
         * @interface IRemoveSubtitleRequest
         * @property {proto.IAuthenticateRequest|null} [authRequest] RemoveSubtitleRequest authRequest
         * @property {string|null} [subtitleId] RemoveSubtitleRequest subtitleId
         * @property {string|null} [mediaSourceId] RemoveSubtitleRequest mediaSourceId
         */

        /**
         * Constructs a new RemoveSubtitleRequest.
         * @memberof proto
         * @classdesc Represents a RemoveSubtitleRequest.
         * @implements IRemoveSubtitleRequest
         * @constructor
         * @param {proto.IRemoveSubtitleRequest=} [properties] Properties to set
         */
        function RemoveSubtitleRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveSubtitleRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.RemoveSubtitleRequest
         * @instance
         */
        RemoveSubtitleRequest.prototype.authRequest = null;

        /**
         * RemoveSubtitleRequest subtitleId.
         * @member {string} subtitleId
         * @memberof proto.RemoveSubtitleRequest
         * @instance
         */
        RemoveSubtitleRequest.prototype.subtitleId = "";

        /**
         * RemoveSubtitleRequest mediaSourceId.
         * @member {string} mediaSourceId
         * @memberof proto.RemoveSubtitleRequest
         * @instance
         */
        RemoveSubtitleRequest.prototype.mediaSourceId = "";

        /**
         * Creates a new RemoveSubtitleRequest instance using the specified properties.
         * @function create
         * @memberof proto.RemoveSubtitleRequest
         * @static
         * @param {proto.IRemoveSubtitleRequest=} [properties] Properties to set
         * @returns {proto.RemoveSubtitleRequest} RemoveSubtitleRequest instance
         */
        RemoveSubtitleRequest.create = function create(properties) {
            return new RemoveSubtitleRequest(properties);
        };

        /**
         * Encodes the specified RemoveSubtitleRequest message. Does not implicitly {@link proto.RemoveSubtitleRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.RemoveSubtitleRequest
         * @static
         * @param {proto.IRemoveSubtitleRequest} message RemoveSubtitleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveSubtitleRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.subtitleId != null && message.hasOwnProperty("subtitleId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.subtitleId);
            if (message.mediaSourceId != null && message.hasOwnProperty("mediaSourceId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.mediaSourceId);
            return writer;
        };

        /**
         * Encodes the specified RemoveSubtitleRequest message, length delimited. Does not implicitly {@link proto.RemoveSubtitleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RemoveSubtitleRequest
         * @static
         * @param {proto.IRemoveSubtitleRequest} message RemoveSubtitleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveSubtitleRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveSubtitleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RemoveSubtitleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RemoveSubtitleRequest} RemoveSubtitleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveSubtitleRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RemoveSubtitleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subtitleId = reader.string();
                    break;
                case 3:
                    message.mediaSourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveSubtitleRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RemoveSubtitleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RemoveSubtitleRequest} RemoveSubtitleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveSubtitleRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveSubtitleRequest message.
         * @function verify
         * @memberof proto.RemoveSubtitleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveSubtitleRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            if (message.subtitleId != null && message.hasOwnProperty("subtitleId"))
                if (!$util.isString(message.subtitleId))
                    return "subtitleId: string expected";
            if (message.mediaSourceId != null && message.hasOwnProperty("mediaSourceId"))
                if (!$util.isString(message.mediaSourceId))
                    return "mediaSourceId: string expected";
            return null;
        };

        /**
         * Creates a RemoveSubtitleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RemoveSubtitleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RemoveSubtitleRequest} RemoveSubtitleRequest
         */
        RemoveSubtitleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RemoveSubtitleRequest)
                return object;
            var message = new $root.proto.RemoveSubtitleRequest();
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.RemoveSubtitleRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            if (object.subtitleId != null)
                message.subtitleId = String(object.subtitleId);
            if (object.mediaSourceId != null)
                message.mediaSourceId = String(object.mediaSourceId);
            return message;
        };

        /**
         * Creates a plain object from a RemoveSubtitleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RemoveSubtitleRequest
         * @static
         * @param {proto.RemoveSubtitleRequest} message RemoveSubtitleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveSubtitleRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.authRequest = null;
                object.subtitleId = "";
                object.mediaSourceId = "";
            }
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            if (message.subtitleId != null && message.hasOwnProperty("subtitleId"))
                object.subtitleId = message.subtitleId;
            if (message.mediaSourceId != null && message.hasOwnProperty("mediaSourceId"))
                object.mediaSourceId = message.mediaSourceId;
            return object;
        };

        /**
         * Converts this RemoveSubtitleRequest to JSON.
         * @function toJSON
         * @memberof proto.RemoveSubtitleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveSubtitleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RemoveSubtitleRequest;
    })();

    proto.TheaterSubtitlesResponse = (function() {

        /**
         * Properties of a TheaterSubtitlesResponse.
         * @memberof proto
         * @interface ITheaterSubtitlesResponse
         * @property {number|Long|null} [code] TheaterSubtitlesResponse code
         * @property {string|null} [status] TheaterSubtitlesResponse status
         * @property {string|null} [message] TheaterSubtitlesResponse message
         * @property {Array.<proto.ISubtitle>|null} [result] TheaterSubtitlesResponse result
         */

        /**
         * Constructs a new TheaterSubtitlesResponse.
         * @memberof proto
         * @classdesc Represents a TheaterSubtitlesResponse.
         * @implements ITheaterSubtitlesResponse
         * @constructor
         * @param {proto.ITheaterSubtitlesResponse=} [properties] Properties to set
         */
        function TheaterSubtitlesResponse(properties) {
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TheaterSubtitlesResponse code.
         * @member {number|Long} code
         * @memberof proto.TheaterSubtitlesResponse
         * @instance
         */
        TheaterSubtitlesResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TheaterSubtitlesResponse status.
         * @member {string} status
         * @memberof proto.TheaterSubtitlesResponse
         * @instance
         */
        TheaterSubtitlesResponse.prototype.status = "";

        /**
         * TheaterSubtitlesResponse message.
         * @member {string} message
         * @memberof proto.TheaterSubtitlesResponse
         * @instance
         */
        TheaterSubtitlesResponse.prototype.message = "";

        /**
         * TheaterSubtitlesResponse result.
         * @member {Array.<proto.ISubtitle>} result
         * @memberof proto.TheaterSubtitlesResponse
         * @instance
         */
        TheaterSubtitlesResponse.prototype.result = $util.emptyArray;

        /**
         * Creates a new TheaterSubtitlesResponse instance using the specified properties.
         * @function create
         * @memberof proto.TheaterSubtitlesResponse
         * @static
         * @param {proto.ITheaterSubtitlesResponse=} [properties] Properties to set
         * @returns {proto.TheaterSubtitlesResponse} TheaterSubtitlesResponse instance
         */
        TheaterSubtitlesResponse.create = function create(properties) {
            return new TheaterSubtitlesResponse(properties);
        };

        /**
         * Encodes the specified TheaterSubtitlesResponse message. Does not implicitly {@link proto.TheaterSubtitlesResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.TheaterSubtitlesResponse
         * @static
         * @param {proto.ITheaterSubtitlesResponse} message TheaterSubtitlesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterSubtitlesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.result != null && message.result.length)
                for (var i = 0; i < message.result.length; ++i)
                    $root.proto.Subtitle.encode(message.result[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TheaterSubtitlesResponse message, length delimited. Does not implicitly {@link proto.TheaterSubtitlesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TheaterSubtitlesResponse
         * @static
         * @param {proto.ITheaterSubtitlesResponse} message TheaterSubtitlesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterSubtitlesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TheaterSubtitlesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TheaterSubtitlesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TheaterSubtitlesResponse} TheaterSubtitlesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterSubtitlesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TheaterSubtitlesResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    if (!(message.result && message.result.length))
                        message.result = [];
                    message.result.push($root.proto.Subtitle.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TheaterSubtitlesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TheaterSubtitlesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TheaterSubtitlesResponse} TheaterSubtitlesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterSubtitlesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TheaterSubtitlesResponse message.
         * @function verify
         * @memberof proto.TheaterSubtitlesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TheaterSubtitlesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                if (!Array.isArray(message.result))
                    return "result: array expected";
                for (var i = 0; i < message.result.length; ++i) {
                    var error = $root.proto.Subtitle.verify(message.result[i]);
                    if (error)
                        return "result." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TheaterSubtitlesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TheaterSubtitlesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TheaterSubtitlesResponse} TheaterSubtitlesResponse
         */
        TheaterSubtitlesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TheaterSubtitlesResponse)
                return object;
            var message = new $root.proto.TheaterSubtitlesResponse();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.message != null)
                message.message = String(object.message);
            if (object.result) {
                if (!Array.isArray(object.result))
                    throw TypeError(".proto.TheaterSubtitlesResponse.result: array expected");
                message.result = [];
                for (var i = 0; i < object.result.length; ++i) {
                    if (typeof object.result[i] !== "object")
                        throw TypeError(".proto.TheaterSubtitlesResponse.result: object expected");
                    message.result[i] = $root.proto.Subtitle.fromObject(object.result[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TheaterSubtitlesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TheaterSubtitlesResponse
         * @static
         * @param {proto.TheaterSubtitlesResponse} message TheaterSubtitlesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TheaterSubtitlesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.result = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.result && message.result.length) {
                object.result = [];
                for (var j = 0; j < message.result.length; ++j)
                    object.result[j] = $root.proto.Subtitle.toObject(message.result[j], options);
            }
            return object;
        };

        /**
         * Converts this TheaterSubtitlesResponse to JSON.
         * @function toJSON
         * @memberof proto.TheaterSubtitlesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TheaterSubtitlesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TheaterSubtitlesResponse;
    })();

    proto.UserTheaterResponse = (function() {

        /**
         * Properties of a UserTheaterResponse.
         * @memberof proto
         * @interface IUserTheaterResponse
         * @property {number|Long|null} [code] UserTheaterResponse code
         * @property {string|null} [status] UserTheaterResponse status
         * @property {string|null} [message] UserTheaterResponse message
         * @property {proto.ITheater|null} [result] UserTheaterResponse result
         */

        /**
         * Constructs a new UserTheaterResponse.
         * @memberof proto
         * @classdesc Represents a UserTheaterResponse.
         * @implements IUserTheaterResponse
         * @constructor
         * @param {proto.IUserTheaterResponse=} [properties] Properties to set
         */
        function UserTheaterResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserTheaterResponse code.
         * @member {number|Long} code
         * @memberof proto.UserTheaterResponse
         * @instance
         */
        UserTheaterResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserTheaterResponse status.
         * @member {string} status
         * @memberof proto.UserTheaterResponse
         * @instance
         */
        UserTheaterResponse.prototype.status = "";

        /**
         * UserTheaterResponse message.
         * @member {string} message
         * @memberof proto.UserTheaterResponse
         * @instance
         */
        UserTheaterResponse.prototype.message = "";

        /**
         * UserTheaterResponse result.
         * @member {proto.ITheater|null|undefined} result
         * @memberof proto.UserTheaterResponse
         * @instance
         */
        UserTheaterResponse.prototype.result = null;

        /**
         * Creates a new UserTheaterResponse instance using the specified properties.
         * @function create
         * @memberof proto.UserTheaterResponse
         * @static
         * @param {proto.IUserTheaterResponse=} [properties] Properties to set
         * @returns {proto.UserTheaterResponse} UserTheaterResponse instance
         */
        UserTheaterResponse.create = function create(properties) {
            return new UserTheaterResponse(properties);
        };

        /**
         * Encodes the specified UserTheaterResponse message. Does not implicitly {@link proto.UserTheaterResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.UserTheaterResponse
         * @static
         * @param {proto.IUserTheaterResponse} message UserTheaterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserTheaterResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.result != null && message.hasOwnProperty("result"))
                $root.proto.Theater.encode(message.result, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserTheaterResponse message, length delimited. Does not implicitly {@link proto.UserTheaterResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UserTheaterResponse
         * @static
         * @param {proto.IUserTheaterResponse} message UserTheaterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserTheaterResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserTheaterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UserTheaterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UserTheaterResponse} UserTheaterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserTheaterResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserTheaterResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    message.result = $root.proto.Theater.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserTheaterResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.UserTheaterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UserTheaterResponse} UserTheaterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserTheaterResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserTheaterResponse message.
         * @function verify
         * @memberof proto.UserTheaterResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserTheaterResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.proto.Theater.verify(message.result);
                if (error)
                    return "result." + error;
            }
            return null;
        };

        /**
         * Creates a UserTheaterResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.UserTheaterResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UserTheaterResponse} UserTheaterResponse
         */
        UserTheaterResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UserTheaterResponse)
                return object;
            var message = new $root.proto.UserTheaterResponse();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.message != null)
                message.message = String(object.message);
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".proto.UserTheaterResponse.result: object expected");
                message.result = $root.proto.Theater.fromObject(object.result);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserTheaterResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UserTheaterResponse
         * @static
         * @param {proto.UserTheaterResponse} message UserTheaterResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserTheaterResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                object.message = "";
                object.result = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.proto.Theater.toObject(message.result, options);
            return object;
        };

        /**
         * Converts this UserTheaterResponse to JSON.
         * @function toJSON
         * @memberof proto.UserTheaterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserTheaterResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserTheaterResponse;
    })();

    proto.InviteFriendsTheaterRequest = (function() {

        /**
         * Properties of an InviteFriendsTheaterRequest.
         * @memberof proto
         * @interface IInviteFriendsTheaterRequest
         * @property {proto.IAuthenticateRequest|null} [authRequest] InviteFriendsTheaterRequest authRequest
         * @property {string|null} [theaterId] InviteFriendsTheaterRequest theaterId
         * @property {Array.<string>|null} [friendIds] InviteFriendsTheaterRequest friendIds
         */

        /**
         * Constructs a new InviteFriendsTheaterRequest.
         * @memberof proto
         * @classdesc Represents an InviteFriendsTheaterRequest.
         * @implements IInviteFriendsTheaterRequest
         * @constructor
         * @param {proto.IInviteFriendsTheaterRequest=} [properties] Properties to set
         */
        function InviteFriendsTheaterRequest(properties) {
            this.friendIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InviteFriendsTheaterRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.InviteFriendsTheaterRequest
         * @instance
         */
        InviteFriendsTheaterRequest.prototype.authRequest = null;

        /**
         * InviteFriendsTheaterRequest theaterId.
         * @member {string} theaterId
         * @memberof proto.InviteFriendsTheaterRequest
         * @instance
         */
        InviteFriendsTheaterRequest.prototype.theaterId = "";

        /**
         * InviteFriendsTheaterRequest friendIds.
         * @member {Array.<string>} friendIds
         * @memberof proto.InviteFriendsTheaterRequest
         * @instance
         */
        InviteFriendsTheaterRequest.prototype.friendIds = $util.emptyArray;

        /**
         * Creates a new InviteFriendsTheaterRequest instance using the specified properties.
         * @function create
         * @memberof proto.InviteFriendsTheaterRequest
         * @static
         * @param {proto.IInviteFriendsTheaterRequest=} [properties] Properties to set
         * @returns {proto.InviteFriendsTheaterRequest} InviteFriendsTheaterRequest instance
         */
        InviteFriendsTheaterRequest.create = function create(properties) {
            return new InviteFriendsTheaterRequest(properties);
        };

        /**
         * Encodes the specified InviteFriendsTheaterRequest message. Does not implicitly {@link proto.InviteFriendsTheaterRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.InviteFriendsTheaterRequest
         * @static
         * @param {proto.IInviteFriendsTheaterRequest} message InviteFriendsTheaterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteFriendsTheaterRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.theaterId);
            if (message.friendIds != null && message.friendIds.length)
                for (var i = 0; i < message.friendIds.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.friendIds[i]);
            return writer;
        };

        /**
         * Encodes the specified InviteFriendsTheaterRequest message, length delimited. Does not implicitly {@link proto.InviteFriendsTheaterRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.InviteFriendsTheaterRequest
         * @static
         * @param {proto.IInviteFriendsTheaterRequest} message InviteFriendsTheaterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteFriendsTheaterRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InviteFriendsTheaterRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.InviteFriendsTheaterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.InviteFriendsTheaterRequest} InviteFriendsTheaterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteFriendsTheaterRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.InviteFriendsTheaterRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.theaterId = reader.string();
                    break;
                case 3:
                    if (!(message.friendIds && message.friendIds.length))
                        message.friendIds = [];
                    message.friendIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InviteFriendsTheaterRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.InviteFriendsTheaterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.InviteFriendsTheaterRequest} InviteFriendsTheaterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteFriendsTheaterRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InviteFriendsTheaterRequest message.
         * @function verify
         * @memberof proto.InviteFriendsTheaterRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InviteFriendsTheaterRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                if (!$util.isString(message.theaterId))
                    return "theaterId: string expected";
            if (message.friendIds != null && message.hasOwnProperty("friendIds")) {
                if (!Array.isArray(message.friendIds))
                    return "friendIds: array expected";
                for (var i = 0; i < message.friendIds.length; ++i)
                    if (!$util.isString(message.friendIds[i]))
                        return "friendIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates an InviteFriendsTheaterRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.InviteFriendsTheaterRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.InviteFriendsTheaterRequest} InviteFriendsTheaterRequest
         */
        InviteFriendsTheaterRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.InviteFriendsTheaterRequest)
                return object;
            var message = new $root.proto.InviteFriendsTheaterRequest();
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.InviteFriendsTheaterRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            if (object.theaterId != null)
                message.theaterId = String(object.theaterId);
            if (object.friendIds) {
                if (!Array.isArray(object.friendIds))
                    throw TypeError(".proto.InviteFriendsTheaterRequest.friendIds: array expected");
                message.friendIds = [];
                for (var i = 0; i < object.friendIds.length; ++i)
                    message.friendIds[i] = String(object.friendIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an InviteFriendsTheaterRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.InviteFriendsTheaterRequest
         * @static
         * @param {proto.InviteFriendsTheaterRequest} message InviteFriendsTheaterRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InviteFriendsTheaterRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.friendIds = [];
            if (options.defaults) {
                object.authRequest = null;
                object.theaterId = "";
            }
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                object.theaterId = message.theaterId;
            if (message.friendIds && message.friendIds.length) {
                object.friendIds = [];
                for (var j = 0; j < message.friendIds.length; ++j)
                    object.friendIds[j] = message.friendIds[j];
            }
            return object;
        };

        /**
         * Converts this InviteFriendsTheaterRequest to JSON.
         * @function toJSON
         * @memberof proto.InviteFriendsTheaterRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InviteFriendsTheaterRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InviteFriendsTheaterRequest;
    })();

    proto.MediaSourceAuthRequest = (function() {

        /**
         * Properties of a MediaSourceAuthRequest.
         * @memberof proto
         * @interface IMediaSourceAuthRequest
         * @property {proto.IAuthenticateRequest|null} [authRequest] MediaSourceAuthRequest authRequest
         * @property {proto.IMediaSource|null} [media] MediaSourceAuthRequest media
         * @property {number|Long|null} [limit] MediaSourceAuthRequest limit
         * @property {number|Long|null} [page] MediaSourceAuthRequest page
         * @property {number|Long|null} [perPage] MediaSourceAuthRequest perPage
         */

        /**
         * Constructs a new MediaSourceAuthRequest.
         * @memberof proto
         * @classdesc Represents a MediaSourceAuthRequest.
         * @implements IMediaSourceAuthRequest
         * @constructor
         * @param {proto.IMediaSourceAuthRequest=} [properties] Properties to set
         */
        function MediaSourceAuthRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MediaSourceAuthRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.MediaSourceAuthRequest
         * @instance
         */
        MediaSourceAuthRequest.prototype.authRequest = null;

        /**
         * MediaSourceAuthRequest media.
         * @member {proto.IMediaSource|null|undefined} media
         * @memberof proto.MediaSourceAuthRequest
         * @instance
         */
        MediaSourceAuthRequest.prototype.media = null;

        /**
         * MediaSourceAuthRequest limit.
         * @member {number|Long} limit
         * @memberof proto.MediaSourceAuthRequest
         * @instance
         */
        MediaSourceAuthRequest.prototype.limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MediaSourceAuthRequest page.
         * @member {number|Long} page
         * @memberof proto.MediaSourceAuthRequest
         * @instance
         */
        MediaSourceAuthRequest.prototype.page = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MediaSourceAuthRequest perPage.
         * @member {number|Long} perPage
         * @memberof proto.MediaSourceAuthRequest
         * @instance
         */
        MediaSourceAuthRequest.prototype.perPage = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MediaSourceAuthRequest instance using the specified properties.
         * @function create
         * @memberof proto.MediaSourceAuthRequest
         * @static
         * @param {proto.IMediaSourceAuthRequest=} [properties] Properties to set
         * @returns {proto.MediaSourceAuthRequest} MediaSourceAuthRequest instance
         */
        MediaSourceAuthRequest.create = function create(properties) {
            return new MediaSourceAuthRequest(properties);
        };

        /**
         * Encodes the specified MediaSourceAuthRequest message. Does not implicitly {@link proto.MediaSourceAuthRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.MediaSourceAuthRequest
         * @static
         * @param {proto.IMediaSourceAuthRequest} message MediaSourceAuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediaSourceAuthRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.media != null && message.hasOwnProperty("media"))
                $root.proto.MediaSource.encode(message.media, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.limit);
            if (message.page != null && message.hasOwnProperty("page"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.page);
            if (message.perPage != null && message.hasOwnProperty("perPage"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.perPage);
            return writer;
        };

        /**
         * Encodes the specified MediaSourceAuthRequest message, length delimited. Does not implicitly {@link proto.MediaSourceAuthRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.MediaSourceAuthRequest
         * @static
         * @param {proto.IMediaSourceAuthRequest} message MediaSourceAuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediaSourceAuthRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MediaSourceAuthRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.MediaSourceAuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.MediaSourceAuthRequest} MediaSourceAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediaSourceAuthRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.MediaSourceAuthRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.media = $root.proto.MediaSource.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.limit = reader.uint64();
                    break;
                case 4:
                    message.page = reader.uint64();
                    break;
                case 5:
                    message.perPage = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MediaSourceAuthRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.MediaSourceAuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.MediaSourceAuthRequest} MediaSourceAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediaSourceAuthRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MediaSourceAuthRequest message.
         * @function verify
         * @memberof proto.MediaSourceAuthRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MediaSourceAuthRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            if (message.media != null && message.hasOwnProperty("media")) {
                var error = $root.proto.MediaSource.verify(message.media);
                if (error)
                    return "media." + error;
            }
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit) && !(message.limit && $util.isInteger(message.limit.low) && $util.isInteger(message.limit.high)))
                    return "limit: integer|Long expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page) && !(message.page && $util.isInteger(message.page.low) && $util.isInteger(message.page.high)))
                    return "page: integer|Long expected";
            if (message.perPage != null && message.hasOwnProperty("perPage"))
                if (!$util.isInteger(message.perPage) && !(message.perPage && $util.isInteger(message.perPage.low) && $util.isInteger(message.perPage.high)))
                    return "perPage: integer|Long expected";
            return null;
        };

        /**
         * Creates a MediaSourceAuthRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.MediaSourceAuthRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.MediaSourceAuthRequest} MediaSourceAuthRequest
         */
        MediaSourceAuthRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.MediaSourceAuthRequest)
                return object;
            var message = new $root.proto.MediaSourceAuthRequest();
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.MediaSourceAuthRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            if (object.media != null) {
                if (typeof object.media !== "object")
                    throw TypeError(".proto.MediaSourceAuthRequest.media: object expected");
                message.media = $root.proto.MediaSource.fromObject(object.media);
            }
            if (object.limit != null)
                if ($util.Long)
                    (message.limit = $util.Long.fromValue(object.limit)).unsigned = true;
                else if (typeof object.limit === "string")
                    message.limit = parseInt(object.limit, 10);
                else if (typeof object.limit === "number")
                    message.limit = object.limit;
                else if (typeof object.limit === "object")
                    message.limit = new $util.LongBits(object.limit.low >>> 0, object.limit.high >>> 0).toNumber(true);
            if (object.page != null)
                if ($util.Long)
                    (message.page = $util.Long.fromValue(object.page)).unsigned = true;
                else if (typeof object.page === "string")
                    message.page = parseInt(object.page, 10);
                else if (typeof object.page === "number")
                    message.page = object.page;
                else if (typeof object.page === "object")
                    message.page = new $util.LongBits(object.page.low >>> 0, object.page.high >>> 0).toNumber(true);
            if (object.perPage != null)
                if ($util.Long)
                    (message.perPage = $util.Long.fromValue(object.perPage)).unsigned = true;
                else if (typeof object.perPage === "string")
                    message.perPage = parseInt(object.perPage, 10);
                else if (typeof object.perPage === "number")
                    message.perPage = object.perPage;
                else if (typeof object.perPage === "object")
                    message.perPage = new $util.LongBits(object.perPage.low >>> 0, object.perPage.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MediaSourceAuthRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.MediaSourceAuthRequest
         * @static
         * @param {proto.MediaSourceAuthRequest} message MediaSourceAuthRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MediaSourceAuthRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.authRequest = null;
                object.media = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.limit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.page = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.page = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.perPage = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.perPage = options.longs === String ? "0" : 0;
            }
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            if (message.media != null && message.hasOwnProperty("media"))
                object.media = $root.proto.MediaSource.toObject(message.media, options);
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (typeof message.limit === "number")
                    object.limit = options.longs === String ? String(message.limit) : message.limit;
                else
                    object.limit = options.longs === String ? $util.Long.prototype.toString.call(message.limit) : options.longs === Number ? new $util.LongBits(message.limit.low >>> 0, message.limit.high >>> 0).toNumber(true) : message.limit;
            if (message.page != null && message.hasOwnProperty("page"))
                if (typeof message.page === "number")
                    object.page = options.longs === String ? String(message.page) : message.page;
                else
                    object.page = options.longs === String ? $util.Long.prototype.toString.call(message.page) : options.longs === Number ? new $util.LongBits(message.page.low >>> 0, message.page.high >>> 0).toNumber(true) : message.page;
            if (message.perPage != null && message.hasOwnProperty("perPage"))
                if (typeof message.perPage === "number")
                    object.perPage = options.longs === String ? String(message.perPage) : message.perPage;
                else
                    object.perPage = options.longs === String ? $util.Long.prototype.toString.call(message.perPage) : options.longs === Number ? new $util.LongBits(message.perPage.low >>> 0, message.perPage.high >>> 0).toNumber(true) : message.perPage;
            return object;
        };

        /**
         * Converts this MediaSourceAuthRequest to JSON.
         * @function toJSON
         * @memberof proto.MediaSourceAuthRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MediaSourceAuthRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MediaSourceAuthRequest;
    })();

    proto.MediaSourceRemoveRequest = (function() {

        /**
         * Properties of a MediaSourceRemoveRequest.
         * @memberof proto
         * @interface IMediaSourceRemoveRequest
         * @property {proto.IAuthenticateRequest|null} [authRequest] MediaSourceRemoveRequest authRequest
         * @property {string|null} [mediaSourceId] MediaSourceRemoveRequest mediaSourceId
         */

        /**
         * Constructs a new MediaSourceRemoveRequest.
         * @memberof proto
         * @classdesc Represents a MediaSourceRemoveRequest.
         * @implements IMediaSourceRemoveRequest
         * @constructor
         * @param {proto.IMediaSourceRemoveRequest=} [properties] Properties to set
         */
        function MediaSourceRemoveRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MediaSourceRemoveRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.MediaSourceRemoveRequest
         * @instance
         */
        MediaSourceRemoveRequest.prototype.authRequest = null;

        /**
         * MediaSourceRemoveRequest mediaSourceId.
         * @member {string} mediaSourceId
         * @memberof proto.MediaSourceRemoveRequest
         * @instance
         */
        MediaSourceRemoveRequest.prototype.mediaSourceId = "";

        /**
         * Creates a new MediaSourceRemoveRequest instance using the specified properties.
         * @function create
         * @memberof proto.MediaSourceRemoveRequest
         * @static
         * @param {proto.IMediaSourceRemoveRequest=} [properties] Properties to set
         * @returns {proto.MediaSourceRemoveRequest} MediaSourceRemoveRequest instance
         */
        MediaSourceRemoveRequest.create = function create(properties) {
            return new MediaSourceRemoveRequest(properties);
        };

        /**
         * Encodes the specified MediaSourceRemoveRequest message. Does not implicitly {@link proto.MediaSourceRemoveRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.MediaSourceRemoveRequest
         * @static
         * @param {proto.IMediaSourceRemoveRequest} message MediaSourceRemoveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediaSourceRemoveRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.mediaSourceId != null && message.hasOwnProperty("mediaSourceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mediaSourceId);
            return writer;
        };

        /**
         * Encodes the specified MediaSourceRemoveRequest message, length delimited. Does not implicitly {@link proto.MediaSourceRemoveRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.MediaSourceRemoveRequest
         * @static
         * @param {proto.IMediaSourceRemoveRequest} message MediaSourceRemoveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediaSourceRemoveRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MediaSourceRemoveRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.MediaSourceRemoveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.MediaSourceRemoveRequest} MediaSourceRemoveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediaSourceRemoveRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.MediaSourceRemoveRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mediaSourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MediaSourceRemoveRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.MediaSourceRemoveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.MediaSourceRemoveRequest} MediaSourceRemoveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediaSourceRemoveRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MediaSourceRemoveRequest message.
         * @function verify
         * @memberof proto.MediaSourceRemoveRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MediaSourceRemoveRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            if (message.mediaSourceId != null && message.hasOwnProperty("mediaSourceId"))
                if (!$util.isString(message.mediaSourceId))
                    return "mediaSourceId: string expected";
            return null;
        };

        /**
         * Creates a MediaSourceRemoveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.MediaSourceRemoveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.MediaSourceRemoveRequest} MediaSourceRemoveRequest
         */
        MediaSourceRemoveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.MediaSourceRemoveRequest)
                return object;
            var message = new $root.proto.MediaSourceRemoveRequest();
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.MediaSourceRemoveRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            if (object.mediaSourceId != null)
                message.mediaSourceId = String(object.mediaSourceId);
            return message;
        };

        /**
         * Creates a plain object from a MediaSourceRemoveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.MediaSourceRemoveRequest
         * @static
         * @param {proto.MediaSourceRemoveRequest} message MediaSourceRemoveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MediaSourceRemoveRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.authRequest = null;
                object.mediaSourceId = "";
            }
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            if (message.mediaSourceId != null && message.hasOwnProperty("mediaSourceId"))
                object.mediaSourceId = message.mediaSourceId;
            return object;
        };

        /**
         * Converts this MediaSourceRemoveRequest to JSON.
         * @function toJSON
         * @memberof proto.MediaSourceRemoveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MediaSourceRemoveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MediaSourceRemoveRequest;
    })();

    proto.TheaterMediaSourcesResponse = (function() {

        /**
         * Properties of a TheaterMediaSourcesResponse.
         * @memberof proto
         * @interface ITheaterMediaSourcesResponse
         * @property {number|Long|null} [code] TheaterMediaSourcesResponse code
         * @property {string|null} [status] TheaterMediaSourcesResponse status
         * @property {string|null} [message] TheaterMediaSourcesResponse message
         * @property {Array.<proto.IMediaSource>|null} [result] TheaterMediaSourcesResponse result
         */

        /**
         * Constructs a new TheaterMediaSourcesResponse.
         * @memberof proto
         * @classdesc Represents a TheaterMediaSourcesResponse.
         * @implements ITheaterMediaSourcesResponse
         * @constructor
         * @param {proto.ITheaterMediaSourcesResponse=} [properties] Properties to set
         */
        function TheaterMediaSourcesResponse(properties) {
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TheaterMediaSourcesResponse code.
         * @member {number|Long} code
         * @memberof proto.TheaterMediaSourcesResponse
         * @instance
         */
        TheaterMediaSourcesResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TheaterMediaSourcesResponse status.
         * @member {string} status
         * @memberof proto.TheaterMediaSourcesResponse
         * @instance
         */
        TheaterMediaSourcesResponse.prototype.status = "";

        /**
         * TheaterMediaSourcesResponse message.
         * @member {string} message
         * @memberof proto.TheaterMediaSourcesResponse
         * @instance
         */
        TheaterMediaSourcesResponse.prototype.message = "";

        /**
         * TheaterMediaSourcesResponse result.
         * @member {Array.<proto.IMediaSource>} result
         * @memberof proto.TheaterMediaSourcesResponse
         * @instance
         */
        TheaterMediaSourcesResponse.prototype.result = $util.emptyArray;

        /**
         * Creates a new TheaterMediaSourcesResponse instance using the specified properties.
         * @function create
         * @memberof proto.TheaterMediaSourcesResponse
         * @static
         * @param {proto.ITheaterMediaSourcesResponse=} [properties] Properties to set
         * @returns {proto.TheaterMediaSourcesResponse} TheaterMediaSourcesResponse instance
         */
        TheaterMediaSourcesResponse.create = function create(properties) {
            return new TheaterMediaSourcesResponse(properties);
        };

        /**
         * Encodes the specified TheaterMediaSourcesResponse message. Does not implicitly {@link proto.TheaterMediaSourcesResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.TheaterMediaSourcesResponse
         * @static
         * @param {proto.ITheaterMediaSourcesResponse} message TheaterMediaSourcesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterMediaSourcesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.result != null && message.result.length)
                for (var i = 0; i < message.result.length; ++i)
                    $root.proto.MediaSource.encode(message.result[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TheaterMediaSourcesResponse message, length delimited. Does not implicitly {@link proto.TheaterMediaSourcesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TheaterMediaSourcesResponse
         * @static
         * @param {proto.ITheaterMediaSourcesResponse} message TheaterMediaSourcesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TheaterMediaSourcesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TheaterMediaSourcesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TheaterMediaSourcesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TheaterMediaSourcesResponse} TheaterMediaSourcesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterMediaSourcesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TheaterMediaSourcesResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    if (!(message.result && message.result.length))
                        message.result = [];
                    message.result.push($root.proto.MediaSource.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TheaterMediaSourcesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TheaterMediaSourcesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TheaterMediaSourcesResponse} TheaterMediaSourcesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TheaterMediaSourcesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TheaterMediaSourcesResponse message.
         * @function verify
         * @memberof proto.TheaterMediaSourcesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TheaterMediaSourcesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                if (!Array.isArray(message.result))
                    return "result: array expected";
                for (var i = 0; i < message.result.length; ++i) {
                    var error = $root.proto.MediaSource.verify(message.result[i]);
                    if (error)
                        return "result." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TheaterMediaSourcesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TheaterMediaSourcesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TheaterMediaSourcesResponse} TheaterMediaSourcesResponse
         */
        TheaterMediaSourcesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TheaterMediaSourcesResponse)
                return object;
            var message = new $root.proto.TheaterMediaSourcesResponse();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.message != null)
                message.message = String(object.message);
            if (object.result) {
                if (!Array.isArray(object.result))
                    throw TypeError(".proto.TheaterMediaSourcesResponse.result: array expected");
                message.result = [];
                for (var i = 0; i < object.result.length; ++i) {
                    if (typeof object.result[i] !== "object")
                        throw TypeError(".proto.TheaterMediaSourcesResponse.result: object expected");
                    message.result[i] = $root.proto.MediaSource.fromObject(object.result[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TheaterMediaSourcesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TheaterMediaSourcesResponse
         * @static
         * @param {proto.TheaterMediaSourcesResponse} message TheaterMediaSourcesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TheaterMediaSourcesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.result = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.result && message.result.length) {
                object.result = [];
                for (var j = 0; j < message.result.length; ++j)
                    object.result[j] = $root.proto.MediaSource.toObject(message.result[j], options);
            }
            return object;
        };

        /**
         * Converts this TheaterMediaSourcesResponse to JSON.
         * @function toJSON
         * @memberof proto.TheaterMediaSourcesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TheaterMediaSourcesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TheaterMediaSourcesResponse;
    })();

    proto.GetTheaterRequest = (function() {

        /**
         * Properties of a GetTheaterRequest.
         * @memberof proto
         * @interface IGetTheaterRequest
         * @property {proto.IAuthenticateRequest|null} [authRequest] GetTheaterRequest authRequest
         * @property {string|null} [user] GetTheaterRequest user
         * @property {string|null} [theaterId] GetTheaterRequest theaterId
         */

        /**
         * Constructs a new GetTheaterRequest.
         * @memberof proto
         * @classdesc Represents a GetTheaterRequest.
         * @implements IGetTheaterRequest
         * @constructor
         * @param {proto.IGetTheaterRequest=} [properties] Properties to set
         */
        function GetTheaterRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTheaterRequest authRequest.
         * @member {proto.IAuthenticateRequest|null|undefined} authRequest
         * @memberof proto.GetTheaterRequest
         * @instance
         */
        GetTheaterRequest.prototype.authRequest = null;

        /**
         * GetTheaterRequest user.
         * @member {string} user
         * @memberof proto.GetTheaterRequest
         * @instance
         */
        GetTheaterRequest.prototype.user = "";

        /**
         * GetTheaterRequest theaterId.
         * @member {string} theaterId
         * @memberof proto.GetTheaterRequest
         * @instance
         */
        GetTheaterRequest.prototype.theaterId = "";

        /**
         * Creates a new GetTheaterRequest instance using the specified properties.
         * @function create
         * @memberof proto.GetTheaterRequest
         * @static
         * @param {proto.IGetTheaterRequest=} [properties] Properties to set
         * @returns {proto.GetTheaterRequest} GetTheaterRequest instance
         */
        GetTheaterRequest.create = function create(properties) {
            return new GetTheaterRequest(properties);
        };

        /**
         * Encodes the specified GetTheaterRequest message. Does not implicitly {@link proto.GetTheaterRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.GetTheaterRequest
         * @static
         * @param {proto.IGetTheaterRequest} message GetTheaterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTheaterRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                $root.proto.AuthenticateRequest.encode(message.authRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.user != null && message.hasOwnProperty("user"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.user);
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.theaterId);
            return writer;
        };

        /**
         * Encodes the specified GetTheaterRequest message, length delimited. Does not implicitly {@link proto.GetTheaterRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.GetTheaterRequest
         * @static
         * @param {proto.IGetTheaterRequest} message GetTheaterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTheaterRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTheaterRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.GetTheaterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.GetTheaterRequest} GetTheaterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTheaterRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.GetTheaterRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authRequest = $root.proto.AuthenticateRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.user = reader.string();
                    break;
                case 3:
                    message.theaterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetTheaterRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.GetTheaterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.GetTheaterRequest} GetTheaterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTheaterRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTheaterRequest message.
         * @function verify
         * @memberof proto.GetTheaterRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTheaterRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authRequest != null && message.hasOwnProperty("authRequest")) {
                var error = $root.proto.AuthenticateRequest.verify(message.authRequest);
                if (error)
                    return "authRequest." + error;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                if (!$util.isString(message.user))
                    return "user: string expected";
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                if (!$util.isString(message.theaterId))
                    return "theaterId: string expected";
            return null;
        };

        /**
         * Creates a GetTheaterRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.GetTheaterRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.GetTheaterRequest} GetTheaterRequest
         */
        GetTheaterRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.GetTheaterRequest)
                return object;
            var message = new $root.proto.GetTheaterRequest();
            if (object.authRequest != null) {
                if (typeof object.authRequest !== "object")
                    throw TypeError(".proto.GetTheaterRequest.authRequest: object expected");
                message.authRequest = $root.proto.AuthenticateRequest.fromObject(object.authRequest);
            }
            if (object.user != null)
                message.user = String(object.user);
            if (object.theaterId != null)
                message.theaterId = String(object.theaterId);
            return message;
        };

        /**
         * Creates a plain object from a GetTheaterRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.GetTheaterRequest
         * @static
         * @param {proto.GetTheaterRequest} message GetTheaterRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTheaterRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.authRequest = null;
                object.user = "";
                object.theaterId = "";
            }
            if (message.authRequest != null && message.hasOwnProperty("authRequest"))
                object.authRequest = $root.proto.AuthenticateRequest.toObject(message.authRequest, options);
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = message.user;
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                object.theaterId = message.theaterId;
            return object;
        };

        /**
         * Converts this GetTheaterRequest to JSON.
         * @function toJSON
         * @memberof proto.GetTheaterRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTheaterRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTheaterRequest;
    })();

    proto.Follow = (function() {

        /**
         * Properties of a Follow.
         * @memberof proto
         * @interface IFollow
         * @property {string|null} [id] Follow id
         * @property {string|null} [theaterId] Follow theaterId
         * @property {proto.ITheater|null} [theater] Follow theater
         * @property {string|null} [userId] Follow userId
         * @property {proto.IUser|null} [user] Follow user
         * @property {boolean|null} [emailNotification] Follow emailNotification
         * @property {boolean|null} [pushNotification] Follow pushNotification
         * @property {boolean|null} [muted] Follow muted
         * @property {google.protobuf.ITimestamp|null} [createdAt] Follow createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] Follow updatedAt
         */

        /**
         * Constructs a new Follow.
         * @memberof proto
         * @classdesc Represents a Follow.
         * @implements IFollow
         * @constructor
         * @param {proto.IFollow=} [properties] Properties to set
         */
        function Follow(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Follow id.
         * @member {string} id
         * @memberof proto.Follow
         * @instance
         */
        Follow.prototype.id = "";

        /**
         * Follow theaterId.
         * @member {string} theaterId
         * @memberof proto.Follow
         * @instance
         */
        Follow.prototype.theaterId = "";

        /**
         * Follow theater.
         * @member {proto.ITheater|null|undefined} theater
         * @memberof proto.Follow
         * @instance
         */
        Follow.prototype.theater = null;

        /**
         * Follow userId.
         * @member {string} userId
         * @memberof proto.Follow
         * @instance
         */
        Follow.prototype.userId = "";

        /**
         * Follow user.
         * @member {proto.IUser|null|undefined} user
         * @memberof proto.Follow
         * @instance
         */
        Follow.prototype.user = null;

        /**
         * Follow emailNotification.
         * @member {boolean} emailNotification
         * @memberof proto.Follow
         * @instance
         */
        Follow.prototype.emailNotification = false;

        /**
         * Follow pushNotification.
         * @member {boolean} pushNotification
         * @memberof proto.Follow
         * @instance
         */
        Follow.prototype.pushNotification = false;

        /**
         * Follow muted.
         * @member {boolean} muted
         * @memberof proto.Follow
         * @instance
         */
        Follow.prototype.muted = false;

        /**
         * Follow createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof proto.Follow
         * @instance
         */
        Follow.prototype.createdAt = null;

        /**
         * Follow updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof proto.Follow
         * @instance
         */
        Follow.prototype.updatedAt = null;

        /**
         * Creates a new Follow instance using the specified properties.
         * @function create
         * @memberof proto.Follow
         * @static
         * @param {proto.IFollow=} [properties] Properties to set
         * @returns {proto.Follow} Follow instance
         */
        Follow.create = function create(properties) {
            return new Follow(properties);
        };

        /**
         * Encodes the specified Follow message. Does not implicitly {@link proto.Follow.verify|verify} messages.
         * @function encode
         * @memberof proto.Follow
         * @static
         * @param {proto.IFollow} message Follow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Follow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.theaterId);
            if (message.theater != null && message.hasOwnProperty("theater"))
                $root.proto.Theater.encode(message.theater, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userId);
            if (message.user != null && message.hasOwnProperty("user"))
                $root.proto.User.encode(message.user, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.emailNotification != null && message.hasOwnProperty("emailNotification"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.emailNotification);
            if (message.pushNotification != null && message.hasOwnProperty("pushNotification"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.pushNotification);
            if (message.muted != null && message.hasOwnProperty("muted"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.muted);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Follow message, length delimited. Does not implicitly {@link proto.Follow.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Follow
         * @static
         * @param {proto.IFollow} message Follow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Follow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Follow message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Follow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Follow} Follow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Follow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Follow();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.theaterId = reader.string();
                    break;
                case 3:
                    message.theater = $root.proto.Theater.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.userId = reader.string();
                    break;
                case 5:
                    message.user = $root.proto.User.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.emailNotification = reader.bool();
                    break;
                case 7:
                    message.pushNotification = reader.bool();
                    break;
                case 8:
                    message.muted = reader.bool();
                    break;
                case 9:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Follow message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Follow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Follow} Follow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Follow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Follow message.
         * @function verify
         * @memberof proto.Follow
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Follow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                if (!$util.isString(message.theaterId))
                    return "theaterId: string expected";
            if (message.theater != null && message.hasOwnProperty("theater")) {
                var error = $root.proto.Theater.verify(message.theater);
                if (error)
                    return "theater." + error;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.proto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.emailNotification != null && message.hasOwnProperty("emailNotification"))
                if (typeof message.emailNotification !== "boolean")
                    return "emailNotification: boolean expected";
            if (message.pushNotification != null && message.hasOwnProperty("pushNotification"))
                if (typeof message.pushNotification !== "boolean")
                    return "pushNotification: boolean expected";
            if (message.muted != null && message.hasOwnProperty("muted"))
                if (typeof message.muted !== "boolean")
                    return "muted: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                if (error)
                    return "updatedAt." + error;
            }
            return null;
        };

        /**
         * Creates a Follow message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Follow
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Follow} Follow
         */
        Follow.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Follow)
                return object;
            var message = new $root.proto.Follow();
            if (object.id != null)
                message.id = String(object.id);
            if (object.theaterId != null)
                message.theaterId = String(object.theaterId);
            if (object.theater != null) {
                if (typeof object.theater !== "object")
                    throw TypeError(".proto.Follow.theater: object expected");
                message.theater = $root.proto.Theater.fromObject(object.theater);
            }
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".proto.Follow.user: object expected");
                message.user = $root.proto.User.fromObject(object.user);
            }
            if (object.emailNotification != null)
                message.emailNotification = Boolean(object.emailNotification);
            if (object.pushNotification != null)
                message.pushNotification = Boolean(object.pushNotification);
            if (object.muted != null)
                message.muted = Boolean(object.muted);
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".proto.Follow.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.updatedAt != null) {
                if (typeof object.updatedAt !== "object")
                    throw TypeError(".proto.Follow.updatedAt: object expected");
                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a Follow message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Follow
         * @static
         * @param {proto.Follow} message Follow
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Follow.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.theaterId = "";
                object.theater = null;
                object.userId = "";
                object.user = null;
                object.emailNotification = false;
                object.pushNotification = false;
                object.muted = false;
                object.createdAt = null;
                object.updatedAt = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.theaterId != null && message.hasOwnProperty("theaterId"))
                object.theaterId = message.theaterId;
            if (message.theater != null && message.hasOwnProperty("theater"))
                object.theater = $root.proto.Theater.toObject(message.theater, options);
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.proto.User.toObject(message.user, options);
            if (message.emailNotification != null && message.hasOwnProperty("emailNotification"))
                object.emailNotification = message.emailNotification;
            if (message.pushNotification != null && message.hasOwnProperty("pushNotification"))
                object.pushNotification = message.pushNotification;
            if (message.muted != null && message.hasOwnProperty("muted"))
                object.muted = message.muted;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
            return object;
        };

        /**
         * Converts this Follow to JSON.
         * @function toJSON
         * @memberof proto.Follow
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Follow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Follow;
    })();

    proto.FollowedTheatersResponse = (function() {

        /**
         * Properties of a FollowedTheatersResponse.
         * @memberof proto
         * @interface IFollowedTheatersResponse
         * @property {number|Long|null} [code] FollowedTheatersResponse code
         * @property {string|null} [status] FollowedTheatersResponse status
         * @property {string|null} [message] FollowedTheatersResponse message
         * @property {Array.<proto.ITheater>|null} [result] FollowedTheatersResponse result
         */

        /**
         * Constructs a new FollowedTheatersResponse.
         * @memberof proto
         * @classdesc Represents a FollowedTheatersResponse.
         * @implements IFollowedTheatersResponse
         * @constructor
         * @param {proto.IFollowedTheatersResponse=} [properties] Properties to set
         */
        function FollowedTheatersResponse(properties) {
            this.result = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FollowedTheatersResponse code.
         * @member {number|Long} code
         * @memberof proto.FollowedTheatersResponse
         * @instance
         */
        FollowedTheatersResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FollowedTheatersResponse status.
         * @member {string} status
         * @memberof proto.FollowedTheatersResponse
         * @instance
         */
        FollowedTheatersResponse.prototype.status = "";

        /**
         * FollowedTheatersResponse message.
         * @member {string} message
         * @memberof proto.FollowedTheatersResponse
         * @instance
         */
        FollowedTheatersResponse.prototype.message = "";

        /**
         * FollowedTheatersResponse result.
         * @member {Array.<proto.ITheater>} result
         * @memberof proto.FollowedTheatersResponse
         * @instance
         */
        FollowedTheatersResponse.prototype.result = $util.emptyArray;

        /**
         * Creates a new FollowedTheatersResponse instance using the specified properties.
         * @function create
         * @memberof proto.FollowedTheatersResponse
         * @static
         * @param {proto.IFollowedTheatersResponse=} [properties] Properties to set
         * @returns {proto.FollowedTheatersResponse} FollowedTheatersResponse instance
         */
        FollowedTheatersResponse.create = function create(properties) {
            return new FollowedTheatersResponse(properties);
        };

        /**
         * Encodes the specified FollowedTheatersResponse message. Does not implicitly {@link proto.FollowedTheatersResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.FollowedTheatersResponse
         * @static
         * @param {proto.IFollowedTheatersResponse} message FollowedTheatersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FollowedTheatersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.code);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.result != null && message.result.length)
                for (var i = 0; i < message.result.length; ++i)
                    $root.proto.Theater.encode(message.result[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FollowedTheatersResponse message, length delimited. Does not implicitly {@link proto.FollowedTheatersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.FollowedTheatersResponse
         * @static
         * @param {proto.IFollowedTheatersResponse} message FollowedTheatersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FollowedTheatersResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FollowedTheatersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.FollowedTheatersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.FollowedTheatersResponse} FollowedTheatersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FollowedTheatersResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FollowedTheatersResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int64();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    if (!(message.result && message.result.length))
                        message.result = [];
                    message.result.push($root.proto.Theater.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FollowedTheatersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.FollowedTheatersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.FollowedTheatersResponse} FollowedTheatersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FollowedTheatersResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FollowedTheatersResponse message.
         * @function verify
         * @memberof proto.FollowedTheatersResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FollowedTheatersResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                if (!Array.isArray(message.result))
                    return "result: array expected";
                for (var i = 0; i < message.result.length; ++i) {
                    var error = $root.proto.Theater.verify(message.result[i]);
                    if (error)
                        return "result." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FollowedTheatersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.FollowedTheatersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.FollowedTheatersResponse} FollowedTheatersResponse
         */
        FollowedTheatersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.FollowedTheatersResponse)
                return object;
            var message = new $root.proto.FollowedTheatersResponse();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = false;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
            if (object.status != null)
                message.status = String(object.status);
            if (object.message != null)
                message.message = String(object.message);
            if (object.result) {
                if (!Array.isArray(object.result))
                    throw TypeError(".proto.FollowedTheatersResponse.result: array expected");
                message.result = [];
                for (var i = 0; i < object.result.length; ++i) {
                    if (typeof object.result[i] !== "object")
                        throw TypeError(".proto.FollowedTheatersResponse.result: object expected");
                    message.result[i] = $root.proto.Theater.fromObject(object.result[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FollowedTheatersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.FollowedTheatersResponse
         * @static
         * @param {proto.FollowedTheatersResponse} message FollowedTheatersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FollowedTheatersResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.result = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.status = "";
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.result && message.result.length) {
                object.result = [];
                for (var j = 0; j < message.result.length; ++j)
                    object.result[j] = $root.proto.Theater.toObject(message.result[j], options);
            }
            return object;
        };

        /**
         * Converts this FollowedTheatersResponse to JSON.
         * @function toJSON
         * @memberof proto.FollowedTheatersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FollowedTheatersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FollowedTheatersResponse;
    })();

    proto.TheaterService = (function() {

        /**
         * Constructs a new TheaterService service.
         * @memberof proto
         * @classdesc Represents a TheaterService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function TheaterService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (TheaterService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TheaterService;

        /**
         * Creates new TheaterService service using the specified rpc implementation.
         * @function create
         * @memberof proto.TheaterService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {TheaterService} RPC service. Useful where requests and/or responses are streamed.
         */
        TheaterService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link proto.TheaterService#invite}.
         * @memberof proto.TheaterService
         * @typedef InviteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls Invite.
         * @function invite
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IInviteFriendsTheaterRequest} request InviteFriendsTheaterRequest message or plain object
         * @param {proto.TheaterService.InviteCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.invite = function invite(request, callback) {
            return this.rpcCall(invite, $root.proto.InviteFriendsTheaterRequest, $root.proto.Response, request, callback);
        }, "name", { value: "Invite" });

        /**
         * Calls Invite.
         * @function invite
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IInviteFriendsTheaterRequest} request InviteFriendsTheaterRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.TheaterService#getFollowedTheaters}.
         * @memberof proto.TheaterService
         * @typedef GetFollowedTheatersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.FollowedTheatersResponse} [response] FollowedTheatersResponse
         */

        /**
         * Calls GetFollowedTheaters.
         * @function getFollowedTheaters
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @param {proto.TheaterService.GetFollowedTheatersCallback} callback Node-style callback called with the error, if any, and FollowedTheatersResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.getFollowedTheaters = function getFollowedTheaters(request, callback) {
            return this.rpcCall(getFollowedTheaters, $root.proto.AuthenticateRequest, $root.proto.FollowedTheatersResponse, request, callback);
        }, "name", { value: "GetFollowedTheaters" });

        /**
         * Calls GetFollowedTheaters.
         * @function getFollowedTheaters
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IAuthenticateRequest} request AuthenticateRequest message or plain object
         * @returns {Promise<proto.FollowedTheatersResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.TheaterService#follow}.
         * @memberof proto.TheaterService
         * @typedef FollowCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls Follow.
         * @function follow
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.ITheaterAuthRequest} request TheaterAuthRequest message or plain object
         * @param {proto.TheaterService.FollowCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.follow = function follow(request, callback) {
            return this.rpcCall(follow, $root.proto.TheaterAuthRequest, $root.proto.Response, request, callback);
        }, "name", { value: "Follow" });

        /**
         * Calls Follow.
         * @function follow
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.ITheaterAuthRequest} request TheaterAuthRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.TheaterService#unfollow}.
         * @memberof proto.TheaterService
         * @typedef UnfollowCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls Unfollow.
         * @function unfollow
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.ITheaterAuthRequest} request TheaterAuthRequest message or plain object
         * @param {proto.TheaterService.UnfollowCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.unfollow = function unfollow(request, callback) {
            return this.rpcCall(unfollow, $root.proto.TheaterAuthRequest, $root.proto.Response, request, callback);
        }, "name", { value: "Unfollow" });

        /**
         * Calls Unfollow.
         * @function unfollow
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.ITheaterAuthRequest} request TheaterAuthRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.TheaterService#getTheater}.
         * @memberof proto.TheaterService
         * @typedef GetTheaterCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.UserTheaterResponse} [response] UserTheaterResponse
         */

        /**
         * Calls GetTheater.
         * @function getTheater
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IGetTheaterRequest} request GetTheaterRequest message or plain object
         * @param {proto.TheaterService.GetTheaterCallback} callback Node-style callback called with the error, if any, and UserTheaterResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.getTheater = function getTheater(request, callback) {
            return this.rpcCall(getTheater, $root.proto.GetTheaterRequest, $root.proto.UserTheaterResponse, request, callback);
        }, "name", { value: "GetTheater" });

        /**
         * Calls GetTheater.
         * @function getTheater
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IGetTheaterRequest} request GetTheaterRequest message or plain object
         * @returns {Promise<proto.UserTheaterResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.TheaterService#updateTheater}.
         * @memberof proto.TheaterService
         * @typedef UpdateTheaterCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls UpdateTheater.
         * @function updateTheater
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.ITheaterAuthRequest} request TheaterAuthRequest message or plain object
         * @param {proto.TheaterService.UpdateTheaterCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.updateTheater = function updateTheater(request, callback) {
            return this.rpcCall(updateTheater, $root.proto.TheaterAuthRequest, $root.proto.Response, request, callback);
        }, "name", { value: "UpdateTheater" });

        /**
         * Calls UpdateTheater.
         * @function updateTheater
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.ITheaterAuthRequest} request TheaterAuthRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.TheaterService#getSubtitles}.
         * @memberof proto.TheaterService
         * @typedef GetSubtitlesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.TheaterSubtitlesResponse} [response] TheaterSubtitlesResponse
         */

        /**
         * Calls GetSubtitles.
         * @function getSubtitles
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IMediaSourceAuthRequest} request MediaSourceAuthRequest message or plain object
         * @param {proto.TheaterService.GetSubtitlesCallback} callback Node-style callback called with the error, if any, and TheaterSubtitlesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.getSubtitles = function getSubtitles(request, callback) {
            return this.rpcCall(getSubtitles, $root.proto.MediaSourceAuthRequest, $root.proto.TheaterSubtitlesResponse, request, callback);
        }, "name", { value: "GetSubtitles" });

        /**
         * Calls GetSubtitles.
         * @function getSubtitles
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IMediaSourceAuthRequest} request MediaSourceAuthRequest message or plain object
         * @returns {Promise<proto.TheaterSubtitlesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.TheaterService#getMediaSources}.
         * @memberof proto.TheaterService
         * @typedef GetMediaSourcesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.TheaterMediaSourcesResponse} [response] TheaterMediaSourcesResponse
         */

        /**
         * Calls GetMediaSources.
         * @function getMediaSources
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IMediaSourceAuthRequest} request MediaSourceAuthRequest message or plain object
         * @param {proto.TheaterService.GetMediaSourcesCallback} callback Node-style callback called with the error, if any, and TheaterMediaSourcesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.getMediaSources = function getMediaSources(request, callback) {
            return this.rpcCall(getMediaSources, $root.proto.MediaSourceAuthRequest, $root.proto.TheaterMediaSourcesResponse, request, callback);
        }, "name", { value: "GetMediaSources" });

        /**
         * Calls GetMediaSources.
         * @function getMediaSources
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IMediaSourceAuthRequest} request MediaSourceAuthRequest message or plain object
         * @returns {Promise<proto.TheaterMediaSourcesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.TheaterService#selectMediaSource}.
         * @memberof proto.TheaterService
         * @typedef SelectMediaSourceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls SelectMediaSource.
         * @function selectMediaSource
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IMediaSourceAuthRequest} request MediaSourceAuthRequest message or plain object
         * @param {proto.TheaterService.SelectMediaSourceCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.selectMediaSource = function selectMediaSource(request, callback) {
            return this.rpcCall(selectMediaSource, $root.proto.MediaSourceAuthRequest, $root.proto.Response, request, callback);
        }, "name", { value: "SelectMediaSource" });

        /**
         * Calls SelectMediaSource.
         * @function selectMediaSource
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IMediaSourceAuthRequest} request MediaSourceAuthRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.TheaterService#removeMediaSource}.
         * @memberof proto.TheaterService
         * @typedef RemoveMediaSourceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls RemoveMediaSource.
         * @function removeMediaSource
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IMediaSourceRemoveRequest} request MediaSourceRemoveRequest message or plain object
         * @param {proto.TheaterService.RemoveMediaSourceCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.removeMediaSource = function removeMediaSource(request, callback) {
            return this.rpcCall(removeMediaSource, $root.proto.MediaSourceRemoveRequest, $root.proto.Response, request, callback);
        }, "name", { value: "RemoveMediaSource" });

        /**
         * Calls RemoveMediaSource.
         * @function removeMediaSource
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IMediaSourceRemoveRequest} request MediaSourceRemoveRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.TheaterService#addMediaSource}.
         * @memberof proto.TheaterService
         * @typedef AddMediaSourceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls AddMediaSource.
         * @function addMediaSource
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IMediaSourceAuthRequest} request MediaSourceAuthRequest message or plain object
         * @param {proto.TheaterService.AddMediaSourceCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.addMediaSource = function addMediaSource(request, callback) {
            return this.rpcCall(addMediaSource, $root.proto.MediaSourceAuthRequest, $root.proto.Response, request, callback);
        }, "name", { value: "AddMediaSource" });

        /**
         * Calls AddMediaSource.
         * @function addMediaSource
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IMediaSourceAuthRequest} request MediaSourceAuthRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link proto.TheaterService#removeSubtitle}.
         * @memberof proto.TheaterService
         * @typedef RemoveSubtitleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {proto.Response} [response] Response
         */

        /**
         * Calls RemoveSubtitle.
         * @function removeSubtitle
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IRemoveSubtitleRequest} request RemoveSubtitleRequest message or plain object
         * @param {proto.TheaterService.RemoveSubtitleCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TheaterService.prototype.removeSubtitle = function removeSubtitle(request, callback) {
            return this.rpcCall(removeSubtitle, $root.proto.RemoveSubtitleRequest, $root.proto.Response, request, callback);
        }, "name", { value: "RemoveSubtitle" });

        /**
         * Calls RemoveSubtitle.
         * @function removeSubtitle
         * @memberof proto.TheaterService
         * @instance
         * @param {proto.IRemoveSubtitleRequest} request RemoveSubtitleRequest message or plain object
         * @returns {Promise<proto.Response>} Promise
         * @variation 2
         */

        return TheaterService;
    })();

    return proto;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
