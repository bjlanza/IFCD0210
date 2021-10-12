# Configuración

![config](https://user-images.githubusercontent.com/82499989/128342499-c8d19ad0-788e-47aa-87c2-497b8a1b5fe4.PNG)

# Ejercicio 2

  Vamos a crear una máquina virtual con OracleVM

1.Primero instalamos **[OracelVM](https://www.oracle.com/es/virtualization/technologies/vm/downloads/virtualbox-downloads.html)** software.


2.Abrimos Oracle y hacemos click en nueva.

![Nueva](https://user-images.githubusercontent.com/82499989/128336558-77af5152-eb6f-4d79-ad1d-e7d96524fddb.png)

3.Le damos un nombre a nuestra maquina y elegimos el sistema Operativo.

![Sistema y version](https://user-images.githubusercontent.com/82499989/128338570-45a6e65e-9428-4f11-9819-b2ba37cf66c3.PNG)

4.Elegimos la cantidad de memoria **RAM**.

![memoria](https://user-images.githubusercontent.com/82499989/128338630-77a34eb2-d44e-4260-bd8d-dd2304ef8a9b.PNG)

5.Seleccionamos crear un disco virtual ahora y el tipo de archivo para este.

![Captura](https://user-images.githubusercontent.com/82499989/128338769-af10e699-84ab-49dc-852f-8db50f29733d.PNG)

![tipo disco](https://user-images.githubusercontent.com/82499989/128338880-739b0235-85dc-45a3-b359-8bf923f2047f.PNG)

6.Seleccionamos el tamaño fijo y en la siguiente ventana seleccionamos la ubicación y el tamaño.

![tamaño fijo o variable](https://user-images.githubusercontent.com/82499989/128339058-fe94c7b8-638c-4360-8f1e-26c89f737a98.PNG)

![10gb](https://user-images.githubusercontent.com/82499989/128338971-0a817bea-c386-48d8-8636-65e5d28ebe1c.PNG)

7.Pulsamos en crear y comenzará la instalación de esta.

![instalacion](https://user-images.githubusercontent.com/82499989/128339114-1c80cd6d-20b6-415f-b4a9-c9110a6fc5ac.PNG)

8.Ya tenemos nuestra maquina instalada con las especificaciones requeridas.

![instalada](https://user-images.githubusercontent.com/82499989/128339193-1f102933-5612-4d6b-b430-302d13a0f9f2.PNG)


# Docker

1.Busca la imágen que queramos en **[Docker Hub](https://hub.docker.com/)**

2.La imagen seleccionada es esta: [https://hub.docker.com/_/docker](https://hub.docker.com/_/docker)

![Captura 2](https://user-images.githubusercontent.com/82499989/128343733-f19a34ea-bdb8-4df2-853a-bed075945e96.PNG)

3.Abrimos la terminal y ejecutamos el siguiente comando:

   > ~$ docker run docker

  Este comando descargara la imagen en nuestra terminal como muestra la siguiente imagen

![docker](https://user-images.githubusercontent.com/82499989/128344349-a2404160-fae5-4006-8100-eab5915ab304.PNG)

4.El siguiente paso será comprobar que nuestra imágen esta ararncada y en funcionamiento
  
  Para ello usamos el siguiente comando:
  
  >~$ docker ps

  En la siguiente imagen vemos la información sobre la imagen y su funcionamiento

  ![docker corriendo](https://user-images.githubusercontent.com/82499989/128344979-9778590b-7041-4eb9-8228-44828060a638.PNG)

5.Utilizaremos portainer [http://localhost:9000/#!/1/docker/containers](http://localhost:9000/#!/1/docker/containers)

 En este servidor podemos ver el estado de los diferentes contenedores

 En este caso observaremos los Logs y las estadisticas de nuestro contenedor


![stats](https://user-images.githubusercontent.com/82499989/128350423-43b425aa-476c-4429-beeb-e9e1b7668365.PNG)




![stat](https://user-images.githubusercontent.com/82499989/128346255-6503ce1e-a863-4ed9-b967-575732e9bd71.PNG)


 



# Compose

  ##código


 ``version: "3.9"
    
services:
  db:
    image: mysql:5.7
    volumes:
      - focyl mysql_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: sergio
      MYSQL_DATABASE: focyl
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: sergio
    ports:
        - "4408:80"
volumes:
  db_data: {focyl-mysql-data.}``




# Ejercicio 5

# FIN DE EXAMEN

![fin](https://user-images.githubusercontent.com/82499989/128351223-96bc18f9-1d74-4a9f-a8be-78840d7542d6.PNG)
