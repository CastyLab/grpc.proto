# shellcheck disable=SC2028
echo "Compile protobufers for Golang... \n";
protoc -I=protofiles \
  --go_out=plugins=grpc:proto \
  protofiles/*.proto

echo "Compile protobufers for JavaScript... \n";
protoc -I=protofiles protofiles/grpc.*.proto \
  --js_out=import_style=commonjs:pbjs \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:pbjs

echo "Compile protobufers for {Websocket} JavaScript... \n";
./node_modules/protobufjs/bin/pbjs \
  -t static-module \
  -w commonjs \
  -o pbjs/websocket.js \
  protofiles/ws.*.proto