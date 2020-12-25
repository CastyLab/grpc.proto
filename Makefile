compile:
	echo "Compile protobuffers for Golang... \n";
	protoc -I=protofiles \
          --go-grpc_out=proto \
          protofiles/*.proto

	echo "Compile {Websocket} protobuffers for JavaScript... \n";
	./node_modules/protobufjs/bin/pbjs \
	  -t static-module \
	  -w commonjs \
	  -o pbjs/ws.bundle.js \
	  protofiles/ws.*.proto
