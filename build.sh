#!/usr/bin/env bash

`grep -e "/PATH/TO/ANT-CONTRIB.JAR" build.xml 2>&1 1>/dev/null`
if [ $? -eq 0 ]; then
  printf "You need to set the path to ant-contrib.jar in build.xml\nChange '/PATH/TO/ANT-CONTRIB.JAR' to match your system path to ant-contrib.jar\n"
  exit 1
fi

if [ ! -d "vendor" ]; then
  mkdir vendor
fi

# Install or update the git dependencies.
LIBRARIES=(google/closure-linter gflags/python-gflags google/closure-library google/closure-compiler googlei18n/libphonenumber)
for LIBRARY in "${LIBRARIES[@]}"
do
  SPLIT=(${LIBRARY//\// })
  ORGANIZATION=${SPLIT[0]}
  PROJECT=${SPLIT[1]}
  if [ ! -d "vendor/$PROJECT" ]; then
    git clone https://github.com/$ORGANIZATION/$PROJECT vendor/$PROJECT
  else
    cd vendor/$PROJECT
    git pull
    cd ../..
  fi
done

# Build closure-compiler
ant -f vendor/closure-compiler/build.xml

# Build libphonenumber
ant -f build.xml compile