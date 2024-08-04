## Project setup
```
npm install
```

### Run
```
node server.js
```

### DATA BASE
```
CREATE TABLE `livre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) NOT NULL,
  `auteur` varchar(45) DEFAULT NULL,
  `langue` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `titre_UNIQUE` (`titre`)
) 
```