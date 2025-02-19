# 🚀 Aplicación Web con Kubernetes

Este proyecto es una aplicación web con autenticación de usuarios y operaciones CRUD desplegada en **Docker** y orquestada con **Kubernetes**.

## 📌 Características
- Autenticación de usuarios (Login).
- CRUD de usuarios: Registro, edición y eliminación.
- Backend en **Node.js + Express + PostgreSQL**.
- Frontend en **React con Vite**.
- Base de datos en **PostgreSQL** con almacenamiento persistente.
- Despliegue en **Docker** y orquestación con **Kubernetes**.

---

## 🛠️ Tecnologías utilizadas
- **Backend:** Node.js + Express + Sequelize  
- **Frontend:** React con Vite  
- **Base de Datos:** PostgreSQL  
- **Orquestación:** Kubernetes  
- **Contenedores:** Docker  
- **Almacenamiento Persistente:** PersistentVolumeClaim (PVC)  

---

## 📂 Estructura del Proyecto
```
/proyecto
  /backend
    - server.js
    - Dockerfile
    - ...
  /frontend
    - src/
    - Dockerfile
    - ...
  /kubernetes
    - backend-deployment.yaml
    - frontend-deployment.yaml
    - database-deployment.yaml
    - postgres-pvc.yaml
  - docker-compose.yml
  - README.md
```

---

## 🏗️ Despliegue en Kubernetes

### 1️⃣ Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd aplicacion-web
```

### 2️⃣ Construir y subir las imágenes de Docker
Ejecutar los siguientes comandos dentro de las carpetas `backend` y `frontend`:
```bash
docker build -t usuario/backend:latest backend/
docker build -t usuario/frontend:latest frontend/
```
Luego, subir las imágenes a **Docker Hub**:
```bash
docker push usuario/backend:latest
docker push usuario/frontend:latest
```
> Nota: Reemplazar `usuario` con el nombre de usuario de Docker Hub.

---

### 3️⃣ Aplicar los archivos YAML en Kubernetes
Desde la carpeta `kubernetes`, ejecutar:
```bash
kubectl apply -f database-deployment.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
```

### 4️⃣ Verificar que los pods estén corriendo
```bash
kubectl get pods
```
Si todos los pods están en estado **Running**, el despliegue fue exitoso. 🎉

### 5️⃣ Acceder a la aplicación
Ejecutar:
```bash
kubectl get services
```
Tomar la **EXTERNAL-IP** del frontend y abrirla en el navegador.

---

## 📝 Pruebas de la API

### Registro de usuario
```bash
curl -X POST http://backend-service:5000/api/users/register \
     -H "Content-Type: application/json" \
     -d '{"name":"Usuario","email":"usuario@email.com","password":"123456"}'
```

### Login de usuario
```bash
curl -X POST http://backend-service:5000/api/users/login \
     -H "Content-Type: application/json" \
     -d '{"email":"usuario@email.com","password":"123456"}'
```

---

## 🛠️ Errores Comunes y Soluciones

### 1️⃣ **Error: `ImagePullBackOff` en Kubernetes**
**Solución:** Asegurarse de haber subido las imágenes a Docker Hub correctamente y actualizar el pod:
```bash
docker push usuario/backend:latest
docker push usuario/frontend:latest
kubectl delete pod frontend-xxxx
kubectl apply -f frontend-deployment.yaml
```

### 2️⃣ **Error: No se puede acceder al frontend**
**Solución:** Ejecutar:
```bash
kubectl get services
```
Si el **EXTERNAL-IP** aparece como `<pending>`, esperar unos minutos hasta que se asigne una IP pública.

---


🚀 **Con esto, la aplicación ya está desplegada en Kubernetes.**

