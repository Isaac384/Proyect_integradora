# Proyect_integradora
![GIT](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png)

💻 Estos son los comandos básicos para empezar:

## Configuración Inicial

Antes de empezar, asegúrate de tener Git instalado y configura tu nombre de usuario y dirección de correo electrónico:

```
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```
1.**Clonar un Repositorio**
Para clonar un repositorio existente en tu computadora, utiliza el siguiente comando:

```
git clone URL_del_Repositorio
```
2.**Subir cambios o archivos nuevos al repositorio**
Para agregar nuevos archivos de la computadora a el repositorio
  1.Verificar el status del los archivos

  ```
  git status
  ```
  2.Escribir el nombre del archivo
  ```
  git add nombre_del_archivo
  ```
  3.Agregar el comentario del cambio que se realizo
  ```
  git commit -m "Mensaje del commit"
  ```
  3.Subir al repositorio
  ```
  git push
  ```

3.**Trabajar con Ramas**
Crea una nueva rama y cámbiate a ella:

```
git checkout -b nombre_de_tu_rama
```
Cambia a una rama existente:
```
git checkout nombre_de_la_rama_existente
```
Realizar Cambios y Confirmarlos

**NOTA:**
**SE REALIZAN LOS MISMOS PASOS DEL PASO NÚMERO 2**

Confirma los cambios:

Sincronización con un Repositorio Remoto
Sube tus cambios al repositorio remoto:

```
git push origin nombre_de_tu_rama
```

Fusionar Cambios
Fusiona los cambios de una rama a otra:

```
git checkout rama_destino
git merge rama_fuente
```

**AGREGO VIDEO DE REFERENCIA SI NO ENTENDIERON** 😂

[![Git/Github Tutorial](https://img.youtube.com/vi/hWglK8nWh60/0.jpg)](https://youtu.be/hWglK8nWh60?si=VO0Dj2GX8RY7xUp_)

**LINK DE COMANDOS DE GIT**
[Introduccion a git](https://bluuweb.github.io/tutorial-github/01-fundamentos/)

