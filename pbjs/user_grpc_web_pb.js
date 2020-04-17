/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var base_pb = require('./base_pb.js')

var auth_pb = require('./auth_pb.js')

var ws_enums_pb = require('./ws.enums_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.proto = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.UserServiceClient =
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
proto.proto.UserServicePromiseClient =
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
 *   !proto.proto.RollbackStatesRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_UserService_RollbackStates = new grpc.web.MethodDescriptor(
  '/proto.UserService/RollbackStates',
  grpc.web.MethodType.UNARY,
  proto.proto.RollbackStatesRequest,
  base_pb.Response,
  /**
   * @param {!proto.proto.RollbackStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.RollbackStatesRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_UserService_RollbackStates = new grpc.web.AbstractClientBase.MethodInfo(
  base_pb.Response,
  /**
   * @param {!proto.proto.RollbackStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.RollbackStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.rollbackStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/RollbackStates',
      request,
      metadata || {},
      methodDescriptor_UserService_RollbackStates,
      callback);
};


/**
 * @param {!proto.proto.RollbackStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.rollbackStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/RollbackStates',
      request,
      metadata || {},
      methodDescriptor_UserService_RollbackStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UpdateStateRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_UserService_UpdateState = new grpc.web.MethodDescriptor(
  '/proto.UserService/UpdateState',
  grpc.web.MethodType.UNARY,
  proto.proto.UpdateStateRequest,
  base_pb.Response,
  /**
   * @param {!proto.proto.UpdateStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.UpdateStateRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_UserService_UpdateState = new grpc.web.AbstractClientBase.MethodInfo(
  base_pb.Response,
  /**
   * @param {!proto.proto.UpdateStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.UpdateStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.updateState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/UpdateState',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateState,
      callback);
};


/**
 * @param {!proto.proto.UpdateStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.updateState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/UpdateState',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UpdateActivityRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_UserService_UpdateActivity = new grpc.web.MethodDescriptor(
  '/proto.UserService/UpdateActivity',
  grpc.web.MethodType.UNARY,
  proto.proto.UpdateActivityRequest,
  base_pb.Response,
  /**
   * @param {!proto.proto.UpdateActivityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.UpdateActivityRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_UserService_UpdateActivity = new grpc.web.AbstractClientBase.MethodInfo(
  base_pb.Response,
  /**
   * @param {!proto.proto.UpdateActivityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.UpdateActivityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.updateActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/UpdateActivity',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateActivity,
      callback);
};


/**
 * @param {!proto.proto.UpdateActivityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.updateActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/UpdateActivity',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.AuthenticateRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_UserService_RemoveActivity = new grpc.web.MethodDescriptor(
  '/proto.UserService/RemoveActivity',
  grpc.web.MethodType.UNARY,
  base_pb.AuthenticateRequest,
  base_pb.Response,
  /**
   * @param {!proto.proto.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.AuthenticateRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_UserService_RemoveActivity = new grpc.web.AbstractClientBase.MethodInfo(
  base_pb.Response,
  /**
   * @param {!proto.proto.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.removeActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/RemoveActivity',
      request,
      metadata || {},
      methodDescriptor_UserService_RemoveActivity,
      callback);
};


/**
 * @param {!proto.proto.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.removeActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/RemoveActivity',
      request,
      metadata || {},
      methodDescriptor_UserService_RemoveActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.AuthenticateRequest,
 *   !proto.proto.GetUserResponse>}
 */
const methodDescriptor_UserService_GetUser = new grpc.web.MethodDescriptor(
  '/proto.UserService/GetUser',
  grpc.web.MethodType.UNARY,
  base_pb.AuthenticateRequest,
  proto.proto.GetUserResponse,
  /**
   * @param {!proto.proto.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.AuthenticateRequest,
 *   !proto.proto.GetUserResponse>}
 */
const methodInfo_UserService_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.GetUserResponse,
  /**
   * @param {!proto.proto.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.proto.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUser,
      callback);
};


/**
 * @param {!proto.proto.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.GetUserResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UpdateUserRequest,
 *   !proto.proto.GetUserResponse>}
 */
const methodDescriptor_UserService_UpdateUser = new grpc.web.MethodDescriptor(
  '/proto.UserService/UpdateUser',
  grpc.web.MethodType.UNARY,
  proto.proto.UpdateUserRequest,
  proto.proto.GetUserResponse,
  /**
   * @param {!proto.proto.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.UpdateUserRequest,
 *   !proto.proto.GetUserResponse>}
 */
const methodInfo_UserService_UpdateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.GetUserResponse,
  /**
   * @param {!proto.proto.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUser,
      callback);
};


/**
 * @param {!proto.proto.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.GetUserResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.SearchUserRequest,
 *   !proto.proto.SearchUserResponse>}
 */
const methodDescriptor_UserService_Search = new grpc.web.MethodDescriptor(
  '/proto.UserService/Search',
  grpc.web.MethodType.UNARY,
  proto.proto.SearchUserRequest,
  proto.proto.SearchUserResponse,
  /**
   * @param {!proto.proto.SearchUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.SearchUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.SearchUserRequest,
 *   !proto.proto.SearchUserResponse>}
 */
const methodInfo_UserService_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.SearchUserResponse,
  /**
   * @param {!proto.proto.SearchUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.SearchUserResponse.deserializeBinary
);


/**
 * @param {!proto.proto.SearchUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.SearchUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.SearchUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.search =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/Search',
      request,
      metadata || {},
      methodDescriptor_UserService_Search,
      callback);
};


/**
 * @param {!proto.proto.SearchUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.SearchUserResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/Search',
      request,
      metadata || {},
      methodDescriptor_UserService_Search);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.CreateUserRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodDescriptor_UserService_CreateUser = new grpc.web.MethodDescriptor(
  '/proto.UserService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.proto.CreateUserRequest,
  auth_pb.AuthResponse,
  /**
   * @param {!proto.proto.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  auth_pb.AuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.CreateUserRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodInfo_UserService_CreateUser = new grpc.web.AbstractClientBase.MethodInfo(
  auth_pb.AuthResponse,
  /**
   * @param {!proto.proto.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  auth_pb.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.proto.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser,
      callback);
};


/**
 * @param {!proto.proto.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.AuthResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.FriendRequest,
 *   !proto.proto.FriendResponse>}
 */
const methodDescriptor_UserService_GetFriend = new grpc.web.MethodDescriptor(
  '/proto.UserService/GetFriend',
  grpc.web.MethodType.UNARY,
  proto.proto.FriendRequest,
  proto.proto.FriendResponse,
  /**
   * @param {!proto.proto.FriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.FriendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.FriendRequest,
 *   !proto.proto.FriendResponse>}
 */
const methodInfo_UserService_GetFriend = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.FriendResponse,
  /**
   * @param {!proto.proto.FriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.FriendResponse.deserializeBinary
);


/**
 * @param {!proto.proto.FriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.FriendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.FriendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.getFriend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/GetFriend',
      request,
      metadata || {},
      methodDescriptor_UserService_GetFriend,
      callback);
};


/**
 * @param {!proto.proto.FriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.FriendResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.getFriend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/GetFriend',
      request,
      metadata || {},
      methodDescriptor_UserService_GetFriend);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.FriendRequest,
 *   !proto.proto.Friend>}
 */
const methodDescriptor_UserService_GetFriendRequest = new grpc.web.MethodDescriptor(
  '/proto.UserService/GetFriendRequest',
  grpc.web.MethodType.UNARY,
  proto.proto.FriendRequest,
  proto.proto.Friend,
  /**
   * @param {!proto.proto.FriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Friend.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.FriendRequest,
 *   !proto.proto.Friend>}
 */
const methodInfo_UserService_GetFriendRequest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.Friend,
  /**
   * @param {!proto.proto.FriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Friend.deserializeBinary
);


/**
 * @param {!proto.proto.FriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Friend)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Friend>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.getFriendRequest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/GetFriendRequest',
      request,
      metadata || {},
      methodDescriptor_UserService_GetFriendRequest,
      callback);
};


/**
 * @param {!proto.proto.FriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Friend>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.getFriendRequest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/GetFriendRequest',
      request,
      metadata || {},
      methodDescriptor_UserService_GetFriendRequest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.FriendRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_UserService_SendFriendRequest = new grpc.web.MethodDescriptor(
  '/proto.UserService/SendFriendRequest',
  grpc.web.MethodType.UNARY,
  proto.proto.FriendRequest,
  base_pb.Response,
  /**
   * @param {!proto.proto.FriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.FriendRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_UserService_SendFriendRequest = new grpc.web.AbstractClientBase.MethodInfo(
  base_pb.Response,
  /**
   * @param {!proto.proto.FriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.FriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.sendFriendRequest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/SendFriendRequest',
      request,
      metadata || {},
      methodDescriptor_UserService_SendFriendRequest,
      callback);
};


/**
 * @param {!proto.proto.FriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.sendFriendRequest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/SendFriendRequest',
      request,
      metadata || {},
      methodDescriptor_UserService_SendFriendRequest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.FriendRequest,
 *   !proto.proto.Response>}
 */
const methodDescriptor_UserService_AcceptFriendRequest = new grpc.web.MethodDescriptor(
  '/proto.UserService/AcceptFriendRequest',
  grpc.web.MethodType.UNARY,
  proto.proto.FriendRequest,
  base_pb.Response,
  /**
   * @param {!proto.proto.FriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.FriendRequest,
 *   !proto.proto.Response>}
 */
const methodInfo_UserService_AcceptFriendRequest = new grpc.web.AbstractClientBase.MethodInfo(
  base_pb.Response,
  /**
   * @param {!proto.proto.FriendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.FriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.acceptFriendRequest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/AcceptFriendRequest',
      request,
      metadata || {},
      methodDescriptor_UserService_AcceptFriendRequest,
      callback);
};


/**
 * @param {!proto.proto.FriendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.acceptFriendRequest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/AcceptFriendRequest',
      request,
      metadata || {},
      methodDescriptor_UserService_AcceptFriendRequest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.AuthenticateRequest,
 *   !proto.proto.FriendsResponse>}
 */
const methodDescriptor_UserService_GetFriends = new grpc.web.MethodDescriptor(
  '/proto.UserService/GetFriends',
  grpc.web.MethodType.UNARY,
  base_pb.AuthenticateRequest,
  proto.proto.FriendsResponse,
  /**
   * @param {!proto.proto.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.FriendsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.AuthenticateRequest,
 *   !proto.proto.FriendsResponse>}
 */
const methodInfo_UserService_GetFriends = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.FriendsResponse,
  /**
   * @param {!proto.proto.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.FriendsResponse.deserializeBinary
);


/**
 * @param {!proto.proto.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.FriendsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.FriendsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.getFriends =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/GetFriends',
      request,
      metadata || {},
      methodDescriptor_UserService_GetFriends,
      callback);
};


/**
 * @param {!proto.proto.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.FriendsResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.getFriends =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/GetFriends',
      request,
      metadata || {},
      methodDescriptor_UserService_GetFriends);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.AuthenticateRequest,
 *   !proto.proto.NotificationResponse>}
 */
const methodDescriptor_UserService_GetNotifications = new grpc.web.MethodDescriptor(
  '/proto.UserService/GetNotifications',
  grpc.web.MethodType.UNARY,
  base_pb.AuthenticateRequest,
  proto.proto.NotificationResponse,
  /**
   * @param {!proto.proto.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.NotificationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.AuthenticateRequest,
 *   !proto.proto.NotificationResponse>}
 */
const methodInfo_UserService_GetNotifications = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.NotificationResponse,
  /**
   * @param {!proto.proto.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.NotificationResponse.deserializeBinary
);


/**
 * @param {!proto.proto.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.NotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.NotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.getNotifications =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/GetNotifications',
      request,
      metadata || {},
      methodDescriptor_UserService_GetNotifications,
      callback);
};


/**
 * @param {!proto.proto.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.NotificationResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.getNotifications =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/GetNotifications',
      request,
      metadata || {},
      methodDescriptor_UserService_GetNotifications);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.CreateNotificationRequest,
 *   !proto.proto.NotificationResponse>}
 */
const methodDescriptor_UserService_CreateNotification = new grpc.web.MethodDescriptor(
  '/proto.UserService/CreateNotification',
  grpc.web.MethodType.UNARY,
  proto.proto.CreateNotificationRequest,
  proto.proto.NotificationResponse,
  /**
   * @param {!proto.proto.CreateNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.NotificationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.CreateNotificationRequest,
 *   !proto.proto.NotificationResponse>}
 */
const methodInfo_UserService_CreateNotification = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.NotificationResponse,
  /**
   * @param {!proto.proto.CreateNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.NotificationResponse.deserializeBinary
);


/**
 * @param {!proto.proto.CreateNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.NotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.NotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.createNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/CreateNotification',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateNotification,
      callback);
};


/**
 * @param {!proto.proto.CreateNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.NotificationResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.createNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/CreateNotification',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateNotification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.AuthenticateRequest,
 *   !proto.proto.NotificationResponse>}
 */
const methodDescriptor_UserService_ReadAllNotifications = new grpc.web.MethodDescriptor(
  '/proto.UserService/ReadAllNotifications',
  grpc.web.MethodType.UNARY,
  base_pb.AuthenticateRequest,
  proto.proto.NotificationResponse,
  /**
   * @param {!proto.proto.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.NotificationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.AuthenticateRequest,
 *   !proto.proto.NotificationResponse>}
 */
const methodInfo_UserService_ReadAllNotifications = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.NotificationResponse,
  /**
   * @param {!proto.proto.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.NotificationResponse.deserializeBinary
);


/**
 * @param {!proto.proto.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.NotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.NotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.readAllNotifications =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/ReadAllNotifications',
      request,
      metadata || {},
      methodDescriptor_UserService_ReadAllNotifications,
      callback);
};


/**
 * @param {!proto.proto.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.NotificationResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.readAllNotifications =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/ReadAllNotifications',
      request,
      metadata || {},
      methodDescriptor_UserService_ReadAllNotifications);
};


module.exports = proto.proto;

