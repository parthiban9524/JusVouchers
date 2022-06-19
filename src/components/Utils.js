import { Dimensions, Platform, PixelRatio } from 'react-native';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

export const normalize = (size) => {
  const scale = screenWidth / 375;
  const newSize = size * scale;
  if (Platform.OS == 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  }
  else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const fonts = {
  lato_regular: 'Lato-Regular',
  lato_light: 'Lato-Light',
  lato_bold: 'Lato-Bold',
  montserrat_regular: 'Montserrat-Regular',
  montserrat_light: 'Montserrat-Light',
  montserrat_bold: 'Montserrat-Bold',
  montserrat_semibold: 'Montserrat-SemiBold',
  inter_light: 'Inter-Light',
  inter_regular: 'Inter-Regular',
  inter_bold: 'Inter-SemiBold'
};