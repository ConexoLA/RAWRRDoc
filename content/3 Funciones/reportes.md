---
title: Reportes
description: 
weight: "7"

---
{{< toc >}}

<div style="display: flex; justify-content: space-between">
{{< button size="large" relref="recomendaciones" >}} <i class="arrow left"></i> Recomendaciones {{< /button >}}

{{< button size="large" relref="#" >}} <i class="arrow right"></i>{{< /button >}}
</div>

El resultado principal de una evaluación y la forma más común de comunicarse con la organización suele ser a través de un reporte. Se pueden crear y personalizar uno o más reportes para diferentes audiencias, por ejemplo, crear un reporte para los directores de la organización y otro para el departamento de TI con solo las recomendaciones muy técnicas y específicas. Las funciones básicas de RAWRR relativas a los reportes son:

## Crear reporte

Para crear un reporte debes seleccionar cuáles son los elementos que quieres que contenga. Al abrir la sección de Reportes encontrarás la pantalla dividida en dos secciones. La de la derecha mostrará inicialmente todos los elementos, por sección, que fueron cargados en esa instancia de RAWRR. Aquellos elementos que no quieras que aparezcan en el reporte podrán ser removidos uno a uno y aparecerán del lado izquierdo de la pantalla.

![](/images/base_export_es.png)

La remoción de un contenido puede hacerse de dos maneras. La primera es remover individualmente los elementos de un sección haciendo clic en el botón **“Quitar”** ubicado a la derecha de cada elemento.

![](/images/bolton-quitar.png)

La segunda es haciendo clic en el ícono circular **“Quitar todos”** ubicado a la derecha del título de cada sección.

![](/images/remover-todo.png)

Adicionalmente, para facilitar la visualización de los contenidos de un reporte, puedes utilizar los íconos de las flechas ubicadas a la derecha de los títulos de cada sección para expandir **(“Expandir”)** o comprimir **(“Colapsar”)** el contenido de cada sección.

![](/images/flechas.png)

También puedes cambiar el orden en el que aparece cada elemento de un sección haciendo clic en el elemento que quieras reordenar y arrastrándolo hasta el lugar que desees. Si quieres cambiar el orden de las secciones puedes hacerlo haciendo clic en el símbolo “=” y arrastrando hasta el lugar que desees.

![](/images/arrastrar.png)

## Exportar reporte

Una vez que hayas seleccionado los contenidos que deseas que tenga el reporte puedes exportarlo haciendo clic en el botón **“Exportar reporte”**  ubicado arriba y a la derecha de la sección de reportes.

**![](/images/exportar_reporte_boton_es.png)**

![](/images/exportar_reporte_es.png)

A continuación selecciona el formato en el que deseas exportar, y en el diálogo de tu sistema operativo, selecciona el nombre y la ubicación deseada para el reporte.

![](/images/elegir_formato_es.png)

## Exportar histórico de amenazas

Una vez que hayas seleccionado el contenido de las amenazas que deseas que tenga el reporte principal, puedes exportar su histórico haciendo clic en el botón **“Exportar histórico de amenazas”** ubicado arriba y a la derecha de la sección de reportes, a la izquierda de **"Exportar reporte"**

![](/images/exportar_historico_boton_es.png)

![](/images/export_threat_es.png)

A continuación selecciona el formato en el que deseas exportar, y en el diálogo de tu sistema operativo, selecciona el nombre y la ubicación deseada para el reporte.

![](/images/elegir_formato_es.png)

## Acerca de los archivos en Microsoft Word (.docx)

* ¿Qué pasará la primera vez que abra el .docx?

  Al generar la tabla de contenido, la primera vez que abras el Informe verá este mensaje:

![](/images/word1.png)

* ¿Qué significa?

  Microsoft Word detecta la primera vez que abres el .docx, por lo que debes decidir si deseas generar la tabla de contenido.
* ¿Ocurre en todos los sistemas operativos?

  Sí, es reproducible tanto en sistemas Mac como en sistemas Windows. El mensaje será el mismo en los sistemas Mac, pero el diseño puede cambiar a algo similar a esto:

![](/images/word2.png)

* Solución
  1. Abre el archivo en Microsoft Word (no importa el sistema operativo)
  2. Haz clic en "sí". El documento debe abrirse con el índice.
  3. Guarda el archivo .docx.
* ¿Necesitas hacer esto cada vez que abres un archivo de informe .docx?

  No, pero debes hacerlo cada vez que crees un nuevo informe.
* ¿Puedes usar Google Drive?

  Por el momento no. Sin embargo, puedes usar Microsoft Word de Microsoft Office 365.
* ¿Quieres saber más sobre lo que está pasando?

  Las tablas de contenidos son campos y, por diseño, su contenido solo es generado o actualizado por Word. No podemos hacerlo programáticamente. Por eso, cuando abras el archivo, Word mostrará el mensaje "Este documento contiene campos que pueden hacer referencia a otros archivos. ¿Desea actualizar los campos de este documento?". Tienes que decir que sí a Word para generar el contenido de toda la tabla de contenido.

  Como señalaron los desarrolladores de docx en [https://docx.js.org/#/usage/table-of-contents?id=how-to](https://docx.js.org/#/usage/table-of-contents?id=how-to "https://docx.js.org/#/usage/table-of-contents?id=how-to") leyendo la implementación oficial de XML abierto disponible en: [http://officeopenxml.com/](http://officeopenxml.com/ "http://officeopenxml.com/") WPtableOfContents.php

<div style="display: flex; justify-content: space-between">
{{< button size="large" relref="recomendaciones" >}} <i class="arrow left"></i> Recomendaciones {{< /button >}}

{{< button size="large" relref="#" >}} <i class="arrow right"></i>{{< /button >}}
</div>