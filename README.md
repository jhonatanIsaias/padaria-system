<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Descrição
  - **Padaria System** é um projeto web colaborativo que estudantes de sistemas de informação se juntaram para desenvolver um guia automático de receitas.  

  - Usamos o framework [NestJs](https://github.com/nestjs/nest).


## Configuração do projeto

```bash
$ yarn install
```

## Compilar e executar o projeto

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Instale o Prisma e o cliente do PostgreSQL

```bash
cd padaria-system
yarn add prisma @prisma/client
yarn add -D ts-node
yarn add @nestjs/config
```
## Inicialize o Prisma

```bash
npx prisma init
```

## DER Padaria-System

<img style="display: block;-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://cdn.discordapp.com/attachments/1137518658072088730/1363963370654535906/supabase-schema-twvenlmslebmdwtefbag_1.png?ex=6807f160&amp;is=68069fe0&amp;hm=bf3b9b4b5fada5f705158bf16941f5ef39fc973eeee0c9c3f3622e3d2fbc3bab&amp;" width="1122" height="597">

## Implantação

Quando estiver pronto para implantar seu aplicativo NestJS em produção, há algumas etapas importantes que você pode seguir para garantir que ele seja executado da forma mais eficiente possível. 

```bash
$ yarn install -g @nestjs/mau
$ mau deploy
```

Com o Mau, você pode implantar seu aplicativo em apenas alguns cliques, permitindo que você se concentre na criação de recursos em vez de gerenciar a infraestrutura.

## Recursos

- Visite a [Documentação NestJs](https://docs.nestjs.com) para aprender mais sobre o framework.

## Suporte

O Nest é um projeto de código aberto licenciado pelo MIT. Ele pode crescer graças aos patrocinadores e ao apoio de patrocinadores incríveis. 

