---
title: Instalación
weight: "2"

---
{{< toc >}}

<div style="display: flex; justify-content: space-between">
{{< button size="large" relref="inicio" >}} <i class="arrow left"></i> Inicio  {{< /button >}}

{{< button size="large" relref="preguntas-frecuentes" >}} Preguntas frecuentes <i class="arrow right"></i>{{< /button >}}

</div>

RAWRR es un archivo ejecutable y portable, por lo que no es necesario instalarlo como una aplicación en la computadora. Está disponible en Windows, Linux y MacOS. Para obtenerlo descarga la versión binaria apropiada a tu sistema operativo y ejecútala:

* RAWRR para [Windows](https://github.com/ConexoLA/RAWRR/releases/download/v1.0.0/Windows.x64.rar)
* RAWRR para [Linux](https://github.com/ConexoLA/RAWRR/releases/download/v1.0.0/Linux.x64.zip)
* RAWRR para [MacOS](https://github.com/ConexoLA/RAWRR/releases/download/v1.0.0/MacOS.x64.zip)

También puedes entrar en la sección de descarga desde la página de [RAWRR](https://conexo.org/project/rawrr/) o desde nuestra página de [documentación.](https://rawrrdocs.netlify.app/2-usage/getting-started/)

Adicionalmente, puedes compilar desde el código fuente siguiendo las instrucciones a continuación:

Para instalar los paquetes que te permitirán modificar RAWRR o, en el otro caso, construir el ejecutable, sigue estos pasos:

1. Selecciona el directorio base en el que deseas descargar RAWRR

   ```Shell
   # Modify the working directory
   cd path/to/working/directory
   ```

{{< hint info >}}

**Opcional**  
Si necesitas crear el directorio, puedes ejecutarlo fácilmente con <span style="color:grey">**`mkdir path/to/working/directory`**</span>

{{< /hint >}}

1. Clona nuestro repositorio RAWRR

```Shell
# Cloning base repository
git clone https://github.com/ConexoLA/Rawrr_dev.git
```

1. Instala las dependencias

Dependiendo del uso que desees darle a RAWRR, puedes modificar el código usando la funcionalidad de recarga en caliente o generar el ejecutable compilando el proyecto.

En ambos casos debes instalar todos los paquetes disponibles en: `package.json`.

```Shell
# install package.json packages
npm install
```

![npm install image](/images/npm_install.png)

{{< hint info >}}

**Información**  
En este punto podrías:

1. [Modificar RAWRR](#modify-rawrr-using-electron) en el caso de que desees agregar nuevas funcionalidades o extender RAWRR. Una vez que termines tus cambios, ve al paso 2.
2. [Generar el ejecutable](#create-the-rawrr-executable) de RAWRR.

{{< /hint >}}

### Modificar RAWRR usando electron

Si deseas modificar RAWRR usando la opción de recarga en caliente de electron, puedes usar el siguiente comando:

```Shell
npm run electron:serve
```

Este comando iniciará un servidor de desarrollo para probar la aplicación (como puedes ver en la imagen a continuación):

![Serve image](/images/serve.png)

Después de que se inicie el servidor, te darás cuenta de que la aplicación se está probando en modo de desarrollo porque las herramientas habituales para los desarrolladores están activadas:

![](/images/espanol-1.png)

### Crear el ejecutable de RAWRR

Si deseas generar el ejecutable de RAWRR, usa el siguiente comando:

```Shell
npm run electron:build
```

<div style="display: flex; justify-content: space-between">
{{< button size="large" relref="inicio" >}} <i class="arrow left"></i> Inicio {{< /button >}}

{{< button size="large" relref="preguntas-frecuentes" >}} Preguntas Frecuentes <i class="arrow right"></i>{{< /button >}}

</div>