import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 1516, height: 1000 }} cols={5} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=4600588&width=700',
    title: 'Breakfast',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738369&width=585',
    title: 'Burger',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738370&width=585',
    title: 'Camera',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738371&width=1170',
    title: 'Coffee',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738372&width=585',
    title: 'Hats',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738373&width=1170',
    title: 'Honey',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738374&width=1170',
    title: 'Basketball',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738376&width=1200',
    title: 'Fern',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738379&width=1200',
    title: 'Mushrooms',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738380&width=1200',
    title: 'Tomato basil',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738381&width=1200',
    title: 'Sea star',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738382&width=1200',
    title: 'Bike',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738385&width=1200',
    title: 'Bike',
  },
  {
    img: 'https://www.jarpice.cz/image.php?nid=14113&oid=7738384&width=1200',
    title: 'Bike',
  },
  
];