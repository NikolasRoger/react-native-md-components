import React from 'react';
import {TabTitle, TitleContainer} from './styles';
import {ScrollView} from 'react-native';

interface IItem {
  title: string;
  active?: boolean;
}

interface IProps {
  items: IItem[];
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
        <TitleContainer key={index} borderSize={item.active ? '2px' : '0px'}>
          <TabTitle>{item.title}</TabTitle>
        </TitleContainer>
      ))}
    </ScrollView>
  );
};

export default TabBar;
