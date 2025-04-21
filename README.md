# Graphql_turorial

## 📌 Overview
This project is a **GraphQL API** built with **Node.js** and **Express.js**, using **GraphQL-HTTP** for handling GraphQL queries. The API connects to multiple databases, including **MSSQL**, **MySQL**, and **PostgreSQL**.

## 🏗 Project Structure EN
```
NODE-GRAPHQL/
│
├── config/                      # ⚙️ Database connection configurations
│
├── graphql/                     # 🌐 GraphQL schema and resolvers
│   ├── resolvers/               # 💡 Resolver functions (Query / Mutation logic)
│   │
│   ├── typeDefs/                # 🧱 GraphQL schema definitions (SDL)
│   │
│   ├── index_resolvers.js       # Merge all resolvers using lodash.merge
│   ├── index_typedefs.js        # Merge all typeDefs using `@graphql-tools/merge`
│   └── schema.js                # Create executable schema (typeDefs + resolvers)
│
├── middleware/                  # 🛡️ Custom middleware functions
│
├── models/                      # 🗃️ Sequelize models
│
├── routes/                      # 🚏 Express route definitions
│   └── graphql.js               # Setup for GraphQL API endpoint
│
├── .dockerignore                # Ignore files/folders for Docker builds
├── .env                         # Environment variables (not committed)
├── .gitignore                   # Ignore unnecessary files from Git
├── docker-compose.yml           # Docker Compose setup
├── Dockerfile                   # Docker image build instructions
├── index.js                     # 🏁 Entry point to start the Node.js server
├── package.json                 # Project metadata, scripts & dependencies
├── package-lock.json            # Exact dependency versions for reproducibility
└── README.md                    # 📘 Project documentation
```
## 🏗 Project Structure TH
```
NODE-GRAPHQL/
│
├── config/                      # ⚙️ ไฟล์เชื่อมต่อฐานข้อมูล (Database Connections)
│
├── graphql/                     # 🌐 โฟลเดอร์หลักของ GraphQL API
│   ├── resolvers/               # 💡 กลุ่มฟังก์ชัน Resolver (Query, Mutation)
│   │
│   ├── typeDefs/                # 🧱 โครงสร้าง Schema แบบแยกไฟล์ (SDL - Schema Definition Language)
│   │
│   ├── index_resolvers.js       # รวมทุก resolver ด้วย `lodash.merge`
│   ├── index_typedefs.js        # รวมทุก typeDef ด้วย `@graphql-tools/merge`
│   └── schema.js                # สร้าง GraphQL Executable Schema ด้วย `makeExecutableSchema`
│
├── middleware/                  # 🛡️ Middleware สำหรับควบคุมการเข้าถึงและการใช้งาน
│
├── models/                      # 🗃️ Sequelize Models (สำหรับ ORM)
│
├── routes/                      # 🚏 Routing สำหรับ API (Express)
│   └── graphql.js               # เส้นทางหลักสำหรับ GraphQL Endpoint
│
├── Dockerfile                   # 🔧 คำสั่งสร้าง Docker Image สำหรับโปรเจกต์
├── docker-compose.yml           # 🐳 รวบรวม Service ต่าง ๆ ใน Docker
├── .env                         # 🔐 เก็บ Environment Variables (เช่น DB Credentials)
├── index.js                     # 🏁 จุดเริ่มต้นของแอป (Server Entry Point)
├── package.json                 # ข้อมูลและ dependency ของโปรเจกต์
└── README.md                    # 📘 เอกสารประกอบโปรเจกต์
```