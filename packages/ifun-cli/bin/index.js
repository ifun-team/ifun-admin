#!/usr/bin/env node

import figlet from "figlet";
import clear from "clear";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import inquirer from "inquirer";

// 条件询问
const log = (content) => console.log(chalk.green(content));
// 选择项
const opt = {
  IFunUI模板: "ifun-ui-template",
  IFunAdmin模板: "ifun-admin",
  组件库脚手架: "ui-template",
  组件库文档脚手架: "docs-template",
  退出: "quit",
};
const question = [
  {
    type: "rawlist",
    message: "请选择要创建的项目",
    name: "operation",
    choices: Object.keys(opt),
  },
];

// 清屏
clear();

const logo = figlet.textSync("IFun-ui", {
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
});

const rainbow = chalkAnimation.rainbow(logo);

setTimeout(() => {
  rainbow.stop();

  // 处理任务
  query();
}, 500);

// 开始办正事
async function query() {
  const answer = await inquirer.prompt(question);

  if (answer.operation == "quit") {
    return;
  }
  const { default: op } = await import(
    `../lib/operations/${opt[answer.operation]}.js`
  );

  await op();
}
