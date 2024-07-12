import Foundation
import UIKit

@objc(BatteryModule)
class BatteryModule: NSObject {
  @objc
  func getBatteryLevel(_ resolve: @escaping RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
    UIDevice.current.isBatteryMonitoringEnabled = true
    if UIDevice.current.batteryState == .unknown {
      let error = NSError(domain: "", code: 200, userInfo: nil)
      reject("no_battery_level", "Could not get battery level", error)
    } else {
      resolve(UIDevice.current.batteryLevel * 100)
    }
  }

  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
