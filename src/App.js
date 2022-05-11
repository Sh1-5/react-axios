import React, { PureComponent } from 'react'

import request from './service/request'

export default class App extends PureComponent {
  async componentDidMount() {
    const res = await request({
      url: '/login',
      method: 'post',
      data: {
        name: 'coderwhy',
        password: '123456'
      }
    })
    console.log(res)
  }
  render() {
    return <div>App</div>
  }
}
