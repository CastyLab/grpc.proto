/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var grpc_base_pb = require('./grpc.base_pb.js')

var grpc_user_pb = require('./grpc.user_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.proto = require('./grpc.theater_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.TheaterServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.TheaterServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.InviteFriendsTheaterRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_Invite = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/Invite',
  grpc.web.MethodType.UNARY,
  proto.proto.InviteFriendsTheaterRequest,
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.InviteFriendsTheaterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.InviteFriendsTheaterRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_TheaterService_Invite = new grpc.web.AbstractClientBase.MethodInfo(
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.InviteFriendsTheaterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.InviteFriendsTheaterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.invite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/Invite',
      request,
      metadata || {},
      methodDescriptor_TheaterService_Invite,
      callback);
};


/**
 * @param {!proto.proto.InviteFriendsTheaterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.invite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/Invite',
      request,
      metadata || {},
      methodDescriptor_TheaterService_Invite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.TheaterAuthRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_Follow = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/Follow',
  grpc.web.MethodType.UNARY,
  proto.proto.TheaterAuthRequest,
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.TheaterAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.TheaterAuthRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_TheaterService_Follow = new grpc.web.AbstractClientBase.MethodInfo(
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.TheaterAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.TheaterAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.follow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/Follow',
      request,
      metadata || {},
      methodDescriptor_TheaterService_Follow,
      callback);
};


/**
 * @param {!proto.proto.TheaterAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.follow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/Follow',
      request,
      metadata || {},
      methodDescriptor_TheaterService_Follow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.TheaterAuthRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_Unfollow = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/Unfollow',
  grpc.web.MethodType.UNARY,
  proto.proto.TheaterAuthRequest,
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.TheaterAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.TheaterAuthRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_TheaterService_Unfollow = new grpc.web.AbstractClientBase.MethodInfo(
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.TheaterAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.TheaterAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.unfollow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/Unfollow',
      request,
      metadata || {},
      methodDescriptor_TheaterService_Unfollow,
      callback);
};


/**
 * @param {!proto.proto.TheaterAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.unfollow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/Unfollow',
      request,
      metadata || {},
      methodDescriptor_TheaterService_Unfollow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.GetTheaterRequest,
 *   !proto.proto.UserTheaterResponse>}
 */
const methodDescriptor_TheaterService_GetTheater = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/GetTheater',
  grpc.web.MethodType.UNARY,
  proto.proto.GetTheaterRequest,
  proto.proto.UserTheaterResponse,
  /**
   * @param {!proto.proto.GetTheaterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserTheaterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.GetTheaterRequest,
 *   !proto.proto.UserTheaterResponse>}
 */
const methodInfo_TheaterService_GetTheater = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UserTheaterResponse,
  /**
   * @param {!proto.proto.GetTheaterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserTheaterResponse.deserializeBinary
);


/**
 * @param {!proto.proto.GetTheaterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.UserTheaterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UserTheaterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.getTheater =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/GetTheater',
      request,
      metadata || {},
      methodDescriptor_TheaterService_GetTheater,
      callback);
};


/**
 * @param {!proto.proto.GetTheaterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UserTheaterResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.getTheater =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/GetTheater',
      request,
      metadata || {},
      methodDescriptor_TheaterService_GetTheater);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.TheaterAuthRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_UpdateTheater = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/UpdateTheater',
  grpc.web.MethodType.UNARY,
  proto.proto.TheaterAuthRequest,
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.TheaterAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.TheaterAuthRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_TheaterService_UpdateTheater = new grpc.web.AbstractClientBase.MethodInfo(
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.TheaterAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.TheaterAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.updateTheater =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/UpdateTheater',
      request,
      metadata || {},
      methodDescriptor_TheaterService_UpdateTheater,
      callback);
};


/**
 * @param {!proto.proto.TheaterAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.updateTheater =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/UpdateTheater',
      request,
      metadata || {},
      methodDescriptor_TheaterService_UpdateTheater);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.MediaSourceAuthRequest,
 *   !proto.proto.TheaterSubtitlesResponse>}
 */
const methodDescriptor_TheaterService_GetSubtitles = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/GetSubtitles',
  grpc.web.MethodType.UNARY,
  proto.proto.MediaSourceAuthRequest,
  proto.proto.TheaterSubtitlesResponse,
  /**
   * @param {!proto.proto.MediaSourceAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.TheaterSubtitlesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.MediaSourceAuthRequest,
 *   !proto.proto.TheaterSubtitlesResponse>}
 */
