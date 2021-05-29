# Food-game is now on k8s!

Welcome to FoodGame! This is a on-line game that challenge users with some delicious questions and is fully playable via REST api. It is made up by some different micro-services, each runs in a container solution.

Food game is able to:

- Generate a game resource and provide methods to access to it
- Manage user simple sign-in and log-in
- Allow users to play single-player and multi-player preserving data integrity
- Load new recipes data
- Game is fully playable via front-end

*To understand how each service works take a look to service specific documentation.*

---

### Project deployment description

The original project has been deployed on two different machines using new technology.

> Check the folder **K8s-project-conversion** to see converted micro-services.

There are two machines: **Iaas** and **paas**. 

**PAAS**

Here there is a Kind k8s multi-node-cluster.

The original project has been reconverted to run on k8s taking advantage of its components:

> Deployment, Services, Statefulsets, Config-maps, Secrets, Volumes (PV), Volumes claims (PVC) and much more were used. 

Databases -> Mongo instances are installed thanks to ***Helm*** in replication mode.



**How to deployments are started?**

Automation has been added, k8s multi-node cluster and all its micro-services can be provisioned from IAAS machine thanks to ***Ansible***



**IAAS**

This machine runs an OpenStack instance. This project uses iaas machine to run:

+ Private docker registry with TLS and authentication
+ Custom registry volume using OpenStack Cinder
+ Management Dashboard with k8s Api

**Docker registrty**

So Iaas machine runs a docker registry with a cloud volume. 

**Ansible** playbook has been configured to fire up all services in a fully automated way. 

> Check **Ansible-sources** folder to find useful scripts



### Quick start



+ TODO



###### Play a game

To simulate a multi-player game you can open two different browser sessions and log-in as different user.

----



##### General game-play rules

Single-player

+ User wins if the answer is correct for each match
+ Even a single wrong answer causes the game to be lost
+ 10 seconds to answer. Once answer is sent there is no turning back

Multi-player

+ User waits for max 15 second for an opponent to join the game
+ Each user has 10 seconds to send a correct answer for a match
+ If user sends a wrong answer he cannot send more answers for the same match
+ If user sends a wrong answer waits till the opponent does his guess
+ if both users fail a match, the game is lost
+ Winner is the user that has achieved more won matches
