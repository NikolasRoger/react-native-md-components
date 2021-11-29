import React, { useEffect, useRef } from 'react';
import {TabTitle, TitleContainer} from './styles';
import {FlatList, StyleSheet, View} from 'react-native';

interface ITab {
  name: string
  index: number
}

interface IItem {
  title: string;
}

interface IProps {
  items: IItem[];
  onScrollToItem?: (name: string) => void
  onPress?(tab: ITab): any
  active?: ITab
  hiddenBorder?: boolean
}

// interface ITabs {
//   name: string
//   x: number
// }

const TabBar = (props: IProps) => {

  const tabRef = useRef<FlatList>(null)

  const data = props.items.map((item, index) => ({...item, index }))

  function handleOnPress(title: string, index: number) {
    if(props.onPress) {
      props.onPress({name: title, index})
    }
    if(props.onScrollToItem) {
      props.onScrollToItem(title)
    }
  }

  useEffect(() => {
    if(tabRef.current && props.active) {
      tabRef.current.scrollToIndex({
        index: props.active.index,
      })
    }
  }, [props.active, tabRef.current])

  const renderItem = ({item, index}) => (
    <TitleContainer
      key={index}
      onPress={() => handleOnPress(item.title, index)}
    >
      <View style={{ borderBottomWidth: props.active.name === item.title || props.active.index === index && !props.hiddenBorder ? 2 : 0 }} >
        <TabTitle>{item.title}</TabTitle>
      </View>
    </TitleContainer>
  )

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollStyle}
      data={data}
      keyExtractor={data => String(data.index)}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    width: '100%',
    backgroundColor: '#FFF'
  }
})

export default TabBar;
