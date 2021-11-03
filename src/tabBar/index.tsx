import React, { useEffect, useRef, useState } from 'react';
import {TabTitle, TitleContainer} from './styles';
import {ScrollView} from 'react-native';

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
  onPress?(tab: ITab): any;
  active?: ITab
  hiddenBorder?: boolean
}

interface ITabs {
  name: string
  x: number
}

const TabBar = (props: IProps) => {
  const [tabs, setTabs] = useState<ITabs[]>([])

  const tabRef = useRef<ScrollView>(null)

  function handleOnPress(title: string, index: number) {
    if(props.onPress) {
      props.onPress({name: title, index})
    }
    if(props.onScrollToItem) {
      props.onScrollToItem(title)
    }
  }

  useEffect(() => {
    if(tabRef.current && tabs.length > 0) {
      tabRef.current.scrollTo({
        animated: true,
        x: tabs.find(tab => tab.name === props.active.name)?.x
      })
    }
  }, [props.active, tabs])

  return (
    <ScrollView
      ref={tabRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        width: '100%',
        marginTop: 20,
        backgroundColor: '#FFF'
      }}
      contentContainerStyle={{
        paddingLeft: 30,
      }}>
      {props.items.map((item, index) => (
        <TitleContainer
          onLayout={event => {
            const { layout } = event.nativeEvent    
            setTabs(prevState => [...prevState, { name: item.title, x: layout.x + -30 }])
          }}
          key={index} 
          borderSize={props.active.name === item.title || props.active.index === index && !props.hiddenBorder ? '2px' : '0px'}
          onPress={() => handleOnPress(item.title, index)}
        >
          <TabTitle>{item.title}</TabTitle>
        </TitleContainer>
      ))}
    </ScrollView>
  );
};

export default TabBar;
