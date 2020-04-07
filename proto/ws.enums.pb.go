// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ws.enums.proto

package proto

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

type PERSONAL_STATE int32

const (
	PERSONAL_STATE_OFFLINE   PERSONAL_STATE = 0
	PERSONAL_STATE_ONLINE    PERSONAL_STATE = 1
	PERSONAL_STATE_IDLE      PERSONAL_STATE = 2
	PERSONAL_STATE_BUSY      PERSONAL_STATE = 3
	PERSONAL_STATE_INVISIBLE PERSONAL_STATE = 4
)

var PERSONAL_STATE_name = map[int32]string{
	0: "OFFLINE",
	1: "ONLINE",
	2: "IDLE",
	3: "BUSY",
	4: "INVISIBLE",
}

var PERSONAL_STATE_value = map[string]int32{
	"OFFLINE":   0,
	"ONLINE":    1,
	"IDLE":      2,
	"BUSY":      3,
	"INVISIBLE": 4,
}

func (x PERSONAL_STATE) String() string {
	return proto.EnumName(PERSONAL_STATE_name, int32(x))
}

func (PERSONAL_STATE) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_64c429303487d7f6, []int{0}
}

type EMSG int32

const (
	EMSG_INVALID                   EMSG = 0
	EMSG_PING                      EMSG = 1
	EMSG_PONG                      EMSG = 2
	EMSG_LOGON                     EMSG = 3
	EMSG_LOGOUT                    EMSG = 4
	EMSG_PERSONAL_STATE_CHANGED    EMSG = 5
	EMSG_PERSONAL_ACTIVITY_CHANGED EMSG = 6
	EMSG_AUTHORIZED                EMSG = 7
	EMSG_UNAUTHORIZED              EMSG = 8
	EMSG_CHAT_MESSAGES             EMSG = 9
	EMSG_LOG_MESSAGES              EMSG = 10
	EMSG_NEW_CHAT_MESSAGE          EMSG = 11
	EMSG_NEW_LOG_MESSAGE           EMSG = 12
	EMSG_MEMBER_STATE_CHANGED      EMSG = 13
	EMSG_THEATER_MEMBERS           EMSG = 14
	EMSG_THEATER_PLAY              EMSG = 15
	EMSG_THEATER_PAUSE             EMSG = 16
	EMSG_NEW_NOTIFICATION          EMSG = 17
	EMSG_FRIEND_REQUEST_ACCEPTED   EMSG = 18
)

var EMSG_name = map[int32]string{
	0:  "INVALID",
	1:  "PING",
	2:  "PONG",
	3:  "LOGON",
	4:  "LOGOUT",
	5:  "PERSONAL_STATE_CHANGED",
	6:  "PERSONAL_ACTIVITY_CHANGED",
	7:  "AUTHORIZED",
	8:  "UNAUTHORIZED",
	9:  "CHAT_MESSAGES",
	10: "LOG_MESSAGES",
	11: "NEW_CHAT_MESSAGE",
	12: "NEW_LOG_MESSAGE",
	13: "MEMBER_STATE_CHANGED",
	14: "THEATER_MEMBERS",
	15: "THEATER_PLAY",
	16: "THEATER_PAUSE",
	17: "NEW_NOTIFICATION",
	18: "FRIEND_REQUEST_ACCEPTED",
}

var EMSG_value = map[string]int32{
	"INVALID":                   0,
	"PING":                      1,
	"PONG":                      2,
	"LOGON":                     3,
	"LOGOUT":                    4,
	"PERSONAL_STATE_CHANGED":    5,
	"PERSONAL_ACTIVITY_CHANGED": 6,
	"AUTHORIZED":                7,
	"UNAUTHORIZED":              8,
	"CHAT_MESSAGES":             9,
	"LOG_MESSAGES":              10,
	"NEW_CHAT_MESSAGE":          11,
	"NEW_LOG_MESSAGE":           12,
	"MEMBER_STATE_CHANGED":      13,
	"THEATER_MEMBERS":           14,
	"THEATER_PLAY":              15,
	"THEATER_PAUSE":             16,
	"NEW_NOTIFICATION":          17,
	"FRIEND_REQUEST_ACCEPTED":   18,
}

func (x EMSG) String() string {
	return proto.EnumName(EMSG_name, int32(x))
}

func (EMSG) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_64c429303487d7f6, []int{1}
}

func init() {
	proto.RegisterEnum("proto.PERSONAL_STATE", PERSONAL_STATE_name, PERSONAL_STATE_value)
	proto.RegisterEnum("proto.EMSG", EMSG_name, EMSG_value)
}

func init() {
	proto.RegisterFile("ws.enums.proto", fileDescriptor_64c429303487d7f6)
}

