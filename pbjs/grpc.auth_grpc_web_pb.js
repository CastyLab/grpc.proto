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

var grpc_connection_pb = require('./grpc.connection_pb.js')
const proto = {};
proto.proto = require('./grpc.auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.AuthServiceClient =
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
proto.proto.AuthServicePromiseClient =
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
 *   !proto.proto.AuthRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodDescriptor_AuthService_Authenticate = new grpc.web.MethodDescriptor(
  '/proto.AuthService/Authenticate',
  grpc.web.MethodType.UNARY,
  proto.proto.AuthRequest,
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.AuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.AuthRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodInfo_AuthService_Authenticate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.AuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.proto.AuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.AuthServiceClient.prototype.authenticate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.AuthService/Authenticate',
      request,
      metadata || {},
      methodDescriptor_AuthService_Authenticate,
      callback);
};


/**
 * @param {!proto.proto.AuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.AuthResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.AuthServicePromiseClient.prototype.authenticate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.AuthService/Authenticate',
      request,
      metadata || {},
      methodDescriptor_AuthService_Authenticate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.OAUTHRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodDescriptor_AuthService_CallbackOAUTH = new grpc.web.MethodDescriptor(
  '/proto.AuthService/CallbackOAUTH',
  grpc.web.MethodType.UNARY,
  proto.proto.OAUTHRequest,
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.OAUTHRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.OAUTHRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodInfo_AuthService_CallbackOAUTH = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.OAUTHRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.proto.OAUTHRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.AuthServiceClient.prototype.callbackOAUTH =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.AuthService/CallbackOAUTH',
      request,
      metadata || {},
      methodDescriptor_AuthService_CallbackOAUTH,
      callback);
};


/**
 * @param {!proto.proto.OAUTHRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.AuthResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.AuthServicePromiseClient.prototype.callbackOAUTH =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.AuthService/CallbackOAUTH',
      request,
      metadata || {},
      methodDescriptor_AuthService_CallbackOAUTH);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.RefreshTokenRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodDescriptor_AuthService_RefreshToken = new grpc.web.MethodDescriptor(
  '/proto.AuthService/RefreshToken',
  grpc.web.MethodType.UNARY,
  proto.proto.RefreshTokenRequest,
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.RefreshTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.RefreshTokenRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodInfo_AuthService_RefreshToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.RefreshTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.proto.RefreshTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.AuthServiceClient.prototype.refreshToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.AuthService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_RefreshToken,
      callback);
};


/**
 * @param {!proto.proto.RefreshTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.AuthResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.AuthServicePromiseClient.prototype.refreshToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.AuthService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_RefreshToken);
};


module.exports = proto.proto;

