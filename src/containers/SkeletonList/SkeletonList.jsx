import React from 'react';
import Skeleton from '../../components/Skeleton/Skeleton';

function SkeletonList() {
  return (
    <>
      {Array(10).fill().map((skeleton, index) => (
        <Skeleton key={index} />
      ))}
    </>
  )
}

export default SkeletonList;
