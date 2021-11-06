#!/bin/sh

echo '{output:"' >output
ip a >> output
ip link >> output
cat /proc/cpuinfo >> output
free >> output
echo -n '"}' >> output

cat output
