package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path"
)

type Routes struct {
	DataPath string
}

func (self *Routes) route_data(w http.ResponseWriter, r *http.Request) {
	log.Printf("get from %s", r.RemoteAddr)

	data, err := ioutil.ReadFile(self.DataPath)
	if err != nil {
		w.WriteHeader(500)
		fmt.Fprintf(w, "Unable to read: %s", self.DataPath)
		return
	}

	w.WriteHeader(200)
	w.Write(data)
}

func main() {
	bind_addr := ":8081"

	exe, err := os.Executable()
	if err != nil {
		panic(err)
	}
	routes := Routes{DataPath: path.Join(path.Dir(exe), "data.json")}

	http.HandleFunc("/api/data", routes.route_data)
	log.Printf("Listening at: %s", bind_addr)
	log.Fatal(http.ListenAndServe(bind_addr, nil))
}