const methodInfo_TheaterService_GetSubtitles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.TheaterSubtitlesResponse,
  /**
   * @param {!proto.proto.MediaSourceAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.TheaterSubtitlesResponse.deserializeBinary
);


/**
 * @param {!proto.proto.MediaSourceAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.TheaterSubtitlesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.TheaterSubtitlesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.getSubtitles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/GetSubtitles',
      request,
      metadata || {},
      methodDescriptor_TheaterService_GetSubtitles,
      callback);
};


/**
 * @param {!proto.proto.MediaSourceAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.TheaterSubtitlesResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.getSubtitles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/GetSubtitles',
      request,
      metadata || {},
      methodDescriptor_TheaterService_GetSubtitles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.MediaSourceAuthRequest,
 *   !proto.proto.TheaterMediaSourcesResponse>}
 */
const methodDescriptor_TheaterService_GetMediaSources = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/GetMediaSources',
  grpc.web.MethodType.UNARY,
  proto.proto.MediaSourceAuthRequest,
  proto.proto.TheaterMediaSourcesResponse,
  /**
   * @param {!proto.proto.MediaSourceAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.TheaterMediaSourcesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.MediaSourceAuthRequest,
 *   !proto.proto.TheaterMediaSourcesResponse>}
 */
const methodInfo_TheaterService_GetMediaSources = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.TheaterMediaSourcesResponse,
  /**
   * @param {!proto.proto.MediaSourceAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.TheaterMediaSourcesResponse.deserializeBinary
);


/**
 * @param {!proto.proto.MediaSourceAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.TheaterMediaSourcesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.TheaterMediaSourcesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.getMediaSources =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/GetMediaSources',
      request,
      metadata || {},
      methodDescriptor_TheaterService_GetMediaSources,
      callback);
};


/**
 * @param {!proto.proto.MediaSourceAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.TheaterMediaSourcesResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.getMediaSources =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/GetMediaSources',
      request,
      metadata || {},
      methodDescriptor_TheaterService_GetMediaSources);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.MediaSourceAuthRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_SelectMediaSource = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/SelectMediaSource',
  grpc.web.MethodType.UNARY,
  proto.proto.MediaSourceAuthRequest,
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.MediaSourceAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.MediaSourceAuthRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_TheaterService_SelectMediaSource = new grpc.web.AbstractClientBase.MethodInfo(
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.MediaSourceAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.MediaSourceAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.selectMediaSource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/SelectMediaSource',
      request,
      metadata || {},
      methodDescriptor_TheaterService_SelectMediaSource,
      callback);
};


/**
 * @param {!proto.proto.MediaSourceAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.selectMediaSource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/SelectMediaSource',
      request,
      metadata || {},
      methodDescriptor_TheaterService_SelectMediaSource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.MediaSourceRemoveRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_RemoveMediaSource = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/RemoveMediaSource',
  grpc.web.MethodType.UNARY,
  proto.proto.MediaSourceRemoveRequest,
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.MediaSourceRemoveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.MediaSourceRemoveRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_TheaterService_RemoveMediaSource = new grpc.web.AbstractClientBase.MethodInfo(
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.MediaSourceRemoveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.MediaSourceRemoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.removeMediaSource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/RemoveMediaSource',
      request,
      metadata || {},
      methodDescriptor_TheaterService_RemoveMediaSource,
      callback);
};


/**
 * @param {!proto.proto.MediaSourceRemoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.removeMediaSource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/RemoveMediaSource',
      request,
      metadata || {},
      methodDescriptor_TheaterService_RemoveMediaSource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.MediaSourceAuthRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_AddMediaSource = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/AddMediaSource',
  grpc.web.MethodType.UNARY,
  proto.proto.MediaSourceAuthRequest,
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.MediaSourceAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.MediaSourceAuthRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_TheaterService_AddMediaSource = new grpc.web.AbstractClientBase.MethodInfo(
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.MediaSourceAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.MediaSourceAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.addMediaSource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/AddMediaSource',
      request,
      metadata || {},
      methodDescriptor_TheaterService_AddMediaSource,
      callback);
};


/**
 * @param {!proto.proto.MediaSourceAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.addMediaSource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/AddMediaSource',
      request,
      metadata || {},
      methodDescriptor_TheaterService_AddMediaSource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.RemoveSubtitleRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_RemoveSubtitle = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/RemoveSubtitle',
  grpc.web.MethodType.UNARY,
  proto.proto.RemoveSubtitleRequest,
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.RemoveSubtitleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.RemoveSubtitleRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_TheaterService_RemoveSubtitle = new grpc.web.AbstractClientBase.MethodInfo(
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.RemoveSubtitleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.RemoveSubtitleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.removeSubtitle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/RemoveSubtitle',
      request,
      metadata || {},
      methodDescriptor_TheaterService_RemoveSubtitle,
      callback);
};


/**
 * @param {!proto.proto.RemoveSubtitleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.removeSubtitle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/RemoveSubtitle',
      request,
      metadata || {},
      methodDescriptor_TheaterService_RemoveSubtitle);
};


module.exports = proto.proto;

