#!/bin/bash
# Program:
#       Launch Minecraft With Currect Dir Setting
# History:
# 2016/10/13	VBird	First release

javaArgs=""
minecraftPath=""
jar=""
dir=""

# 將除了 路徑 之外的所有參數放入 javaArgs
while test $# -gt 1
do
    javaArgs="$javaArgs$1 "
    shift
done
#echo javaArgs:[$javaArgs]

# 設定路徑
minecraftPath=$1
jar=${minecraftPath##*/}    # 取出 minecraftPath 中 "/" 之後的 最小 字串
dir=${minecraftPath%/*}     # 取出 minecraftPath 中 "/" 之前的 最大 字串

#echo minecraftPath:[$minecraftPath]
#echo jar:[$jar]
#echo dir:[$dir]

cd ${dir}
java ${javaArgs}${jar}
