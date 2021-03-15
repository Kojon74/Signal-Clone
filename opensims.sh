#!/bin/bash
declare -a simulators=("8BA9EFDA-9B01-4A23-ABF7-514B4D7B6BAA" "12717678-BF08-4515-936B-E88BA6701CF5")

for i in "${simulators[@]}"
do
    xcrun instruments -w $i
    xcrun simctl install $i ~/.expo/ios-simulator-app-cache/Exponent-2.18.4.tar.app
    xcrun simctl openurl $i exp://127.0.0.1:19000      
done