Based on official pagado github [opsdisk/pagodo](https://github.com/opsdisk/pagodo)

## Build Image
```
docker build -t fhillip/pagodo .
```

## Run image
```
docker run --rm -it fhillip/pagodo
```
This will open a terminal with everything setup

## Basic pagodo
```
python3 pagodo.py <all your params>
```
### Example
```
python3 pagodo.py -d amazon.com -g dorks/files_containing_juicy_info.dorks -l 50 -s -e 35.0 -j 1.1
```
always use the `-s` which save the results into a html file
`-f <float>` this will be the time between each dork search to avoid getting block
`-l <number>` is the amount of results for each dork
`-g <path>` is the dorks file it will used (commonly inside the `pagodo/dorks/`)
`-d <domain>` domain were it'll look for

## Update dorks
If you've been using it for a while remember to update the dorks by the following command inside the docker container bash
```
python3 ghdb_scraper.py -s -j -i
```

