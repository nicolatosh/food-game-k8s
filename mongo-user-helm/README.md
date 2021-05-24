This database is the one used for users. It should be installed with HELM
using the file configuration that is in this folder.

Helm sintax: 
	
	helm install users-db --values <yaml config file> bitnami/mongodb

Few notes:

 + Be sure to have bitnami repo added and uploaded!
 + Check config file! you will see that service port is 27027
