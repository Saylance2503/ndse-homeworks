1. docker pull node:15.14

15.14: Pulling from library/node
bfde2ec33fbc: Pull complete
787f5e2f1047: Pull complete
7b6173a10eb8: Pull complete
dc05be471d51: Pull complete
55fab5cadd3c: Pull complete
bd821d20ef8c: Pull complete
6041b69671c6: Pull complete
989c5d2d2313: Pull complete
4b57d41e8391: Pull complete
Digest: sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
Status: Downloaded newer image for node:15.14
docker.io/library/node:15.14

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview node:15.14

2. docker run -d --name first_node -v ${PWD}/data:/var/first/data node:15.14

7a80427dddea657ed79010b3eaf029bcd66e9f970efd330e7c45d4b3beb2bce0

3. docker run -d --name second_node -v ${PWD}/data:/var/second/data node:15.14

44d7cb02cd5211217d89e4a8531c8e4a7651e31f13ecdec61fa3dd4d4136b131

4. docker exec -it first_node touch /var/first/data/myfile.txt

Error response from daemon: Container 7a80427dddea657ed79010b3eaf029bcd66e9f970efd330e7c45d4b3beb2bce0 is not running

docker ps -f name=first_node
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

docker start first_node
first_node

2. docker run -d --name first_node -v /d/JS/netology/ndse-homeworks/009-docker/data:/var/first/data node:15.14 tail -f /dev/null

5df15f72f45aeedafc90ee3138f1d55da4bce9c350bba175ed9980c00717f1dd

Запустил бесконечный процесс, так как контейнеры сразу завершались

3. docker run -d --name second_node -v /d/JS/netology/ndse-homeworks/009-docker/data:/var/second/data node:15.14 tail -f /dev/null

1214da0c1128ac5e393e2e565b055303b2c8c1d4fe46b2fd20959f66c789d1a2

4. docker exec -it first_node touch /var/first/data/myfile.txt

создался файл myfile.txt

5. echo "Hello, Docker!" > data/anotherfile.txt

создался файл в data anotherfile.txt

6. docker exec -it second_node ls /var/second/data
anotherfile.txt  myfile.txt

docker exec -it second_node cat /var/second/data/myfile.txt

docker exec -it second_node cat /var/second/data/anotherfile.txt
��Hello, Docker!

7. docker stop first_node, second_node

first_node
second_node

8. docker rm first_node, second_node

first_node
second_node

9. docker rmi node:15.14

Untagged: node:15.14
Untagged: node@sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
Deleted: sha256:3d3f41722daf1a77c34d6eade6676bbffa2d6a2a21095de2ab0c427a5c942fc9
Deleted: sha256:601382991a159cfc5013ad973158f30b7b7a913e8d7e547b3456deab3ad98022
Deleted: sha256:d5db49eecae8c02c9ea3a79f89c43ded9162bac118a0302a7b514d0df82aa112
Deleted: sha256:a2c1973858d0aad3de0927294602b17c8ef9050c30e0f461e0868997a08552a4
Deleted: sha256:a0153172017a08a521a8be971ca4dcb5fbc4b7227642c12bbb2da6265bd66b50
Deleted: sha256:f1123940e954d335d91b52a40fab4f8144f38ff113ade7d65663071d0f06da6f
Deleted: sha256:f1f4fbb0e7e6e0ce2d9eae1e577f9f6df0a719dd874bff00b2d08895c75c297d
Deleted: sha256:1eb455ab6d45fdbbd90fccff791ffa228080c052acf464f8da1b1d78650bd706
Deleted: sha256:1dbe832a694971a925d7d216f49b700c95f402bd72288f9d37eceb1d59dcf72d
Deleted: sha256:2f4ee6a2e1b5dfb9236cd262e788f9d39109242ca27a4aacb583c8af66ec3ff7
