build
```bash
docker build . -t ctnelson1997/cs571-s24-bonus-api
docker push ctnelson1997/cs571-s24-bonus-api
```

run
```bash
docker pull ctnelson1997/cs571-s24-bonus-api
docker run --name=cs571_s24_bonus_api -d --restart=always -p 58822:38822 -v /cs571/s24/bonus:/cs571 ctnelson1997/cs571-s24-bonus-api
```

run fa
```bash
docker pull ctnelson1997/cs571-s24-bonus-api
docker run --name=cs571_fa_s24_bonus_api -d --restart=always -p 59822:38822 -v /cs571_fa/s24/bonus:/cs571 ctnelson1997/cs571-s24-bonus-api
```