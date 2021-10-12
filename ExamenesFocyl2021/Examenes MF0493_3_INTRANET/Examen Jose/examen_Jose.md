## Welcome to the IFCD0210 wiki Examen_Jose

## Clonado de repositorio en linux

focyl@focyl-VirtualBox:~$ sudo git clone https://github.com/jomasapi/IFCD0210.git
Clonando en 'IFCD0210'...
remote: Enumerating objects: 55, done.
remote: Counting objects: 100% (55/55), done.
remote: Compressing objects: 100% (41/41), done.
remote: Total 55 (delta 5), reused 41 (delta 2), pack-reused 0
Desempaquetando objetos: 100% (55/55), listo.
focyl@focyl-VirtualBox:~$ cd IFCD0210
focyl@focyl-VirtualBox:~/IFCD0210$ ls
LICENSE  MF0491_3_Cliente  MF0492_3_ExamenJose  MF0493_3-Intranet  README.md
focyl@focyl-VirtualBox:~/IFCD0210$ docker rm MF0491_3_Cliente
focyl@focyl-VirtualBox:~/IFCD0210$ cd MF0493_3-Intranet
focyl@focyl-VirtualBox:~/IFCD0210/MF0493_3-Intranet$

![Captura_Repositorio_inicio](https://user-images.githubusercontent.com/82203688/128342671-3c007c3c-4656-419e-900b-0e1be6b2721a.png)

Creamos la máquina virtual con los parámetros iniciales requeridos.
![captura_maquina-Jose](https://user-images.githubusercontent.com/82203688/128343765-e3fc8e40-eb0f-440e-baa9-e5536f485455.jpg)

Especificamos en cada apartado la cantidad de memoria RAM, la de gráficos, y la de almacenamiento.
![captura_maquina-Jose_final](https://user-images.githubusercontent.com/82203688/128344390-e85811ca-54ef-4d94-b36c-1c0a3713702d.jpg)

Imagen subida de Docker Hubs
                                                                                                                                                                                                                                             
┌──(kali㉿kali)-[~]
└─$ sudo docker pull mysql   
Using default tag: latest
latest: Pulling from library/mysql
Digest: sha256:8b928a5117cf5c2238c7a09cd28c2e801ac98f91c3f8203a8938ae51f14700fd
Status: Image is up to date for mysql:latest
docker.io/library/mysql:latest

Captura logs
![Captura_logs_container](https://user-images.githubusercontent.com/82203688/128346936-3c0939d1-3723-4597-a5a9-f3e033a2a00e.JPG)

Captura Estadísticas
![Captura_estadisticas_container](https://user-images.githubusercontent.com/82203688/128347078-1539c932-449e-49f7-a024-75ca79d98daa.JPG)

Código docker-compose.yml
version: "3.7"

services:
  app:
    image: node:12-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 4408:4408
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: Jose
      MYSQL_DB: focyl

  mysql:
    image: mysql:8.0
    volumes:
      - focyl-mysql-data:/var/lib/mysql
    environment: 
      MYSQL_ROOT_PASSWORD: Jose
      MYSQL_DATABASE: focyl

volumes:
  focyl-mysql-data:

Estado contenedores.
![Captura_estado_containers](https://user-images.githubusercontent.com/82203688/128349495-53bc1045-4f6b-47bb-b9d0-90155df1e5a3.JPG)
