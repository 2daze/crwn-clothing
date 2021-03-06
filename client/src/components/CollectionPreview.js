import React from 'react';
import CollectionItem from './CollectionItem';

import './CollectionPreview.styles.scss';

const PreviewCollection = ({ title, items }) => {
  const previewItems = () => {
    return items
      .filter((item, idx)=> idx < 4)
        .map(item => {
          return <CollectionItem key={item.id} item={item} />
    });
  }

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{previewItems()}</div>
    </div>
  );
}

export default PreviewCollection;
