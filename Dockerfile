FROM python:3
MAINTAINER Rui "ruiyangwind@gmail.com"
RUN mkdir -p /opt/game-undercover
WORKDIR /opt/game-undercover
COPY requirements.txt /opt/game-undercover
RUN pip install --no-cache-dir -r requirements.txt
COPY . /opt/game-undercover
EXPOSE 5000
ENTRYPOINT ["python", "server.py"]
