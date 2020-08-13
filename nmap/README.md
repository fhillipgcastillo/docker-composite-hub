# Fhillip/nmap
This image contain only nmap and its dependent packages intalled and it was optimized to be lightweight.

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
