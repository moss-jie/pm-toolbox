// ============================================================
// hello.js — 你的第一个 Node.js 脚本
// ============================================================

// 【语法解释】
// const = 声明一个"常量"（不会变的变量）
// require = 加载一个模块（别人写好的功能，像"导入插件"）
//   ↑ PM 类比：就像在 Figma 里加载一个插件，然后就能用它的功能

// dayjs 是我们第一个通过 npm 安装的第三方包
// 它专门处理日期时间，比原生写法简洁 10 倍
// PM 类比：就像从 Figma 社区下载的日期组件，不用自己画了
const dayjs = require('dayjs');

// fs 是 Node.js 内置的"文件系统"模块
// 用它来读、写、创建文件
const fs = require('fs');

// path 是处理文件路径的模块
// 比如拼接路径、获取文件名
const path = require('path');

// ============================================================
// 第一部分：打印点东西（最基础的交互）
// ============================================================

console.log('🚀 默默的第一个程序跑起来了！');
console.log('========================================');

// 获取当前时间 — 用 dayjs 一行搞定，不需要自己拼年份月份了
const now = dayjs();
// 【语法解释】
// .format('模板') = 按照你指定的格式输出日期时间
//   YYYY = 四位年份   MM = 两位月份   DD = 两位日期
//   HH = 小时   mm = 分钟   ss = 秒
console.log(`📅 今天是：${now.format('YYYY年MM月DD日')}`);
console.log(`⏰ 时间是：${now.format('HH:mm:ss')}`);

// ============================================================
// 第二部分：和用户交互（让你的脚本能"问问题"）
// ============================================================

// process 是 Node.js 的内置对象，代表"当前正在运行的程序"
// process.argv 是"命令行参数数组"
//   比如你输入：node hello.js 默默 996
//   process.argv = ['node路径', 'hello.js路径', '默默', '996']

const args = process.argv.slice(2); // 去掉前两个（node路径和脚本路径），只要用户输入的

if (args.length > 0) {
  console.log('========================================');
  console.log(`👋 你好呀，${args[0]}！`);
  console.log('   你传给脚本的参数是：', args.join(', '));
}

// ============================================================
// 第三部分：读写文件（脚本的真正价值——自动处理数据）
// ============================================================

// 创建一个"每日工作日志"文件夹
const logDir = path.join(__dirname, '..', 'logs');
// __dirname = 当前这个 js 文件所在的目录（src/）
// '..' = 上一级目录（pm-toolbox/）
// path.join = 把几段路径拼起来（自动处理 / 和 \ 的差异）
//   结果：pm-toolbox/logs/

if (!fs.existsSync(logDir)) {
  // 如果 logs/ 目录不存在，就创建它
  fs.mkdirSync(logDir);
  console.log('========================================');
  console.log('📁 创建了日志目录：logs/');
}

// 生成日期字符串 — 之前要写 3 行，现在 dayjs 一行搞定
const dateStr = now.format('YYYY-MM-DD');
const logFileName = `pm-log-${dateStr}.md`;
const logFilePath = path.join(logDir, logFileName);

const logContent = `# 📋 每日工作日志 — ${dateStr}

> 由默默的第一个脚本自动生成 🎉

## ✅ 今日完成
- [ ] 
- [ ] 

## 🧠 技术收获
- 

## 🔜 明天计划
- 

---
*生成时间：${now.format('HH:mm:ss')}*
`;

fs.writeFileSync(logFilePath, logContent, 'utf-8');
// utf-8 = 编码格式，确保中文不乱码

console.log('========================================');
console.log(`📝 已生成日志文件：${logFileName}`);
console.log(`   位置：${logFilePath}`);

// ============================================================
// 第四部分：总结
// ============================================================

console.log('========================================');
console.log('✅ 脚本执行完毕！你刚刚体验了：');
console.log('   1. console.log      → 在终端打印信息');
console.log('   2. process.argv     → 接收命令行参数');
console.log('   3. fs.existsSync    → 检查文件/目录是否存在');
console.log('   4. fs.mkdirSync     → 创建目录');
console.log('   5. fs.writeFileSync → 写入文件');
console.log('   6. npm install      → 安装第三方包');
console.log('   7. require dayjs   → 使用第三方包');
console.log('========================================');
console.log('💡 在你的终端里再跑一次：');
console.log('   node src/hello.js 默默');
console.log('   — 看看用 dayjs 后代码是不是干净多了！');
