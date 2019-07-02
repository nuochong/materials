---
title: Simple Usage
order: 1
importStyle: true
---

本 Demo 演示一行文字的用法。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Anchor, {Link} from '@alifd/biz-anchor';

class App extends Component {
  render() {
    return (
      <Anchor offsetTop={60} style={{width: 200}}>
        <Link href="#components-guide" title="Guide" />
        <Link href="#components-example" title="Example" />
        <Link href="#API" title="API">
          <Link href="#api-type" title="usage of type" />
          <Link href="#api-size" title="usage of size" />
        </Link>
      </Anchor>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````