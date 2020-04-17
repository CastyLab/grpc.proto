# shellcheck disable=SC2028
echo "Compile protobufers for Golang... \n";
protoc -I=protofiles \
  --go_out=plugins=grpc:proto \
  protofiles/*.proto

echo "Compile protobufers for JavaScript... \n";
protoc -I=protofiles protofiles/*.proto \
  --js_out=import_style=commonjs:pbjs \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:pbjs