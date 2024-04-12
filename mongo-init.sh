#!/bin/bash
set -e

# Inicie o MongoDB em segundo plano.
mongod --replSet rs0 --bind_ip_all &

# Aguarde até que o MongoDB esteja pronto para aceitar conexões.
while ! mongo --eval "db.stats()" >/dev/null 2>&1; do
  sleep 1
done

# Inicialize o conjunto de réplicas.
mongo --eval "rs.initiate()"