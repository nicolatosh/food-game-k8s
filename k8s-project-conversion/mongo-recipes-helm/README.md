This database is the one used for recipes. It should be installed with HELM
using the file configuration that is in this folder.

Helm sintax: 
	
	helm install recipes-db --values <yaml config file> bitnami/mongodb

Few notes:

 + Be sure to have bitnami repo added and uploaded!
 + Check config file! you will see that no service port is specified (using default 27017)
