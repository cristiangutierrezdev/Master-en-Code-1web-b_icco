# Middleware de autenticación básica

### Objetivo:
 Implementar un middleware que verifique si el usuario está autenticado antes de permitir el acceso a ciertas rutas.
### Pasos:
-Crea una aplicación básica con Express.
-Define un middleware que verifique si una clave de autenticación ``(req.query.user)`` está presente y es válida.
-Si la clave es válida, permite el acceso a la ruta; de lo contrario, responde con un mensaje de error y un código de estado 401 (no autorizado).
 Aplica este middleware a rutas protegidas como ```/profile```
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
