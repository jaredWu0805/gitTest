#!/bin/bash

read -p "Please input a number, system will create n files.." num

for (( i = 1; i <= ${num}; i++))
do
	touch "$i.js";
done
echo "${num} files created";
