# Docker compose hub
My own personal docker compose hub collection.
## Patterns & Requirements
Each new Dockerfile or docker-compose idea: 
* Must have it own folder with everything it need inside there.
* Must have a README.md file with all necesaries notes and documentation
* The main README.md file mush be updated with a quick documentation about it and should include a link or read more to the new idea documentation/README file
* If posible includes the docker hub link.

## pihole-docker-compose
Is a pi-hole dns server on docker for removing network ads and prevent ads
```
cd pi-hole
docker-compose up -d 
```

Now you can open your browser and open your [localhost](http://localhost:80) or [Your container IP](http://<containerIp>:80) on the port 80.

More info at the [pi-hole readme.md](./pi-hole/README.md)
