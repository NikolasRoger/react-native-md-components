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
import Fonts from "../config/fonts";
import Colors from "../config/colors";
import { Modal, TouchableOpacity } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';

interface IItems {
  displayMoreInfo?: boolean;
  liked?: boolean;
  productImage: string;
  productName: string;
  productDescription: string;
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
}

const ProductList = (props: IProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [imageUrl, setImageUril] = useState('')

  useEffect(() => {
    if(imageUrl) {
      setIsImageOpen(true)
    }
  }, [imageUrl])

  function handleOpenImage(image: string) {
    if(!image) {
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
            <TouchableOpacity onPress={() => handleOpenImage(item.productImage)}>

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
                <ProductImage source={{ uri: item.productImage }} />
                {props.showZoom && <IconZoomContainer>
                  <IconFeather name="zoom-in" size={22} color="#cccccc"/>
                </IconZoomContainer>}
              </ImageContainer>
            </TouchableOpacity>
            <InfoContainer>
              <TouchableOpacity onPress={() => {
              props.onPress && props.onPress(item.infoData)
              }}>
              <ProductText>{item.productName}</ProductText>
              <ProductText
                size="14px"
                font={Fonts["primary"]}
                color={Colors["text"]}
              >
                {item.productDescription}
              </ProductText>
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
          renderImage={({source}) => (
            <ImageView source={source} />
          )}
          renderHeader={() => (
            <CloseButtonContainer onPress={() => {
              setIsImageOpen(false)
              setImageUril('')
            }}>
              <MaterialIcon name="close" size={30} color="#999"/>
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
