package com.rnnstarter;

import android.os.Bundle;
import androidx.annotation.Nullable;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
// RNN
import com.reactnativenavigation.NavigationActivity;
// Splash screen
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends NavigationActivity {
  @Override
  public void onPostCreate(@Nullable Bundle savedInstanceState) {
    super.onPostCreate(savedInstanceState);
    SplashScreen.show(this); // show splash screen
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(NavigationActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    @Override
    protected boolean isConcurrentRootEnabled() {
      // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
      // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }
  }
}
