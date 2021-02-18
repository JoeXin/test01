# 使用最新的长期维护版本node作为基础镜像
FROM node:lts

# 将当期目录下的文件拷贝到linux系统的app文件夹下
COPY . /app/

# 使用app文件夹作为工作目录
WORKDIR /app

# 设置npm的镜像为淘宝镜像，安装依赖
RUN npm config set registry https://registry.npm.taobao.org && npm install

# 运行build命令 
RUN npm run build

# 暴露docker容器的80端口
EXPOSE 80

# 运行docker脚本命令
CMD [ "npm", "run", "docker" ]