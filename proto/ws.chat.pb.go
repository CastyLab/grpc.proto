// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ws.chat.proto

package proto

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
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

type ChatMsgEvent struct {
	Message              []byte               `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	From                 string               `protobuf:"bytes,2,opt,name=from,proto3" json:"from,omitempty"`
	To                   string               `protobuf:"bytes,3,opt,name=to,proto3" json:"to,omitempty"`
	User                 *User                `protobuf:"bytes,4,opt,name=user,proto3" json:"user,omitempty"`
	Emojies              []uint64             `protobuf:"varint,5,rep,packed,name=emojies,proto3" json:"emojies,omitempty"`
	Mentions             []uint64             `protobuf:"varint,6,rep,packed,name=mentions,proto3" json:"mentions,omitempty"`
	CreatedAt            *timestamp.Timestamp `protobuf:"bytes,7,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *ChatMsgEvent) Reset()         { *m = ChatMsgEvent{} }
func (m *ChatMsgEvent) String() string { return proto.CompactTextString(m) }
func (*ChatMsgEvent) ProtoMessage()    {}
func (*ChatMsgEvent) Descriptor() ([]byte, []int) {
	return fileDescriptor_a09dcbbe7dcd3cd6, []int{0}
}

func (m *ChatMsgEvent) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ChatMsgEvent.Unmarshal(m, b)
}
func (m *ChatMsgEvent) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ChatMsgEvent.Marshal(b, m, deterministic)
}
func (m *ChatMsgEvent) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChatMsgEvent.Merge(m, src)
}
func (m *ChatMsgEvent) XXX_Size() int {
	return xxx_messageInfo_ChatMsgEvent.Size(m)
}
func (m *ChatMsgEvent) XXX_DiscardUnknown() {
	xxx_messageInfo_ChatMsgEvent.DiscardUnknown(m)
}

var xxx_messageInfo_ChatMsgEvent proto.InternalMessageInfo

func (m *ChatMsgEvent) GetMessage() []byte {
	if m != nil {
		return m.Message
	}
	return nil
}

func (m *ChatMsgEvent) GetFrom() string {
	if m != nil {
		return m.From
	}
	return ""
}

func (m *ChatMsgEvent) GetTo() string {
	if m != nil {
		return m.To
	}
	return ""
}

func (m *ChatMsgEvent) GetUser() *User {
	if m != nil {
		return m.User
	}
	return nil
}

func (m *ChatMsgEvent) GetEmojies() []uint64 {
	if m != nil {
		return m.Emojies
	}
	return nil
}

func (m *ChatMsgEvent) GetMentions() []uint64 {
	if m != nil {
		return m.Mentions
	}
	return nil
}

func (m *ChatMsgEvent) GetCreatedAt() *timestamp.Timestamp {
	if m != nil {
		return m.CreatedAt
	}
	return nil
}

func init() {
	proto.RegisterType((*ChatMsgEvent)(nil), "proto.ChatMsgEvent")
}

func init() {
	proto.RegisterFile("ws.chat.proto", fileDescriptor_a09dcbbe7dcd3cd6)
}

var fileDescriptor_a09dcbbe7dcd3cd6 = []byte{
	// 230 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x3c, 0x8f, 0x31, 0x4f, 0xc3, 0x30,
	0x10, 0x85, 0xe5, 0x34, 0x6d, 0xe9, 0xb5, 0x30, 0x78, 0xb2, 0xb2, 0x34, 0x62, 0xca, 0xe4, 0x4a,
	0x30, 0x31, 0x22, 0xc4, 0xc8, 0x62, 0xc1, 0x8c, 0xdc, 0x72, 0x4d, 0x83, 0x70, 0xae, 0xf2, 0x5d,
	0xe1, 0xdf, 0xf2, 0x5b, 0x50, 0x2f, 0xa4, 0x93, 0xfd, 0xdd, 0x7b, 0x7a, 0x4f, 0x0f, 0xae, 0x7f,
	0xd8, 0xef, 0x0e, 0x51, 0xfc, 0x31, 0x93, 0x90, 0x9d, 0xea, 0x53, 0xc1, 0x89, 0x31, 0x0f, 0xa7,
	0x6a, 0xdd, 0x12, 0xb5, 0x5f, 0xb8, 0x51, 0xda, 0x9e, 0xf6, 0x1b, 0xe9, 0x12, 0xb2, 0xc4, 0x74,
	0x1c, 0x0c, 0xb7, 0xbf, 0x06, 0x56, 0x4f, 0x87, 0x28, 0x2f, 0xdc, 0x3e, 0x7f, 0x63, 0x2f, 0xd6,
	0xc1, 0x3c, 0x21, 0x73, 0x6c, 0xd1, 0x99, 0xda, 0x34, 0xab, 0x30, 0xa2, 0xb5, 0x50, 0xee, 0x33,
	0x25, 0x57, 0xd4, 0xa6, 0x59, 0x04, 0xfd, 0xdb, 0x1b, 0x28, 0x84, 0xdc, 0x44, 0x2f, 0x85, 0x90,
	0x5d, 0x43, 0x79, 0x6e, 0x77, 0x65, 0x6d, 0x9a, 0xe5, 0xdd, 0x72, 0x28, 0xf1, 0x6f, 0x8c, 0x39,
	0xa8, 0x70, 0x8e, 0xc7, 0x44, 0x9f, 0x1d, 0xb2, 0x9b, 0xd6, 0x93, 0xa6, 0x0c, 0x23, 0xda, 0x0a,
	0xae, 0x12, 0xf6, 0xd2, 0x51, 0xcf, 0x6e, 0xa6, 0xd2, 0x85, 0xed, 0x03, 0xc0, 0x2e, 0x63, 0x14,
	0xfc, 0x78, 0x8f, 0xe2, 0xe6, 0x1a, 0x5e, 0xf9, 0x61, 0x9b, 0x1f, 0xb7, 0xf9, 0xd7, 0x71, 0x5b,
	0x58, 0xfc, 0xbb, 0x1f, 0x65, 0x3b, 0x53, 0xf9, 0xfe, 0x2f, 0x00, 0x00, 0xff, 0xff, 0x24, 0xfb,
	0x92, 0xe0, 0x2c, 0x01, 0x00, 0x00,
}