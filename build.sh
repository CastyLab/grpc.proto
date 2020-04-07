# shellcheck disable=SC2028
echo "Compile protobufers for Golang... \n";
protoc -I=protofiles \
  --go_out=plugins=grpc:proto \
  protofiles/*.proto

echo "Compile protobufers for JavaScript... \n";
./node_modules/protobufjs/bin/pbjs \
  -t static-module \
  -w commonjs \
  -o pbjs/proto.js \
  protofiles/*.proto