import React from 'react';
import classNames from 'classnames';
import { Affix } from '@alifd/next';
import link from './link';

export default class BizAnchor extends React.Component {
  static displayName = 'BizAnchor';

  render() {
    const { children, className, component, ...others } = this.props;
    const cls = classNames({
      className: !!className,
      'biz-anchor-link': true
    });

    const Tag = component ? component : Affix;

    return (
      <Tag className="biz-anchor" {...others}>
        {children}
      </Tag>
    );
  }
}

export const Link = link;