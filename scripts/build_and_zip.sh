if [ -d build ]
then
  rm -rf build
fi

npm run build && zip index.zip index.js
