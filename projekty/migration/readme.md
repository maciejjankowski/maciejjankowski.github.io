# Importer Klientów i zamówień IDOSELL -> PrestaShop

## Jak to działa

1. Importer pobiera listę klientów z **IDO** używając API
1. Każdy rekord klienta zapisywany jest do **Redisa** (podręcznej bazy danych)
1. Każdy rekord klienta jest zamieniany (mapowany) na format przyjmowany przez **Presta**
1. Rekord klienta wysyłany jest do **Presta** przez API
1. Jeśli zapis się uda:
   1. wysyłany jest mail o zmianie hasła
   1. tworzona jest relacja między id klienta: `id_ido <-> id_presta`, która używana jest później do aktualizacji zamówień i innych danych
1. Pobieranie zamówień klienta z **IDO**
1. Każdy rekord zamówienia zapisany jest do **Redisa**
1. Każdy rekord zamówienia jest zamieniany (mapowany) na format przyjmowany przez **Presta**

## Wymagania

<!-- - Python 3.9
- Redis Stack 7+ -->

- Docker
- Docker Compose

## Instalacja

<!-- - uruchomienie `pip install -r requirements.txt` -->

1. dodanie konfiguracji w `secrets.py`:

   ```
   IDOSELL_API_KEY="{KEY}"
   PRESTA_API_KEY="{KEY}"

   IDOSELL_API_URL="{URL}"
   PRESTA_API_URL="{URL}"
   ```

1. uruchomienie polecenia: `docker-compose up`

## Inne

Polecenie `tac` odwraca kolejność wierszy w pliku

```chartmage.com
presta_client_create_failed
presta_client_password_change_failed
[OP]_[TYPE]_[ID]_retry_count

((idosell_client_get_all)) ->> idosell_client_get
idosell_client_get ->> presta_client_create
presta_client_create->>send_reset_password_email
presta_client_create->>idosell_get_orders
idosell_get_orders ->> presta_order_create
```