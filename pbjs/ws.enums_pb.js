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
  THEATER_DESCRIPTION_CHANGED: 20,
  THEATER_VIDEO_PLAYER_ACCESS_CHANGED: 21,
  THEATER_PRIVACY_CHANGED: 22,
  SYNC_ME: 23,
  SYNCED: 24,
  BUFFERING: 25,
  BUFFERED: 26,
  WAITING_FOR_CLIENTS: 27,
  CLIENTS_SYNCYED: 28,
  FINISHED_MOVIE: 29,
  PLAYING: 30,
  CLIENT_READY: 31
};

goog.object.extend(exports, proto.proto);
