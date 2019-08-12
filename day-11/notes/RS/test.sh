mkdir rs1 rs2 rs3
mongod --replSet R1 --logpath "1.log" --dbpath rs1 --port 27017 &
mongod --replSet R1 --logpath "2.log" --dbpath rs1 --port 27018 &
mongod --replSet R1 --logpath "3.log" --dbpath rs1 --port 27019 &