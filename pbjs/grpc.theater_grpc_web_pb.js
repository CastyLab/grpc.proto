/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



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
 *   !proto.proto.GetAllUserTheatersRequest,
 *   !proto.proto.UserTheatersResponse>}
 */
const methodDescriptor_TheaterService_GetUserTheaters = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/GetUserTheaters',
  grpc.web.MethodType.UNARY,
  proto.proto.GetAllUserTheatersRequest,
  proto.proto.UserTheatersResponse,
  /**
   * @param {!proto.proto.GetAllUserTheatersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserTheatersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.GetAllUserTheatersRequest,
 *   !proto.proto.UserTheatersResponse>}
 */
const methodInfo_TheaterService_GetUserTheaters = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UserTheatersResponse,
  /**
   * @param {!proto.proto.GetAllUserTheatersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserTheatersResponse.deserializeBinary
);


/**
 * @param {!proto.proto.GetAllUserTheatersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.UserTheatersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UserTheatersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.getUserTheaters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/GetUserTheaters',
      request,
      metadata || {},
      methodDescriptor_TheaterService_GetUserTheaters,
      callback);
};


/**
 * @param {!proto.proto.GetAllUserTheatersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UserTheatersResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.getUserTheaters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/GetUserTheaters',
      request,
      metadata || {},
      methodDescriptor_TheaterService_GetUserTheaters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.GetAllUserTheatersRequest,
 *   !proto.proto.UserTheatersResponse>}
 */
const methodDescriptor_TheaterService_GetUserSharedTheaters = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/GetUserSharedTheaters',
  grpc.web.MethodType.UNARY,
  proto.proto.GetAllUserTheatersRequest,
  proto.proto.UserTheatersResponse,
  /**
   * @param {!proto.proto.GetAllUserTheatersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserTheatersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.GetAllUserTheatersRequest,
 *   !proto.proto.UserTheatersResponse>}
 */
const methodInfo_TheaterService_GetUserSharedTheaters = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UserTheatersResponse,
  /**
   * @param {!proto.proto.GetAllUserTheatersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserTheatersResponse.deserializeBinary
);


/**
 * @param {!proto.proto.GetAllUserTheatersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.UserTheatersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UserTheatersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.getUserSharedTheaters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/GetUserSharedTheaters',
      request,
      metadata || {},
      methodDescriptor_TheaterService_GetUserSharedTheaters,
      callback);
};


/**
 * @param {!proto.proto.GetAllUserTheatersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UserTheatersResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.getUserSharedTheaters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/GetUserSharedTheaters',
      request,
      metadata || {},
      methodDescriptor_TheaterService_GetUserSharedTheaters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.Theater,
 *   !proto.proto.UserTheaterResponse>}
 */
const methodDescriptor_TheaterService_GetTheater = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/GetTheater',
  grpc.web.MethodType.UNARY,
  proto.proto.Theater,
  proto.proto.UserTheaterResponse,
  /**
   * @param {!proto.proto.Theater} request
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
 *   !proto.proto.Theater,
 *   !proto.proto.UserTheaterResponse>}
 */
const methodInfo_TheaterService_GetTheater = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UserTheaterResponse,
  /**
   * @param {!proto.proto.Theater} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserTheaterResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Theater} request The
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
 * @param {!proto.proto.Theater} request The
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
 *   !proto.proto.CreateTheaterRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_CreateTheater = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/CreateTheater',
  grpc.web.MethodType.UNARY,
  proto.proto.CreateTheaterRequest,
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.CreateTheaterRequest} request
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
 *   !proto.proto.CreateTheaterRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_TheaterService_CreateTheater = new grpc.web.AbstractClientBase.MethodInfo(
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.CreateTheaterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.CreateTheaterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.TheaterServiceClient.prototype.createTheater =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/CreateTheater',
      request,
      metadata || {},
      methodDescriptor_TheaterService_CreateTheater,
      callback);
};


/**
 * @param {!proto.proto.CreateTheaterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.TheaterServicePromiseClient.prototype.createTheater =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/CreateTheater',
      request,
      metadata || {},
      methodDescriptor_TheaterService_CreateTheater);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.TheaterAuthRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_RemoveTheater = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/RemoveTheater',
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
const methodInfo_TheaterService_RemoveTheater = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.TheaterServiceClient.prototype.removeTheater =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/RemoveTheater',
      request,
      metadata || {},
      methodDescriptor_TheaterService_RemoveTheater,
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
proto.proto.TheaterServicePromiseClient.prototype.removeTheater =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/RemoveTheater',
      request,
      metadata || {},
      methodDescriptor_TheaterService_RemoveTheater);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.TheaterAuthRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_EditTheater = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/EditTheater',
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
const methodInfo_TheaterService_EditTheater = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.TheaterServiceClient.prototype.editTheater =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.TheaterService/EditTheater',
      request,
      metadata || {},
      methodDescriptor_TheaterService_EditTheater,
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
proto.proto.TheaterServicePromiseClient.prototype.editTheater =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.TheaterService/EditTheater',
      request,
      metadata || {},
      methodDescriptor_TheaterService_EditTheater);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.TheaterAuthRequest,
 *   !proto.proto.TheaterSubtitlesResponse>}
 */
const methodDescriptor_TheaterService_GetSubtitles = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/GetSubtitles',
  grpc.web.MethodType.UNARY,
  proto.proto.TheaterAuthRequest,
  proto.proto.TheaterSubtitlesResponse,
  /**
   * @param {!proto.proto.TheaterAuthRequest} request
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
 *   !proto.proto.TheaterAuthRequest,
 *   !proto.proto.TheaterSubtitlesResponse>}
 */
const methodInfo_TheaterService_GetSubtitles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.TheaterSubtitlesResponse,
  /**
   * @param {!proto.proto.TheaterAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.TheaterSubtitlesResponse.deserializeBinary
);


/**
 * @param {!proto.proto.TheaterAuthRequest} request The
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
 * @param {!proto.proto.TheaterAuthRequest} request The
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
 *   !proto.proto.AddOrRemoveSubtitleRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_TheaterService_RemoveSubtitle = new grpc.web.MethodDescriptor(
  '/proto.TheaterService/RemoveSubtitle',
  grpc.web.MethodType.UNARY,
  proto.proto.AddOrRemoveSubtitleRequest,
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.AddOrRemoveSubtitleRequest} request
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
 *   !proto.proto.AddOrRemoveSubtitleRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_TheaterService_RemoveSubtitle = new grpc.web.AbstractClientBase.MethodInfo(
  grpc_base_pb.Response,
  /**
   * @param {!proto.proto.AddOrRemoveSubtitleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  grpc_base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.AddOrRemoveSubtitleRequest} request The
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
 * @param {!proto.proto.AddOrRemoveSubtitleRequest} request The
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

