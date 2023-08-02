import constants from '../constants';

const {xxlarge, xlarge, large, medium, normal, small, xsmall} =
  constants.fontSize;

const {radius1, radius2, radius3} = constants.radius;

const {
  fontFamilyBebasBold,
  fontFamilyBebasMedium,
  fontFamilyBebasRegular,
  fontFamilyBebasSemiBold,
} = constants.fonts;

const {
  yellowRed,
  cedarChest,
  faint,
  yellow,
  moreFaint,
  white,
  darkMaroon,
  dark_gray,
  black,
  red,
  dimYellow,
  wageGreen,
  mustardYellow,
  rust,
  resolutionBlue,
  darkGray,
  venetianRed,
  cadetBlue,
  chineseSilver,
  textBlack,
  lightGray,
  gray,
  seaGreen,
  borderColor,
  discount,
  tomato,
  boundaryColor,
} = constants.palettes;

const DEFAULT_DARK_COLOR_THEME = {
  primary: venetianRed,
  secondary: cadetBlue,
  background: white,
  disabled: dark_gray,
  enabled: venetianRed,
  buttonText: white,
  buttonBackground: tomato,
  icon: venetianRed,
  textInput: moreFaint,
  textInputBorder: chineseSilver,
  transparent: 'transparent',
  mainText: textBlack,
  descriptiveText: dark_gray,
  secondaryText: white,
  error: red,
  darkGray: darkGray,
  placeholder: dark_gray,
  header: venetianRed,
  overlay: dimYellow,
  online: wageGreen,
  borderColor: moreFaint,
  lightContainer: lightGray,
  divider: gray,
  boundaryColor: boundaryColor,
  seaGreen: seaGreen,
  borderColor: borderColor,
  discountColor: discount,
};

const DEFAULT_DARK_SPACING = {
  base: 8,
  double: 16,
};

const SIZE_SET = {
  radius: {
    radius1: radius1,
    radius2: radius2,
    radius3: radius3,
  },
};

const FONT_SET = {
  size: {
    xxlarge,
    xlarge,
    large,
    medium,
    normal,
    small,
    xsmall,
    // title: 30,
    // content: 20,
  },

  weight: {
    thin: '100', // Thin
    ultraLight: '200', // Ultra Light
    light: '300', // Light
    regular: '400', // Regular
    medium: '500', // Medium
    semiBold: '600', // Semibold
    bold: '700', // Bold
    heavy: '800', // Heavy
    black: '900', // Black
  },

  family: {
    boldFamily: fontFamilyBebasBold,
    semiBoldFamily: fontFamilyBebasSemiBold,
    mediumFamily: fontFamilyBebasMedium,
    regularFamily: fontFamilyBebasRegular,
  },
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  spacing: DEFAULT_DARK_SPACING,
  fontFamily: FONT_SET.family,
  fontSize: FONT_SET.size,
  fontWeight: FONT_SET.weight,
  size: SIZE_SET,
};
