/*
 * @Author: ecofe
 * @Date: 2018-06-29 15:54:55
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-08-06 16:21:07
 */
'use strict'
import React from 'react'
import Toolbar from './toolbar'
import actions from './actions'
import libActions from '../../lib/actions'

import restapi from '../../lib/url-model'
import utils from '../../lib/utils'

import { is } from 'immutable'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextStates) {
    if (
      is(nextProps.home.get('data'), this.props.home.get('data')) &&
      is(nextProps.home.get('loading'), this.props.home.get('loading')) &&
      is(nextProps.header.get('loginInfo'), this.props.header.get('loginInfo'))
    ) {
      return false
    }
    return true
  }
  getDevices() {
    // 判断浏览器是否支持这些 API
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log('enumerateDevices() not supported.')
      return
    }

    // 枚举 cameras and microphones.
    navigator.mediaDevices
      .enumerateDevices()
      .then(deviceInfos => {
        // 打印出每一个设备的信息
        deviceInfos.forEach(function(deviceInfo) {
          console.log(deviceInfo.kind + ': ' + deviceInfo.label + ' id = ' + deviceInfo.deviceId)
        })
        this.initVideo()
      })
      .catch(function(err) {
        console.log(err.name + ': ' + err.message)
      })
  }
  initVideo() {
    const constraints = {
      video: {
        frameRate: { min: 20 },
        width: { min: 640, ideal: 1280 },
        height: { min: 360, ideal: 720 },
        aspectRatio: 16 / 9
      },
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      }
    }

    const localVideo = document.querySelector('video')

    function gotLocalMediaStream(mediaStream) {
      // localVideo.srcObject = mediaStream
    }

    function handleLocalMediaStreamError(error) {
      console.log('navigator.getUserMedia error: ', error)
    }

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(gotLocalMediaStream)
      .catch(handleLocalMediaStreamError)
  }
  componentDidMount() {
    this.getDevices()
  }
  render() {
    return (
      <div>
        <video autoPlay playsInline />
      </div>
    )
  }
}
export default withRouter(
  connect(
    state => state,
    Object.assign(actions, libActions)
  )(HomeIndex)
)
