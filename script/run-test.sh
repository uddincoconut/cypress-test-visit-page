#!/bin/bash
echo "Hi there, this is it"
for i in {1..2}
do
    npm run cy:run:$i
done