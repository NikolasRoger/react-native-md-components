import React, { useEffect, useState } from "react";
import {
  Container,
  ItemContainer,
  ImageContainer,
  ProductImage,
  /*   LikeContainer, */
  InfoContainer,
  ProductText,
  ArrowIconContainer,
  IconZoomContainer,
  CloseButtonContainer,
  ImageView
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import IconFeather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons'
import Fonts from "../config/fonts";
import Colors from "../config/colors";
import { Modal, TouchableOpacity, View, Text } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';
import pipes from '../helpers/pipes'

const productWithoutImage = require('../assets/sem-imagem.webp');

interface Addon {
  created_at: any
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
  updated_at: any
  updated_by: number
  value: string
}

interface IItems {
  displayMoreInfo?: boolean;
  liked?: boolean;
  productImage: string;
  productName: string;
  productDescription: string;
  addons: Addon[];
  productPrice?: string;
  productInfo?: string;
  productStock?: string;
  displayIcon?: boolean;
  infoData?: any;
}

interface IProps {
  items: IItems[];
  mt?: string;
  disabled?: boolean;
  onPress?(pressedItem: any): any;
  imageSize: string;
  showZoom?: boolean;
  separator: boolean;
  onPressRemove?: (index: number) => void
}

const ProductList = (props: IProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [imageUrl, setImageUril] = useState('')

  const getBorder = (index: number) => {
    if (!props.separator) {
      return false
    }
    return props.items?.length - 1 !== index
  }

  useEffect(() => {
    if (imageUrl) {
      setIsImageOpen(true)
    }
  }, [imageUrl])

  function handleOpenImage(image: string) {
    if (!image) {
      return
    }

    setImageUril(image)
    setIsImageOpen(true)
  }

  return (
    <>
      <Container mt={props.mt}>
        {props.items.map((item, index) => (
          <ItemContainer
            key={index}
            disabled={props.disabled}
          >
            {!props.separator && (
              <TouchableOpacity style={{ marginRight: 10 }} onPress={() => handleOpenImage(item.productImage)}>
                <ImageContainer
                  style={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    backgroundColor: '#ccc',
                    elevation: 6,
                  }}
                  imageSize={props.imageSize}
                >
                  {/* {item.productPrice && (
              <LikeContainer
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              }}
              >
              <Icon
              name="heart"
              color={item.liked ? "#F33C3C" : "#E4E4E4"}
              size={16}
              />
              </LikeContainer>
            )} */}
                  <ProductImage source={item.productImage ? { uri: item.productImage } : productWithoutImage} />
                  {props.showZoom && <IconZoomContainer>
                    <IconFeather name="zoom-in" size={22} color="#cccccc" />
                  </IconZoomContainer>}
                </ImageContainer>
              </TouchableOpacity>
            )}
            <InfoContainer separator={props.separator ? getBorder(index) : false}>
              <TouchableOpacity onPress={() => {
                props.onPress && props.onPress(item.infoData)
              }}>
                <ProductText>{item.productName}</ProductText>
                <View style={{ flexDirection: 'row', marginVertical: 2, flexWrap: 'wrap', paddingTop: 2 }}>
                  {item?.infoData?.addons?.length > 0 ? item.infoData.addons.map((addon, index) => (
                    <React.Fragment key={addon.id}>
                      <ProductText
                        size="14px"
                        font={Fonts["primary"]}
                        color={Colors["text"]}
                      >
                        {addon.name}{addon.qtd > 1 && addon.qtd + 'x'} {addon.value > 0 && '(' + pipes.formatMoney(addon.value) + ') '}
                      </ProductText>
                      {item.infoData.addons.length - 1 !== index && (
                        <Text style={{ fontWeight: '700', color: Colors.text }}>• </Text>
                      )}
                    </React.Fragment>
                  )) : (
                    <ProductText
                      size="14px"
                      font={Fonts["primary"]}
                      color={Colors["text"]}
                    >
                      {item.productDescription}
                    </ProductText>
                  )}
                </View>
                {item.productPrice && (
                  <ProductText size="14px">{item.productPrice}</ProductText>
                )}
                {item.displayMoreInfo && (
                  <>
                    <ProductText
                      size="14px"
                      font={Fonts["primary"]}
                      color={Colors["text"]}
                    >
                      {item.productInfo}
                    </ProductText>
                    <ProductText size="14px">{item.productStock}</ProductText>
                  </>
                )}
              </TouchableOpacity>
              {props.separator && (
                <TouchableOpacity
                  onPress={() => props.onPressRemove(index)}
                  style={{
                    alignSelf: 'flex-start',
                    position: "absolute",
                    right: 0,
                  }}
                  hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}>
                  <Ionicon name="ios-trash-outline" color={Colors.danger} size={24} />
                </TouchableOpacity>
              )}
            </InfoContainer>
            {item.displayIcon && (
              <ArrowIconContainer>
                <Icon
                  name="chevron-forward-outline"
                  color={Colors["titles"]}
                  size={36}
                />
              </ArrowIconContainer>
            )}
          </ItemContainer>
        ))}
      </Container>
      <Modal transparent={true} visible={isImageOpen}>
        <ImageViewer
          imageUrls={[{ url: imageUrl }]}
          enableSwipeDown={true}
          renderIndicator={() => null}
          renderImage={({ source }) => (
            <ImageView source={source} />
          )}
          renderHeader={() => (
            <CloseButtonContainer onPress={() => {
              setIsImageOpen(false)
              setImageUril('')
            }}>
              <MaterialIcon name="close" size={30} color="#999" />
            </CloseButtonContainer>
          )}
          onSwipeDown={() => {
            setIsImageOpen(false)
            setImageUril('')
          }} />
      </Modal>
    </>
  );
};

export default ProductList;
