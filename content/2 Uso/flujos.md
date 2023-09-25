---
title: Flujos
description: Descripción de la página de Flujos
weight: "4"

---
{{< toc >}}

<div style="display: flex; justify-content: space-between">
{{< button size="large" relref="instalacion" >}} <i class="arrow left"></i> Instalación  {{< /button >}}

{{< button size="large" relref="#" >}} <i class="arrow right"></i>{{< /button >}}
</div>

RAWRR ha sido diseñado utilizando como base los flujos de trabajo que propone la metodología de [SAFETAG](https://safetag.org/). Estos están destinados a proporcionar una estructura capaz de incluir múltiples tipos de intervenciones de seguridad a través de pasos o etapas, algunos de los cuales pueden ser opcionales. Los únicos pasos que son obligatorios durante la evaluación son las actividades de pre evaluación, el desarrollo de recomendaciones y la elaboración de un informe.

A continuación describimos resumidamente estas etapas con el objetivo de ofrecerle a los personas que deseen utilizar RAWRR un contexto más amplio sobre la base metodológica que se utilizó para desarrollar el programa. Para más información sobre los flujos de trabajo y, en general, sobre cómo llevar a cabo auditorías o intervenciones de seguridad bajo la metodología de SAFETAG recomendamos visitar [https://safetag.org/](https://safetag.org/ "https://safetag.org/").

# Pasos del flujo de trabajo relacionados con la evaluación

## Paso 1: Actividades de preevaluación

Las actividades de preevaluación pueden incluir la selección de la organización, entrevistas iniciales, investigación del contexto, logística, planificación y, especialmente, definición de las actividades que se realizarán durante la intervención. Este paso es necesario para todas las intervenciones de evaluación, incluso si la profundidad y la amplitud cambian según el caso. Estas actividades pueden o no ser cargadas en RAWRR, pero suele ser imposible hacer una intervención sin hacer actividades de preevaluación.

## Paso 2: Modelado de la estructura base

Durante esta actividad, el evaluador modela la “estructura base”, que definimos como el conjunto inicial de ítems del que puede surgir el resto de la intervención. Algunos ejemplos de estructuras de base pueden incluir:

* **Lista básica de amenazas:** número de amenazas identificadas por la organización y el evaluador.
* **Matriz de riesgo:** Amenazas mapeadas con probabilidad de ocurrencia e impacto potencial.
* **Objetivos de seguridad:** objetivos iniciales de la intervención, como "asegurar las comunicaciones de la organización" o "proteger el sitio web".
* **Lista de activos:** hardware y software utilizados por la organización que pueden ser susceptibles de verse comprometidos.

Nuestro enfoque principal ha sido el uso de la estructura base de la "matriz de riesgo", ya que hemos descubierto que funciona mejor para identificar las prioridades de la organización en nuestro contexto. Se recomienda este paso, pero no es obligatorio.

## Paso 3: Ejecución de las actividades de evaluación

Durante este paso se ejecutan actividades con el objetivo de recopilar información de la organización. Estas pueden incluir entrevistas a profundidad con coordinadores de áreas, mapeo adicional de datos/activos/adversarios y escaneos técnicos. Los resultados de estas actividades están documentados y sirven como entrada para el siguiente paso. Se recomienda este paso, pero no es obligatorio.

## Paso 4: Especificación de vulnerabilidades

A partir del modelado de la estructura base y la ejecución de actividades de evaluación, se pueden obtener una serie de vulnerabilidades. Durante este paso, se especifican, se hace referencia a ellas y se vinculan con las actividades que las generaron y los elementos de la estructura base relacionados (como amenazas / riesgos). Se recomienda este paso, pero no es obligatorio.

## Paso 5: Creación y desarrollo de recomendaciones

Durante este paso el evaluador desarrolla una serie de acciones sugeridas para que la organización las tome para aumentar su seguridad. Pueden ser muy específicas (“actualizar el plugin x en el sitio web”) o muy vagas (“Escribir e implementar una política de seguridad con respecto a X”), dependiendo del estilo del evaluador y la naturaleza de la organización. Este paso es obligatorio. Las intervenciones de seguridad se pueden realizar sin recomendaciones, pero nuestra postura es que el objetivo siempre debe ser tener un impacto en la seguridad de la organización y las recomendaciones son una de las mejores formas de lograrlo.

## Paso 6: Definición de hojas de ruta de implementación

Durante este paso el evaluador ordena y prioriza las recomendaciones del paso 5 de una manera consistente con criterios predefinidos como impacto, facilidad de implementación, objetivos de la organización y preferencia personal. Se recomienda este paso, pero no es obligatorio.

## Paso 7: Creación de informes

Durante este paso se desarrolla el documento o documentos que se entregarán a la organización. Las opciones como el número de informes, las audiencias objetivo y la información a incluir se realizan aquí. Este paso es obligatorio, ya que un informe es la principal forma de comunicar los resultados de una evaluación. Esto no excluye el interrogatorio, las presentaciones orales u otras formas de transmitir información.

<div style="display: flex; justify-content: space-between">
{{< button size="large" relref="instalacion" >}} <i class="arrow left"></i> Instalación  {{< /button >}}

{{< button size="large" relref="#" >}} <i class="arrow right"></i>{{< /button >}}
</div>