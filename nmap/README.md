# Fhillip/nmap
This image contain only nmap and its dependent packages intalled and it was optimized to be lightweight.

## Build Stages
1. The image use ```ubuntu:bionic``` as first step and just for build. Meaning the first step update the system and to download nmap and it dependencies.
2. Then ```alpine:latest``` is used as final stage and nmap and all it dependecies and packages are copied from previeous stage and copied to the final image.
  That way the image can be lightweight and only contain the nmap and sh as available  commands

## Download image
```
docker pull fhillip/nmap
```

## Run it
```
docker run -it --name nmap fhillip/nmap
```

## Run it as dettached
```
docker run -it -d --name nmap fhillip/nmap
```

## Test 
after running to the docker container run the following command

```
nmap
```

## Update image
First stop and remove the container, if running.
```
docker container stop nmap && docker container rm nmap
```
And then just need to pull the image again
```
docker pull fhillip/nmap
```
