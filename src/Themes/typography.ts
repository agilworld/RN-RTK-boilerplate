// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"

import {
  Inter_100Thin as InterThin,
  Inter_200ExtraLight as InterExtraLight,
  Inter_300Light as InterLight,
  Inter_400Regular as InterRegular,
  Inter_500Medium as InterMedium,
  Inter_700Bold as InterBold
} from "@expo-google-fonts/inter"

export const customFontsToLoad = {
  InterThin,
  InterExtraLight,
  InterLight,
  InterRegular,
  InterMedium,
  InterBold
}

const fonts = {
  inter:{
    thin:"InterThin",
    light:"InterLight",
    regular:"InterRegular",
    medium:"InterMedium",
    bold:"InterBold"
  },
  helveticaNeue: {
    // iOS only font.,
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
    bold: "HelveticaNeue-Bold",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
    bold: "sans-serif-bold",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.inter,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}