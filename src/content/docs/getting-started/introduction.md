---
title: Introducción
description: Introducción a la documentación de integración con vNext switch de la cámara de la gente.
---

## Modelo de Integración

El Switch de la Cámara de la Gente expone un servidor gRPC con el cual se integra el core bancario mediante un cliente. La Cámara proporciona clientes listos para usar en los principales lenguajes de programación, por lo que no es necesario implementarlos desde cero.

La comunicación entre el core bancario y el Switch es **bidireccional y persistente** mediante un stream:

```
Cliente (core bancario) ←—→ Servidor (switch)
```

**Importante:** este modelo no es REST. No existe el concepto de "request aislado". Todas las operaciones ocurren dentro del contexto de una conexión autenticada y persistente.

## Conceptos Basicos

### Comunicación mediante Stream

En lugar de realizar llamadas independientes, el cliente establece un stream persistente con el Switch que permanece abierto durante toda la sesión. Esto significa que:

- El cliente inicia el stream al conectarse y se autentica.
- El cliente puede enviar mensajes al Switch en cualquier momento.
- El Switch puede enviar mensajes al cliente asincrónicamente.
- Ambos lados deben estar preparados para recibir mensajes en cualquier momento.

### Modelo evento-respuesta

La comunicación sigue un patrón donde el Switch puede requerir respuestas del cliente en múltiples pasos. Por ejemplo, en una transferencia:

1. El cliente inicia una transferencia.
2. El Switch procesa y puede solicitar confirmaciones adicionales.
3. El cliente responde a esos mensajes.
4. La operación se completa tras múltiples intercambios.

Por ello, **una operación puede completarse en varios pasos**, no en una única llamada.

## Características Técnicas

- **Protocolo:** gRPC sobre TLS para comunicación segura.
- **Autenticación:** mediante certificados proporcionados por la Cámara.
- **Persistencia:** la conexión se mantiene abierta mediante un stream autenticado.
- **Asincronía:** el cliente debe procesar mensajes del servidor en cualquier momento.

## Lo que necesitas saber

Los clientes ya están implementados, por lo que tu equipo debe:

1. Usar el cliente proporcionado para tu lenguaje de programación.
2. Mantener el stream activo y escuchando mensajes del servidor.
3. Responder a los mensajes que el Switch envíe, especialmente aquellos que requieran confirmación.