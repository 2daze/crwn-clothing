import React from 'react';
import './CollectionPreview.styles.scss';
import CollectionItem from './CollectionItem';

const PreviewCollection = ({ title, items }) => {
  const previewItems = () => {
    return items
      .filter((item, idx)=> idx < 4)
        .map(({id, ...otherItemProps}) => {
          return <CollectionItem key={id} {...otherItemProps} />
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
