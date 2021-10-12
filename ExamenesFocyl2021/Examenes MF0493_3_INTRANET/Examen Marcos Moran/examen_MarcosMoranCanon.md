# Estructura de mi repositorio IFCD0210
![Repo](https://user-images.githubusercontent.com/43603247/128344022-71492ca1-a06c-4301-8311-44f465f82c0c.jpg)

# Creación de una maquina virtual (tipo Windows)

Al inicio de la creación de la maquina, nos solicitará el el tipo de maquina virtual y el nombre de la misma, en mi caso Windows 10.

![Win-1](https://user-images.githubusercontent.com/43603247/128323586-1abc7ca6-1eb0-433b-a12c-901a14cf186d.jpg)

Mas adelante nos pedirá establecerle la memoria RAM que queremos asignarle a la maquina virtual, 3 gigabytes.

![Win-2](https://user-images.githubusercontent.com/43603247/128323589-16161ca7-0b7a-4ce7-b551-e20197307206.jpg)

Nos solicitará crear un disco duro virtual (a elegir entre otras opciones) y establecerle el tamaño del mismo, en mi caso 10 gigabytes

![Win-3](https://user-images.githubusercontent.com/43603247/128323591-97359c0f-3974-4c08-a263-15e561e8988c.jpg)

Seguiremos los pasos de la creación de la maquina virtual y al terminar, podremos configurar en la opciones > pantalla, la cantidad de memoria de video que queremos dedicar a maquina virtual.

![Win-4](https://user-images.githubusercontent.com/43603247/128323583-9eb6b928-ed2e-4347-8b14-6d19f1e0b87b.jpg)


# Docker

### Dirección de la imagen en Docker Hub:
[Getting Started](https://hub.docker.com/_/getting-started)

Debemos ejecutar el comando para crear el contenedor
`docker run -d -p 80:80 docker/getting-started`

Al no encontrar la imagen, la descargará automáticamente y luego creará el contenedor

![docker-1](https://user-images.githubusercontent.com/43603247/128333682-6a72a9d6-ba18-4320-a54d-ed156a019a0d.jpg)

La imagen terminará de descargarse. Una ver descargada y creada, podremos navegar a la URL http://localhost/ y ver como nos muestra la documentación de Docker.

![docker-2](https://user-images.githubusercontent.com/43603247/128334030-bd266c6c-6a86-4032-88f4-bae8d6f9b8dd.jpg)

Si abrimos el Portainer, podremos observar que nuestro contenedor está corriendo:

![docker-3](https://user-images.githubusercontent.com/43603247/128334655-afd7cc9d-50e5-478d-9fdb-5d6751463a22.jpg)

Y también podremos ver las estadísticas de uso de los recursos del contenedor:

![docker-4](https://user-images.githubusercontent.com/43603247/128334653-585efb40-308e-4615-9660-ab8b158a7239.jpg)

# Docker-compose

Para la creación del contenedor con docker-compose, deberemos crear la carpeta donde queremos el archivo YML y seguidamente, crear el archivo `docker-compose.yml`

![dkCompose-1](https://user-images.githubusercontent.com/43603247/128339599-aaf66d68-a102-402c-a480-8e21659964df.jpg)

El fichero `docker-compose.yml`, podemos crearlo con `touch` y editarlo con `nano` o `vi`. A este fichero le daremos el siguiente contenido.
![dkCompose-2](https://user-images.githubusercontent.com/43603247/128341436-4a2c30f6-e027-4a58-8ea0-937934d6d31c.jpg)

Para añadir el fichero a PHPMyAdmin, añadiremos el siguiente trozo de código en el fichero `docker-compose.yml`:

![dkCompose-3](https://user-images.githubusercontent.com/43603247/128341443-b54e496c-c877-4334-ab0a-3e80354eaec7.jpg)

Para ejecutar crear el contenedor ejecutaremos (desde el directorio donde se encuentra el fichero `docker-compose.yml`) el siguiente comando: 

`docker-compose up -d`

Si ejecutamos el comando `docker ps` podremos ver como el contenedor de mySql esta arrancado:

![dkCompose-4](https://user-images.githubusercontent.com/43603247/128341810-4c95936c-f4d0-45e7-aba9-980949051376.jpg)


# Despliegue de CMS

Desplegaré un contenedor de wordpress.
Para ello crearé un directorio dedicado al wordpress y dentro un archivo `docker-compose.yml` y le daré el siguiente contenido:

![WP-1](https://user-images.githubusercontent.com/43603247/128343295-bfd15363-0505-47b3-9e3d-b1e7a9a8885d.jpg)


Y a continuación, ejecutaré el comando `docker-compose up -d` para levantar el contenedor definido, cosa que podemos ver ejecutando `docker ps`:

![WP-2](https://user-images.githubusercontent.com/43603247/128343294-302dbdc4-6c12-4e18-ab41-b97805730b1a.jpg)

Si acecemos a `http://localhost:8000`, nos redirigirá a la pagina de instalación de wordpress, el cual podremos instalar sin problemas como cualquier otro wordpress sin dockerización:

![WP-3](https://user-images.githubusercontent.com/43603247/128343682-2230cb5e-b018-4b13-8c2d-c80cd95a0d36.jpg)

# Captura de el estado de los contenedores:
![DockerPs-a](https://user-images.githubusercontent.com/43603247/128344536-24392b7f-b791-4192-9075-4c98de5b2665.jpg)



