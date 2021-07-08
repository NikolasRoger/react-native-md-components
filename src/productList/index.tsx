import React from "react";
import {
  Container,
  ItemContainer,
  ImageContainer,
  ProductImage,
  LikeContainer,
  InfoContainer,
  ProductText,
  ArrowIconContainer,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import Fonts from "../config/fonts";
import Colors from "../config/colors";

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
}

interface IProps {
  items: IItems[];
  mt?: string;
  disabled?: boolean;
}

const images: any = {
  boneFlores: require("../assets/bone-flores.jpg"),
  camisaInfuse: require("../assets/camisa-infuse.jpg"),
  vestidoBabado: require("../assets/vestido-babado.jpg"),
  blusaBeYou: require("../assets/blusa-be-you.jpg"),
  croppedSimples: require("../assets/cropped-simples.jpg"),
};

const ProductList = (props: IProps) => {
  return (
    <Container mt={props.mt}>
      {props.items.map((item, index) => (
        <ItemContainer key={index} disabled={props.disabled}>
          <ImageContainer
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
            {item.productPrice && (
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
            )}
            <ProductImage source={images[item.productImage]} />
          </ImageContainer>
          <InfoContainer>
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
          </InfoContainer>
          {!item.displayIcon && (
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
  );
};

export default ProductList;
