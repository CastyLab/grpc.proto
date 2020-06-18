// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.23.0
// 	protoc        v3.12.3
// source: grpc.auth.proto

package proto

import (
	context "context"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type OAUTHRequest_Service int32

const (
	OAUTHRequest_Invalid OAUTHRequest_Service = 0
	OAUTHRequest_Google  OAUTHRequest_Service = 1
	OAUTHRequest_Discord OAUTHRequest_Service = 2
)

// Enum value maps for OAUTHRequest_Service.
var (
	OAUTHRequest_Service_name = map[int32]string{
		0: "Invalid",
		1: "Google",
		2: "Discord",
	}
	OAUTHRequest_Service_value = map[string]int32{
		"Invalid": 0,
		"Google":  1,
		"Discord": 2,
	}
)

func (x OAUTHRequest_Service) Enum() *OAUTHRequest_Service {
	p := new(OAUTHRequest_Service)
	*p = x
	return p
}

func (x OAUTHRequest_Service) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (OAUTHRequest_Service) Descriptor() protoreflect.EnumDescriptor {
	return file_grpc_auth_proto_enumTypes[0].Descriptor()
}

func (OAUTHRequest_Service) Type() protoreflect.EnumType {
	return &file_grpc_auth_proto_enumTypes[0]
}

func (x OAUTHRequest_Service) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use OAUTHRequest_Service.Descriptor instead.
func (OAUTHRequest_Service) EnumDescriptor() ([]byte, []int) {
	return file_grpc_auth_proto_rawDescGZIP(), []int{3, 0}
}

type AuthRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	User string `protobuf:"bytes,1,opt,name=user,proto3" json:"user,omitempty"`
	Pass string `protobuf:"bytes,2,opt,name=pass,proto3" json:"pass,omitempty"`
}

func (x *AuthRequest) Reset() {
	*x = AuthRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_grpc_auth_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AuthRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuthRequest) ProtoMessage() {}

func (x *AuthRequest) ProtoReflect() protoreflect.Message {
	mi := &file_grpc_auth_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuthRequest.ProtoReflect.Descriptor instead.
func (*AuthRequest) Descriptor() ([]byte, []int) {
	return file_grpc_auth_proto_rawDescGZIP(), []int{0}
}

func (x *AuthRequest) GetUser() string {
	if x != nil {
		return x.User
	}
	return ""
}

func (x *AuthRequest) GetPass() string {
	if x != nil {
		return x.Pass
	}
	return ""
}

type AuthResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code            int64              `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	Status          string             `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
	Token           []byte             `protobuf:"bytes,3,opt,name=token,proto3" json:"token,omitempty"`
	Type            string             `protobuf:"bytes,4,opt,name=type,proto3" json:"type,omitempty"`
	Message         string             `protobuf:"bytes,5,opt,name=message,proto3" json:"message,omitempty"`
	RefreshedToken  []byte             `protobuf:"bytes,6,opt,name=refreshed_token,json=refreshedToken,proto3" json:"refreshed_token,omitempty"`
	ValidationError []*ValidationError `protobuf:"bytes,7,rep,name=validation_error,json=validationError,proto3" json:"validation_error,omitempty"`
}

func (x *AuthResponse) Reset() {
	*x = AuthResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_grpc_auth_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AuthResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuthResponse) ProtoMessage() {}

func (x *AuthResponse) ProtoReflect() protoreflect.Message {
	mi := &file_grpc_auth_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuthResponse.ProtoReflect.Descriptor instead.
func (*AuthResponse) Descriptor() ([]byte, []int) {
	return file_grpc_auth_proto_rawDescGZIP(), []int{1}
}

func (x *AuthResponse) GetCode() int64 {
	if x != nil {
		return x.Code
	}
	return 0
}

func (x *AuthResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *AuthResponse) GetToken() []byte {
	if x != nil {
		return x.Token
	}
	return nil
}

func (x *AuthResponse) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *AuthResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *AuthResponse) GetRefreshedToken() []byte {
	if x != nil {
		return x.RefreshedToken
	}
	return nil
}

func (x *AuthResponse) GetValidationError() []*ValidationError {
	if x != nil {
		return x.ValidationError
	}
	return nil
}

type RefreshTokenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	RefreshedToken []byte `protobuf:"bytes,1,opt,name=refreshed_token,json=refreshedToken,proto3" json:"refreshed_token,omitempty"`
}

func (x *RefreshTokenRequest) Reset() {
	*x = RefreshTokenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_grpc_auth_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RefreshTokenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RefreshTokenRequest) ProtoMessage() {}

func (x *RefreshTokenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_grpc_auth_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RefreshTokenRequest.ProtoReflect.Descriptor instead.
func (*RefreshTokenRequest) Descriptor() ([]byte, []int) {
	return file_grpc_auth_proto_rawDescGZIP(), []int{2}
}

func (x *RefreshTokenRequest) GetRefreshedToken() []byte {
	if x != nil {
		return x.RefreshedToken
	}
	return nil
}

type OAUTHRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Service OAUTHRequest_Service `protobuf:"varint,1,opt,name=service,proto3,enum=proto.OAUTHRequest_Service" json:"service,omitempty"`
	Code    string               `protobuf:"bytes,2,opt,name=code,proto3" json:"code,omitempty"`
}

