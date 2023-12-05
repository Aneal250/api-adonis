import Route from "@ioc:Adonis/Core/Route";
import * as dotenv from "dotenv";
import RepoController from "App/Controllers/Http/ReposController";
dotenv.config();

Route.get("/", async () => {
  return {
    Aneal:
      "viist this to url see the list of my private repository /api/private-repos",
  };
});

Route.get("/api/private-repos", RepoController);
