# 后端设计

框架：Flask
数据库：mysql

### 数据库设计
成员表

|字段|说明|
|---|---|
|id|索引|
|姓名|str|
|专业|str|
|介绍|str|
|身份|int 分为项目发布者 1，项目工作者 2|
---
项目表

|字段|说明|
|---|---|
|id|索引|
|项目名称||
|项目周期||
|项目营收||
|项目说明||



---
项目进度表

|字段|说明|
|---|---|
|项目id||
|项目进度|0：未开始 1：人员分配 2：项目开始 3：项目结束 4： 结算结束|

---
工作表

|字段|说明|
|---|---|
|id|索引|
|员工id||
|项目id||
|工资||
