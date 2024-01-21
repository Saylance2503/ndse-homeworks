1. docker pull busybox:latest

latest: Pulling from library/busybox
9ad63333ebc9: Pull complete
Digest: sha256:6d9ac9237a84afe1516540f40a0fafdc86859b2141954b4d643af7066d598b74
Status: Downloaded newer image for busybox:latest
docker.io/library/busybox:latest

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview busybox:latest

2. docker run --name pinger busybox ping -c 7 netology.ru

PING netology.ru (188.114.98.224): 56 data bytes
64 bytes from 188.114.98.224: seq=0 ttl=63 time=19.293 ms
64 bytes from 188.114.98.224: seq=1 ttl=63 time=21.118 ms
64 bytes from 188.114.98.224: seq=2 ttl=63 time=22.932 ms
64 bytes from 188.114.98.224: seq=3 ttl=63 time=21.756 ms
64 bytes from 188.114.98.224: seq=4 ttl=63 time=18.823 ms
64 bytes from 188.114.98.224: seq=5 ttl=63 time=22.232 ms
64 bytes from 188.114.98.224: seq=6 ttl=63 time=29.153 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 18.823/22.186/29.153 ms

3. docker ps -a

CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS                          PORTS     NAMES 
d3c19524ecef   busybox   "ping -c 7 netology.…"   About a minute ago   Exited (0) About a minute ago             pinger

4. docker logs pinger

PING netology.ru (188.114.98.224): 56 data bytes
64 bytes from 188.114.98.224: seq=0 ttl=63 time=19.293 ms
64 bytes from 188.114.98.224: seq=1 ttl=63 time=21.118 ms
64 bytes from 188.114.98.224: seq=2 ttl=63 time=22.932 ms
64 bytes from 188.114.98.224: seq=3 ttl=63 time=21.756 ms
64 bytes from 188.114.98.224: seq=4 ttl=63 time=18.823 ms
64 bytes from 188.114.98.224: seq=5 ttl=63 time=22.232 ms
64 bytes from 188.114.98.224: seq=6 ttl=63 time=29.153 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 18.823/22.186/29.153 ms

5. docker start pinger

pinger

6. docker ps -a

CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                      PORTS     NAMES
d3c19524ecef   busybox   "ping -c 7 netology.…"   3 minutes ago   Exited (0) 34 seconds ago             pinger

7. docker logs pinger

PING netology.ru (188.114.98.224): 56 data bytes
64 bytes from 188.114.98.224: seq=0 ttl=63 time=19.293 ms
64 bytes from 188.114.98.224: seq=1 ttl=63 time=21.118 ms
64 bytes from 188.114.98.224: seq=2 ttl=63 time=22.932 ms
64 bytes from 188.114.98.224: seq=3 ttl=63 time=21.756 ms
64 bytes from 188.114.98.224: seq=4 ttl=63 time=18.823 ms
64 bytes from 188.114.98.224: seq=5 ttl=63 time=22.232 ms
64 bytes from 188.114.98.224: seq=6 ttl=63 time=29.153 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 18.823/22.186/29.153 ms
PING netology.ru (188.114.98.224): 56 data bytes
64 bytes from 188.114.98.224: seq=0 ttl=63 time=19.967 ms
64 bytes from 188.114.98.224: seq=1 ttl=63 time=18.696 ms
64 bytes from 188.114.98.224: seq=2 ttl=63 time=18.642 ms
64 bytes from 188.114.98.224: seq=3 ttl=63 time=18.756 ms
64 bytes from 188.114.98.224: seq=4 ttl=63 time=19.304 ms
64 bytes from 188.114.98.224: seq=5 ttl=63 time=19.208 ms
64 bytes from 188.114.98.224: seq=6 ttl=63 time=18.656 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 18.642/19.032/19.967 ms

8. docker logs pinger | Select-String "ping" | Measure-Object -Line | Select-Object -ExpandProperty Lines

4

docker logs pinger | Select-String "64 bytes" | Measure-Object -Line | Select-Object -ExpandProperty Lines

14

9. docker rm pinger

pinger

10. docker rmi busybox:latest

Untagged: busybox:latest
Untagged: busybox@sha256:6d9ac9237a84afe1516540f40a0fafdc86859b2141954b4d643af7066d598b74
Deleted: sha256:3f57d9401f8d42f986df300f0c69192fc41da28ccc8d797829467780db3dd741
Deleted: sha256:2e112031b4b923a873c8b3d685d48037e4d5ccd967b658743d93a6e56c3064b9
