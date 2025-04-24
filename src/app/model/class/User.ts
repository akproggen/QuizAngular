export class User {
    id: number; // bigint unsigned, AUTO_INCREMENT
    username: string; // varchar(50), NOT NULL, UNIQUE
    name: string; // varchar(100), NOT NULL
    email: string; // varchar(255), NOT NULL, UNIQUE
    createdAt?: Date; // timestamp, NULL, DEFAULT CURRENT_TIMESTAMP
    updatedAt?: Date | null; // timestamp, NULL, DEFAULT NULL
    pwdHash?: string; // varchar(255), NULL
    salt?: string; // varchar(50), NULL
    pwd?: string; // varchar(255), NULL
  
    constructor(
      id: number,
      username: string,
      name: string,
      email: string,
      createdAt?: Date,
      updatedAt?: Date | null,
      pwdHash?: string,
      salt?: string,
      pwd?: string
    ) {
      this.id = id;
      this.username = username;
      this.name = name;
      this.email = email;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.pwdHash = pwdHash;
      this.salt = salt;
      this.pwd = pwd;
    }
  }