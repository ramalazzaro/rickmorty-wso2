# Rick and Morty con WSO2

Segunda parte del trabajo integrador de Arquitectura Web (Universidad CAECE, 2026): autenticación con WSO2 Identity Server.

Integrantes: Ramiro Lazzaro, Francisco Hernandez y Manuel Muñoz.

Es una aplicación en Angular que inicia sesión contra WSO2 con OpenID Connect (flujo de código de autorización con PKCE), usando la librería `angular-oauth2-oidc`. Sin sesión solo se ve el inicio; con sesión se pueden ver el perfil (datos del token de ID) y los personajes de [The Rick and Morty API](https://rickandmortyapi.com).

## WSO2 en Docker

La primera vez:

```bash
docker run -d --name wso2is -p 127.0.0.1:9443:9443 wso2/wso2is:7.3.0
```

Las siguientes veces (así no se pierde la configuración):

```bash
docker start wso2is
```

La consola queda en https://localhost:9443/console. El certificado es autofirmado, así que el navegador muestra un aviso que hay que aceptar una vez.

En la consola se registró una aplicación de tipo Single-Page Application con la URL de redirección `http://localhost:4200`, solo con el grant Code (sin Refresh Token). El Client ID está en `src/app/app.config.ts`.

## Cómo correrlo

```bash
npm install
ng serve
```

Después abrir http://localhost:4200
