# mean
MongoDB - Express - Angular - Node

curl 'http://localhost:3001/users'

# compilar & rodar
make down && make up
yarn dev

# Recuperar o IP do container DB 
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' db

docker logs -f api

docker network list
docker network rm 
 
