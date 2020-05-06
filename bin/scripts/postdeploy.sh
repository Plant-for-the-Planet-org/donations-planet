#!/usr/bin/env bash

if [ -z ${JAWSDB_MARIA_URL+x} ]; then echo "DATABASE URL NOT FOUND"; else export DATABASE_URL=$JAWSDB_MARIA_URL; echo "DATABASE URL SET"; fi