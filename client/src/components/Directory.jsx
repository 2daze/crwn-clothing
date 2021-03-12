import React from 'react';
import {createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../redux/DirectorySelectors';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';

import './Directory.styles.scss';

const Directory = ({ sections }) => {
  const buildMenuItemsList = () => {
    return sections.map(({ id, ...otherSectionProps}) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      });  
  }
  return <div className="directory-menu">{buildMenuItemsList()}</div>;
}

const mapStateToProps =  createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
