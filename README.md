npm run test:unit
```

---

## Kubernetes & CKAD Training

Dieses Projekt eignet sich ideal für CKAD-Übungen und lokale Kubernetes-Tests.

### Voraussetzungen
- [Minikube](https://minikube.sigs.k8s.io/docs/) oder Kind/K3s als lokaler Kubernetes-Cluster
- Docker muss installiert und lauffähig sein

### Typische CKAD-Übungen mit DataLens
1. Deployment und Service für das Backend erstellen
2. MongoDB als Deployment und Service einrichten
3. Umgebungsvariablen für die Datenbank-URL setzen
4. Liveness/Readiness-Probes für das Backend konfigurieren
5. Ressourcenlimits für Pods setzen
6. PersistentVolume und PersistentVolumeClaim für MongoDB nutzen
7. Rolling Updates und Scaling testen

### Beispiel: Minikube starten
```sh
minikube start
```

### Anwendung deployen
1. Kubernetes-YAMLs im Projekt anlegen (z.B. im Ordner `k8s/`)
2. Mit kubectl deployen:
  ```sh
  kubectl apply -f k8s/
  ```
3. Status prüfen:
  ```sh
  kubectl get pods
  kubectl get svc
  ```

### Hinweise
- Die Docker-Container aus docker-compose sind **nicht** automatisch in Kubernetes sichtbar.
- Das Backend-Image muss ggf. in Minikube geladen werden:
  ```sh
  minikube image load datalens-backend
  ```
- Die YAMLs können frei angepasst und für CKAD-Aufgaben genutzt werden.

---
# 🟢 DataLens - Kubernetes KPI Dashboard

**DataLens** ist ein kleines KPI-Dashboard-Projekt, das speziell für praxisnahe Übungen im Rahmen der **CKAD Zertifizierung** entwickelt wurde.  
Das Projekt verbindet ein **Vue.js Frontend**, ein **Backend API**, eine **Datenbank** und Kubernetes-Ressourcen wie Deployments, CronJobs, HPA, ConfigMaps und Secrets.  

---

## 📌 Projektübersicht

- **Frontend**: Vue.js 3 + [Naive UI](https://www.naiveui.com/)  
  - Zeigt KPIs in Kartenform an
  - Holt Daten per REST API vom Backend
  - Einfach zu erweitern (Filter, Trends, Detailansicht)

- **Backend**: Node.js / Flask (REST API)  
  - Liefert Dummy-KPI-Daten
  - Unterstützt mehrere Replikas mit Load-Balancing

- **Datenbank**: Postgres  
  - Speichert KPI-Werte
  - Geschützt durch Kubernetes Secrets

- **CronJob**:  
  - Generiert regelmäßig Dummy-KPI-Daten

- **Kubernetes Ressourcen**:  
  - Namespace, Deployments, Services, ConfigMaps, Secrets  
  - Horizontal Pod Autoscaler (HPA)  
  - NetworkPolicies  
  - Ingress (Frontend & API)  

---

## 🚀 Quickstart (Frontend)

1. Node.js und npm installieren
