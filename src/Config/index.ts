import BaseConfig from "./base.config"
import DevConfig from "./dev.config"

let ExtraConfig = DevConfig

const Config = { ...BaseConfig, ...ExtraConfig }

export default Config