# Docker compose hub
My own personal docker compose hub collection.
To start any compose use the docker compose command in the following way
* docker-compose up -f <docker-filename>.yml

## pihole-docker-compose
Is a pi-hole dns server on docker for removing network ads and prevent ads
docker-compose up -d -f pihole-docker-compose.yml.yml

options
* -d is for detached mode

update
docker exec pihole pihole updateGravity

https://hub.docker.com/r/pihole/pihole/l