import React from 'react'
import { css } from 'react-emotion'

const breadcrumb = css`
  background-color: #ddd;
  padding: 20px 60px 20px 60px;

  ol {
    max-width: 960px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 19px;

    li {
      display: inline-block;
    }

    li:not(:last-child)::after {
      content: '>';
      padding: 0 10px;
      color: #444;
    }
  }
`

export default class Breadcrumbs extends React.Component {
  constructor() {
    super()
    // Bind the method to the component context
    this.renderChildren = this.renderChildren.bind(this)
    this.getTextNode = this.getTextNode.bind(this)
  }

  getTextNode(child) {
    if (typeof child === 'string') {
      return child
    }
    if (!child || !child.props) {
      return ''
    }
    return React.Children.map(child.props.children, child => {
      return this.getTextNode(child)
    }).join('')
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      return (
        <li>
          {this.props.children.length === i + 1
            ? this.getTextNode(child)
            : child}
        </li>
      )
    })
  }

  /* https://stackoverflow.com/questions/27366077/only-allow-children-of-a-specific-type-in-a-react-component/36424582#36424582 */

  render() {
    return (
      /* make sure at least 1 child */
      <section className={breadcrumb}>
        <nav aria-label="Breadcrumb">
          <ol>{this.renderChildren()}</ol>
        </nav>
      </section>
    )
  }
}
