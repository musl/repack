BIN := $(shell basename $(CURDIR))

.PHONY: all clean run

all: clean $(BIN)

clean:
	rm -f $(BIN)

$(BIN): 
	go build .

test: $(BIN)
	go test -v .

run: $(BIN)
	./$(BIN)