var fileDescriptor_64c429303487d7f6 = []byte{
	// 331 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x91, 0xdb, 0x6e, 0xda, 0x40,
	0x10, 0x86, 0x29, 0x98, 0xd3, 0x00, 0x66, 0x98, 0xa2, 0x1e, 0xd5, 0x17, 0xe0, 0x82, 0x9b, 0x3e,
	0xc1, 0x62, 0x8f, 0xed, 0x91, 0xd6, 0xbb, 0xae, 0x77, 0x4d, 0x45, 0x6f, 0x2c, 0x55, 0xca, 0x65,
	0x42, 0x14, 0x12, 0xe5, 0xbd, 0xf3, 0x04, 0xd1, 0x82, 0x20, 0x24, 0x57, 0x3b, 0xfa, 0xe6, 0xd3,
	0xfc, 0xbf, 0xb4, 0x10, 0x3f, 0x1f, 0xd6, 0x37, 0x77, 0x4f, 0xb7, 0x87, 0xf5, 0xfd, 0xc3, 0xfe,
	0x71, 0x4f, 0xfd, 0xe3, 0xb3, 0xd2, 0x10, 0x57, 0x5c, 0x3b, 0x6b, 0x94, 0x6e, 0x9d, 0x57, 0x9e,
	0x69, 0x02, 0x43, 0x9b, 0x65, 0x5a, 0x0c, 0x63, 0x87, 0x00, 0x06, 0xd6, 0x1c, 0xe7, 0x4f, 0x34,
	0x82, 0x48, 0x52, 0xcd, 0xd8, 0x0d, 0xd3, 0xa6, 0x71, 0x3b, 0xec, 0xd1, 0x0c, 0xc6, 0x62, 0xb6,
	0xe2, 0x64, 0xa3, 0x19, 0xa3, 0xd5, 0x4b, 0x17, 0x22, 0x2e, 0x5d, 0x1e, 0x8e, 0x88, 0xd9, 0x2a,
	0x2d, 0x29, 0x76, 0x82, 0x5e, 0x89, 0xc9, 0x4f, 0x27, 0x2a, 0x6b, 0x72, 0xec, 0xd2, 0x18, 0xfa,
	0xda, 0xe6, 0xd6, 0x60, 0x2f, 0x64, 0x84, 0xb1, 0xf1, 0x18, 0xd1, 0x0f, 0xf8, 0xf2, 0xbe, 0x4e,
	0x9b, 0x14, 0xca, 0xe4, 0x9c, 0x62, 0x9f, 0x7e, 0xc1, 0xf7, 0xcb, 0x4e, 0x25, 0x5e, 0xb6, 0xe2,
	0x77, 0x97, 0xf5, 0x80, 0x62, 0x00, 0xd5, 0xf8, 0xc2, 0xd6, 0xf2, 0x8f, 0x53, 0x1c, 0x12, 0xc2,
	0xb4, 0x31, 0x57, 0x64, 0x44, 0x0b, 0x98, 0x25, 0x85, 0xf2, 0x6d, 0xc9, 0xce, 0xa9, 0x9c, 0x1d,
	0x8e, 0x83, 0xa4, 0x6d, 0xfe, 0x46, 0x80, 0x96, 0x80, 0x86, 0xff, 0xb6, 0xd7, 0x22, 0x4e, 0xe8,
	0x33, 0xcc, 0x03, 0xbd, 0x72, 0x71, 0x4a, 0xdf, 0x60, 0x59, 0x72, 0xb9, 0xe1, 0xfa, 0x43, 0xd5,
	0x59, 0xd0, 0x7d, 0xc1, 0xca, 0x73, 0xdd, 0x9e, 0x0c, 0x87, 0x71, 0xc8, 0x3a, 0xc3, 0x4a, 0xab,
	0x1d, 0xce, 0x43, 0xa1, 0x0b, 0x51, 0x8d, 0x63, 0xc4, 0x73, 0xbc, 0xb1, 0x5e, 0x32, 0x49, 0x94,
	0x17, 0x6b, 0x70, 0x41, 0x3f, 0xe1, 0x6b, 0x56, 0x0b, 0x9b, 0xb4, 0xad, 0xf9, 0x4f, 0xc3, 0xce,
	0xb7, 0x2a, 0x49, 0xb8, 0xf2, 0x9c, 0x22, 0xfd, 0x1f, 0x1c, 0x7f, 0xf2, 0xf7, 0x6b, 0x00, 0x00,
	0x00, 0xff, 0xff, 0x83, 0x36, 0xc8, 0xcb, 0xe2, 0x01, 0x00, 0x00,
}
