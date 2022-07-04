FROM golang:1.18-alpine3.16 as builder

WORKDIR /usr/src/app

COPY . .

RUN go mod init hello-world && go build
##############################################
FROM scratch

WORKDIR /usr/src/app/

COPY --from=builder /usr/src/app/hello-world .

CMD ["/usr/src/app/hello-world"]