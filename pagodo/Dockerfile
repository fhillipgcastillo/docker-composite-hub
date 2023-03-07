# syntax=docker/dockerfile:1
FROM alpine/git AS gitbuild
WORKDIR /home/
RUN git clone https://github.com/opsdisk/pagodo.git


FROM python:3.7.13
# RUN python -m pip install --upgrade pip
RUN export DEBIAN_FRONTEND=noninteractive
RUN apt-get update
RUN apt-get -y install  nano proxychains4 --no-install-recommends 
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*

WORKDIR /home/pagodo
COPY --from=gitbuild /home/* ./
RUN pip install -r requirements.txt
RUN python3 ghdb_scraper.py -s -j -i


CMD ["bash"]
