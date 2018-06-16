function dowithURL(msg){
	return msg.replace(/\+/g,"%25").replace(/\ /g,"%23").replace(/\//g,"%26").replace(/\?/g,"%26").replace(/\%/g,"%26").replace(/\#/g,"%26").replace(/\&/g,"%26").replace(/\=/g,"%26");
}
/*
 * 
 * 在URL传递参数中，有一些特殊字符，而这些些符号在URL中是不能直接传递的，如果要在URL中传递这些特殊符号，那么就要使用他们的编码了。
下表中列出了一些URL特殊符号及编码十六进制值 
1. + URL 中+号表示空格 %2B 
2. 空格 URL中的空格可以用+号或者编码 %20 
3. / 分隔目录和子目录 %2F 
4. ? 分隔实际的 URL 和参数 %3F 
5. % 指定特殊字符 %25 
6. # 表示书签 %23 
7. & URL 中指定的参数间的分隔符 %26 
8. = URL 中指定参数的值 %3D

解决的方法：
replace() 方法如果直接用str.replace("-","!") 只会替换第一个匹配的字符.
而str.replace(/\-/g,"!")则可以替换掉全部匹配的字符(g为全局标志)。
 */