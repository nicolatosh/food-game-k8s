
IP=`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $USER-control-plane`
while true; do curl  http://$IP:30002/match?type=select_ingredients; sleep 1; done
