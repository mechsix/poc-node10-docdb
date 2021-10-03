# Overview

Proof of concept to run DocumentDB connection from Node10

# Build

### Build Docker Image

```
docker build -t docker-repo/image-name:tag .
```


### Push to docker hub or resgistry you perfered

```
docker login
docker push docker-repo/image-name:tag
```


# Run as Docker Container

Copy `env.example` to something like `env.dev` and fill the variables for mongodb connection in it

And get the output from STDOUT


```
docker run docker-repo/image-name:tag \
--env-from env.dev

```


# Run as Helm 3 Chart

Edit `chart/values.yaml` and fill the variables

```
cd chart
helm install release-1-poc-node10-mongo .
```

And get the output from kubectl logs

```
kubectl logs <podName>
```
