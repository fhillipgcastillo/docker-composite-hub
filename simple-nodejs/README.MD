## Simple NodeJS
This is use for those ocations where we want to setup nodejs with to have to install it locally
We only need to modify the node version and add any extra instalation

## How to use it
### First build the image

```
docker build -t simple-nodejs . --no-cache
```

### Run Any npm command
```
docker run -it -v $(pwd):/home/app simple-nodejs npm <option>
```

#### Install packages
```
docker run -it -v $(pwd):/home/app simple-nodejs npm i
```


## Notes:
This machine not always running in background, it only runs when you run the command.
If you want to keep it running feel free to execute the right docker command like so

```
docker run -it -v $(pwd):/home/app simple-nodejs bash
```
and there you will be able to run any npm command as normal
