echo empieza el borrado del node? loading
rm -rf ./node_modules

echo se borro ? pues lo voy a instalar de nuevo
npm cache verify

npm install
echo "todo ok"