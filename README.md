# desafioSpotSat-frontend


## how to run

Rode os seguintes comandos na raiz:

    docker build -t spotsatwebfront .

    docker run --name spotsatwebfrontcontainer -p 4000:4000 --network spotsatweb -d spotsatwebfront


PS: Estou considerando que você ja criou a rede Docker 'spotsatweb'

## Tela de Login

![image](https://user-images.githubusercontent.com/90811254/231460303-3daf8e20-1324-4f06-8e7f-2027864a1148.png)

usuário padrão

    email: admin@admin.com
    senha: 123456
    
## Mapa

![image](https://user-images.githubusercontent.com/90811254/231460583-87c6df88-612b-481d-bd1a-2ac980d959d3.png)

No mapa vão constar todos os poligonos e pontos que estiverem no banco de dados
