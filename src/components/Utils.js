import { Dimensions, Platform, PixelRatio, ToastAndroid } from 'react-native';

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

export const getDistinctCategory = (offers) => {
  if (Array.isArray(offers)) {
    let a = [];
    offers.map((offer) => {
      a.push(offer.category)
    })
    let b = [...new Set(a)]
    if (Array.isArray(b)) {
      let c = []
      b.map((category) => {
        c.push({
          name: category,
          selected: false
        })
      })
      return c
    }
  }
  return []
};

export const showToast = (errors, color, multiple) => {
  if (multiple !== true)
    multiple = false;

  if (color !== true)
    color = '#000';

  if (Array.isArray(errors))
    errors = errorMessage(errors, multiple);

  ToastAndroid.show(errors, {
    duration: 5000,
    backgroundColor: color,
    position: -30,
    animation: true,
    shadow: false,
    hideOnPress: true,
    opacity: 0.9
  })
}