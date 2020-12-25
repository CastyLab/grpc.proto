// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.14.0
// source: grpc.connection.proto

package proto

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
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

type Connection_Type int32

const (
	Connection_UNKNOWN     Connection_Type = 0
	Connection_GOOGLE      Connection_Type = 1
	Connection_YOUTUBE     Connection_Type = 2
	Connection_GITHUB      Connection_Type = 3
	Connection_DISCORD     Connection_Type = 4
	Connection_SPOTIFY     Connection_Type = 5
	Connection_SOUND_CLOUD Connection_Type = 6
)

// Enum value maps for Connection_Type.
var (
	Connection_Type_name = map[int32]string{
		0: "UNKNOWN",
		1: "GOOGLE",
		2: "YOUTUBE",
		3: "GITHUB",
		4: "DISCORD",
		5: "SPOTIFY",
		6: "SOUND_CLOUD",
	}
	Connection_Type_value = map[string]int32{
		"UNKNOWN":     0,
		"GOOGLE":      1,
		"YOUTUBE":     2,
		"GITHUB":      3,
		"DISCORD":     4,
		"SPOTIFY":     5,
		"SOUND_CLOUD": 6,
	}
)

func (x Connection_Type) Enum() *Connection_Type {
	p := new(Connection_Type)
	*p = x
	return p
}

func (x Connection_Type) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Connection_Type) Descriptor() protoreflect.EnumDescriptor {
	return file_grpc_connection_proto_enumTypes[0].Descriptor()
}

func (Connection_Type) Type() protoreflect.EnumType {
	return &file_grpc_connection_proto_enumTypes[0]
}

func (x Connection_Type) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Connection_Type.Descriptor instead.
func (Connection_Type) EnumDescriptor() ([]byte, []int) {
	return file_grpc_connection_proto_rawDescGZIP(), []int{0, 0}
}

