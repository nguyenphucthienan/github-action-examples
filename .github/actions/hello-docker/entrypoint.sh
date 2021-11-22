#!/bin/sh -l

echo "::debug ::This is a debug log"
echo "::warning ::This is a warning log"
echo "::error ::This is an error log"

echo "Hello $1"
time=$(date)
echo "::set-output name=time::$time"
