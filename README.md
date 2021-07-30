# README

This is a bare bones Rails 6.1 starter app with a Postgresql database and React installed for the front end

* Ruby version
  2.6.5

* System dependencies
  [rvm](https://rvm.io/)
  [direnv](https://direnv.net/)


* Configuration
  ### Managing ruby versions:
  using rvm, ensure ruby 2.6.5 is installed
  ```bash
    rvm install ruby-2.6.5
  ```
  create the gemset listed in .ruby-version
  ```bash
    rvm gemset create et
  ```

  - Create a .envrc in the root of the project and set the following environment variables

  ##Database:
  ```bash
    DEV_DB_DATABASE_HANDLE=
    DEV_DB_USERNAME=
    DEV_DB_PASSWORD=
    DEV_DB_HOST=
    DEV_DB_PORT=
  ```

* Database creation
  ```bash
    bundle exec rails db:create
  ```