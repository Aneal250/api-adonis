import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Octokit } from "@octokit/rest";
import * as dotenv from "dotenv";
dotenv.config();

const RepoController = async ({ response }: HttpContextContract) => {
  {
    try {
      const octokit = new Octokit({
        auth: "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",
      });

      const { data: repos } = await octokit.repos.listForAuthenticatedUser({
        visibility: "private",
      });

      const repoNames = repos.map((repo) => repo.name);

      return response
        .status(200)
        .json({ status: "success", private_repositories: repoNames });
    } catch (error) {
      console.error("Error fetching private repositories:", error);
      return response
        .status(500)
        .json({ error: "Failed to fetch private repositories" });
    }
  }
};

export default RepoController;
