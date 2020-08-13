# Pi-hole Docker compose 
Pi-hole is a dns server for ads blocking

## Compose up
To make the service available and been already in pi-hole location run the following commands.
```
docker-compose up -d 
docker exec -it pihole bash
```
Now been on the pihole container we can run pihole commands like
```
pihole tail
```
To monitor/tail the pihole logs.

Now you can open your browser and open your [localhost](http://localhost:80) or [Your container IP](http://<containerIp>:80) on the port 80.

https://hub.docker.com/r/pihole/pihole/