#!/bin/bash

# Maharaja Tent
mv "src/assets/Maha raja" "src/assets/maharaja-tent"
count=1
for file in src/assets/maharaja-tent/*; do
  ext="${file##*.}"
  new_name=$(printf "src/assets/maharaja-tent/maharaja-tent-%02d.$ext" "$count")
  mv "$file" "$new_name"
  echo "Renamed $file to $new_name"
  ((count++))
done

# Swiss Luxury Tent
mv "src/assets/Swiss Luxury Tent" "src/assets/swiss-luxury-tent"
count=1
for file in src/assets/swiss-luxury-tent/*; do
  ext="${file##*.}"
  new_name=$(printf "src/assets/swiss-luxury-tent/swiss-luxury-tent-%02d.$ext" "$count")
  mv "$file" "$new_name"
  echo "Renamed $file to $new_name"
  ((count++))
done

# Three Conical Tent
mv "src/assets/Three - Conical Tent" "src/assets/three-conical-tent"
count=1
for file in src/assets/three-conical-tent/*; do
  ext="${file##*.}"
  new_name=$(printf "src/assets/three-conical-tent/three-conical-tent-%02d.$ext" "$count")
  mv "$file" "$new_name"
  echo "Renamed $file to $new_name"
  ((count++))
done
