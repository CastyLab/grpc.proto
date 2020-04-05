package protocol

import (
	"encoding/binary"
	pb "github.com/CastyLab/grpc.proto/proto"
	"github.com/golang/protobuf/proto"
	"io"
)

const (
	ProtoMask uint32 = 0x80000000
	EMsgMask         = ^ProtoMask
)

func NewEMsg(e uint32) pb.EMSG {
	return pb.EMSG(e & EMsgMask)
}

func IsProto(e uint32) bool {
	return e&ProtoMask > 0
}

type MsgHdrProtoBuf struct {
	Msg          pb.EMSG
	HeaderLength int32
	Proto        *pb.CMsgProtoBufHeader
}

func NewMsgHdrProtoBuf() *MsgHdrProtoBuf {
	return &MsgHdrProtoBuf{
		Msg:   pb.EMSG_INVALID,
		Proto: &pb.CMsgProtoBufHeader{
			SessionClientId: 0,
			IpAddr: []byte(""),
		},
	}
}

func (d *MsgHdrProtoBuf) Serialize(w io.Writer) error {
	var err error
	buf0, err := proto.Marshal(d.Proto)
	if err != nil {
		return err
	}
	d.HeaderLength = int32(len(buf0))
	err = binary.Write(w, binary.LittleEndian, pb.EMSG(uint32(d.Msg) | ProtoMask))
	if err != nil {
		return err
	}
	err = binary.Write(w, binary.LittleEndian, d.HeaderLength)
	if err != nil {
		return err
	}
	_, err = w.Write(buf0)
	return err
}

func (d *MsgHdrProtoBuf) Deserialize(r io.Reader) error {
	var err error
	t0, err := ReadInt32(r)
	if err != nil {
		return err
	}
	d.Msg = pb.EMSG(uint32(t0) & EMsgMask)
	d.HeaderLength, err = ReadInt32(r)
	if err != nil {
		return err
	}
	buf1 := make([]byte, d.HeaderLength, d.HeaderLength)
	_, err = io.ReadFull(r, buf1)
	if err != nil {
		return err
	}
	err = proto.Unmarshal(buf1, d.Proto)
	return err
}
