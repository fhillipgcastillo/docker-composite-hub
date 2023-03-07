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

# Run image simply
## run with mounter directory
```
docker run --rm -it \
--name pagodo fhillip/pagodo
```

## run with mounter directory
I suggest to add 2 local directoies, `custom_dorks` and `results`, so this way we can store locally in the host machine the results we get from pagodo
```
docker run --rm -it \
-v "$(pwd)/results:/home/pagodo/results" \
-v "$(pwd)/custom_dorks:/home/pagodo/custom_dorks" \
--name pagodo fhillip/pagodo
```

## Basic pagodo
```
python3 pagodo.py <all your params>
```
### Example
```
python3 pagodo.py -d amazon.com -g dorks/files_containing_juicy_info.dorks -m 50 -s -i 10 -x 30 
python3 pagodo.py -d gov.do -g dorks/files_containing_juicy_info.dorks -m 50 -s -i 10 -x 30 
<!-- or -->
python3 pagodo.py -d *gob.do -g dorks/files_containing_juicy_info.dorks -m 50 -s results/pagodo_results_gov-do.json -o results/pagodo_results_gov-do.txt -i 10 -x 30
```
`-d <domain>` domain were it'll look for
`-g <path>` is the dorks file it will used (commonly inside the `pagodo/dorks/`)
always use the `-s` which save the results into a local file
`-m <number>` is the amount of results for each dork
`-f <float>` this will be the time between each dork search to avoid getting block

example 2
```
echo "intitle:\"login\"\n" > results/test.dorks
python3 pagodo.py -d amazon.com -g results/test.dorks -s results/pagodo_results_test.txt -o results/pagodo_results_test.json -m 50 -i 1 -x 30
```

## Update dorks
If you've been using it for a while remember to update the dorks by the following command inside the docker container bash
```
python3 ghdb_scraper.py -s -j -i
```

## ghdb_scraper.py

To start off, `pagodo.py` needs a list of all the current Google dorks.  The repo contains a `dorks/` directory with the
current dorks when the `ghdb_scraper.py` was last run. It's advised to run `ghdb_scraper.py` to get the freshest data
before running `pagodo.py`.  The `dorks/` directory contains:

* the `all_google_dorks.txt` file which contains all the Google dorks, one per line
* the `all_google_dorks.json` file which is the JSON response from GHDB
* Individual category dorks

Dork categories:

```python
categories = {
    1: "Footholds",
    2: "File Containing Usernames",
    3: "Sensitives Directories",
    4: "Web Server Detection",
    5: "Vulnerable Files",
    6: "Vulnerable Servers",
    7: "Error Messages",
    8: "File Containing Juicy Info",
    9: "File Containing Passwords",
    10: "Sensitive Online Shopping Info",
    11: "Network or Vulnerability Data",
    12: "Pages Containing Login Portals",
    13: "Various Online devices",
    14: "Advisories and Vulnerabilities",
}
```


## Tuning Results

## Scope to a specific domain

The `-d` switch can be used to scope the results to a specific domain and functions as the Google search operator:

```none
site:github.com
```

### Wait time between Google dork searchers

* `-i` - Specify the **minimum** delay between dork searches, in seconds.  Don't make this too small, or your IP will
get HTTP 429'd quickly.
* `-x` - Specify the **maximum** delay between dork searches, in seconds.  Don't make this too big or the searches will
take a long time.

The values provided by `-i` and `-x` are used to generate a list of 20 randomly wait times, that are randomly selected
between each different Google dork search.

### Number of results to return

`-m` - The total max search results to return per Google dork.  Each Google search request can pull back at most 100
results at a time, so if you pick `-m 500`, 5 separate search queries will have to be made for each Google dork search,
which will increase the amount of time to complete.

### Save Output

`-o [optional/path/to/results.json]` - Save output to a JSON file.  If you do not specify a filename, a datetimestamped
one will be generated.

`-s [optional/path/to/results.txt]` - Save URLs to a text file.  If you do not specify a filename, a datetimestamped one
will be generated.

## Google is blocking me!

Performing 7300+ search requests to Google as fast as possible will simply not work.  Google will rightfully detect it
as a bot and block your IP for a set period of time.  One solution is to use a bank of HTTP(S)/SOCKS proxies and pass
them to `pagodo`

### Native proxy support

Pass a comma separated string of proxies to `pagodo` using the `-p` switch.

```bash
python pagodo.py -g dorks.txt -p http://myproxy:8080,socks5h://127.0.0.1:9050,socks5h://127.0.0.1:9051
```

You could even decrease the `-i` and `-x` values because you will be leveraging different proxy IPs.  The proxies passed
to `pagodo` are selected by round robin.

### proxychains4 support

Another solution is to use `proxychains4` to round robin the lookups.

Install `proxychains4`

```bash
apt install proxychains4 -y
```

Edit the `/etc/proxychains4.conf` configuration file to round robin the look ups through different proxy servers.  In
the example below, 2 different dynamic socks proxies have been set up with different local listening ports (9050 and
9051).

```bash
vim /etc/proxychains4.conf
```

```ini
round_robin
chain_len = 1
proxy_dns
remote_dns_subnet 224
tcp_read_time_out 15000
tcp_connect_time_out 8000
[ProxyList]
socks4 127.0.0.1 9050
socks4 127.0.0.1 9051
```

Throw `proxychains4` in front of the `pagodo.py` script and each *request* lookup will go through a different proxy (and
thus source from a different IP).

```bash
proxychains4 python pagodo.py -g dorks/all_google_dorks.txt -o [optional/path/to/results.json] -s [optional/path/to/results.txt]
```

Note that this may not appear natural to Google if you:

1) Simulate "browsing" to `google.com` from IP #1
2) Make the first search query from IP #2
3) Simulate clicking "Next" to make the second search query from IP #3
4) Simulate clicking "Next to make the third search query from IP #1

For that reason, using the built in `-p` proxy support is preferred because, as stated in the `yagooglesearch`
documentation, the "provided proxy is used for the entire life cycle of the search to make it look more human, instead
of rotating through various proxies for different portions of the search."
