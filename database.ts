import { Asset } from 'expo-asset'
import * as FileSystem from 'expo-file-system'
import * as SQLite from 'expo-sqlite'

export async function initDatabase() {
  const internalDbName = 'frqnah10.sqlite'
  const sqlDir = `${FileSystem.documentDirectory}SQLite/`
  if (!(await FileSystem.getInfoAsync(sqlDir + internalDbName)).exists) {
    await FileSystem.makeDirectoryAsync(sqlDir, { intermediates: true })
    const asset = Asset.fromModule(
      // eslint-disable-next-line
      require(`./assets/data/frqnah10.sqlite`)
    )
    await FileSystem.downloadAsync(asset.uri, sqlDir + internalDbName)
  }
  const database = SQLite.openDatabase(internalDbName)
  return database
}
