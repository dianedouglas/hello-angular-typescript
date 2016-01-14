### Creating a new Angular 2 app with typescript.
1. package.json

```
{
  "name": "angular2-quickstart",
  "version": "1.0.0",
  "scripts": {
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "start": "concurrent \"npm run tsc:w\" \"npm run lite\" "
  },
  "license": "ISC",
  "dependencies": {
    "angular2": "2.0.0-beta.0",
    "systemjs": "0.19.6",
    "es6-promise": "^3.0.2",
    "es6-shim": "^0.33.3",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.0",
    "zone.js": "0.5.10"
  },
  "devDependencies": {
    "concurrently": "^1.0.0",
    "lite-server": "^1.3.1",
    "typescript": "^1.7.3"
  }
}
```

2. `npm install`
3. Might not need this step. If you don't already have a server installed: `npm install -g http-server` To create a server at localhost:8080 use the command `http-server`
4. Make a tsconfig.json file in the project root for configuring the typescript compiler

```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules"
  ]
}
```

5. Add an `app` folder
6. Make app/boot.ts


import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent);


7. Make root component (AppComponent is being imported above).

app/app.component.ts

```
import {Component} from 'angular2/core';

@Component({
   selector: 'my-app',
   template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {
 //FUNCTIONALITY HERE
}
```

8. Make entry point html file where users start: index.html

```
<html>

  <head>
    <title>Angular 2 QuickStart</title>

    <!-- 1. Load libraries -->
    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.js"></script>
    <script src="node_modules/angular2/bundles/angular2.dev.js"></script>

    <!-- 2. Configure SystemJS -->
    <script>
      System.config({
        packages: {
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/boot')
            .then(null, console.error.bind(console));
    </script>

  </head>

  <!-- 3. Display the application -->
  <body>
    <my-app>Loading...</my-app>
  </body>

</html>
```

When Angular calls the bootstrap function in boot.ts, it reads the AppComponent metadata, finds the my-app selector, locates an element tag named my-app, and loads our application between those tags.

* load js libs you need first
* tell System to configure itself and then tell it to import the boot file.  
* include the tag named in your component selector <my-app> in this case.

9. `npm start` in the terminal from the root of your project directory.
launches the typescript compiler in watch mode and then launches a static server called lite-server that loads index.html in a browser and refreshes the browser when application files change
