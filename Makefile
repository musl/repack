.PHONY: all api clean frontend go

all: clean api frontend go

api:
	make -C api

clean:
	make -C api clean
	rm -fr static/*

frontend:
	webpack

go:
	foreman start