func (x *OAUTHRequest) Reset() {
	*x = OAUTHRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_grpc_auth_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OAUTHRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OAUTHRequest) ProtoMessage() {}

func (x *OAUTHRequest) ProtoReflect() protoreflect.Message {
	mi := &file_grpc_auth_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OAUTHRequest.ProtoReflect.Descriptor instead.
func (*OAUTHRequest) Descriptor() ([]byte, []int) {
	return file_grpc_auth_proto_rawDescGZIP(), []int{3}
}

func (x *OAUTHRequest) GetService() OAUTHRequest_Service {
	if x != nil {
		return x.Service
	}
	return OAUTHRequest_Invalid
}

func (x *OAUTHRequest) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

var File_grpc_auth_proto protoreflect.FileDescriptor

var file_grpc_auth_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x67, 0x72, 0x70, 0x63, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x05, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0f, 0x67, 0x72, 0x70, 0x63, 0x2e, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x35, 0x0a, 0x0b, 0x41, 0x75, 0x74,
	0x68, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x73, 0x65, 0x72,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x73, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x04,
	0x70, 0x61, 0x73, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x70, 0x61, 0x73, 0x73,
	0x22, 0xea, 0x01, 0x0a, 0x0c, 0x41, 0x75, 0x74, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x14, 0x0a,
	0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x74, 0x6f,
	0x6b, 0x65, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x12, 0x27, 0x0a, 0x0f, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x65, 0x64, 0x5f, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x0e, 0x72, 0x65, 0x66, 0x72,
	0x65, 0x73, 0x68, 0x65, 0x64, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x41, 0x0a, 0x10, 0x76, 0x61,
	0x6c, 0x69, 0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x07,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x56, 0x61, 0x6c,
	0x69, 0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x52, 0x0f, 0x76, 0x61,
	0x6c, 0x69, 0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x22, 0x3e, 0x0a,
	0x13, 0x52, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x27, 0x0a, 0x0f, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x65,
	0x64, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x0e, 0x72,
	0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x65, 0x64, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x8a, 0x01,
	0x0a, 0x0c, 0x4f, 0x41, 0x55, 0x54, 0x48, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x35,
	0x0a, 0x07, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x1b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x4f, 0x41, 0x55, 0x54, 0x48, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x07, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x22, 0x2f, 0x0a, 0x07, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x12, 0x0b, 0x0a, 0x07, 0x49, 0x6e, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x10,
	0x00, 0x12, 0x0a, 0x0a, 0x06, 0x47, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x10, 0x01, 0x12, 0x0b, 0x0a,
	0x07, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x72, 0x64, 0x10, 0x02, 0x32, 0xc2, 0x01, 0x0a, 0x0b, 0x41,
	0x75, 0x74, 0x68, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x37, 0x0a, 0x0c, 0x41, 0x75,
	0x74, 0x68, 0x65, 0x6e, 0x74, 0x69, 0x63, 0x61, 0x74, 0x65, 0x12, 0x12, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x13,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x39, 0x0a, 0x0d, 0x43, 0x61, 0x6c, 0x6c, 0x62, 0x61, 0x63, 0x6b, 0x4f,
	0x41, 0x55, 0x54, 0x48, 0x12, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x4f, 0x41, 0x55,
	0x54, 0x48, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3f,
	0x0a, 0x0c, 0x52, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x1a,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x52, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f,
	0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42,
	0x09, 0x5a, 0x07, 0x2e, 0x3b, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_grpc_auth_proto_rawDescOnce sync.Once
	file_grpc_auth_proto_rawDescData = file_grpc_auth_proto_rawDesc
)

func file_grpc_auth_proto_rawDescGZIP() []byte {
	file_grpc_auth_proto_rawDescOnce.Do(func() {
		file_grpc_auth_proto_rawDescData = protoimpl.X.CompressGZIP(file_grpc_auth_proto_rawDescData)
	})
	return file_grpc_auth_proto_rawDescData
}

