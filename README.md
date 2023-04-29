<div align="center">
  <img src="https://nestjs.com/img/logo_text.svg" width="500" alt="nestjs Logo" />
</div>

<h1 align="center" style="font-weight: bold; font-size: 2.5rem">App Restaurant</h1>

<p align="center">
  App Restaurant is an online food ordering mobile application. With this application, users can place food orders from the comfort of their home and receive home delivery. It also has a support chat.
</p>

## **Requirements** 📋
Before you get started, make sure you meet the following requirements:
```bash
Node.js
Yarn or Npm
```

## **Installation** 🔧
1. Clone the repository
```bash
git clone https://github.com/YactayoC/AppRestaurant-nestjs.git
```

2. Enter the project folder
```bash
cd app-restaurant
```

3. Install the dependencies
```bash
yarn install
```


## **Project structure** 🧐
In progress...

## **Configuration** ⚙️
Set your environment variables, guided by the ```.env.template```.
```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/name-db
```

## **Deployment** 🚀
To deploy the project, execute the following command:
```bash
yarn start:dev
```
Being that it will run on port 3000, but if you want to change it, you can do it in the ```.env``` file or by modifying the ```main.ts``` file for example:
```ts
await app.listen(process.env.PORT || 3000);
```

## **Built with** 🛠️
- [NestJS](https://nestjs.com/) - The framework used
- [MongoDB](https://www.mongodb.com/) - The database used
- [Yarn](https://yarnpkg.com/) - Dependency handler
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Docker](https://www.docker.com/) - Application container for deployment

## **Author** ✒️
- [YactayoC](https://github.com/YactayoC)
