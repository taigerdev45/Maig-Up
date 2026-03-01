# Backend - Laravel 12

This directory contains the Laravel backend for Maig-Up.

## Tech Stack
- **Framework**: Laravel 12 (or 11)
- **Database/Auth**: Supabase (via `saeedvir/supabase` or `supabase/supabase-php`)
- **Deployment**: Render

## Setup Instructions

1.  **Requirements**: PHP >= 8.2, Composer.
2.  **Initialization**:
    ```bash
    composer create-project laravel/laravel:^12.0 .
    ```
3.  **Configuration**:
    - Copy `.env.example` to `.env`.
    - Configure Supabase credentials (`SUPABASE_URL`, `SUPABASE_KEY`).

## API Flow
The backend acts as a secure middleware between the React Frontend and Supabase:
- Validates input (Zod/Laravel Validation).
- Handles complex logic (Business rules).
- Interacts with Supabase for data persistence.
