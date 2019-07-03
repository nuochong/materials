import React from 'react';
import classNames from 'classnames';

export default class Link extends React.Component {
  static displayName = 'Link';

  render() {
    const { className, children, href, title, active, ...others } = this.props;

    const cls = classNames({
      className: !!className,
      'biz-anchor-link': true,
      'biz-anchor-link-active': active
    });

    return (
      <div className={cls} >
        <a className="biz-anchor-link-title" href={href}>{title}</a>
        {children}
      </div>
    );
  }
}
