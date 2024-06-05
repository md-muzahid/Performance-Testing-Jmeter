# JMeter Load and Stress Testing

## Overview
This repository contains the resources and instructions to perform load and stress testing using [Apache JMeter](https://jmeter.apache.org/). The tests were designed to simulate user behavior and measure the performance and scalability of the target system, specifically targeting [CloudNext UK](https://cloudnextuk.co.uk/).

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setup](#setup)
3. [Running the Tests](#running-the-tests)
4. [Test Scenarios](#test-scenarios)
5. [Interpreting the Results](#interpreting-the-results)
6. [Sample Reports](#sample-reports)
7. [Contributing](#contributing)
8. [License](#license)
9. [Author](#author)

## Prerequisites
Ensure you have the following installed on your system:
- Java 8 or above
- [Apache JMeter](https://jmeter.apache.org/download_jmeter.cgi)
- Git

## Setup
1. **Clone the repository**:
    ```bash
    git clone https://github.com/md-muzahid/jmeter-load-testing.git
    cd jmeter-load-testing
    ```

2. **Open JMeter**:
   - Download and extract JMeter.
   - Navigate to the `bin` directory and run `jmeter.bat` (Windows) or `jmeter.sh` (Mac/Linux).

## Running the Tests
To run the load tests with JMeter, follow these steps:

1. **Open JMeter Test Plan**:
   - Open JMeter and load the test plan file (`test_plan.jmx`) from this repository.

2. **Configure the Test**:
   - Update the server IP address to your target system (e.g., `https://cloudnextuk.co.uk/`).
   - Set the number of concurrent users and loop count as needed.

3. **Start the Test**:
   - Click the "Start" button (green play button) to begin the test.
   - Monitor the test progress and results in real-time in the "View Results Tree" and "Summary Report" listeners.

## Test Scenarios
The following scenarios were tested on [CloudNext UK](https://cloudnextuk.co.uk/):

### Single Page Report

1. **1000 Concurrent Requests with 1 Loop Count**
   - Avg TPS for Total Samples: ~11
   - Total Concurrent API Requests: 1000

2. **1500 Concurrent Requests with 1 Loop Count**
   - Avg TPS for Total Samples: ~22
   - Total Concurrent API Requests: 1500

3. **1600 Concurrent Requests with 1 Loop Count**
   - Avg TPS for Total Samples: ~14.5
   - Total Concurrent API Requests: 1600
   - Connection Timeouts: 15
   - Error Rate: 1.88%

### Multiple Page Report

1. **400 Concurrent Requests with 1 Loop Count**
   - Avg TPS for Total Samples: ~27
   - Total Concurrent API Requests: 2000

2. **505 Concurrent Requests with 1 Loop Count**
   - Avg TPS for Total Samples: ~29
   - Total Concurrent API Requests: 2020

3. **506 Concurrent Requests with 1 Loop Count**
   - Avg TPS for Total Samples: ~24
   - Total Concurrent API Requests: 2024
   - Connection Timeouts: 534
   - Error Rate: 26.38%

## Interpreting the Results
### Single Page Report Summary
- The server can handle up to 1500 concurrent API calls with almost zero error rate.
- At 1600 concurrent requests, a few connection timeouts were observed with an error rate of 1.88%.

### Multiple Page Report Summary
- The server can handle up to 505 concurrent API calls with almost zero error rate.
- At 506 concurrent requests, a significant number of connection timeouts were observed with an error rate of 26.38%.

## Sample Reports
The detailed reports can be found in the following files:
- [Single Page Report](path_to_single_page_report)
- [Multiple Page Report](path_to_multiple_page_report)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author
Created and tested by **MD MUZAHID**

