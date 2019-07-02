import React from 'react';
import { parseData } from '@alifd/adaptor-helper';

import MainComponent, { Link } from '../src';

export default {
  name: 'Anchor', // 组件名称
  editor: () => {
    return {
      props: [],
      data: {
        default: 'Basic demo\nStatic demo\nAPI\n\tusage of type\n\tusage of size'
      }
    };
  },
  adaptor: (props) => {
    const data = parseData(props.data);
    console.log(data)

    const children = data.map(item => {
      if (!item.children.length) {
        return <Link title={item.value} key={item.value} active={item.state === 'active'}/>
      } else {
        return <Link title={item.value} key={item.value} active={item.state === 'active'}>
          {item.children.map(child => {
            return <Link title={child.value} key={child.value} active={child.state === 'active'}/>
          })}
        </Link>
      }
    });

    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <MainComponent component="div" {...props} >{children}</MainComponent>
    );
  },
};
