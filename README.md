# Docker

## Comandos importantes

Para inicializar o container:

```
docker-compose up
```

Para manter o container rodando no background:

```
docker-compose up -d
```

Para visualizar logs:

```
docker logs rentx(nome do container) -f
```

Para parar o container:

```
docker-compose stop
```

Remover docker-compose container:

```
docker-compose down
```

### Container especifico

Para remover container: 

- Primeiro é preciso parar o container:

```
docker stop id-do-container
```

- Depois remover:

```
docker rm id-do-container
```

Para visualizar os containers:

``` 
docker ps
```

Ou...

```
docker ps -a
```

Para iniciar container epecifico:

```
docker start id-do-container
```

Acessar máquina:

```
docker exec -it id-do-container /bin/bash
```