#!/bin/bash

read -p "Please input a GitHub username: " username

i = 1
if [ true ]; then
curl "http://api.github.com/users/$USER/"

else
	echo "Couldn't find the username"
fi
