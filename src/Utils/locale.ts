import { getLocales } from "react-native-localize"

export const locale = () => {
    let locale = getLocales()[0].languageTag

    return locale
}

export const isRTL = () => {
    let isRtl = getLocales()[0].isRTL

    return isRtl
}


