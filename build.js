'use strict';
var child = require('child_process');
var fs = require('fs');
var filedel = require('filedel');
var reg = /(<)(version)(>)([\w.]+)(-RC)([0-9]+)(<\/\2>)/;

function modifyPom() {
	fs.readFile('pom.xml', 'utf8', function opened(err, fd) {
		var version = fd.match(reg);
		version = version.slice(1, 8);
		var num = version[5];
		num = Number(num) + 1;
		num = String(num).length < 2 ? '0' + num : num;
		version[5] = num;
		version = version.join('');
		fd = fd.replace(reg, version);
		fs.writeFile('pom.xml', fd, function (err) {
			if (err) throw err;
			console.log('成功修改push项目pom.xml版本号为：' + version);

		});
		fs.writeFile('../../pom.xml', fd, function (err) {
			if (err) throw err;
			console.log('成功修改根目录pom.xml版本号为：' + version);
		});
	});
}



function modify() {


	fs.readFile('resources/push/dist/vender.js', 'utf8', function opened(err, fd) {
		var version = '"http://push-res"+(window.location.host=="push.meizu.com"?"":".in")+".mzres.com/"';

		fd = fd.replace('"http://push-res.in.mzres.com/"', version);
		fs.writeFile('resources/push/dist/vender.js', fd, function (err) {
			if (err) throw err;
			console.log('兼容国际化，根据hosts不同配置不同的CDN域名');

		});

	});




}
function build(type) {
	filedel('resources/push/dist/*').then(function () {
		console.log('删除旧的文件');
		console.log(type === 'cn' ? '构建国内版...，请等待' : '构建国际版...，请等待');

		var query = type === 'cn' ? '' : ' --config webpack.config-in.js';
		var proc = child.exec('webpack' + query, function (err) {
			if (err) {
				console.log(err);
			} else {
				if (type === 'in') {
					console.log('国际版构建成功\n');
					modify();//修改vender里写死的cdn域名，根据当前host取值
					modifyPom();//修改pom.xml里的版本号，在原来的基础上加1
				}

				if (type === 'cn') {

					console.log('国内版构建成功\n');
					build('in');
				}
			}


		});
		proc.stdout.on('data', function (s) {
			console.log(s.toString());
		});
		proc.stderr.on('data', function (s) {
			console.log(s.toString());
		});
	});

}
build('cn');
