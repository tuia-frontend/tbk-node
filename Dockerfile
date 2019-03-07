# 设置基础镜像,如果本地没有该镜像，会从Docker.io服务器pull镜像
FROM node

# 创建容器工作目录,保存我们的代码
RUN mkdir -p /srv/www/taobao

# 复制所有文件到容器工作目录。
# COPY . /srv/www/taobao

# 设置工作目录
WORKDIR /srv/www/taobao

# 编译运行node项目，使用npm安装程序的所有依赖,利用taobao的npm安装
# RUN npm install --registry=https://registry.npm.taobao.org

# 暴露container的端口
EXPOSE 8889

# 运行命令
ENTRYPOINT node server.js

# Stop container
# docker stop containerId

# Remove container
# docker rm containerId

# Remove image
# docker rmi imageId

# Build image
# -t 镜像名称
# docker build -t taobao .

# Run docker
# -d 后台运行
# --name 重命名
# -p 端口映射
# docker run -d -v /srv/taobao.nextdog.cc:/srv/www/taobao --name nodewebsite -p 8889:8889 taobao

# Start docker
# docekr start containerId
