import React, { useState } from 'react';
import { ImageCard } from './ImageCard';
import { VideoCard } from './VideoCard';
import { PortfolioModal, PortfolioModalItem } from './PortfolioModal';

interface PortfolioMediaProps {
  item: PortfolioModalItem;
  onOpenConsultation: (service?: string) => void;
  className?: string;
}

export const PortfolioMedia: React.FC<PortfolioMediaProps> = ({
  item,
  onOpenConsultation,
  className = '',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {item.videoSrc ? (
        <VideoCard
          videoSrc={item.videoSrc}
          posterSrc={item.image}
          title={item.title}
          category={item.categoryName || item.category}
          badge={item.badge || 'Demo Concept'}
          onClick={() => setIsModalOpen(true)}
          className={className}
        />
      ) : (
        <ImageCard
          src={item.image}
          alt={item.title}
          title={item.title}
          category={item.categoryName || item.category}
          badge={item.badge || 'Demo Concept'}
          onClick={() => setIsModalOpen(true)}
          className={className}
        />
      )}

      <PortfolioModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenConsultation={onOpenConsultation}
      />
    </>
  );
};
