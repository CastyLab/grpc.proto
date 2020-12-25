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
proto.proto = require('./grpc.message_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.MessagesServiceClient =
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
proto.proto.MessagesServicePromiseClient =
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
 *   !proto.proto.GetMessagesRequest,
 *   !proto.proto.GetMessagesResponse>}
 */
const methodDescriptor_MessagesService_GetUserMessages = new grpc.web.MethodDescriptor(
  '/proto.MessagesService/GetUserMessages',
  grpc.web.MethodType.UNARY,
  proto.proto.GetMessagesRequest,
  proto.proto.GetMessagesResponse,
  /**
   * @param {!proto.proto.GetMessagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.GetMessagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.GetMessagesRequest,
 *   !proto.proto.GetMessagesResponse>}
 */
const methodInfo_MessagesService_GetUserMessages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.GetMessagesResponse,
  /**
   * @param {!proto.proto.GetMessagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.GetMessagesResponse.deserializeBinary
);


/**
 * @param {!proto.proto.GetMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.GetMessagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.GetMessagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.MessagesServiceClient.prototype.getUserMessages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.MessagesService/GetUserMessages',
      request,
      metadata || {},
      methodDescriptor_MessagesService_GetUserMessages,
      callback);
};


/**
 * @param {!proto.proto.GetMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.GetMessagesResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.MessagesServicePromiseClient.prototype.getUserMessages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.MessagesService/GetUserMessages',
      request,
      metadata || {},
      methodDescriptor_MessagesService_GetUserMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.MessageRequest,
 *   !proto.proto.MessageResponse>}
 */
const methodDescriptor_MessagesService_CreateMessage = new grpc.web.MethodDescriptor(
  '/proto.MessagesService/CreateMessage',
  grpc.web.MethodType.UNARY,
  proto.proto.MessageRequest,
  proto.proto.MessageResponse,
  /**
   * @param {!proto.proto.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.MessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.MessageRequest,
 *   !proto.proto.MessageResponse>}
 */
const methodInfo_MessagesService_CreateMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.MessageResponse,
  /**
   * @param {!proto.proto.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.MessageResponse.deserializeBinary
);


/**
 * @param {!proto.proto.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.MessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.MessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.MessagesServiceClient.prototype.createMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.MessagesService/CreateMessage',
      request,
      metadata || {},
      methodDescriptor_MessagesService_CreateMessage,
      callback);
};


/**
 * @param {!proto.proto.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.MessageResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.MessagesServicePromiseClient.prototype.createMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.MessagesService/CreateMessage',
      request,
      metadata || {},
      methodDescriptor_MessagesService_CreateMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.MessageRequest,
 *   !proto.proto.MessageResponse>}
 */
const methodDescriptor_MessagesService_EditMessage = new grpc.web.MethodDescriptor(
  '/proto.MessagesService/EditMessage',
  grpc.web.MethodType.UNARY,
  proto.proto.MessageRequest,
  proto.proto.MessageResponse,
  /**
   * @param {!proto.proto.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.MessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.MessageRequest,
 *   !proto.proto.MessageResponse>}
 */
const methodInfo_MessagesService_EditMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.MessageResponse,
  /**
   * @param {!proto.proto.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.MessageResponse.deserializeBinary
);


/**
 * @param {!proto.proto.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.MessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.MessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.MessagesServiceClient.prototype.editMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.MessagesService/EditMessage',
      request,
      metadata || {},
      methodDescriptor_MessagesService_EditMessage,
      callback);
};


/**
 * @param {!proto.proto.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.MessageResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.MessagesServicePromiseClient.prototype.editMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.MessagesService/EditMessage',
      request,
      metadata || {},
      methodDescriptor_MessagesService_EditMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.MessageRequest,
 *   !proto.proto.MessageResponse>}
 */
const methodDescriptor_MessagesService_DeleteMessage = new grpc.web.MethodDescriptor(
  '/proto.MessagesService/DeleteMessage',
  grpc.web.MethodType.UNARY,
  proto.proto.MessageRequest,
  proto.proto.MessageResponse,
  /**
   * @param {!proto.proto.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.MessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.MessageRequest,
 *   !proto.proto.MessageResponse>}
 */
const methodInfo_MessagesService_DeleteMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.MessageResponse,
  /**
   * @param {!proto.proto.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.MessageResponse.deserializeBinary
);


/**
 * @param {!proto.proto.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.MessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.MessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.MessagesServiceClient.prototype.deleteMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.MessagesService/DeleteMessage',
      request,
      metadata || {},
      methodDescriptor_MessagesService_DeleteMessage,
      callback);
};


/**
 * @param {!proto.proto.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.MessageResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.MessagesServicePromiseClient.prototype.deleteMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.MessagesService/DeleteMessage',
      request,
      metadata || {},
      methodDescriptor_MessagesService_DeleteMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.CreateAttachmentRequest,
 *   !proto.proto.AttachmentResponse>}
 */
const methodDescriptor_MessagesService_CreateAttachment = new grpc.web.MethodDescriptor(
  '/proto.MessagesService/CreateAttachment',
  grpc.web.MethodType.UNARY,
  proto.proto.CreateAttachmentRequest,
  proto.proto.AttachmentResponse,
  /**
   * @param {!proto.proto.CreateAttachmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AttachmentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.CreateAttachmentRequest,
 *   !proto.proto.AttachmentResponse>}
 */
const methodInfo_MessagesService_CreateAttachment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.AttachmentResponse,
  /**
   * @param {!proto.proto.CreateAttachmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AttachmentResponse.deserializeBinary
);


/**
 * @param {!proto.proto.CreateAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.AttachmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.AttachmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.MessagesServiceClient.prototype.createAttachment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.MessagesService/CreateAttachment',
      request,
      metadata || {},
      methodDescriptor_MessagesService_CreateAttachment,
      callback);
};


/**
 * @param {!proto.proto.CreateAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.AttachmentResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.MessagesServicePromiseClient.prototype.createAttachment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.MessagesService/CreateAttachment',
      request,
      metadata || {},
      methodDescriptor_MessagesService_CreateAttachment);
};


module.exports = proto.proto;

