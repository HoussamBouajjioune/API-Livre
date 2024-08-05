### Api de Livre

## 📋 <a name="table">Sommaire</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🤸 [Quick Start](#quick-start)
4. 🤸 [API REST Exportées](#api-rest-exportées)



## <a name="introduction">Introduction</a>

- Next.js
- Three.js
- Framer Motion
- Tailwind CSS

## <a name="tech-stack">Tech Stack</a>

- Next.js
- Three.js
- Framer Motion
- Tailwind CSS


| Methode | URLs | Action |
| --- | --- | --- |
| git status | List | List |
| git status | List | List |
| git status | List | List |
| git status | List | List |
| git status | List | List |

## <a name="quick-start"> Quick Start</a>

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