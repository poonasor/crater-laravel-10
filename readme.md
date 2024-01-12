<img src="https://res.cloudinary.com/bytefury/image/upload/v1574149856/Crater/craterframe.png">

## Introduction

Based off of the original Crater Invoice App but upgraded to Laravel 10.

This repo by-passes the installation with Laravels migrations.

Running `npm run dev` and `php artisan serve` in separate terminal windows you can rebuild the project on the fly.

[View Original repo here](https://github.com/crater-invoice/crater)

## Documentation

- [Original Documentation](https://docs.craterapp.com/)
- [Original API Documentation](https://api-docs.craterapp.com)

### Installation

**Clone Repo**
Create a folder and clone Git Repo:
```
git clone https://github.com/poonasor/crater-laravel-10 .
```

**Update and Install Packages**
```
composer update
composer install
```
```
npm update
npm install
```
**Create database_created file**
Create a new file under `/storage/app/` named `database_created` with any text, save the file.

**Update .env file**
Update the .env file (if no .env copy from .env.example) with the following
(Use your own DB details)
```
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=8889
DB_DATABASE=crater
DB_USERNAME=root
DB_PASSWORD="root"

SANCTUM_STATEFUL_DOMAINS=localhost:8000
SESSION_DOMAIN=localhost
```

**Run commands**
```
php artisan migrate && php artisan db:seed
php  artisan db:seed —Class=DemoSeeder
```
Video Guide: https://www.youtube.com/watch?v=waheY7LHBdc
Video Guide (Production): https://www.youtube.com/watch?v=i_-iOpvN3tI

**Run the local environments**
```
npm run dev
or
npm run build

php artisan serve
```

## Discord

Join the Crater discord server to discuss:
[Invite Link](https://discord.gg/nyTstm6)

## Copyright

© 2022 Crater Invoice, Inc.
© 2024 perpetual media ltd.

## License

Crater is released under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3.
See [LICENSE](LICENSE) for details.
