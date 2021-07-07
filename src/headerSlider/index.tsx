import React, {useCallback, memo, useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import Colors from '../config/colors';
import {
  Container,
  List,
  SlideContainer,
  SlideImage,
  SlidePagination,
  PaginationDot,
  SlideTitle,
  SlideSubtitle,
} from './styles';

const {width: windowWidth} = Dimensions.get('window');

const slideList = [
  {
    id: 1,
    image: require('../assets/images/home-illustration.png'),
    title: 'Você possui um novo cupom!',
    subtitle: 'Use o seu cupom na sua próxima compra',
  },
];

const Slide = memo(function Slide({data}: any) {
  return (
    <SlideContainer>
      <SlideTitle titleColor={Colors['titles']}>
        {data.title.toUpperCase()}
      </SlideTitle>
      <SlideSubtitle subtitleColor={Colors['titles']}>
        {data.subtitle}
      </SlideSubtitle>
      <SlideImage source={data.image} />
    </SlideContainer>
  );
});

function Pagination({index}: any) {
  return (
    <SlidePagination>
      {slideList.map((_, i) => {
        return <PaginationDot key={i} isActive={index === i} />;
      })}
    </SlidePagination>
  );
}

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(s => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      [],
    ),
  };

  const renderItem = useCallback(function renderItem({item}) {
    return <Slide data={item} />;
  }, []);

  return (
    <Container>
      <List
        bg={Colors['secondary']}
        data={slideList}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index}></Pagination>
    </Container>
  );
}
