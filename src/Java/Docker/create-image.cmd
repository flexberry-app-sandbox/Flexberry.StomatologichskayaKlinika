docker build --no-cache -f SQL\Dockerfile.PostgreSql -t stomatologichskaya_klinika-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t stomatologichskaya_klinika-java/app ../../..
