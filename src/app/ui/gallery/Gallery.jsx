import { useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import Portfolio from '../portfolio/Portfolio';

export default function Gallery({data}) {

  // Load Items
  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState(
    data.slice(0, itemsPerPage),
  );

  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = data.slice(
      currentLength,
      currentLength + itemsPerPage,
    );
    setVisibleItems(prevItems => [...prevItems, ...nextChunk]);

    if (currentLength + itemsPerPage >= data.length) {
      setShowLoadMore(false);
    }
  };


  return (
    <>
      <LightGallery 
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="cs_lightgallery"
      >
        {visibleItems?.map((item, index) => (
          <div className="cs_grid_item" key={index} href={item.imgUrl}>
            <Portfolio title={item.title} imgUrl={item.imgUrl} />
          </div>
        ))}
      </LightGallery>
      {showLoadMore && 
        <div className="cs_grid_item">
          <div
            className="cs_portfolio_grid_btn text-center wow fadeIn"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <button className="cs_btn cs_style_1 cs_radius_15"  onClick={loadMoreItems}>More Project</button>
          </div>
        </div>
      }
    </>
  )
}