var file_grpc_auth_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_grpc_auth_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_grpc_auth_proto_goTypes = []interface{}{
	(OAUTHRequest_Service)(0),   // 0: proto.OAUTHRequest.Service
	(*AuthRequest)(nil),         // 1: proto.AuthRequest
	(*AuthResponse)(nil),        // 2: proto.AuthResponse
	(*RefreshTokenRequest)(nil), // 3: proto.RefreshTokenRequest
	(*OAUTHRequest)(nil),        // 4: proto.OAUTHRequest
	(*ValidationError)(nil),     // 5: proto.ValidationError
}
var file_grpc_auth_proto_depIdxs = []int32{
	5, // 0: proto.AuthResponse.validation_error:type_name -> proto.ValidationError
	0, // 1: proto.OAUTHRequest.service:type_name -> proto.OAUTHRequest.Service
	1, // 2: proto.AuthService.Authenticate:input_type -> proto.AuthRequest
	4, // 3: proto.AuthService.CallbackOAUTH:input_type -> proto.OAUTHRequest
	3, // 4: proto.AuthService.RefreshToken:input_type -> proto.RefreshTokenRequest
	2, // 5: proto.AuthService.Authenticate:output_type -> proto.AuthResponse
	2, // 6: proto.AuthService.CallbackOAUTH:output_type -> proto.AuthResponse
	2, // 7: proto.AuthService.RefreshToken:output_type -> proto.AuthResponse
	5, // [5:8] is the sub-list for method output_type
	2, // [2:5] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_grpc_auth_proto_init() }
func file_grpc_auth_proto_init() {
	if File_grpc_auth_proto != nil {
		return
	}
	file_grpc_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_grpc_auth_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AuthRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_grpc_auth_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AuthResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_grpc_auth_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RefreshTokenRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_grpc_auth_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OAUTHRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_grpc_auth_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_grpc_auth_proto_goTypes,
		DependencyIndexes: file_grpc_auth_proto_depIdxs,
		EnumInfos:         file_grpc_auth_proto_enumTypes,
		MessageInfos:      file_grpc_auth_proto_msgTypes,
	}.Build()
	File_grpc_auth_proto = out.File
	file_grpc_auth_proto_rawDesc = nil
	file_grpc_auth_proto_goTypes = nil
	file_grpc_auth_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// AuthServiceClient is the client API for AuthService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type AuthServiceClient interface {
	Authenticate(ctx context.Context, in *AuthRequest, opts ...grpc.CallOption) (*AuthResponse, error)
	CallbackOAUTH(ctx context.Context, in *OAUTHRequest, opts ...grpc.CallOption) (*AuthResponse, error)
	RefreshToken(ctx context.Context, in *RefreshTokenRequest, opts ...grpc.CallOption) (*AuthResponse, error)
}

type authServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAuthServiceClient(cc grpc.ClientConnInterface) AuthServiceClient {
	return &authServiceClient{cc}
}

func (c *authServiceClient) Authenticate(ctx context.Context, in *AuthRequest, opts ...grpc.CallOption) (*AuthResponse, error) {
	out := new(AuthResponse)
	err := c.cc.Invoke(ctx, "/proto.AuthService/Authenticate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) CallbackOAUTH(ctx context.Context, in *OAUTHRequest, opts ...grpc.CallOption) (*AuthResponse, error) {
	out := new(AuthResponse)
	err := c.cc.Invoke(ctx, "/proto.AuthService/CallbackOAUTH", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) RefreshToken(ctx context.Context, in *RefreshTokenRequest, opts ...grpc.CallOption) (*AuthResponse, error) {
	out := new(AuthResponse)
	err := c.cc.Invoke(ctx, "/proto.AuthService/RefreshToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthServiceServer is the server API for AuthService service.
type AuthServiceServer interface {
	Authenticate(context.Context, *AuthRequest) (*AuthResponse, error)
	CallbackOAUTH(context.Context, *OAUTHRequest) (*AuthResponse, error)
	RefreshToken(context.Context, *RefreshTokenRequest) (*AuthResponse, error)
}

// UnimplementedAuthServiceServer can be embedded to have forward compatible implementations.
type UnimplementedAuthServiceServer struct {
}

func (*UnimplementedAuthServiceServer) Authenticate(context.Context, *AuthRequest) (*AuthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Authenticate not implemented")
}
func (*UnimplementedAuthServiceServer) CallbackOAUTH(context.Context, *OAUTHRequest) (*AuthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CallbackOAUTH not implemented")
}
func (*UnimplementedAuthServiceServer) RefreshToken(context.Context, *RefreshTokenRequest) (*AuthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RefreshToken not implemented")
}

func RegisterAuthServiceServer(s *grpc.Server, srv AuthServiceServer) {
	s.RegisterService(&_AuthService_serviceDesc, srv)
}

func _AuthService_Authenticate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).Authenticate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.AuthService/Authenticate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).Authenticate(ctx, req.(*AuthRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_CallbackOAUTH_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(OAUTHRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).CallbackOAUTH(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.AuthService/CallbackOAUTH",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).CallbackOAUTH(ctx, req.(*OAUTHRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_RefreshToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RefreshTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).RefreshToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.AuthService/RefreshToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).RefreshToken(ctx, req.(*RefreshTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _AuthService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "proto.AuthService",
	HandlerType: (*AuthServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Authenticate",
			Handler:    _AuthService_Authenticate_Handler,
		},
		{
			MethodName: "CallbackOAUTH",
			Handler:    _AuthService_CallbackOAUTH_Handler,
		},
		{
			MethodName: "RefreshToken",
			Handler:    _AuthService_RefreshToken_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "grpc.auth.proto",
}