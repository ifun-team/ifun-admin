import fs from "fs";
import handlebars from "handlebars";
import chalk from "chalk";

/**
 * 文件自定义数据
 */
export default (meta, filepath, templatepath) => {
  if (fs.existsSync(templatepath)) {
    const content = fs.readFileSync(templatepath).toString();
    const result = handlebars.compile(content)(meta);

    fs.writeFileSync(filepath, result);

    console.log(chalk.green(`${filepath}修改成功`));
  } else {
    console.log(chalk.red(`${filepath}修改失败`));
  }
};
