import React from 'react';
import {TabTitle, TitleContainer} from './styles';
import {ScrollView} from 'react-native';

interface IItem {
  title: string;
}

interface IProps {
  items: IItem[];
  onPress?(index: number): any;
  active?: number
}

const TabBar = (props: IProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        width: '100%',
        marginTop: 20,
      }}
      contentContainerStyle={{
        paddingLeft: 30,
      }}>
      {props.items.map((item, index) => (
        <TitleContainer 
          key={index} 
          borderSize={index === props.active ? '2px' : '0px'}
          onPress={() => props.onPress && props.onPress(index)}
        >
          <TabTitle>{item.title}</TabTitle>
        </TitleContainer>
      ))}
    </ScrollView>
  );
};

export default TabBar;
