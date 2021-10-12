# Ejercicio 1:  
### Estructura del repositorio.  

***

![Estructura](https://user-images.githubusercontent.com/82203957/128338577-fbb8bf5c-0396-4375-94e2-f706a3d69c32.PNG)  


***
# Ejercicio 2:  
### Máquina virtual.  
Proceso para crear una máquina virtual.  
* Para crear una máquina virtual primero tendremos instalado el Virtual Box Machine de Oracle con la que vamos a trabajar.  
* Iniciamos virtual Box de Oracle y empezamos el proceso:  
> En la **opción nueva**, empezamos el proceso.  
nos ira guiando todo el proceso lo que debemos hacer.  



![virtual1](https://user-images.githubusercontent.com/82203957/128339244-d320d453-d207-492c-be76-f9e3806071a9.PNG)  

***
Por ejemplo seleccionamos 3 gigas de RAM.  

![virtual2](https://user-images.githubusercontent.com/82203957/128340296-fbbce046-7c1c-4088-ac48-312082dfa7cf.PNG)  

***
**El resultado según nuestras opciones es el siguiente.:**  

![virtual3](https://user-images.githubusercontent.com/82203957/128341338-c58cfc3a-c5ab-4b80-a026-2793133402d1.PNG)  

***
# Ejercicio 3  
### Docker  
Buscamos en esta pagina:  
![pregunta 3-1url](https://user-images.githubusercontent.com/82203957/128342010-742b409d-25fd-4785-a940-c7094bb4aba2.png)  

![docker](https://user-images.githubusercontent.com/82203957/128343043-b917b5f0-40f7-4562-8297-8a05abae98ec.PNG)  
ejecutamos los comandos que nos pide:  

![pregunta 3](https://user-images.githubusercontent.com/82203957/128341834-c67bdb75-f35d-4c66-88ca-89113d9a4cb5.PNG)  

estadísticas:  

![pretunga 3 - 2](https://user-images.githubusercontent.com/82203957/128342386-a82a82c0-0312-4f65-a500-7cb1fa1ea03b.png)  

***
# Ejercicio 4.  
### Docker Compose.  

![Compuse4](https://user-images.githubusercontent.com/82203957/128347193-99d0ab52-bcea-433c-a706-4cf14c456595.PNG)

![arrancados](https://user-images.githubusercontent.com/82203957/128347547-c38e7482-1889-4fd4-9b8a-71f203c9467b.PNG)  

![abierotos](https://user-images.githubusercontent.com/82203957/128347962-08bf3d8c-d730-40f8-a3a8-239324831ed8.PNG)  
***

``` 
version: "3.3"

services:
  mysql:
    image: mysql:5.7
    volumes:
      - focyl-mysqldata:/var/lib/mysql
    ports:
      - 4408:4408
    environment: 
      MYSQL_ROOT_PASSWORD: emilio
      MYSQL_DATABASE: focyl

 adminer:
    image: adminer
    restart: always
    ports:
     - 8080:8080      
volumes:
    focyl-mysqldata:
```

***

# Ejercicio 5.  
### Despliegue de un CMS.  


***




