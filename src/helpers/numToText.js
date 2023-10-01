function readClass(num) {
	let uNames = ["","bir","ikki","uch","to‘rt","besh","olti","yetti","sakkiz","to‘qqiz"]
	let dNames = ["","o‘n","yigirma","o‘ttiz","qirq","ellik","oltmish","yetmish","sakson","to‘qson"]
	let cNames = ["","bir yuz","ikki yuz","uch yuz","to‘rt yuz","besh yuz","olti yuz","yetti yuz","sakkiz yuz","to‘qqiz yuz"]
	let r = []
	let l = num.length
  let c, d, u
	
	if (1 == l) {
		c = 0
		d = 0
		u = num[0]
	}
	if (2 == l) {
		c = 0
		d = num[0]
		u = num[1]
	}
	if (3 == l) {
		c = num[0]
		d = num[1]
		u = num[2]
	}
	
	if (c != "0" && d == "0" && u != "0") {
		r[0] = cNames[+c]
		r[1] = dNames[+d]+""
		r[2] = uNames[+u]
	} else {
		r[0] = cNames[+c]
		r[1] = dNames[+d]
		r[2] = uNames[+u]
	}
	
	return r
}

function removeZeros(num){
	let l = num.length
	let r = num
	for (let i=0;i<l;i++){
		if (num[i] == "0") {
			r = num.slice(i+1)
		} else {
			break
		}
	}
	return r
}


function num2text(num){
	num = removeZeros(num)
	let l = num.length
  let b, m, t, o, r
	if (l < 1) {
		return "Siz kiritgan son faqat noldan iborat"
	}
	if (l < 4) {
		b = []
		m = []
		t = []
		o = readClass(num)
		
		r = o.join(" ")
	}
	if (l < 7 && 3 < l) {
		b = []
		m = []
		t = readClass(num.slice(0,-3))
		o = readClass(num.slice(-3))
		
		r = t.join(" ")+" ming "+o.join(" ")
	}
	if (l < 10 && 6 < l) {
		b = []
		m = readClass(num.slice(0,-6))
		t = readClass(num.slice(-6,-3))
		o = readClass(num.slice(-3))
		
		r = m.join(" ")+" million "+t.join(" ")+" ming "+o.join(" ")
	}
	if (l < 13 && 9 < l) {
		b = readClass(num.slice(0,-9))
		m = readClass(num.slice(-9,-6))
		t = readClass(num.slice(-6,-3))
		o = readClass(num.slice(-3))
		
		r = b.join(" ")+" milliard "+m.join(" ")+" million "+t.join(" ")+" ming "+o.join(" ")
	}
	if (12 < l) {
		return "Siz kiritgan son o'ta katta"
	}
	
	r = r.trim()
	r = r.replace(/\s+/g, " ")
	r = r.replace(/\s\-u/g, "-u")
	r = r.replace("bir yuz ming", "yuz ming")
	r = r.replace("bir yuz million", "yuz million")
	r = r.replace("bir yuz milliard", "yuz milliard")
	r = r.replace("million ming", "million")
	r = r.replace("milliard million", "milliard")
	
	if (r == "bir ming") {
		r = "ming"
	}
	if (r == "bir yuz") {
		r = "yuz"
	}
	return r
}

export function doConvert(string) {
	var output = num2text(string.toString())
	return output
}