compile:
	echo "Compile protobuffers for Golang... \n";
	protoc -I=protofiles \
          --go_out=plugins=grpc:proto \
          protofiles/*.proto

	echo "Compile protobuffers for JavaScript... \n";
	protoc -I=protofiles protofiles/*.proto \
	  --js_out=import_style=commonjs:pbjs \
	  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:pbjs

	echo "Compile {Websocket} protobuffers for JavaScript... \n";
	./node_modules/protobufjs/bin/pbjs \
	  -t static-module \
	  -w commonjs \
	  -o pbjs/ws.bundle.js \
	  protofiles/ws.*.proto