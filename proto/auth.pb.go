// Code generated by protoc-gen-go. DO NOT EDIT.
// source: auth.proto

package proto

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type OAUTHRequest_Service int32

const (
	OAUTHRequest_Invalid OAUTHRequest_Service = 0
	OAUTHRequest_Google  OAUTHRequest_Service = 1
	OAUTHRequest_Discord OAUTHRequest_Service = 2
)

var OAUTHRequest_Service_name = map[int32]string{
	0: "Invalid",
	1: "Google",
	2: "Discord",
}

var OAUTHRequest_Service_value = map[string]int32{
	"Invalid": 0,
	"Google":  1,
	"Discord": 2,
}

func (x OAUTHRequest_Service) String() string {
	return proto.EnumName(OAUTHRequest_Service_name, int32(x))
}

func (OAUTHRequest_Service) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_8bbd6f3875b0e874, []int{3, 0}
}

type AuthRequest struct {
	User                 string   `protobuf:"bytes,1,opt,name=user,proto3" json:"user,omitempty"`
	Pass                 string   `protobuf:"bytes,2,opt,name=pass,proto3" json:"pass,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AuthRequest) Reset()         { *m = AuthRequest{} }
func (m *AuthRequest) String() string { return proto.CompactTextString(m) }
func (*AuthRequest) ProtoMessage()    {}
func (*AuthRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_8bbd6f3875b0e874, []int{0}
}

func (m *AuthRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AuthRequest.Unmarshal(m, b)
}
func (m *AuthRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AuthRequest.Marshal(b, m, deterministic)
}
func (m *AuthRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AuthRequest.Merge(m, src)
}
func (m *AuthRequest) XXX_Size() int {
	return xxx_messageInfo_AuthRequest.Size(m)
}
func (m *AuthRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_AuthRequest.DiscardUnknown(m)
}

var xxx_messageInfo_AuthRequest proto.InternalMessageInfo

func (m *AuthRequest) GetUser() string {
	if m != nil {
		return m.User
	}
	return ""
}

func (m *AuthRequest) GetPass() string {
	if m != nil {
		return m.Pass
	}
	return ""
}

type AuthResponse struct {
	Code                 int64              `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	Status               string             `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
	Token                []byte             `protobuf:"bytes,3,opt,name=token,proto3" json:"token,omitempty"`
	Type                 string             `protobuf:"bytes,4,opt,name=type,proto3" json:"type,omitempty"`
	Message              string             `protobuf:"bytes,5,opt,name=message,proto3" json:"message,omitempty"`
	RefreshedToken       []byte             `protobuf:"bytes,6,opt,name=refreshed_token,json=refreshedToken,proto3" json:"refreshed_token,omitempty"`
	ValidationError      []*ValidationError `protobuf:"bytes,7,rep,name=validation_error,json=validationError,proto3" json:"validation_error,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *AuthResponse) Reset()         { *m = AuthResponse{} }
func (m *AuthResponse) String() string { return proto.CompactTextString(m) }
func (*AuthResponse) ProtoMessage()    {}
func (*AuthResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_8bbd6f3875b0e874, []int{1}
}

func (m *AuthResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AuthResponse.Unmarshal(m, b)
}
func (m *AuthResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AuthResponse.Marshal(b, m, deterministic)
}
func (m *AuthResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AuthResponse.Merge(m, src)
}
func (m *AuthResponse) XXX_Size() int {
	return xxx_messageInfo_AuthResponse.Size(m)
}
func (m *AuthResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_AuthResponse.DiscardUnknown(m)
}

var xxx_messageInfo_AuthResponse proto.InternalMessageInfo

func (m *AuthResponse) GetCode() int64 {
	if m != nil {
		return m.Code
	}
	return 0
}

func (m *AuthResponse) GetStatus() string {
	if m != nil {
		return m.Status
	}
	return ""
}

func (m *AuthResponse) GetToken() []byte {
	if m != nil {
		return m.Token
	}
	return nil
}

func (m *AuthResponse) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *AuthResponse) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *AuthResponse) GetRefreshedToken() []byte {
	if m != nil {
		return m.RefreshedToken
	}
	return nil
}

func (m *AuthResponse) GetValidationError() []*ValidationError {
	if m != nil {
		return m.ValidationError
	}
	return nil
}

