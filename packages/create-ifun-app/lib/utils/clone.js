import { promisify } from "util";
import download from "download-git-repo";
import ora from "ora";

// 下载 git资源
export default async (repo, desc) => {
  const process = ora(`下载....${repo}`);

  process.start();

  await promisify(download)(repo, desc);

  process.succeed();
};
