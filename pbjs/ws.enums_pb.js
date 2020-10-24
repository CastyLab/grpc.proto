// source: ws.enums.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.proto.EMSG', null, global);
goog.exportSymbol('proto.proto.PERSONAL_STATE', null, global);
/**
 * @enum {number}
 */
proto.proto.PERSONAL_STATE = {
  OFFLINE: 0,
  ONLINE: 1,
  IDLE: 2,
  BUSY: 3,
  INVISIBLE: 4
};

/**
 * @enum {number}
 */
proto.proto.EMSG = {
  INVALID: 0,
  PING: 1,
  PONG: 2,
  LOGON: 3,
  LOGOUT: 4,
  PERSONAL_STATE_CHANGED: 5,
  PERSONAL_ACTIVITY_CHANGED: 6,
  AUTHORIZED: 7,
  UNAUTHORIZED: 8,
  CHAT_MESSAGES: 9,
  LOG_MESSAGES: 10,
  NEW_CHAT_MESSAGE: 11,
  NEW_LOG_MESSAGE: 12,
  MEMBER_STATE_CHANGED: 13,
  THEATER_MEMBERS: 14,
  THEATER_PLAY: 15,
  THEATER_BUFFERED_AND_PLAYED: 16,
  THEATER_PAUSE: 17,
  NEW_NOTIFICATION: 18,
  FRIEND_REQUEST_ACCEPTED: 19,
  THEATER_UPDATED: 20,
  THEATER_MEDIA_SOURCE_CHANGED: 21,
  SYNC_ME: 22,
  SYNCED: 23,
  BUFFERING: 24,
  BUFFERED: 25,
  WAITING_FOR_CLIENTS: 26,
  CLIENTS_SYNCYED: 27,
  FINISHED_MOVIE: 28,
  PLAYING: 29,
  CLIENT_READY: 30,
  MESSAGE_EDITED: 31,
  MESSAGE_DELETED: 32,
  USER_UPDATED: 33,
  SELF_PERSONAL_STATE_CHANGED: 34
};

goog.object.extend(exports, proto.proto);
