/* eslint-disable import/no-extraneous-dependencies */
import * as SQLite from 'expo-sqlite'
import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset'

export async function initDatabase() {
  const internalDbName = 'frqnah3.sqlite'
  const sqlDir = `${FileSystem.documentDirectory}SQLite/`
  if (!(await FileSystem.getInfoAsync(sqlDir + internalDbName)).exists) {
    await FileSystem.makeDirectoryAsync(sqlDir, { intermediates: true })
    const asset = Asset.fromModule(
      // eslint-disable-next-line import/no-dynamic-require, global-require
      require(`./assets/data/frqnah3.sqlite`)
    )
    await FileSystem.downloadAsync(asset.uri, sqlDir + internalDbName)
  }
  const database = SQLite.openDatabase(internalDbName)
  return database
}
