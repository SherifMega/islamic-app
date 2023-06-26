import * as Sentry from 'sentry-expo'

import { isRunningInExpoGo } from '$src/core/constants'

class MonitoringService {
  constructor() {
    Sentry.init({
      dsn: 'https://1c94c1acb6b64a1bae534309eb3a74c3@o4505034722377728.ingest.sentry.io/4505358552858624',
      enableInExpoDevelopment: true,
      debug: !!isRunningInExpoGo, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
    })
  }

  log({ message, category }: { message: string; category?: string }) {
    Sentry.Native.addBreadcrumb({ message, category })
  }
}

export const Monitoring = new MonitoringService()
