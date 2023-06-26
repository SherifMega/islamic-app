import Constants from 'expo-constants'

const isRunningInExpoGo = Constants.appOwnership === 'expo'

export { isRunningInExpoGo }
