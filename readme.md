  WebSocket Load/Stress Tests
  ===========================

  This repository contains sample load test.
  ### K6 Installation

  `Linux (Debian/Ubuntu)`
  ```
  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
  echo "deb https://dl.bintray.com/loadimpact/deb stable main" | sudo tee -a /etc/apt/sources.list
  sudo apt-get update
  sudo apt-get install k6
  ```

  `Linux (Redhat/CentOS)`
  ```
  wget https://bintray.com/loadimpact/rpm/rpm -O bintray-loadimpact-rpm.repo
  sudo mv bintray-loadimpact-rpm.repo /etc/yum.repos.d/
  sudo yum install k6
  ```

  `Mac (brew)`
  ```
  brew install k6
  ```

  `Windows (MSI installer)`
  ```
  Download the k6 installer: https://dl.bintray.com/loadimpact/windows/k6-v0.26.1-amd64.msi
  ```

  `Windows (Chocolatey Package Manager)`
  ```
  choco install k6
  ```

  `Docker`
  ```
  docker pull loadimpact/k6
  ```

  ### Running Tests

  ```
  $ k6 run test.js
  ```

  `Docker`
  ```
  $ docker run -i loadimpact/k6 run - <test.js
  ```

  `Docker in Win PowerShell`
  ```
  $ cat test.js | docker run -i loadimpact/k6 run -
  ```

  ### Options / Flags
  ```
  -u, --vus int     number of virtual users (default 1)
  Example: k6 run -u 5 test.js
  ```

  ```
  -m, --max int     max available virtual users
  Example: k6 run -m 5 test.js
  ```

  ```
  -d, --duration duration   test duration limit
  Example: k6 run -d 5s test.js
  ```

  ```
  -i, --iterations int      script total iteration limit (among all VUs)
  Example: k6 run -i 5 test.js
  ```

  *Options can also be defined inside test.js file.*

