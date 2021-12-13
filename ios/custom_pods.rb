# see https://github.com/facebook/flipper/issues/834#issuecomment-905806177
def custom_post_install(installer)
    # Apple Silicon builds require a library path tweak for Swift library discovery or "symbol not found" for swift things
    installer.aggregate_targets.each do |aggregate_target|
      aggregate_target.user_project.native_targets.each do |target|
        target.build_configurations.each do |config|
          config.build_settings['LIBRARY_SEARCH_PATHS'] = ['$(SDKROOT)/usr/lib/swift', '$(inherited)']
        end
      end
      aggregate_target.user_project.save
    end

    # Flipper requires a crude patch to bump up iOS deployment target, or "error: thread-local storage is not supported for the current target"
    
    # I'm not aware of any other way to fix this one other than bumping iOS deployment target to match react-native (iOS 11 now)
    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
        config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '11.0'
      end
    end

    # ...but if you bump iOS deployment target, Flipper barfs again "Time.h:52:17: error: typedef redefinition with different types"
    # We need to make one crude patch to RCT-Folly - set `__IPHONE_10_0` to our iOS target + 1
    # https://github.com/facebook/flipper/issues/834 - 84 comments and still going...
    `sed -i -e  $'s/__IPHONE_10_0/__IPHONE_12_0/' Pods/RCT-Folly/folly/portability/Time.h`
  end