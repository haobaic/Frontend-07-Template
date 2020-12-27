function kmp(source, pattern) {
	//计算跳转表格
	let table = new Array(pattern.length).fill(0);
	
	{
		let i = 1,
			j = 0;
		while (i < pattern.length) {
			if (pattern[i] === pattern[j]) { //匹配上了
				++j, ++i;
				table[i] = j;
			} else {
				if (j > 0)
					j = table[j];
				else
					++i;
			}
		}
	}
	//abcdabce
	//匹配
	{
		let i = 0,
			j = 0;
		while(i<source.length){
			
			if(pattern[j]===source[i]){
				++j, ++i;
			}else{
				if (j > 0)
					j = table[j];
				else
					++i;
			}
			if(j===pattern.length)
				return true;
		}
		return false;
	}
}
console.log(kmp("Helslo", "Helslo"))
