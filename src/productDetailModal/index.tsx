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
}

const ProductDetailModal = (props: IProps) => {

  const [selectedAddons, setSelectedAddons] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (props.visible) {
      setError(null)
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
        if (choices >= max_choices) {
          return [...oldSelected]
        } else {
          let newState = oldSelected
          addon.group_id = group_id
          addon.group_name = group_name
          newState.push(addon)
          return [...newState]
        }
      }
    })
  }

  function _handleAddAddon(addon: any, group_id: number, group_name: string, max_choices: number) {
    setSelectedAddons(oldSelected => {
      let exists = oldSelected.find(i => i.id === addon.id)
      if (exists) {
        if (addon.limit_amount < exists.qtd + 1) {
          return [...oldSelected]
        } else {
          let newState = oldSelected.map((i) => {
            if (i.id === exists.id) {
              i.qtd = i.qtd + 1
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
        if (choices >= max_choices) {
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
        if (item.group.required) {
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
      }
    } else {
      setError(null)
      props.onFinish(props.infoData, selectedAddons)
    }
  }

  return (
    <MdBottomModal
      modalTitle="Detalhes do item"
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      modalSubtitle={props.establishment}
    >
      <ProductList
        disabled={true}
        mt="0px"
        items={[
          {
            productImage: props.productImage,
            liked: true,
            productName: props.productName,
            productDescription: props.productDescription,
            productPrice: props.productPrice,
            displayIcon: false,
          }
        ]}
      />
      {
        props.addons && props.addons.map(addon => {
          return (
            <>
              <GroupTitle>{addon.group.name} {addon.group.required ? "* (obrigatório)" : ""}</GroupTitle>
              {
                addon.items.map((item) => {
                  if (addon.group.max_choices === 1) {
                    return (
                      <OptionContainer onPress={() => _handleAddRadio(item, addon.group.id, addon.group.name)}>
                        <Icon name={selectedAddons.find(i => i.id === item.id) ? "ios-radio-button-on" : "ios-radio-button-off"} size={25} color="black" />
                        <OptionTitle>{item.name}</OptionTitle>
                      </OptionContainer>
                    )
                  } else if (addon.group.max_choices != 1 && (item.limit_amount === 1 || item.limit_amount === "1")) {
                    return (
                      <OptionContainer onPress={() => _handlePressCheckbox(item, addon.group.id, addon.group.name, addon.group.max_choices)}>
                        <Icon name={selectedAddons.find(i => i.id === item.id) ? "ios-checkbox" : "square-outline"} size={25} color="black" />
                        <OptionTitle>{item.name}</OptionTitle>
                      </OptionContainer>
                    )
                  } else {
                    return (
                      <OptionContainer space-between>
                        <OptionTitle>{item.name}</OptionTitle>
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
                      </OptionContainer>
                    )
                  }
                })
              }
            </>
          )
        })
      }
      <Title color="titles" title="Adicionar ao carrinho" mb="20px" />
      {error && <Error>{error}</Error>}
      <MainAddItemContainer>
        <AddItemContainer>
          <IconContainer onPress={() => props.onPressAdd(props.infoData)}>
            <Icon
              name="ios-add-circle-outline"
              color={Colors['titles']}
              size={34}
            />
          </IconContainer>
          <NumberContainer>
            <NumberOfItems>{props.qtd}</NumberOfItems>
          </NumberContainer>
          <IconContainer onPress={() => props.onPressRemove(props.infoData)}>
            <Icon
              name="ios-remove-circle-outline"
              color={Colors['titles']}
              size={34}
            />
          </IconContainer>
        </AddItemContainer>
        <Button type="primary" title="Adicionar" onPress={_handleFinish} />
      </MainAddItemContainer>
    </MdBottomModal>
  );
};

export default ProductDetailModal;