type RefreshTokenRequest struct {
	RefreshedToken       []byte   `protobuf:"bytes,2,opt,name=refreshed_token,json=refreshedToken,proto3" json:"refreshed_token,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RefreshTokenRequest) Reset()         { *m = RefreshTokenRequest{} }
func (m *RefreshTokenRequest) String() string { return proto.CompactTextString(m) }
func (*RefreshTokenRequest) ProtoMessage()    {}
func (*RefreshTokenRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_8bbd6f3875b0e874, []int{2}
}

func (m *RefreshTokenRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RefreshTokenRequest.Unmarshal(m, b)
}
func (m *RefreshTokenRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RefreshTokenRequest.Marshal(b, m, deterministic)
}
func (m *RefreshTokenRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RefreshTokenRequest.Merge(m, src)
}
func (m *RefreshTokenRequest) XXX_Size() int {
	return xxx_messageInfo_RefreshTokenRequest.Size(m)
}
func (m *RefreshTokenRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_RefreshTokenRequest.DiscardUnknown(m)
}

var xxx_messageInfo_RefreshTokenRequest proto.InternalMessageInfo

func (m *RefreshTokenRequest) GetRefreshedToken() []byte {
	if m != nil {
		return m.RefreshedToken
	}
	return nil
}

type OAUTHRequest struct {
	Service              OAUTHRequest_Service `protobuf:"varint,1,opt,name=service,proto3,enum=proto.OAUTHRequest_Service" json:"service,omitempty"`
	Code                 string               `protobuf:"bytes,2,opt,name=code,proto3" json:"code,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *OAUTHRequest) Reset()         { *m = OAUTHRequest{} }
func (m *OAUTHRequest) String() string { return proto.CompactTextString(m) }
func (*OAUTHRequest) ProtoMessage()    {}
func (*OAUTHRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_8bbd6f3875b0e874, []int{3}
}

func (m *OAUTHRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OAUTHRequest.Unmarshal(m, b)
}
func (m *OAUTHRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OAUTHRequest.Marshal(b, m, deterministic)
}
func (m *OAUTHRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OAUTHRequest.Merge(m, src)
}
func (m *OAUTHRequest) XXX_Size() int {
	return xxx_messageInfo_OAUTHRequest.Size(m)
}
func (m *OAUTHRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_OAUTHRequest.DiscardUnknown(m)
}

var xxx_messageInfo_OAUTHRequest proto.InternalMessageInfo

func (m *OAUTHRequest) GetService() OAUTHRequest_Service {
	if m != nil {
		return m.Service
	}
	return OAUTHRequest_Invalid
}

func (m *OAUTHRequest) GetCode() string {
	if m != nil {
		return m.Code
	}
	return ""
}

func init() {
	proto.RegisterEnum("proto.OAUTHRequest_Service", OAUTHRequest_Service_name, OAUTHRequest_Service_value)
	proto.RegisterType((*AuthRequest)(nil), "proto.AuthRequest")
	proto.RegisterType((*AuthResponse)(nil), "proto.AuthResponse")
	proto.RegisterType((*RefreshTokenRequest)(nil), "proto.RefreshTokenRequest")
	proto.RegisterType((*OAUTHRequest)(nil), "proto.OAUTHRequest")
}

func init() {
	proto.RegisterFile("auth.proto", fileDescriptor_8bbd6f3875b0e874)
}

var fileDescriptor_8bbd6f3875b0e874 = []byte{
	// 388 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x52, 0xcd, 0x4a, 0xeb, 0x40,
	0x18, 0xbd, 0xe9, 0x4f, 0xc2, 0xfd, 0x9a, 0xdb, 0x86, 0xe9, 0xa5, 0x84, 0xba, 0x29, 0xd9, 0xd8,
	0x55, 0x85, 0x4a, 0x11, 0x37, 0x4a, 0x51, 0x51, 0x57, 0x42, 0xac, 0x6e, 0xcb, 0x34, 0xf9, 0x6c,
	0x43, 0x63, 0x26, 0xce, 0x4c, 0x0a, 0xbe, 0x82, 0x8f, 0xe5, 0xe3, 0xf8, 0x14, 0x32, 0x33, 0x49,
	0x69, 0x21, 0xab, 0x7c, 0x73, 0xe6, 0x9c, 0x93, 0x93, 0xf3, 0x05, 0x80, 0x16, 0x72, 0x33, 0xc9,
	0x39, 0x93, 0x8c, 0xb4, 0xf5, 0x63, 0x08, 0x2b, 0x2a, 0xd0, 0x40, 0xc1, 0x0c, 0x3a, 0xf3, 0x42,
	0x6e, 0x42, 0xfc, 0x28, 0x50, 0x48, 0x42, 0xa0, 0x55, 0x08, 0xe4, 0xbe, 0x35, 0xb2, 0xc6, 0x7f,
	0x43, 0x3d, 0x2b, 0x2c, 0xa7, 0x42, 0xf8, 0x0d, 0x83, 0xa9, 0x39, 0xf8, 0xb1, 0xc0, 0x35, 0x3a,
	0x91, 0xb3, 0x4c, 0xa0, 0x22, 0x45, 0x2c, 0x46, 0x2d, 0x6c, 0x86, 0x7a, 0x26, 0x03, 0xb0, 0x85,
	0xa4, 0xb2, 0xa8, 0xa4, 0xe5, 0x89, 0xfc, 0x87, 0xb6, 0x64, 0x5b, 0xcc, 0xfc, 0xe6, 0xc8, 0x1a,
	0xbb, 0xa1, 0x39, 0x28, 0x07, 0xf9, 0x99, 0xa3, 0xdf, 0x32, 0xaf, 0x51, 0x33, 0xf1, 0xc1, 0x79,
	0x47, 0x21, 0xe8, 0x1a, 0xfd, 0xb6, 0x86, 0xab, 0x23, 0x39, 0x85, 0x1e, 0xc7, 0x37, 0x8e, 0x62,
	0x83, 0xf1, 0xd2, 0xb8, 0xd9, 0xda, 0xad, 0xbb, 0x87, 0x17, 0xda, 0x76, 0x0e, 0xde, 0x8e, 0xa6,
	0x49, 0x4c, 0x65, 0xc2, 0xb2, 0x25, 0x72, 0xce, 0xb8, 0xef, 0x8c, 0x9a, 0xe3, 0xce, 0x74, 0x60,
	0x2a, 0x98, 0xbc, 0xee, 0xaf, 0xef, 0xd4, 0x6d, 0xd8, 0xdb, 0x1d, 0x03, 0xc1, 0x15, 0xf4, 0x43,
	0x63, 0xaa, 0x2d, 0xab, 0xae, 0x6a, 0x22, 0x34, 0xea, 0x22, 0x04, 0x5f, 0x16, 0xb8, 0x4f, 0xf3,
	0x97, 0xc5, 0x43, 0xa5, 0x9c, 0x81, 0x23, 0x90, 0xef, 0x92, 0xc8, 0xf4, 0xd5, 0x9d, 0x9e, 0x94,
	0x51, 0x0e, 0x59, 0x93, 0x67, 0x43, 0x09, 0x2b, 0xee, 0xbe, 0xe3, 0x72, 0x11, 0x6a, 0x0e, 0xce,
	0xc0, 0x29, 0x79, 0xa4, 0x03, 0xce, 0x63, 0xa6, 0xb3, 0x7b, 0x7f, 0x08, 0x80, 0x7d, 0xcf, 0xd8,
	0x3a, 0x45, 0xcf, 0x52, 0x17, 0xb7, 0x89, 0x88, 0x18, 0x8f, 0xbd, 0xc6, 0xf4, 0xdb, 0x32, 0x1b,
	0xaf, 0x54, 0x17, 0x66, 0x91, 0x98, 0xc9, 0x24, 0xa2, 0x12, 0x09, 0x29, 0xa3, 0x1c, 0xfc, 0x15,
	0xc3, 0xfe, 0x11, 0x56, 0x6e, 0xfc, 0x12, 0xfe, 0xdd, 0xd0, 0x34, 0x5d, 0xd1, 0x68, 0xab, 0x63,
	0x93, 0x7e, 0xcd, 0x47, 0xd4, 0x4b, 0xaf, 0xc1, 0x3d, 0x2c, 0x94, 0x0c, 0x4b, 0x52, 0x4d, 0xcb,
	0xb5, 0x06, 0x2b, 0x5b, 0x63, 0xe7, 0xbf, 0x01, 0x00, 0x00, 0xff, 0xff, 0xa5, 0xad, 0xc3, 0x04,
	0xdd, 0x02, 0x00, 0x00,
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

func (*UnimplementedAuthServiceServer) Authenticate(ctx context.Context, req *AuthRequest) (*AuthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Authenticate not implemented")
}
func (*UnimplementedAuthServiceServer) CallbackOAUTH(ctx context.Context, req *OAUTHRequest) (*AuthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CallbackOAUTH not implemented")
}
func (*UnimplementedAuthServiceServer) RefreshToken(ctx context.Context, req *RefreshTokenRequest) (*AuthResponse, error) {
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
	Metadata: "auth.proto",
}