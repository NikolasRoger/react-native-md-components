import React from 'react';
import { FlatList, Text, View } from 'react-native';
import TabBar from '../../src/tabBar';
import HeaderPhoto from '../../src/headerPhoto';

const data = [
  'Teste',
  'Teste',
  'Teste',
  'Teste',
  'Teste',
  'Teste',
  'Teste',
  'Teste',
  'Teste',
  'Teste',
]

const tabs = [
  {id: 1, title: 'Teste 1', data},
  {id: 2, title: 'Teste 2', data},
  {id: 3, title: 'Teste 3', data},
  {id: 4, title: 'Teste 4', data},
  {id: 5, title: 'Teste 5', data},
  {id: 6, title: 'Teste 6', data},
  {id: 7, title: 'Teste 7', data},
  {id: 8, title: 'Teste 8', data},
  {id: 9, title: 'Teste 9', data},
  {id: 10, title: 'Teste 10', data},
  {id: 11, title: 'Teste 10', data},
  {id: 12, title: 'Teste 10', data},
]

export default function App() {
  const [tab, setTab] = React.useState({
    name: '',
    index: 0
  })

  const Product = ({ item }) => (
    <>
      <Text style={{ paddingVertical: 16, fontSize: 24, fontWeight: '700' }}>{item.title}</Text>
      {item.data.map((product, index) => (
        <View
          key={index}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            backgroundColor: '#e4e4e4',
            marginTop: 16
          }}
        >
          <Text>{product} {index}</Text>
        </View>
      ))}
    </>
  )

  const { data, indexes } = React.useMemo(() => {
    const items = tabs.map(tab => ({...tab, render: () => <Product item={tab}/>}))

    const indexes: number[] = []

    items.forEach((_, index) => indexes.push(index))

    return {
      data: items,
      indexes
    }
  },[])

  return (
    <View>
      <HeaderPhoto
        items={[
          {
            content: `Entrega: 10.00`,
          },
          {
            content: "Beba com sua amada",
          }
        ]}
        establishmentName="Bar do Carlitos"
        thumbnail="https://picsum.photos/id/1004/5616/3744"
        displayBackIcon={false}
      />
      <TabBar items={tabs} active={tab} onPress={setTab}/>
      <FlatList
        data={data}
        extraData={tab => String(tab.id)}
        stickyHeaderIndices={indexes}
        renderItem={({item}) => item.render()}
      />
    </View>
  );
}
