#!/usr/bin/env bash

if [ -z ${JAWSDB_MARIA_URL+x} ]; then echo "DATABASE URL NOT FOUND"; else export DATABASE_URL=$JAWSDB_MARIA_URL; echo "DATABASE URL SET"; fi

if [ -z ${WP_HOME+x} ]; then echo "WP_HOME not found"; else export WP_SITEURL="$WP_HOME/wp"; echo "WP_SITEURL SET"; fi