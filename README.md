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
