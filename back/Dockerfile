FROM python:3.7
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /usr/src/app/
# Install dependencies
COPY requirements.txt /usr/src/app/
RUN pip3 install -r requirements.txt
COPY . /usr/src/app/
#EXPOSE 8000