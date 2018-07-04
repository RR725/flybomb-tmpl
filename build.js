'use strict'
var child = require('child_process')
var filedel = require('filedel')

function build(type) {
  filedel('resources/push/dist/*').then(() => {
    console.log('删除旧的文件')
    console.log('构建中，请等待')

    var proc = child.exec('webpack --env.build', err => {
      if (err) {
        console.log(err)
      } else {
        console.log('构建成功\n')
      }
    })
    proc.stdout.on('data', s => {
      console.log(s.toString())
    })
    proc.stderr.on('data', s => {
      console.log(s.toString())
    })
  })
}
build('cn')
