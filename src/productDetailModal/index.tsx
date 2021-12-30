import React, { useEffect, useState } from 'react';
import {
  AddItemContainer,
  GroupTitle,
  IconContainer,
  MainAddItemContainer,
  NumberContainer,
  NumberOfItems,
  OptionTitle,
  OptionContainer,
  Error,
} from './styles';
import { MdBottomModal, ProductList, Title, Button } from '..';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../config/colors';
import { Text, View } from 'react-native';
import Fonts from '../config/fonts';

import pipes from '../helpers/pipes';

interface ISelectAddons {
  created_by: number
  description: string
  group_id: number
  group_name: string
  id: number
  limit_amount: string
  name: string
  product_addons_id: number
  product_id: any
  qtd: number
  status: string
  thumbnail: any
  updated_by: number
  value: string
  group_max_choices: number
  group_total_amount: number
}

interface IProps {
  visible: boolean
  onRequestClose(): void
  onFinish(pressedItem: any, addons: any): void
  onPressAdd(pressedItem: any): void
  onPressRemove(pressedItem: any): void
  qtd: number
  productImage: string
  productName: string
  productDescription: string
  productPrice: string
  establishment: string
  addons?: any
  addonsSelected?: any
  infoData?: any
  imageSize?: string
}

const ProductDetailModal = React.memo((props: IProps) => {

  const [selectedAddons, setSelectedAddons] = useState<ISelectAddons[]>([])
  const [error, setError] = useState(null)

  const totalAmount = React.useRef(0)

  useEffect(() => {
    if (props.visible) {
      setError(null)
    } else {
      totalAmount.current = 0
    }
  }, [props.visible])

  useEffect(() => {
    if(props.addonsSelected) {
      setSelectedAddons(props.addonsSelected)
    } else {
      setSelectedAddons([])
    }
  }, [props.addonsSelected])

  function _handleAddRadio(addon: any, group_id: any, group_name: string) {
    setSelectedAddons(oldSelected => {
      let newState = oldSelected.filter(i => i.group_id != group_id)
      addon.group_id = group_id
      addon.group_name = group_name
      addon.qtd = 1
      newState.push(addon)

      return newState
    })
  }

  function _handlePressCheckbox(addon: any, group_id: number, group_name: string, max_choices: number) {
    setSelectedAddons(oldSelected => {
      let exists = oldSelected.find(i => i.id === addon.id)
      if (exists) {
        let newState = oldSelected.filter(i => i.id != addon.id)
        return [...newState]
      } else {
        let choices = 0
        oldSelected.forEach((v) => {
          if (v.group_id === group_id) {
            choices = choices + 1
          }
        })
        if (choices >= max_choices && max_choices !== 0) {
          return [...oldSelected]
        } else {
          let newState = oldSelected
          addon.group_id = group_id
          addon.group_name = group_name
          addon.qtd = 1
          newState.push(addon)
          return [...newState]
        }
      }
    })
  }

  function _handleAddAddon(addon: any, group_id: number, group_name: string, max_choices: number) {
    let total = 0
    selectedAddons.forEach(select => {
      if(select.group_id === group_id) {
        total += select.qtd
      }
    })
    setSelectedAddons(oldSelected => {
      let exists = oldSelected.find(i => i.id === addon.id)
      if(total >= max_choices) {
        return [...oldSelected]
      }
      if (exists) {
        if (exists.qtd > addon.limit_amount) {
          return [...oldSelected]
        } else {
          let newState = oldSelected.map((i) => {
            if (i.id === exists.id) {
              i.qtd = i.qtd + 1
              total += 1
            }
            return i
          })

          return [...newState]
        }
      } else {
        let choices = 0
        oldSelected.forEach(i => {
          if (i.group_id === group_id) {
            choices = choices + 1
          }
        })
        if (choices > addon.limit_amount) {
          return [...oldSelected]
        } else {
          let newState = oldSelected
          addon.group_id = group_id
          addon.group_name = group_name
          addon.qtd = 1
          addon.group_max_choices = max_choices
          totalAmount.current += 1
          newState.push(addon)
          return [...newState]
        }
      }
    })
  }

  function _handleRemoveAddon(addon: any) {
    setSelectedAddons(oldSelected => {
      let newState = oldSelected.map(i => {
        if (i.id === addon.id) {
          i.qtd = i.qtd - 1
        }
        return i
      }).filter((i: any) => i.qtd > 0)

      return [...newState]
    })
  }

  function _handleFinish() {
    if (props.addons) {
      let complete = true
      props.addons.forEach(item => {
        if (item.group.required && item.group.status === 'A') {
          if (!selectedAddons.find(i => i.group_id === item.group.id)) {
            complete = false
          }
        }
      })
      if (!complete) {
        setError("Selecione as opções obrigatórias")
      } else {
        setError(null)
        props.onFinish(props.infoData, selectedAddons)
        setSelectedAddons([])
      }
    } else {
      setError(null)
      props.onFinish(props.infoData, selectedAddons)
      setSelectedAddons([])
    }
  }

  if(!props.visible) {
    return null
  }

  return (
    <MdBottomModal
      modalTitle="Detalhes do item"
      visible={props.visible}
      onRequestClose={() => {
        props.onRequestClose()
        setSelectedAddons([])
      }}
      modalSubtitle={props.establishment}
    >
      <ProductList
        disabled={true}
        separator={false}
        mt="0px"
        items={[
          {
            productImage: props.productImage,
            liked: true,
            productName: props.productName,
            productDescription: props.productDescription,
            addons: props.addons,
            productPrice: props.productPrice,
            displayIcon: false,
          }
        ]}
        imageSize={props.imageSize}
        showZoom={true}
      />
      {
        props.addons && props.addons.filter(addon => addon.group.status === 'A'  && addon.items.some(item => item.status === 'A')).map(addon => {
          return (
            <>
              <GroupTitle>{addon.group.name} {addon.group.required ? "(obrigatório)" : ""}</GroupTitle>
              {
                addon.items.map((item) => {
                  if (addon.group.max_choices === 1) {
                    return (
                      <OptionContainer onPress={() => _handleAddRadio(item, addon.group.id, addon.group.name)}>
                        <View style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingTop: 14,
                          paddingBottom: 8
                        }}>
                          <Icon style={{paddingRight: 4}} name={selectedAddons.find(i => i.id === item.id) ? "ios-radio-button-on" : "ios-radio-button-off"} size={25} color="black" />
                          <OptionTitle>{item.name}</OptionTitle>
                        </View>
                        {item.value && item.value != 0 ? (
                          <Text style={{
                          paddingBottom: 8,
                          color: Colors.secondaryTitle,
                          fontFamily: Fonts.primary }}>{pipes.formatMoney(item.value)}</Text>
                        )
                        :( null )}
                      </OptionContainer>
                    )
                  } else if (addon.group.max_choices != 1 && addon.items.every(item => item.limit_amount === 1 || item.limit_amount === '1')) {
                    return (
                      <OptionContainer onPress={() => _handlePressCheckbox(item, addon.group.id, addon.group.name, addon.group.max_choices)}>
                        <View style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingTop: 14,
                          paddingBottom: 8
                        }}>
                          <Icon name={selectedAddons.find(i => i.id === item.id) ? "ios-checkbox" : "square-outline"} size={25} color="black" />
                          <OptionTitle>{item.name}</OptionTitle>
                        </View>
                        {item.value && item.value != 0 ? (
                          <Text style={{
                            paddingBottom: 8,
                            color: Colors.secondaryTitle,
                            fontFamily: Fonts.primary }}
                          >
                            {pipes.formatMoney(item.value)}
                          </Text>
                        ) : ( null )}
                      </OptionContainer>
                    )
                  } else if (addon.group.max_choices != 1 && (addon.items.some(item => item.limit_amount > 1))) {
                    return (
                      <OptionContainer space-between>
                        <View style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          paddingTop: 14,
                          paddingBottom: 8
                        }}>
                          <View style={{
                            justifyContent: 'center'
                          }}>
                            <OptionTitle>{item.name}</OptionTitle>
                            {item.value && item.value != 0 ? (
                              <Text style={{
                                color: Colors.secondaryTitle,
                                paddingTop: 8,
                                fontFamily: Fonts.primary }}
                              >
                                { pipes.formatMoney(item.value) }
                              </Text>
                            ) : ( null )}
                          </View>
                          <AddItemContainer>
                            <IconContainer onPress={() => _handleRemoveAddon(item)}>
                              <Icon
                                name="ios-remove-circle-outline"
                                color={Colors['titles']}
                                size={25}
                              />
                            </IconContainer>
                            <NumberContainer>
                              <NumberOfItems>{selectedAddons.find(i => i.id === item.id)?.qtd || 0}</NumberOfItems>
                            </NumberContainer>
                            <IconContainer onPress={() => _handleAddAddon(item, addon.group.id, addon.group.name, addon.group.max_choices)}>
                              <Icon
                                name="ios-add-circle-outline"
                                color={Colors['titles']}
                                size={25}
                              />
                            </IconContainer>
                          </AddItemContainer>
                        </View>
                      </OptionContainer>
                    )
                  } else {
                    return ( null )
                  }
                })
              }
            </>
          )
        })
      }
      <Title color="titles" title="Adicionar ao carrinho" mb="20px" m="8" />
      {error && <Error>{error}</Error>}
      <MainAddItemContainer>
        <AddItemContainer>
          <IconContainer onPress={() => props.onPressRemove(props.infoData)}>
            <Icon
              name="ios-remove-circle-outline"
              color={Colors['titles']}
              size={34}
            />
          </IconContainer>
          <NumberContainer>
            <NumberOfItems>{props.qtd}</NumberOfItems>
          </NumberContainer>
          <IconContainer onPress={() => props.onPressAdd(props.infoData)}>
            <Icon
              name="ios-add-circle-outline"
              color={Colors['titles']}
              size={34}
            />
          </IconContainer>
        </AddItemContainer>
        <Button type="primary" title="Adicionar" onPress={_handleFinish} />
      </MainAddItemContainer>
    </MdBottomModal>
  );
});

export default ProductDetailModal;