type Connection struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	ServiceUserId  string                 `protobuf:"bytes,2,opt,name=service_user_id,json=serviceUserId,proto3" json:"service_user_id,omitempty"`
	Name           string                 `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Type           Connection_Type        `protobuf:"varint,4,opt,name=type,proto3,enum=proto.Connection_Type" json:"type,omitempty"`
	AccessToken    string                 `protobuf:"bytes,5,opt,name=access_token,json=accessToken,proto3" json:"access_token,omitempty"`
	RefreshedToken string                 `protobuf:"bytes,6,opt,name=refreshed_token,json=refreshedToken,proto3" json:"refreshed_token,omitempty"`
	ShowActivity   bool                   `protobuf:"varint,7,opt,name=show_activity,json=showActivity,proto3" json:"show_activity,omitempty"`
	UserId         string                 `protobuf:"bytes,8,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	CreatedAt      *timestamppb.Timestamp `protobuf:"bytes,9,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt      *timestamppb.Timestamp `protobuf:"bytes,10,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
}

func (x *Connection) Reset() {
	*x = Connection{}
	if protoimpl.UnsafeEnabled {
		mi := &file_grpc_connection_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Connection) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Connection) ProtoMessage() {}

func (x *Connection) ProtoReflect() protoreflect.Message {
	mi := &file_grpc_connection_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Connection.ProtoReflect.Descriptor instead.
func (*Connection) Descriptor() ([]byte, []int) {
	return file_grpc_connection_proto_rawDescGZIP(), []int{0}
}

func (x *Connection) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Connection) GetServiceUserId() string {
	if x != nil {
		return x.ServiceUserId
	}
	return ""
}

func (x *Connection) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Connection) GetType() Connection_Type {
	if x != nil {
		return x.Type
	}
	return Connection_UNKNOWN
}

func (x *Connection) GetAccessToken() string {
	if x != nil {
		return x.AccessToken
	}
	return ""
}

func (x *Connection) GetRefreshedToken() string {
	if x != nil {
		return x.RefreshedToken
	}
	return ""
}

func (x *Connection) GetShowActivity() bool {
	if x != nil {
		return x.ShowActivity
	}
	return false
}

func (x *Connection) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *Connection) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *Connection) GetUpdatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

type ConnectionsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code    int64         `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	Status  string        `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
	Message string        `protobuf:"bytes,3,opt,name=message,proto3" json:"message,omitempty"`
	Result  []*Connection `protobuf:"bytes,4,rep,name=result,proto3" json:"result,omitempty"`
}

func (x *ConnectionsResponse) Reset() {
	*x = ConnectionsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_grpc_connection_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ConnectionsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ConnectionsResponse) ProtoMessage() {}

func (x *ConnectionsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_grpc_connection_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ConnectionsResponse.ProtoReflect.Descriptor instead.
func (*ConnectionsResponse) Descriptor() ([]byte, []int) {
	return file_grpc_connection_proto_rawDescGZIP(), []int{1}
}

func (x *ConnectionsResponse) GetCode() int64 {
	if x != nil {
		return x.Code
	}
	return 0
}

func (x *ConnectionsResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *ConnectionsResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *ConnectionsResponse) GetResult() []*Connection {
	if x != nil {
		return x.Result
	}
	return nil
}

var File_grpc_connection_proto protoreflect.FileDescriptor

var file_grpc_connection_proto_rawDesc = []byte{
	0x0a, 0x15, 0x67, 0x72, 0x70, 0x63, 0x2e, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0xe9, 0x03, 0x0a, 0x0a, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x26,
	0x0a, 0x0f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x55, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2a, 0x0a, 0x04, 0x74, 0x79,
	0x70, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x16, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x54, 0x79, 0x70, 0x65,
	0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x61, 0x63,
	0x63, 0x65, 0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x27, 0x0a, 0x0f, 0x72, 0x65, 0x66,
	0x72, 0x65, 0x73, 0x68, 0x65, 0x64, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0e, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x65, 0x64, 0x54, 0x6f, 0x6b,
	0x65, 0x6e, 0x12, 0x23, 0x0a, 0x0d, 0x73, 0x68, 0x6f, 0x77, 0x5f, 0x61, 0x63, 0x74, 0x69, 0x76,
	0x69, 0x74, 0x79, 0x18, 0x07, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0c, 0x73, 0x68, 0x6f, 0x77, 0x41,
	0x63, 0x74, 0x69, 0x76, 0x69, 0x74, 0x79, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f,
	0x69, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64,
	0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x09,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x75,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x22, 0x63, 0x0a, 0x04, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0b,
	0x0a, 0x07, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x10, 0x00, 0x12, 0x0a, 0x0a, 0x06, 0x47,
	0x4f, 0x4f, 0x47, 0x4c, 0x45, 0x10, 0x01, 0x12, 0x0b, 0x0a, 0x07, 0x59, 0x4f, 0x55, 0x54, 0x55,
	0x42, 0x45, 0x10, 0x02, 0x12, 0x0a, 0x0a, 0x06, 0x47, 0x49, 0x54, 0x48, 0x55, 0x42, 0x10, 0x03,
	0x12, 0x0b, 0x0a, 0x07, 0x44, 0x49, 0x53, 0x43, 0x4f, 0x52, 0x44, 0x10, 0x04, 0x12, 0x0b, 0x0a,
	0x07, 0x53, 0x50, 0x4f, 0x54, 0x49, 0x46, 0x59, 0x10, 0x05, 0x12, 0x0f, 0x0a, 0x0b, 0x53, 0x4f,
	0x55, 0x4e, 0x44, 0x5f, 0x43, 0x4c, 0x4f, 0x55, 0x44, 0x10, 0x06, 0x22, 0x86, 0x01, 0x0a, 0x13,
	0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12,
	0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x29, 0x0a, 0x06, 0x72, 0x65, 0x73,
	0x75, 0x6c, 0x74, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x2e, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x06, 0x72, 0x65,
	0x73, 0x75, 0x6c, 0x74, 0x42, 0x09, 0x5a, 0x07, 0x2e, 0x3b, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_grpc_connection_proto_rawDescOnce sync.Once
	file_grpc_connection_proto_rawDescData = file_grpc_connection_proto_rawDesc
)

func file_grpc_connection_proto_rawDescGZIP() []byte {
	file_grpc_connection_proto_rawDescOnce.Do(func() {
		file_grpc_connection_proto_rawDescData = protoimpl.X.CompressGZIP(file_grpc_connection_proto_rawDescData)
	})
	return file_grpc_connection_proto_rawDescData
}

var file_grpc_connection_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_grpc_connection_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_grpc_connection_proto_goTypes = []interface{}{
	(Connection_Type)(0),          // 0: proto.Connection.Type
	(*Connection)(nil),            // 1: proto.Connection
	(*ConnectionsResponse)(nil),   // 2: proto.ConnectionsResponse
	(*timestamppb.Timestamp)(nil), // 3: google.protobuf.Timestamp
}
var file_grpc_connection_proto_depIdxs = []int32{
	0, // 0: proto.Connection.type:type_name -> proto.Connection.Type
	3, // 1: proto.Connection.created_at:type_name -> google.protobuf.Timestamp
	3, // 2: proto.Connection.updated_at:type_name -> google.protobuf.Timestamp
	1, // 3: proto.ConnectionsResponse.result:type_name -> proto.Connection
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_grpc_connection_proto_init() }
func file_grpc_connection_proto_init() {
	if File_grpc_connection_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_grpc_connection_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Connection); i {
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
		file_grpc_connection_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ConnectionsResponse); i {
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
			RawDescriptor: file_grpc_connection_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_grpc_connection_proto_goTypes,
		DependencyIndexes: file_grpc_connection_proto_depIdxs,
		EnumInfos:         file_grpc_connection_proto_enumTypes,
		MessageInfos:      file_grpc_connection_proto_msgTypes,
	}.Build()
	File_grpc_connection_proto = out.File
	file_grpc_connection_proto_rawDesc = nil
	file_grpc_connection_proto_goTypes = nil
	file_grpc_connection_proto_depIdxs = nil
}
