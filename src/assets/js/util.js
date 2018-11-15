/**
 * 参考网址：https://segmentfault.com/a/1190000013438501  
 */
//获取当前的时间yyyy-MM-dd HH:mm:ss 没有满10就补0
export const obtainDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minu = date.getMinutes();
    let second = date.getSeconds();
    //判断是否满10
    let arr = [month, day, hours, minu, second];

    arr = arr.map(item => {
        return item < 10 ? "0" + item : item;
    })

    let fullTime = year + '-' + arr[0] + '-' + arr[1] + ' ' + arr[2] + ':' + arr[3] + ':' + arr[4];
    return fullTime;
}

//无绑定的导入导出
//日期格式化
Date.prototype.format = function () {
    var s = '';
    var month = (this.getMonth() + 1) >= 10 ? (this.getMonth() + 1) : ('0' + (this.getMonth() + 1));
    var day = this.getDate() >= 10 ? this.getDate() : ('0' + this.getDate());
    s += this.getFullYear() + '-'; // 获取年份。  
    s += month + "-"; // 获取月份。  
    s += day; // 获取日。  
    return (s); // 返回日期。  
};

//得到当前日期的前N天日期  curDate：当前日期  n间隔天数  getPrevDate与getNextDate也可以合并为一个  为用着方便暂时不合并
export const getPrevDate = (curDate, n) => {
    let strT = (new Date(curDate)).getTime();
    let d1s = strT + n * 1000 * 60 * 60 * 24;
    let d1 = (new Date(d1s)).format();
    return d1;
}

//得到当前日期的后N天日期
export const getNextDate = (curDate, n) => {
    let strT = (new Date(curDate)).getTime();
    let d1s = strT - n * 1000 * 60 * 60 * 24;
    let d1 = (new Date(d1s)).format();
    return d1;
}

//获取字符串的字符长度  分中英文
export const getStrLength = (str) => {
    let len = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
            len += 2;
        } else {
            len++;
        }
    }
    return len;
}

//字符串转千分符
export const comdify = (n) => {
    var re = /\d{1,3}(?=(\d{3})+$)/g;
    n.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
        s1.replace(re, function () {
            console.log()
        })
    })
}

//去全部空格
String.prototype.AllTrim = function () {
    return this.replace(/\s+/g, '');
}
//去收尾空格
String.prototype.lrTrim = function () {
    return this.replace(/^\s+|\s+$/g, '');
}

//以key value的形式得到url中的参数
export const queryURLParameter = (url) => {
    var reg = /([^?=&#]+)=([^?=&#]+)/g,
        obj = {};
    url.replace(reg, function () {
        obj[arguments[1]] = arguments[2];
    });

    //->HASH
    reg = /#([^?=&#]+)/g;
    url.replace(reg, function () {
        obj['HASH'] = arguments[1];
    });
    return obj;
}

//检测是否是数组
export const judgeArr = (arr) => {
    if (Array.isArray(arr)) return true;
}
//set数组去重  arr是一个数组
export const changeReArr = (arr) => {
    return [...new Set(arr)];
}

//纯数组排序
export const orderArr = (arr) => {
    arr.sort((a, b) => {
        return a - b; //将arr升序排列,如果是倒序return -(a-b)
    })
    return arr;
}
//数组对象排序
export const orderArrObj = (arr, pro) => {
    arr.sort((a, b) => {
        let value1 = a[pro];
        let value2 = b[pro];
        if (!isNaN(Number(value1)) && !isNaN(Number(value2))) {
            return Number(value1) - Number(value2);//sort方法接收一个函数作为参数，这里嵌套一层函数用
            //来接收对象属性名，其他部分代码与正常使用sort方法相同
        }
    })
    return arr;
}

//情况一:全部满足
export const allTrueArr = (arrs) => {
    return arr.every((arr) => {
        return arr > 20;//如果数组的每一项都满足则返回true,如果有一项不满足返回false,终止遍历
    })
}

//情况二:有一个满足
export const OneTrueArr = (arrs) => {
    return arr.some((arr) => {
        return arr > 20;//如果数组有一项满足则返回true,终止遍历,每一项都不满足则返回false
    })
}


//对象的方法
//对象遍历
export const traverseObj = (obj) => {
    for (let variable in obj) {
        //For…in遍历对象包括所有继承的属性,所以如果
        //只是想使用对象本身的属性需要做一个判断
        if (obj.hasOwnProperty(variable)) {
            console.log(variable, obj[variable])
        }
    }
}
//在已知数组中删除某个数组中的值  大数组中删除小数组
export const array_diff = (a, b, fitStr) => {
    for (var i = 0; i < b.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (fitStr) {//要删除的是对象类型
                if (a[j][fitStr] == b[i][fitStr]) {
                    a.splice(j, 1);
                    j = j - 1;
                }
            } else {
                if (a[j] == b[i]) {
                    a.splice(j, 1);
                    j = j - 1;
                }
            }
        }
    }
    return a;
}

/** 
 * 函数防抖   多少秒后无继续操作才会执行
 */
export const debounce = (fn, delay) => {
    let timeout = null;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn();
        }, delay)
    }
}
/**
 * 函数节流  连续动作内每间隔多少时间执行一次
 */
export const throttle = (fn, delay) => {
    let canRun = true;
    return function () {
        if (!canRun) return;   // 判断是否已空闲，如果在执行中，则直接return
        canRun = false;
        setTimeout(() => {
            fn();
            canRun = true;
        }, delay)
    }
}

/**
   * a 在此数组中删除
   * b 要删除的数据
   * fitStr 按照对象的某属性删除  例如id
   */
export const array_diff = (a, b, fitStr) => {
    if (!a || !b) return a;
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (fitStr) {//要删除的是对象类型
                if (a[j][fitStr] == b[i][fitStr]) {
                    a.splice(j, 1);
                    j = j - 1;
                }
            } else {
                if (a[j] == b[i]) {
                    a.splice(j, 1);
                    j = j - 1;
                }
            }
        }
    }
    return a;
}
/**
 * 间隔多久刷新一次
 * @param {Funtion} methods  要执行的方法 
 * @param {String} times  多少秒刷新一次
 */
export const refresh = (methods, times) => {
    let time = () => {
        setTimeout(() => {
            methods();
            time();
        }, times);
    };
    time();
}
/* JS在TextArea光标位置插入文字 */
export const insertText = (obj, str, innet) => {
    if (document.selection) {
        let sel = document.selection.createRange();
        sel.text = str;
    } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
        let startPos = obj.selectionStart,
            endPos = obj.selectionEnd,
            cursorPos = startPos,
            tmpStr = obj.value;
        obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
        cursorPos += str.length;
        if (innet) {
            obj.selectionStart = obj.selectionEnd = cursorPos - 1;
        } else {
            obj.selectionStart = obj.selectionEnd = cursorPos;
        }
    } else {
        obj.value += str;
    }
    obj.focus();
}
