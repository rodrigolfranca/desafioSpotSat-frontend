# desafioSpotSat-frontend


## how to run

Rode os seguintes comandos na raiz:

    docker build -t spotsatwebfront .

    docker run --name spotsatwebfrontcontainer -p 4000:4000 --network spotsatweb -d spotsatwebfront


PS: Estou considerando que você ja criou a rede Docker 'spotsatweb'