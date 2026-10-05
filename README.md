# App Coleta

Aplicacao web desenvolvida com Laravel 10, Livewire 3 e Vite.

## Stack

- PHP 8.1+
- Laravel 10
- Livewire 3
- MySQL (ou outro banco suportado pelo Laravel)
- Node.js + npm
- Tailwind CSS + Vite

## Requisitos

Antes de iniciar, garanta que voce tem instalado:

- PHP 8.1 ou superior
- Composer
- Node.js 18+ e npm
- Banco de dados configurado localmente

## Instalacao

1. Clone o repositorio e acesse a pasta do projeto.
2. Instale as dependencias PHP:

```bash
composer install
```

3. Instale as dependencias front-end:

```bash
npm install
```

4. Copie o arquivo de ambiente:

```bash
cp .env.example .env
```

5. Gere a chave da aplicacao:

```bash
php artisan key:generate
```

6. Configure as variaveis do banco no arquivo `.env`.
7. Rode as migracoes e seeders (se necessario):

```bash
php artisan migrate --seed
```

## Executando localmente

Em terminais separados:

1. Suba o servidor Laravel:

```bash
php artisan serve
```

2. Suba o Vite em modo desenvolvimento:

```bash
npm run dev
```

## Scripts uteis

- Testes (Pest):

```bash
php artisan test
```

- Formatar codigo (Laravel Pint):

```bash
./vendor/bin/pint
```

- Build de assets para producao:

```bash
npm run build
```

## Estrutura principal

- `app/Models`: entidades da aplicacao (eventos, usuarios, preferencias, localizacao)
- `app/Livewire`: componentes e paginas reativas
- `app/Notifications`: notificacoes da aplicacao
- `database/migrations`: estrutura do banco de dados
- `routes/`: rotas web, api e autenticacao

## Testes

Os testes estao organizados em:

- `tests/Feature`
- `tests/Unit`
- `tests/Architecture`

Para executar toda a suite:

```bash
php artisan test
```

## Observacoes

- O projeto usa Husky (`npm run prepare`) para configurar hooks de git.
- Ajuste o `.env` conforme os servicos externos utilizados no seu ambiente (mail, fila, social login etc.).
