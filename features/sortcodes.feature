Feature: sortcode_validation
Validate Account Numbers and Sortcodes on Sortcodes.com 

Scenario Outline: validator returns correct account and sortcode details
    Given  I input "<sortcode>"
    When   I enter "<accountnumber>"
    Then  response_status returns "<response_status>"
Examples:
|sortcode|accountnumber|response_status|
|200415   |38290008      |validator returns account details for valid sort code and account number |


Scenario Outline: validator returns error message for invalid account number
    Given  I input "<sortcode>"
    When   I enter "<accountnumber>"
    Then  response_status returns "<response_status>"
Examples:
|sortcode|accountnumber|response_status|
|200415   |12345677      |validator returns error message for invalid account number |


Scenario Outline: validator returns error message for invalid sort code
    Given  I input "<sortcode>"
    When   I enter "<accountnumber>"
    Then  response_status returns "<response_status>"
Examples:
|sortcode|accountnumber|response_status|
|121212   |38290008      |validator returns error message for invalid sort code |

