# syntax=docker/dockerfile:0
FROM alpine/git AS gitbuild
WORKDIR /home/
RUN git clone https://github.com/opsdisk/pagodo.git


FROM python:3.7.13
# RUN python -m pip install --upgrade pip
WORKDIR /home/pagodo
COPY --from=gitbuild /home/* ./
RUN pip install -r requirements.txt
RUN python3 ghdb_scraper.py -s -j -i

CMD ["bash"]
