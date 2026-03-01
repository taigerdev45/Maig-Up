# Cahier des Charges Techniques - Mise en Production (v6.0)

## 1. Contexte et Objectifs
Le projet **Study Abroad Navigator** (MAIGUP) est une plateforme web destinée à faciliter l'accompagnement des étudiants souhaitant étudier à l'étranger.

**Objectif** : Transformer le prototype frontend en application de production robuste.

**Stack Hybride** :
- **Frontend** : React (Vite)
- **Backend** : Laravel (PHP)
- **BaaS** : Supabase (Auth, DB, Storage, Realtime)

## 2. État Actuel (Analyse de l'existant)
### 2.1 Stack Technique Frontend
- **Framework** : React 18 avec Vite
- **Langage** : TypeScript
- **Style** : Tailwind CSS + Shadcn UI (Radix UI)
- **Navigation** : React Router DOM
- **État & Cache** : TanStack Query (React Query)
- **Formulaires** : React Hook Form + Zod
- **Icônes** : Lucide React

### 2.2 Limites Actuelles
- Données statiques (mocks).
- Pas de backend ni de base de données réelle.
- Authentification simulée.

## 3. Architecture Cible
### 3.1 Schéma d'Architecture Globale
**Modèle Client-Server hybride BaaS + Serverless-like**

- **Monorepo** : `frontend/` (React) + `backend/` (Laravel).
- **Déploiement** : Vercel (Frontend) + Render (Backend).
- **Flux** : Utilisateur → Frontend → API Laravel → Supabase.

```mermaid
graph TD
A[Utilisateur<br>Navigateur] -->|HTTPS| B[Vercel CDN<br>Frontend React/Vite/TS]
B -->|API Requests + JWT| C[Render<br>Backend Laravel 12 API]
C -->|Supabase PHP Client| D[Supabase<br>PostgreSQL + Auth + Storage + Realtime]
D -->|Realtime Broadcast| B
C -->|Queues / Webhooks futur| E[Stripe<br>Paiements]
E -->|Webhook| C
subgraph "Monorepo GitHub"
F[frontend/] --> B
G[backend/] --> C
H[.github/workflows CI/CD] --> B & C
end
style A fill:#f9f,stroke:#333
style D fill:#3ecf8e,stroke:#333,color:#000
style E fill:#635bff,stroke:#333
```

### 3.2 Stack Backend Détaillée
- **Framework Principal** : Laravel 12 (ou 11 pour stabilité).
- **Intégration Supabase** : Package `saeedvir/supabase` (ou `supabase/supabase-php` pour un client bas niveau).
- **Authentification** : Déléguée à Supabase (JWT avec Row Level Security - RLS).
- **ORM/DB** : Client Supabase pour les interactions DB, avec Eloquent en fallback pour des requêtes complexes si nécessaire.
- **Autres Composants** : Laravel Sanctum pour sessions API si besoin, mais prioriser Supabase pour l'auth. Intégrer `laravel/cashier-stripe` pour future intégration Stripe.

**Avantages de cette Stack** :
- **Rapidité de développement** : Supabase gère auth, RLS et realtime sans code custom.
- **Puissance Laravel** : Pour validation, queues, scheduling, et logique métier (ex: workflows de dossiers, intégration paiements).
- **Scalabilité** : PostgreSQL + Supabase scaling automatique, queues pour charges asynchrones.

### 3.3 Architecture Monorepo
Pour simplifier la gestion du code, des dépendances et des déploiements, l'ensemble du projet sera structuré en **monorepo** (un seul dépôt Git contenant frontend et backend).

**Structure du Monorepo** :
- **Racine du repo** : Fichiers communs comme `.gitignore`, `README.md`, `docker-compose.yml` (pour dev local), et workflows CI/CD (`.github/workflows`).
- **Dossiers principaux** :
    - `/frontend` : Contient le code React/Vite (package.json, src/, public/, vite.config.ts).
    - `/backend` : Contient le code Laravel (composer.json, app/, routes/, config/, artisan).
    - `/shared` (optionnel) : Types ou utils partagés.
- **Gestion des Dépendances** : Utiliser **npm workspaces** ou **Yarn workspaces**.
- **Environnements Locaux** : Utiliser Docker pour uniformiser (ex: container PHP pour backend, Node pour frontend, Supabase local via Docker).
- **Branches** : `main` pour prod, `develop` pour staging, features branches pour dev.

**Avantages du Monorepo** :
- Déploiements atomiques.
- Tests croisés (end-to-end).
- Moins de overhead (un seul repo).

### 3.4 Recommandations Supplémentaires
- **Choix Technologiques** : Prioriser Supabase pour minimiser le temps de développement (gain de 20-30% vs full custom). Utiliser Laravel pour toute logique métier complexe (ex: algorithmes de matching).
- **Performances** : Implémenter caching avec Laravel Cache/Redis pour stats dashboard. Utiliser indexes DB pour requêtes fréquentes.
- **Sécurité et Conformité** : Audit OWASP initial. Enregistrer la plateforme auprès de l'APDPVP au Gabon. Ajouter MFA pour admins.
- **Scalabilité Future** : Préparer pour >1000 utilisateurs. Intégrer Stripe tôt pour tests en staging.
- **Développement** : Adopter un monorepo pour facilité CI/CD. Utiliser Docker.
- **Meilleures Pratiques** : Suivre SOLID principles en Laravel. Tester unitaires/end-to-end avec PHPUnit et Cypress. i18n ready (fr/en).
- **Coûts Estimés (2026)** : Supabase Pro ~25$/mois, Vercel Pro ~20$/mois, Render ~15$/mois. Total initial <60$/mois pour <500 users.
