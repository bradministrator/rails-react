# README

This is a bare bones Rails 6.1 starter app with a Postgresql database and React installed for the front end

* Ruby version
  2.6.5

* Ensure [Postgresql](https://www.postgresql.org/) is installed and the service/daemon is running

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

  rvm is not necessary, but this is for my personal use ;-)

  - Set the folowing environment variables (found in config/database.yml)
  - Alternatatively use a tool like [direnv](https://direnv.net/) to manage environment variables

  ### Database:
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
  
## Does it work?
  ```bash
    bundle exec rails server
  ```
  http://localhost:3000
