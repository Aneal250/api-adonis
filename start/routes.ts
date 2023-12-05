import Route from "@ioc:Adonis/Core/Route";
import * as dotenv from "dotenv";
import RepoController from "App/Controllers/Http/ReposController";
dotenv.config();

Route.get("/", async () => {
  return { hello: "world" };
});

Route.get("/api/private-repos", RepoController);
