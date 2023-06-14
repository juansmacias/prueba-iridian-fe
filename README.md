# Prueba ingreso Iridian 
## Indice
- Intro
- Tecnología
- Librerias
- Tradeoffs
- Conclusiones 

## Intro

Con los mejores esfuersos se toma los requerimientos funcionales que la empresa Iridian me entrega y se desarrolla todos los puntos que se presentan en el documento. Las tecnologias usadas son elegidas basadas en varios parametros y siguiendo las tendencias y mejores practicas. Fue un ejercicio bastante divertido y se pudo aplicar nuevas librerias y buenas practicas de desarrollo para React. Se espera que este trabajo sea de su agrado y poder ayudar en todos los proyectos que tenga la compañia.

## Tecnología

En este proyecto utilizamos principalmente 1 tecnología base y varias librerias que apoyan el proceso de desarrollo. 

### Typescript

En esta ocasión se uso Typescript por encima de vanilla js por varias razones. Typescript es un lenguaje de programación que permite desarrollar código con menos errores y con mejores practicas al utiliizar el sistema de tipos estáticos. Además la comunidad de Typescript crece cada vez más lo cual lo hace un lenjuage donde se pueden encontrar mejores colaboradores y poder resolver problemas complejos coon la ayuda de la comunidad.

## Librerias

### React

React es una libreria creada por Facebook para agilizar el desarrollo de nuevos productos web. Yo inicie con React en el 2017 y en ese entonces en mi compañia nos gustaba que tuviera un gran apoyo de un grande de la tecnología y que usaran el concepto de componentes reutiliizables. Otro punto a favor es su configuración inicial es muy basica y se puede inicar una webapp en segundos. 

### Webpack

Webpack me ha gustado bastante por que solo una un archivo de configuracion para todo lo relacionado con transpilar y empaquetar tus webapps. Me gusta su sistema de plugins que ayuda bastante con apoyo de la comunidad.

### MUI (Material Design para Javascript)

Desde el primer día que use la libreria de MUI me a parecido excepcional. El equipo de MUI ha logrado concentrar todas las buenas practicas que el equipo de Google ha refleado en sus estudios y proyectos de Material Design. La documentación de la pagina es muy buena y sus componentes de superficies y layouts son muy buenos para simplificar cosas como sentrar elementos o lograr hacer las vistas responsivas.

### Axios 

Axios es un a libreria con un cliente HTTP muy simple pero poderoso. Lo he usado en bastantes proyectos y siempre logro acomodarlo a las necesidades del proyecto.  

## Tradeoffs

1. Redux VS React Context

En casi todos los proyectos que he trabajo con React he usado Redux como libreria para manear el estado del webapp. Redux es una libreria madura y muy completa para manejar todo tipo de casos que puede necesitar un proyecto de webapp. La desventaja es que es una libreria externa y que para configurarlo con una webapp simple lleva un sobre costo grande en tiempo y lineas de código. Por otra parte se encuentra el novedoso API Context de React, una libreria inmersa en React con todo el potencial de manejar estados de aplicaciones con baja frecuencia de uso. Claro esta que tiene sus desventajas ya que al modiificarse algo en el arbol de componentes, esta tiene que recorrer todo el arbol para renderizar sus componentes.

En esta ocasión se uso React context ya que el uso del estado seria de baja frecuencia y no se justificaba agregar más paquetes al proyecto sin ser necesarios. 

2. Normalizar Data

En esta ocasión no se normalizo la data ya que se vio que la app no presentaba diificultades con el formato que llegaba del API.

3. Test

Se revisaron 2 opciones de pruebas para la prueba. Cypress y la libreria de pruebas de React. Principalmente se uso la de Cypress por su facilidad de uso y robustez.

## Instrucciones para correr codigo

Para correr el codigo se puede mediante dos formas. 

1. Modo Desarrollo

Para correr la aplicacion en modo desarrollo se tiene que instalar todas las dependencias(`npm install`) y luego con el comando `npm run start` se inicia el webapp

2. Modo Produccion

Para el despliegue en produccion, hay que correr el comando `npm run build` y luego mediante explorador de archivos dirigirse a la carpeta de `build` y abrir archivo html.

## Conclusiones

En conclusion fue un ejercicio retador que conyeba una gran cantidad de trabajo y varios retos a cumplir. Se pudo completar con exito la prueba y espera que todas las decisiones tomadas en relación a las tecnologias y librerias hayan estado en linea con lo que tienen establecido en Iridian.

Gracias por su tiempo.

Juan Macias



