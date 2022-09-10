import clone from "../utils/clone.js";
import inquirer from "inquirer";
import chalk from "chalk";
import compile from "../utils/compile.js";

const log = (...args) => console.log(chalk.green(...args));

export default async () => {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      message: "输入项目名称",
      name: "name",
    },
  ]);

  log("创建项目..." + name);

  // 从仓库克隆项目
  await clone("github:ifun-team/ifun-ui-template", name);

  compile(
    {
      name,
    },
    `./${name}/package.json`,
    `./${name}template/package.hbs.json`
  );

  log(`
    安装完成!
    To get Start 
    ====================
    cd ${name}
    npm i
    npm run dev
    ====================
    enjoy!!!
    `);
};
