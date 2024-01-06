# Feedback Tool

This project is intended for interview round at IKONIC Solutions. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

 1. What things you need to install the software and how to install them

```
PHP 8.1
Node >= 18.18.0
Composer 2.x
```

2. Copy `.env.example` to `.env` and fill it with your Database credentials

### Installing

Follow these instructions to get a development env running

- Install the packages

```
composer install
npm install
```

- Execute the Migrations

```
php artisan migrate
```

- Seed the Database (if you want to test with dummy data)

```
php artisan db:seed
```

- Compile the frontend assets

```
npm run dev
```

- Start the Laravel development serve

```
php artisan serve
```

Visit the php server to access the application

### Comment Markdowns

You can use following markdowns in comments under feedbacks

```
**bold**

*italic*

`code`

[link](https://google.com)

```

This will output

**bold**

*italic*

`code`

[link](https://google.com)

## Built With

* [Laravel](https://laravel.com/docs/10.x) - Web Framework
* [React](https://react.dev/reference/react) - UI Library

## Acknowledgments

* React Headless UI
* React Markdown
* Tailwind CSS
* InertiaJS
* Laravel Breeze
