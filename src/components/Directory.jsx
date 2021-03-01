import React from 'react';
import MenuItem from './MenuItem';

import './Directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
        sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
          items:[]
          
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets',
          items:[]
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers',
          items:[]
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
          items:[]
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
          items:[]
        }
      ]
    };
  }

  renderSections() {
    return this.state.sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />
    });
  }

  render() {
    return (
      <div className="directory-menu">{this.renderSections()}</div>
    );
  }
}

export default Directory;
