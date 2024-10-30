# ProyectoBien 🅰️

## Descripción
ProyectoBien es una aplicación web desarrollada con Angular 14.1.0. Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli).

## Requisitos Previos 📋
- Node.js (^14.15.0 || >=16.10.0)
- npm (^6.11.0 || ^7.5.6 || >=8.0.0)
- Angular CLI (~14.1.0)

## Instalación 🔧
1. Clona el repositorio:

```bash
git clone https://github.com/DavidRCh56/AppBusquedaGifs.git
```

2. Navega al directorio del proyecto:

```bash
cd proyectoBien
```

3. Instala las dependencias:

```bash
npm install
```


## Scripts Disponibles 🚀

### Servidor de Desarrollo

```bash
npm install
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

### Compilación

```bash
ng build
```

Los artefactos de compilación se almacenarán en el directorio `dist/`.

### Pruebas Unitarias

```bash
ng test
```

Ejecuta las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

### Pruebas End-to-End

```bash
ng e2e
```

Para utilizar este comando, primero debes agregar un paquete que implemente capacidades de prueba end-to-end.

## Estructura del Proyecto 📁

```
AppBusquedaGifs/
├── src/
│ ├── app/
│ │ ├── app.component.ts
│ │ ├── app.component.html
│ │ ├── app.component.css
│ │ └── app.module.ts
│ ├── assets/
│ ├── environments/
│ └── index.html
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Dependencias Principales 📦
- @angular/animations: ^14.1.0
- @angular/common: ^14.1.0
- @angular/core: ^14.1.0
- @angular/forms: ^14.1.0
- @angular/router: ^14.1.0
- RxJS: ~7.5.0
- Zone.js: ~0.11.4

## Configuración de Producción ⚙️
El proyecto incluye configuraciones optimizadas para producción con:
- Presupuestos de tamaño de bundle
- Reemplazo de archivos de entorno
- Optimización y minificación de código

## Generación de Código 🛠️
Utiliza los siguientes comandos para generar componentes:

```bash
ng generate component nombre-componente
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Ayuda Adicional 💡
Para obtener más ayuda sobre Angular CLI usa `ng help` o consulta la [Documentación y Referencia de Comandos de Angular CLI](https://angular.io/cli).

## Autor ✒️
* **David** - [DavidRCh56](https://github.com/DavidRCh56)

---
⌨️ con ❤️ por DavidRCh56 😊