---
title: Introducción
description: Introducción a la documentación de integración con vNext switch de la cámara de la gente.
sidebar:
  order: 1
---

## Modelo de Integración

El Switch de la Cámara de la Gente expone un servidor gRPC —no una API REST— con el cual se integra el core bancario. La comunicación es **bidireccional y persistente** mediante un stream autenticado:

```
Cliente (core bancario) ←—→ Servidor (switch)
```

Esto significa que el cliente inicia la conexión, se autentica, y a partir de ese momento ambos lados pueden enviarse mensajes en cualquier momento.

## El cliente

La Cámara proporciona un cliente para los principales lenguajes de programación: una **clase** que abstrae y simplifica tanto la conexión con el servidor como el manejo de todas las peticiones, eliminando la necesidad de implementar la comunicación gRPC directamente.

El cliente se compone de dos partes:

### Peticiones que hace el cliente

Son operaciones que el core bancario inicia hacia el Switch: consultas, transferencias, etc. Cada operación tiene un método correspondiente en la clase cliente que se puede invocar directamente.

### Peticiones que el Switch le hace al cliente

El Switch también puede enviar mensajes al cliente y esperar una respuesta. Para manejarlas, la clase cliente expone métodos `set` por cada tipo de petición. Cada uno de estos métodos recibe una función (callback) que será invocada cuando el Switch realice esa petición.

```
// Ejemplo conceptual
cliente.setAcceptTransferRequest((peticion) => {
  // lógica del core bancario
  return respuesta;
});
```

## Características Técnicas

- **Protocolo:** gRPC sobre TLS para comunicación segura.
- **Autenticación:** mediante certificados proporcionados por la Cámara.
- **Comunicación:** bidireccional y persistente a través de un stream autenticado.
- **Asincronía:** el Switch puede enviar mensajes al cliente en cualquier momento.